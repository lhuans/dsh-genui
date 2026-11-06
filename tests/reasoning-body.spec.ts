/**
 * @vitest-environment jsdom
 */
import { createElement, memo } from 'react'
import { createRoot } from 'react-dom/client'
import { act } from 'react-dom/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'

vi.mock('@deepseek-ai/dsh-client-ui-primitives', () => ({
  MarkdownText: ({ text }: { text: string }) => createElement('p', null, text),
  JsonBlock: () => null,
}))

import { GenuiAssistantNodeView } from '../src/client/GenuiAssistantNodeView.tsx'
import type { GenuiAssistantNodeViewProps } from '../src/client/assistant-props.ts'
import {
  captureBuiltinAssistant, clearBuiltinAssistant, type PresentationSource,
} from '../src/client/builtin-assistant.ts'
import {
  MESSAGE_IMAGES_SLOT,
  REASONING_BODY_SLOT,
  borrowReasoningBody,
  releaseBorrowedReasoningBody,
} from '../src/client/reasoning-body.ts'

describe('borrowed reasoning body slot', () => {
  it('attaches the official slot without replacing an existing children table', () => {
    const entry: { children?: object | undefined } = {}
    borrowReasoningBody(entry)
    expect(entry.children).toMatchObject({
      [REASONING_BODY_SLOT]: { kind: 'single', scope: 'session' },
      [MESSAGE_IMAGES_SLOT]: { kind: 'single', scope: 'session' },
    })
    const owned = { 'conversation.chat.reasoning.body': { kind: 'single', scope: 'session' } }
    const declared = { children: owned }
    borrowReasoningBody(declared)
    expect(declared.children).toBe(owned)
  })

  it('clears only a borrowed table so disposal cannot collapse the real slot', () => {
    const entry: { children?: object | undefined } = {}
    borrowReasoningBody(entry)
    releaseBorrowedReasoningBody(entry)
    expect(entry.children).toBeUndefined()

    const owned = { other: { kind: 'single', scope: 'root' } }
    const declared = { children: owned }
    releaseBorrowedReasoningBody(declared)
    expect(declared.children).toBe(owned)
  })
})

describe('GenuiAssistantNodeView reasoning handoff', () => {
  afterEach(() => { clearBuiltinAssistant() })

  it('renders the built-in assistant view for a reasoning mount', async () => {
    const calls: unknown[] = []
    installBuiltin((props) => {
      const preview = props.usePresentation(policy => policy.preview === true)
      const body = props.renderSlot('conversation.chat.reasoning.body', {
        rawText: 'ponder', text: 'ponder', running: false,
      })
      calls.push(body)
      return createElement('div', { 'data-official-reasoning': '' }, preview ? 'preview' : 'plain', body)
    })
    const container = await render(viewProps({
      blocks: [
        { kind: 'reasoning', text: 'ponder' },
        { kind: 'text', text: 'the reply' },
      ],
      status: 'settled',
      groupPart: 'reasoning',
      renderSlot: (key, owner) => {
        calls.push({ key, owner })
        return createElement('span', { 'data-cot-translation': '' }, owner.text)
      },
    }))
    expect(container.querySelector('[data-dsh-genui-assistant]')).toBeNull()
    expect(container.querySelector('[data-official-reasoning]')?.textContent).toContain('preview')
    expect(calls[0]).toEqual({
      key: REASONING_BODY_SLOT,
      owner: { rawText: 'ponder', text: 'ponder', running: false },
    })
    expect(container.querySelector('[data-cot-translation]')).not.toBeNull()
  })

  it('renders a settled schema fence when the host no longer passes fileMentions', async () => {
    const seen: unknown[] = []
    installBuiltin(() => createElement('div', { 'data-official-reasoning': '' }), (owner) => {
      seen.push(owner)
      return undefined
    })
    const container = await render(viewProps({
      blocks: [{ kind: 'text', text: '```schemaJson\n{"componentName":"Page"}\n```' }],
      status: 'settled',
      groupPart: 'response',
      renderSlot: () => null,
      omitFileMentions: true,
      finalNode: { seq: 3 },
      turnStatus: 'closed',
      tail: { closing: { finalNode: { seq: 3 } } },
    }))
    expect(container.querySelector('[data-official-reasoning]')).toBeNull()
    expect(container.querySelector('[data-dsh-genui-assistant]')).not.toBeNull()
    expect(container.querySelector(
      '[data-dsh-genui-card-pending], [data-dsh-genui-card], [data-dsh-genui-card-error]',
    )).not.toBeNull()
    expect(seen).toHaveLength(1)
  })

  it('keeps a response mount on the GenUI bubble', async () => {
    installBuiltin(() => createElement('div', { 'data-official-reasoning': '' }))
    const container = await render(viewProps({
      blocks: [
        { kind: 'reasoning', text: 'ponder' },
        { kind: 'text', text: 'the reply' },
      ],
      status: 'settled',
      groupPart: 'response',
      renderSlot: () => createElement('span', { 'data-cot-translation': '' }),
    }))
    expect(container.querySelector('[data-official-reasoning]')).toBeNull()
    expect(container.querySelector('[data-cot-translation]')).toBeNull()
    expect(container.querySelector('[data-dsh-genui-assistant] p')?.textContent).toBe('the reply')
  })

  it('still shows reasoning text when the built-in view was not captured', async () => {
    const container = await render(viewProps({
      blocks: [{ kind: 'reasoning', text: 'ponder' }],
      status: 'running',
      groupPart: 'reasoning',
      renderSlot: () => createElement('span', { 'data-cot-translation': '' }, 'ponder'),
    }))
    expect(container.querySelector('summary')?.textContent).toBe('message.think')
    expect(container.querySelector('[data-cot-translation]')?.textContent).toBe('ponder')
  })
})

function installBuiltin(
  component: (props: {
    usePresentation: (selector: (policy: { preview?: boolean }) => boolean) => boolean
    renderSlot: NonNullable<GenuiAssistantNodeViewProps['renderSlot']>
  }) => ReturnType<typeof createElement>,
  fileMentions?: (owner: unknown) => unknown,
): void {
  const View = memo(component)
  const policy = { preview: true }
  const presentation: PresentationSource = {
    subscribe: () => () => {},
    getSnapshot: () => policy,
  }
  captureBuiltinAssistant([{
    component: View,
    options: { key: 'assistant-step' },
    children: { [REASONING_BODY_SLOT]: { kind: 'single', scope: 'session' } },
    inject: () => ({
      hooks: { presentation },
      ...(fileMentions === undefined ? {} : { fileMentions }),
    }),
  }], GenuiAssistantNodeView)
}

async function render(props: GenuiAssistantNodeViewProps): Promise<HTMLDivElement> {
  const container = document.createElement('div')
  document.body.appendChild(container)
  const root = createRoot(container)
  await act(async () => {
    root.render(createElement(GenuiAssistantNodeView, props))
  })
  return container
}

function viewProps(input: {
  blocks: GenuiAssistantNodeViewProps['node']['data']['blocks']
  status: string
  groupPart?: string
  renderSlot: NonNullable<GenuiAssistantNodeViewProps['renderSlot']>
  omitFileMentions?: boolean
  finalNode?: { seq: number }
  turnStatus?: string
  tail?: { closing: { finalNode: { seq: number } } }
}): GenuiAssistantNodeViewProps {
  return {
    node: {
      data: {
        blocks: input.blocks,
        status: input.status,
        ...(input.finalNode === undefined ? {} : { finalNode: input.finalNode }),
      },
      location: {
        kind: 'turn',
        ...(input.turnStatus === undefined ? {} : { turn: { status: input.turnStatus } }),
      },
    },
    renderMessageImages: () => null,
    ...(input.omitFileMentions === true ? {} : { fileMentions: () => undefined }),
    t: (key) => key,
    useTurnData: () => input.tail,
    openFile: () => {},
    groupPart: input.groupPart,
    renderSlot: input.renderSlot,
  }
}

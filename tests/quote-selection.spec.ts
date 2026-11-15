/**
 * @vitest-environment jsdom
 */
import { createElement } from 'react'
import { createRoot, type Root } from 'react-dom/client'
import { act } from 'react-dom/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'

interface MarkdownCall {
  text: string
  streaming?: boolean | undefined
  textInteractionSource?: boolean | undefined
}

const markdownCalls: MarkdownCall[] = []
const mounted: { root: Root; container: HTMLDivElement }[] = []

vi.mock('@deepseek-ai/dsh-client-ui-primitives', () => ({
  MarkdownText: (props: MarkdownCall) => {
    markdownCalls.push(props)
    // Mirror the primitive: Chat finds a source through closest() on this node.
    return createElement('p', {
      'data-text-interaction-source': props.textInteractionSource === true ? '' : undefined,
    }, props.text)
  },
  JsonBlock: () => null,
}))

import { GenuiAssistantNodeView } from '../src/client/GenuiAssistantNodeView.tsx'
import type { GenuiAssistantNodeViewProps } from '../src/client/assistant-props.ts'

describe('GenUI reply text-interaction source', () => {
  afterEach(async () => {
    await act(async () => {
      for (const { root } of mounted) root.unmount()
    })
    for (const { container } of mounted) container.remove()
    mounted.length = 0
    markdownCalls.length = 0
  })

  it('offers settled reply prose to the Chat quote selection', async () => {
    const container = await render(responseProps('settled', { seq: 1, messageId: 'message-1' }))
    expect(markdownCalls.length).toBeGreaterThan(0)
    for (const call of markdownCalls) expect(call.textInteractionSource).toBe(true)
    expect(container.querySelector('[data-text-interaction-source]')).not.toBeNull()
  })

  it.each([
    ['without a final node', undefined],
    ['without a message ID', { seq: 1 }],
    ['with an undefined message ID', { seq: 1, messageId: undefined }],
  ] as const)('keeps settled prose %s out of the selection source', async (_name, finalNode) => {
    const container = await render(responseProps('settled', finalNode))
    expect(markdownCalls.length).toBeGreaterThan(0)
    for (const call of markdownCalls) expect(call.textInteractionSource).toBe(false)
    expect(container.querySelector('[data-text-interaction-source]')).toBeNull()
  })

  it('does not enable an unknown status even with a message ID', async () => {
    const container = await render(responseProps('pending', { seq: 1, messageId: 'message-1' }))
    expect(markdownCalls.length).toBeGreaterThan(0)
    for (const call of markdownCalls) expect(call.textInteractionSource).toBe(false)
    expect(container.querySelector('[data-text-interaction-source]')).toBeNull()
  })

  it('keeps streaming reply prose out of the selection source', async () => {
    const container = await render(responseProps('running', { seq: 1, messageId: 'message-1' }))
    expect(markdownCalls.length).toBeGreaterThan(0)
    for (const call of markdownCalls) expect(call.textInteractionSource).toBe(false)
    expect(container.querySelector('[data-text-interaction-source]')).toBeNull()
  })

  it('keeps an interrupted reply out of the selection source', async () => {
    const container = await render(responseProps('interrupted', { seq: 1, messageId: 'message-1' }))
    expect(markdownCalls.length).toBeGreaterThan(0)
    for (const call of markdownCalls) expect(call.textInteractionSource).toBe(false)
    expect(container.querySelector('[data-text-interaction-source]')).toBeNull()
  })
})

async function render(props: GenuiAssistantNodeViewProps): Promise<HTMLDivElement> {
  const container = document.createElement('div')
  document.body.appendChild(container)
  const root = createRoot(container)
  mounted.push({ root, container })
  await act(async () => {
    root.render(createElement(GenuiAssistantNodeView, props))
  })
  return container
}

function responseProps(
  status: string,
  finalNode?: GenuiAssistantNodeViewProps['node']['data']['finalNode'],
): GenuiAssistantNodeViewProps {
  return {
    node: {
      data: {
        blocks: [{ kind: 'text', text: 'the reply' }],
        status,
        ...(finalNode === undefined ? {} : { finalNode }),
      },
      location: { kind: 'turn' },
    },
    fileMentions: () => undefined,
    t: (key: string) => key,
    useTurnData: () => undefined,
    openFile: () => {},
    groupPart: 'response',
    renderSlot: () => null,
  }
}

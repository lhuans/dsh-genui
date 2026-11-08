/**
 * @vitest-environment jsdom
 */
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { act } from 'react-dom/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'

interface MarkdownCall {
  text: string
  streaming?: boolean | undefined
  textInteractionSource?: boolean | undefined
}

const markdownCalls: MarkdownCall[] = []

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
  afterEach(() => { markdownCalls.length = 0 })

  it('offers settled reply prose to the Chat quote selection', async () => {
    const container = await render(responseProps('settled'))
    expect(markdownCalls.length).toBeGreaterThan(0)
    for (const call of markdownCalls) expect(call.textInteractionSource).toBe(true)
    expect(container.querySelector('[data-text-interaction-source]')).not.toBeNull()
  })

  it('keeps streaming reply prose out of the selection source', async () => {
    const container = await render(responseProps('running'))
    expect(markdownCalls.length).toBeGreaterThan(0)
    for (const call of markdownCalls) expect(call.textInteractionSource).toBe(false)
    expect(container.querySelector('[data-text-interaction-source]')).toBeNull()
  })

  it('keeps an interrupted reply out of the selection source', async () => {
    const container = await render(responseProps('interrupted'))
    expect(markdownCalls.length).toBeGreaterThan(0)
    for (const call of markdownCalls) expect(call.textInteractionSource).toBe(false)
    expect(container.querySelector('[data-text-interaction-source]')).toBeNull()
  })
})

async function render(props: GenuiAssistantNodeViewProps): Promise<HTMLDivElement> {
  const container = document.createElement('div')
  document.body.appendChild(container)
  const root = createRoot(container)
  await act(async () => {
    root.render(createElement(GenuiAssistantNodeView, props))
  })
  return container
}

function responseProps(status: string): GenuiAssistantNodeViewProps {
  return {
    node: {
      data: {
        blocks: [{ kind: 'text', text: 'the reply' }],
        status,
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

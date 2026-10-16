// @vitest-environment jsdom
import { act, createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { afterEach, describe, expect, it, vi } from 'vitest'
import type { GenuiAssistantNodeViewProps } from '../src/client/assistant-props.ts'
import { GenuiAssistantNodeView } from '../src/client/GenuiAssistantNodeView.tsx'

const fixture = vi.hoisted(() => ({ params: {} as unknown, state: {} as unknown }))
vi.mock('@deepseek-ai/dsh-client-ui-primitives', () => ({ JsonBlock: () => null, MarkdownText: () => null }))
vi.mock('../src/client/GenuiTextBody.tsx', () => ({
  GenuiTextBody: ({ customActions }: { customActions: Record<string, { execute: (params: unknown, context: { state: unknown }) => void }> }) => createElement('button', {
    onClick: () => customActions.continueChat.execute(fixture.params, { state: fixture.state }),
  }, 'Submit fixture'),
}))

;(globalThis as { IS_REACT_ACT_ENVIRONMENT?: boolean }).IS_REACT_ACT_ENVIRONMENT = true
const roots: ReturnType<typeof createRoot>[] = []
afterEach(() => {
  act(() => roots.splice(0).forEach(root => root.unmount()))
  document.body.replaceChildren()
})

function mount(inputActions?: GenuiAssistantNodeViewProps['inputActions']) {
  const container = document.createElement('div')
  document.body.append(container)
  const root = createRoot(container)
  roots.push(root)
  const props: GenuiAssistantNodeViewProps = {
    node: { data: { status: 'completed', blocks: [{ kind: 'text', text: 'fixture' }] }, location: { kind: 'session' } },
    renderMessageImages: () => null,
    fileMentions: () => undefined,
    t: key => key,
    useTurnData: () => undefined,
    openFile: () => {},
    inputActions,
  }
  act(() => root.render(createElement(GenuiAssistantNodeView, props)))
  return () => act(() => container.querySelector('button')!.click())
}

describe('continueChat view boundary', () => {
  it('shows an error without changing the draft or submitting, then allows a corrected submission', () => {
    const inputActions = { setDraft: vi.fn(), submit: vi.fn() }
    fixture.state = { formData: { name: 'synthetic' }, options: ['unneeded'] }
    fixture.params = { message: '提交', stateKeys: ['missing'] }
    const click = mount(inputActions)
    click()
    expect(document.querySelector('[role="alert"]')?.textContent).toContain('不存在')
    expect(inputActions.setDraft).not.toHaveBeenCalled()
    expect(inputActions.submit).not.toHaveBeenCalled()
    fixture.params = { message: '提交', stateKeys: ['formData'] }
    click()
    expect(document.querySelector('[role="alert"]')).toBeNull()
    expect(inputActions.setDraft).toHaveBeenCalledWith('提交,相关参数为：{"formData":{"name":"synthetic"}}')
    expect(inputActions.submit).toHaveBeenCalledTimes(1)
  })

  it('ignores blank submissions and hosts without input actions', () => {
    fixture.params = { message: '   ', stateKeys: [] }
    const inputActions = { setDraft: vi.fn(), submit: vi.fn() }
    mount(inputActions)()
    expect(inputActions.submit).not.toHaveBeenCalled()
    fixture.params = { message: '提交', stateKeys: ['missing'] }
    mount()()
    expect(document.querySelector('[role="alert"]')).toBeNull()
  })
})

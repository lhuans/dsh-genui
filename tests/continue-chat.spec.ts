import { describe, expect, it } from 'vitest'
import {
  CONTINUE_CHAT_MESSAGE_LIMIT,
  CONTINUE_CHAT_STATE_LIMIT,
  continueChatDraft,
} from '../src/client/continue-chat.ts'

describe('continueChatDraft', () => {
  it('carries the button label and the card state into the composer', () => {
    expect(continueChatDraft('提交', { name: 'Ada', days: 3 })).toBe(
      '提交,相关参数为：{"name":"Ada","days":3}',
    )
  })

  it('ignores an empty or non-string label', () => {
    expect(continueChatDraft('', { a: 1 })).toBe('')
    expect(continueChatDraft('   ', { a: 1 })).toBe('')
    expect(continueChatDraft(undefined, { a: 1 })).toBe('')
    expect(continueChatDraft({ message: 'submit' }, { a: 1 })).toBe('')
  })

  it('collapses a multi-line label so the draft stays one message', () => {
    expect(continueChatDraft('submit\n\nnow', {})).toBe('submit now,相关参数为：{}')
  })

  it('caps the label', () => {
    const draft = continueChatDraft('x'.repeat(CONTINUE_CHAT_MESSAGE_LIMIT + 50), {})
    expect(draft).toBe('x'.repeat(CONTINUE_CHAT_MESSAGE_LIMIT) + '…,相关参数为：{}')
  })

  it('never leaves half a surrogate pair at the label cut', () => {
    // 'a' shifts the phase so the cut lands between the halves of one emoji —
    // asserted below, because a tautological input is how this test previously
    // passed with the guard deleted.
    const label = 'a' + '😀'.repeat(CONTINUE_CHAT_MESSAGE_LIMIT)
    const naive = label.slice(0, CONTINUE_CHAT_MESSAGE_LIMIT)
    expect(/[\uD800-\uDBFF]$/.test(naive), 'precondition: the naive cut splits a pair').toBe(true)

    const draft = continueChatDraft(label, {})
    // Look at the cut itself: a lone high surrogate is one whose next code unit
    // is not its low half. (The ellipsis is followed by the separator, so an
    // end-anchored pattern would never see it.)
    const cut = draft.indexOf('…')
    expect(cut).toBeGreaterThan(0)
    expect(/[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(draft), 'half a pair left at the cut').toBe(false)
  })

  it('keeps a state payload of exactly the limit intact', () => {
    const state = { a: 'x'.repeat(CONTINUE_CHAT_STATE_LIMIT - 8) }
    const json = JSON.stringify(state)
    expect(json.length).toBe(CONTINUE_CHAT_STATE_LIMIT)
    expect(continueChatDraft('go', state)).toBe('go,相关参数为：' + json)
  })

  it('keeps whole entries and names the keys it dropped', () => {
    const state = { a: 'x'.repeat(2000), b: 'y'.repeat(2000), c: 'z'.repeat(2000) }
    const draft = continueChatDraft('go', state)
    expect(draft).toContain('"a":"' + 'x'.repeat(10))
    expect(draft).toContain('…(state truncated, dropped keys: b, c)')
    expect(JSON.parse(draft.slice(draft.indexOf('{'), draft.indexOf('}') + 1))).toEqual({ a: 'x'.repeat(2000) })
  })

  it('reports a byte count when the state is not a plain object', () => {
    const state = Array.from({ length: 1500 }, (_, i) => i)
    const draft = continueChatDraft('go', state)
    expect(draft).toContain('相关参数为：[0,1,2,')
    expect(draft).toMatch(/…\(state truncated, \d+ chars dropped\)$/)
  })

  it('never leaves half a surrogate pair at the state cut, whatever the phase', () => {
    // The cut lands wherever the budget says, so the phase is walked rather than
    // guessed: hand-picking one prefix is how this assertion passed with the
    // guard deleted. Removing `withoutHalfSurrogate` leaves a lone surrogate in
    // 31 of these 151 phases.
    const lone = (text: string): boolean =>
      /[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(text) || /(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/.test(text)

    const offenders: string[] = []
    for (let prefix = 3900; prefix <= 4050; prefix++) {
      const state = ['x'.repeat(prefix), '😀'.repeat(60)]
      const payload = continueChatDraft('go', state).split('相关参数为：')[1] ?? ''
      if (lone(payload)) offenders.push(String(prefix))
      expect(payload.length).toBeLessThanOrEqual(CONTINUE_CHAT_STATE_LIMIT)
    }
    expect(offenders).toEqual([])
  })

  it('degrades to an empty object when serialization throws', () => {
    expect(continueChatDraft('go', { big: BigInt(1) })).toBe('go,相关参数为：{}')
  })

  it('never exceeds the cap, whatever the shape of the state', () => {
    const cases: unknown[] = [
      { a: 'x'.repeat(3990), b: 'y'.repeat(500) },
      Object.fromEntries(Array.from({ length: 40 }, (_, i) => ['key' + String(i), 'v'.repeat(200)])),
      Array.from({ length: 3000 }, (_, i) => i),
      { only: 'z'.repeat(9000) },
      { a: 1, big: BigInt(2), c: 'w'.repeat(5000) },
    ]
    for (const state of cases) {
      const payload = continueChatDraft('go', state).split('相关参数为：')[1] ?? ''
      expect(payload.length, String(continueChatDraft('go', state).slice(0, 40))).toBeLessThanOrEqual(CONTINUE_CHAT_STATE_LIMIT)
    }
  })

  it('says what it dropped without a placeholder object when nothing fit', () => {
    const draft = continueChatDraft('go', { only: 'z'.repeat(9000) })
    expect(draft).toContain('dropped keys: only')
    expect(draft).not.toContain('{}')
    expect((draft.split('相关参数为：')[1] ?? '').length).toBeLessThanOrEqual(CONTINUE_CHAT_STATE_LIMIT)
  })

it('the cap holds for every shape, including a note made of long key names', () => {
  // The measured failure: one 5000-character key name made the NOTE alone longer than
  // the cap, so "state truncated" carried a 5034-character payload.
  const longKey = "k".repeat(5000)
  const draft = continueChatDraft("send", { [longKey]: 1 })
  expect(draft.length).toBeLessThanOrEqual(4000)
  const many = Object.fromEntries(Array.from({ length: 12 }, (_, i) => ["k".repeat(500), i]))
  const draft2 = continueChatDraft("send", many)
  expect(draft2.length).toBeLessThanOrEqual(4000)
  expect(continueChatDraft("send", { a: "x".repeat(4000) }).length).toBeLessThanOrEqual(4000)
})

  it('falls back to an empty object for state it cannot serialize', () => {
    const circular: Record<string, unknown> = {}
    circular.self = circular
    expect(continueChatDraft('go', circular)).toBe('go,相关参数为：{}')
    expect(continueChatDraft('go', undefined)).toBe('go,相关参数为：{}')
    expect(continueChatDraft('go', null)).toBe('go,相关参数为：{}')
  })
})

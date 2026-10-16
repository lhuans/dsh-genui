import { describe, expect, it } from 'vitest'
import { continueChatDraft } from '../src/client/continue-chat.ts'

describe('continueChatDraft', () => {
  it('selects all required fields without including options or mutating the card', () => {
    const state = { formData: { name: '测试', quantity: 2 }, customerId: 'synthetic-01', options: Array.from({ length: 500 }, (_, i) => ({ label: `选项${i}`, value: i })) }
    const before = JSON.stringify(state)
    expect(continueChatDraft({ message: '提交', stateKeys: ['formData', 'customerId'] }, { state }))
      .toBe(`提交,相关参数为：${JSON.stringify({ formData: state.formData, customerId: state.customerId })}`)
    expect(JSON.stringify(state)).toBe(before)
  })

  it('preserves the full-state payload when stateKeys is omitted', () => {
    expect(continueChatDraft({ message: '旧卡片' }, { state: { formData: { ok: false }, extra: 0 } }))
      .toBe('旧卡片,相关参数为：{"formData":{"ok":false},"extra":0}')
  })

  it('sends no state when an empty list is explicit', () => {
    expect(continueChatDraft({ message: '继续', stateKeys: [] }, { state: { irrelevant: 1n } }))
      .toBe('继续,相关参数为：{}')
  })

  it.each([null, undefined, {}, { message: '' }, { message: '   ' }])('ignores missing/blank messages: %j', params => {
    expect(continueChatDraft(params)).toBeNull()
  })

  it('rejects missing and inherited fields instead of submitting partial data', () => {
    expect(() => continueChatDraft({ message: '提交', stateKeys: ['formData', 'missing'] }, { state: { formData: {} } }))
      .toThrow('不存在')
    expect(() => continueChatDraft({ message: '提交', stateKeys: ['inherited'] }, { state: Object.create({ inherited: 1 }) }))
      .toThrow('不存在')
  })

  it.each(['x', [3], [''], ['__proto__'], ['prototype'], ['constructor'], ['x'.repeat(129)], Array(65).fill('x')].map(stateKeys => ({ stateKeys })))('rejects invalid stateKeys: $stateKeys', ({ stateKeys }) => {
    expect(() => continueChatDraft({ message: '提交', stateKeys }, { state: { x: 1 } })).toThrow('GenUI')
  })

  it('retains falsy values, nested JSON and duplicate keys', () => {
    const state = { zero: 0, no: false, empty: '', nil: null, nested: { 值: [1, '中文'] } }
    expect(continueChatDraft({ message: '提交', stateKeys: [...Object.keys(state), 'zero'] }, { state }))
      .toBe(`提交,相关参数为：${JSON.stringify(state)}`)
  })

  it('rejects serialization failures rather than replacing required data with {}', () => {
    const cyclic: Record<string, unknown> = {}
    cyclic.self = cyclic
    for (const value of [cyclic, 1n, undefined, () => 1, Symbol('x')]) {
      expect(() => continueChatDraft({ message: '提交', stateKeys: ['value'] }, { state: { value } }))
        .toThrow('无法序列化')
    }
    expect(() => continueChatDraft({ message: '旧卡片' }, { state: cyclic })).toThrow('无法序列化')
  })
})

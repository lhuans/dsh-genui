/**
 * Serialize a card submission without mutating its live state.
 * Omitting stateKeys retains the full-state payload of existing cards.
 */
export function continueChatDraft(params: unknown, context?: { state?: unknown }): string | null {
  if (params === null || typeof params !== 'object' || !('message' in params)) return null
  const message = String(params.message)
  if (message.trim().length === 0) return null

  let state = context?.state ?? {}
  if (Object.prototype.hasOwnProperty.call(params, 'stateKeys')) {
    const keys = (params as { stateKeys: unknown }).stateKeys
    if (!Array.isArray(keys) || keys.length > 64) {
      throw new Error('GenUI：stateKeys 必须是最多 64 个字段名的数组；未发送。')
    }
    const selected: Record<string, unknown> = Object.create(null)
    for (const key of keys) {
      if (typeof key !== 'string' || key.length === 0 || key.length > 128
        || ['__proto__', 'prototype', 'constructor'].includes(key)) {
        throw new Error('GenUI：提交字段名不合法；未发送。')
      }
      if (state === null || typeof state !== 'object'
        || !Object.prototype.hasOwnProperty.call(state, key)) {
        throw new Error('GenUI：必要的提交字段不存在；未发送。')
      }
      const value = (state as Record<string, unknown>)[key]
      if (value === undefined || typeof value === 'function' || typeof value === 'symbol') {
        throw new Error('GenUI：必要的提交字段无法序列化；未发送。')
      }
      selected[key] = value
    }
    state = selected
  }

  let stateJson: string | undefined
  try {
    stateJson = JSON.stringify(state)
  } catch {
    throw new Error('GenUI：卡片状态无法序列化；未发送。')
  }
  if (stateJson === undefined) throw new Error('GenUI：卡片状态无法序列化；未发送。')
  return `${message},相关参数为：${stateJson}`
}

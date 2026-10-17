/**
 * Compose the follow-up message a card action submits to the conversation.
 *
 * Card state is model-authored and unbounded: a large form would otherwise be
 * stringified whole into the composer and paid for again as input tokens on the
 * next turn, with no cap and no sign that it happened. Both halves of the
 * message are capped — and what a cap drops is named, because a model that
 * silently receives half a payload behaves as if it received all of it.
 */

/** Longest button label kept verbatim. */
export const CONTINUE_CHAT_MESSAGE_LIMIT = 200
/** Longest serialized card state echoed back, note included. */
export const CONTINUE_CHAT_STATE_LIMIT = 4000
/** How many dropped key names the note spells out before summarising. */
const MAX_DROPPED_NAMES = 12

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

/** Drop a truncated string's dangling half of a surrogate pair. */
function withoutHalfSurrogate(text: string): string {
  const last = text.charCodeAt(text.length - 1)
  return last >= 0xd800 && last <= 0xdbff ? text.slice(0, -1) : text
}

function byteNote(dropped: number): string {
  return '…(state truncated, ' + String(dropped) + ' chars dropped)'
}

/** Last resort for a state that is not a plain object: cut, and say by how much. */
function cutSerialized(json: string): string {
  // The note is part of the payload, so the cut has to leave room for it — and
  // the note's own length moves as the number of dropped characters changes,
  // which is why this settles rather than computes.
  let keep = CONTINUE_CHAT_STATE_LIMIT
  for (let attempt = 0; attempt < 8; attempt++) {
    const head = withoutHalfSurrogate(json.slice(0, Math.max(0, keep)))
    const note = byteNote(json.length - head.length)
    if (head.length + note.length <= CONTINUE_CHAT_STATE_LIMIT) return head + note
    keep = CONTINUE_CHAT_STATE_LIMIT - note.length
  }
  return byteNote(json.length)
}

/**
 * Hard ceiling for the note itself. Key names are model-authored and unbounded,
 * so "name what was dropped" must not become a second unbounded payload: the
 * measured failure was a single 5000-character key name pushing the note alone
 * past the cap.
 */
const MAX_NOTE_CHARS = 400

function truncationNote(dropped: readonly string[]): string {
  const names: string[] = []
  let size = 0
  let shown = 0
  for (const key of dropped) {
    const bounded = key.length > 60 ? key.slice(0, 57) + "..."
      : key
    const cost = (shown > 0 ? 2 : 0) + bounded.length
    if (shown > 0 && size + cost > MAX_NOTE_CHARS) break
    size += cost
    names.push(bounded)
    shown += 1
    if (shown >= MAX_DROPPED_NAMES) break
  }
  const rest = dropped.length - shown + (names.length < shown ? 0 : 0)
  return '…(state truncated, dropped keys: ' + names.join(', ')
    + (rest > 0 ? ', +' + String(rest) + ' more' : '') + ')'
}

/**
 * Serialize as much of the state as fits — note included.
 * Whole top-level entries are kept in order, so a form's fields survive as pairs
 * instead of being sliced mid-value. If the note itself would push the payload
 * past the cap, kept entries are given back one at a time, so the cap holds for
 * every shape rather than for the convenient ones.
 */
function statePayload(state: unknown): string {
  if (state === undefined || state === null) return '{}'
  let json: string | undefined
  try {
    json = JSON.stringify(state)
  } catch {
    return '{}'
  }
  if (json === undefined) return '{}'
  if (json.length <= CONTINUE_CHAT_STATE_LIMIT) return json
  if (!isPlainObject(state)) return cutSerialized(json)

  const serializable: Array<{ key: string; entry: string }> = []
  const unserializable: string[] = []
  for (const key of Object.keys(state)) {
    try {
      serializable.push({ key, entry: JSON.stringify(key) + ':' + JSON.stringify(state[key]) })
    } catch {
      unserializable.push(key) // e.g. a cycle through this key, or a BigInt
    }
  }

  let kept = 0
  let size = 2 // '{}'
  for (const { entry } of serializable) {
    const cost = entry.length + (kept > 0 ? 1 : 0)
    if (size + cost > CONTINUE_CHAT_STATE_LIMIT) break
    size += cost
    kept += 1
  }

  while (kept >= 0) {
    const body = '{' + serializable.slice(0, kept).map(item => item.entry).join(',') + '}'
    const dropped = unserializable.concat(serializable.slice(kept).map(item => item.key))
    const payload = dropped.length === 0
      ? body
      : (kept === 0 ? truncationNote(dropped) : body + truncationNote(dropped))
    if (payload.length <= CONTINUE_CHAT_STATE_LIMIT || kept === 0) return payload
    kept -= 1
  }
  // Unreachable at runtime (kept === 0 returns inside the loop); TypeScript
  // needs an exit the control-flow analysis can see.
  return '{}'
}

/**
 * Build the draft for `continueChat`.
 * @param message - the short label the card sent (usually a button label).
 * @param state - renderer context state (formData and friends).
 * @returns The draft to submit, or an empty string when the label is empty.
 */
export function continueChatDraft(message: unknown, state?: unknown): string {
  const text = typeof message === 'string' ? message.replace(/\s+/g, ' ').trim() : ''
  if (text.length === 0) return ''
  const label = text.length > CONTINUE_CHAT_MESSAGE_LIMIT
    ? withoutHalfSurrogate(text.slice(0, CONTINUE_CHAT_MESSAGE_LIMIT)) + '…'
    : text
  return label + ',相关参数为：' + statePayload(state)
}

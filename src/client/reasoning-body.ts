/**
 * Keep the official reasoning-body slot reachable after GenUI shadows
 * assistant-step. Chat declares `conversation.chat.reasoning.body` on its own
 * entry; a second declaration throws, and renderSlot only authorizes keys
 * listed on the calling entry. The built-in assistant view still paints
 * thinking, but it runs under our shadow entry, so that entry must list the
 * slot or the official `renderSlot` call throws. Borrowing the spec does not
 * claim the declaration. Release drops that table before our registration
 * disposes, so unload does not collapse the slot Chat still owns.
 */

/** Slot the official cot-translation plugin replaces. */
export const REASONING_BODY_SLOT = 'conversation.chat.reasoning.body'

/** Owner props the reasoning body slot accepts (display text plus the original). */
export interface ReasoningBodyOwner {
  readonly rawText: string
  readonly text: string
  readonly running: boolean
}

/** Marker so release only clears a table this module attached. */
const BORROWED = Symbol('dsh-genui.borrowed-reasoning-body')

/** Ledger row GenUI can hang a borrowed children table on. */
export interface BorrowableSlotEntry {
  children?: object | undefined
}

/**
 * Point this shadow entry at the already-declared reasoning body slot.
 * No-op when the entry already declared children of its own.
 * @param entry - GenUI's assistant-step registration.
 */
export function borrowReasoningBody(entry: BorrowableSlotEntry): void {
  if (entry.children !== undefined) return
  const children: Record<string, { kind: 'single'; scope: 'session' }> = {
    [REASONING_BODY_SLOT]: { kind: 'single', scope: 'session' },
  }
  Object.defineProperty(children, BORROWED, { value: true })
  entry.children = children
}

/**
 * Drop a borrowed children table so disposing the shadow entry does not
 * collapse the slot the built-in assistant renderer declared.
 * @param entry - GenUI's assistant-step registration.
 */
export function releaseBorrowedReasoningBody(entry: BorrowableSlotEntry): void {
  const children = entry.children
  if (children !== undefined && BORROWED in children) entry.children = undefined
}

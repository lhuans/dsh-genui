/**
 * Shared fetch + same-window sync for composer and plugin-detail prompt UI.
 */
import { GENUI_PROMPT_CONTROL_URL } from '../prompt-control-url.ts'
import {
  isGenuiPromptMode,
  type GenuiPromptMode,
} from '../prompt-mode.ts'

/** Browser-visible prompt UI state. */
export interface GenuiPromptClientState {
  mode: GenuiPromptMode
  showPromptToggle: boolean
}

const EVENT_NAME = 'dsh-genui-prompt-state'

/** Patch accepted by the prompt control POST handler. */
export type GenuiPromptClientPatch = Partial<GenuiPromptClientState>

function parseState(payload: unknown): GenuiPromptClientState | undefined {
  if (payload === null || typeof payload !== 'object') return undefined
  const record = payload as Record<string, unknown>
  if (!isGenuiPromptMode(record.mode)) return undefined
  return {
    mode: record.mode,
    showPromptToggle: record.showPromptToggle !== false,
  }
}

/**
 * Read the current prompt UI state from the host.
 * @param signal - optional abort for unmount.
 */
export async function fetchPromptUiState(signal?: AbortSignal): Promise<GenuiPromptClientState> {
  const response = await fetch(GENUI_PROMPT_CONTROL_URL, { signal })
  if (!response.ok) throw new Error(String(response.status))
  const state = parseState(await response.json())
  if (state === undefined) throw new Error('bad-state')
  return state
}

/**
 * Write one or both prompt UI fields and broadcast the accepted state.
 * @param patch - fields to change.
 */
export async function postPromptUiState(patch: GenuiPromptClientPatch): Promise<GenuiPromptClientState> {
  const response = await fetch(GENUI_PROMPT_CONTROL_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(patch),
  })
  if (!response.ok) throw new Error(String(response.status))
  const state = parseState(await response.json())
  if (state === undefined) throw new Error('bad-state')
  publishPromptUiState(state)
  return state
}

/** Notify other same-window GenUI surfaces after a successful write or refresh. */
export function publishPromptUiState(state: GenuiPromptClientState): void {
  window.dispatchEvent(new CustomEvent<GenuiPromptClientState>(EVENT_NAME, { detail: state }))
}

/**
 * Subscribe to same-window prompt UI updates.
 * @param listener - receives the latest accepted state.
 * @returns disposer.
 */
export function subscribePromptUiState(listener: (state: GenuiPromptClientState) => void): () => void {
  const onEvent = (event: Event) => {
    const detail = (event as CustomEvent<GenuiPromptClientState>).detail
    if (detail !== undefined) listener(detail)
  }
  window.addEventListener(EVENT_NAME, onEvent)
  return () => window.removeEventListener(EVENT_NAME, onEvent)
}

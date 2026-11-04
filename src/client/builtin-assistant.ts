/**
 * The built-in assistant-step entry, captured so a reasoning mount can render
 * that component instead of a GenUI thinking row. Reply bubbles stay on the
 * GenUI view. Chat paints both halves through one slot key, so the shadow
 * winner has to hand the reasoning half back.
 */
import { useSyncExternalStore } from 'react'
import type { ComponentType } from 'react'
import { REASONING_BODY_SLOT } from './reasoning-body.ts'

/** Snapshot source the built-in view's `usePresentation` reads. */
export interface PresentationSource {
  subscribe(listener: () => void): () => void
  getSnapshot(): unknown
}

/** Face the built-in assistant registration injects for one session. */
export interface BuiltinAssistantInject {
  hooks?: { presentation?: PresentationSource | undefined } | undefined
  resolveFilePath?: ((path: string) => string) | undefined
  fileMentions?: ((...args: never[]) => unknown) | undefined
}

/** One non-GenUI assistant-step registration. Chat's view is wrapped in `memo`. */
export interface BuiltinAssistant {
  component: ComponentType<Record<string, unknown>>
  inject?: ((sessionId: unknown) => BuiltinAssistantInject) | undefined
}

/** Ledger row inspected while assistant-step registrations change. */
export interface AssistantStepEntry {
  component: unknown
  options: { key?: string | undefined }
  children?: Record<string, unknown> | undefined
  inject?: ((sessionId: unknown) => BuiltinAssistantInject) | undefined
}

let builtin: BuiltinAssistant | undefined
const listeners = new Set<() => void>()

function publish(next: BuiltinAssistant | undefined): void {
  if (builtin?.component === next?.component && builtin?.inject === next?.inject) return
  builtin = next
  for (const listener of listeners) listener()
}

/**
 * Remember the built-in assistant-step component, preferring the entry that
 * declared the reasoning body slot.
 * @param entries - current `conversation.chat.node` registrations.
 * @param ownComponent - GenUI's component, which must not be selected.
 */
export function captureBuiltinAssistant(
  entries: readonly AssistantStepEntry[],
  ownComponent: unknown,
): void {
  const candidates = entries.filter((entry) =>
    entry.options.key === 'assistant-step'
    && entry.component !== ownComponent
    && isRenderableComponent(entry.component))
  const official = candidates.find((entry) => entry.children?.[REASONING_BODY_SLOT] !== undefined)
    ?? candidates[0]
  if (official === undefined || !isRenderableComponent(official.component)) return
  publish({
    component: official.component,
    inject: official.inject,
  })
}

/** Drop the captured component. Tests use this between cases. */
export function clearBuiltinAssistant(): void {
  publish(undefined)
}

/** Subscribe to the captured built-in assistant component. */
export function useBuiltinAssistant(): BuiltinAssistant | undefined {
  return useSyncExternalStore(
    (listener) => {
      listeners.add(listener)
      return () => { listeners.delete(listener) }
    },
    () => builtin,
    () => builtin,
  )
}

/** True for a function component or a React.memo result. */
export function isRenderableComponent(value: unknown): value is ComponentType<Record<string, unknown>> {
  if (typeof value === 'function') return true
  if (typeof value !== 'object' || value === null) return false
  const type = (value as { type?: unknown }).type
  return typeof type === 'function'
}

/**
 * Bind Chat's presentation snapshot the way the slot renderer binds an
 * entry inject hook. The built-in view calls this during its render.
 * @param presentation - live presentation policy source from the built-in inject.
 * @returns the `usePresentation` prop that view expects.
 */
export function bindPresentation(presentation: PresentationSource) {
  return function usePresentation<T>(selector: (snapshot: unknown) => T): T {
    const snapshot = useSyncExternalStore(
      (listener) => presentation.subscribe(listener),
      () => presentation.getSnapshot(),
      () => presentation.getSnapshot(),
    )
    return selector(snapshot)
  }
}

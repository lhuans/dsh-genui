import { DSH_GENUI_CARD_TAG } from './genui-card-tag.ts'
import { GENUI_RUNTIME_URL } from '../genui-runtime-url.ts'
import { ensureGenuiRuntimeStyles } from './genui-runtime-styles.ts'

let loading: Promise<void> | undefined

function alreadyDefined(): boolean {
  return typeof customElements !== 'undefined' && customElements.get(DSH_GENUI_CARD_TAG) !== undefined
}

/**
 * Fetch and evaluate the Vue/OpenTiny custom-element bundle.
 * Concurrent callers share one in-flight request; a failed load can retry.
 */
export function loadGenuiRuntime(): Promise<void> {
  if (alreadyDefined()) {
    // A live plugin reload deletes the runtime's stylesheets (the loader owns
    // `style[data-plugin="dsh-genui"]`) while the custom element stays
    // registered. Restore them from the runtime's registry instead of
    // re-evaluating the bundle — an ESM script runs once per document.
    ensureGenuiRuntimeStyles()
    return Promise.resolve()
  }
  if (loading !== undefined) return loading
  if (typeof document === 'undefined') {
    return Promise.reject(new Error('dsh-genui: Vue runtime requires a document'))
  }
  loading = new Promise<void>((resolve, reject) => {
    const script = document.createElement('script')
    script.type = 'module'
    script.src = GENUI_RUNTIME_URL
    script.addEventListener('load', () => resolve(), { once: true })
    script.addEventListener('error', () => {
      loading = undefined
      script.remove()
      reject(new Error(`dsh-genui: failed to load ${GENUI_RUNTIME_URL}`))
    }, { once: true })
    document.head.appendChild(script)
  }).then(() => {
    // Styles are injected by the runtime during evaluation; restore only happens
    // on the alreadyDefined() short-circuit above (and from apply / CE mount).
    if (!alreadyDefined()) {
      loading = undefined
      throw new Error('dsh-genui: Vue runtime loaded but <dsh-genui-card> was not defined')
    }
  })
  return loading
}

/** Kick off {@link loadGenuiRuntime} without blocking plugin registration. */
export function prefetchGenuiRuntime(): void {
  const start = (): void => {
    void loadGenuiRuntime().catch(() => {
      // First-card render will retry; boot must not surface a rejected idle task.
    })
  }
  if (typeof requestIdleCallback === 'function') requestIdleCallback(start)
  else setTimeout(start, 0)
}

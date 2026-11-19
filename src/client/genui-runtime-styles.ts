/**
 * Ownership of the stylesheets the Vue/OpenTiny runtime injects.
 *
 * The runtime ships as its own module script (`/dsh-genui/runtime.js`) and
 * stamps every <style> tag with the plugin id, so DSH's client module loader
 * treats them as plugin-owned: on a live plugin reload it runs
 * `removeOwnedStyles('dsh-genui')` and deletes all of them. The custom element
 * stays defined, `loadGenuiRuntime()` short-circuits on `customElements.get`,
 * and an ESM script is evaluated once per document — so the 1.2 MB of TinyVue
 * theme CSS never comes back and cards render unstyled until a full refresh.
 *
 * The runtime build therefore records every stylesheet it injects in a global
 * registry, and this module re-appends the missing tags without re-evaluating
 * the bundle. Keys are the `data-plugin-css` ids, so restoring is idempotent.
 */

/** Global `Map<string, string>` of `data-plugin-css` id to stylesheet text. */
export const GENUI_CSS_REGISTRY_KEY = '__dshGenuiCss'

/** `data-plugin` owner stamped on runtime-injected style tags. */
export const GENUI_CSS_OWNER = 'dsh-genui'

/**
 * Re-append every registered runtime stylesheet that is no longer in the
 * document. Safe to call at any time: unknown registry or present tags no-op.
 * Restored tags land at the end of <head> rather than their original position;
 * runtime tags keep their relative order (Map insertion order), and TinyVue
 * class names barely intersect the host's, so cascade shifts are accepted.
 * @returns whether at least one style tag was restored.
 */
export function ensureGenuiRuntimeStyles(): boolean {
  if (typeof document === 'undefined') return false
  const registry = (globalThis as unknown as Record<string, unknown>)[GENUI_CSS_REGISTRY_KEY]
  if (!(registry instanceof Map)) return false

  let restored = false
  for (const [tagId, css] of registry as Map<string, string>) {
    const selector = `style[data-plugin-css=${JSON.stringify(tagId)}]`
    if (document.querySelector(selector) !== null) continue
    const tag = document.createElement('style')
    tag.dataset.plugin = GENUI_CSS_OWNER
    tag.dataset.pluginCss = tagId
    tag.textContent = css
    document.head.appendChild(tag)
    restored = true
  }
  return restored
}

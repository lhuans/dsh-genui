// @vitest-environment jsdom
import { afterEach, describe, expect, it, vi } from 'vitest'
import { GENUI_RUNTIME_URL } from '../src/genui-runtime-url.ts'
import { GENUI_CSS_REGISTRY_KEY } from '../src/client/genui-runtime-styles.ts'

afterEach(() => {
  vi.restoreAllMocks()
  vi.resetModules()
  document.head.replaceChildren()
  delete (globalThis as unknown as Record<string, unknown>)[GENUI_CSS_REGISTRY_KEY]
})

describe('loadGenuiRuntime', () => {
  it('appends one module script and shares the in-flight promise', async () => {
    vi.spyOn(customElements, 'get').mockReturnValue(undefined)
    const { loadGenuiRuntime } = await import('../src/client/load-genui-runtime.ts')
    const first = loadGenuiRuntime()
    const second = loadGenuiRuntime()
    expect(first).toBe(second)
    const scripts = [...document.head.querySelectorAll('script')]
    expect(scripts).toHaveLength(1)
    expect(scripts[0]?.type).toBe('module')
    expect(scripts[0]?.getAttribute('src')).toBe(GENUI_RUNTIME_URL)
  })

  it('resolves after the script loads and the custom element is defined', async () => {
    const get = vi.spyOn(customElements, 'get').mockReturnValue(undefined)
    const { loadGenuiRuntime } = await import('../src/client/load-genui-runtime.ts')
    const pending = loadGenuiRuntime()
    get.mockReturnValue(class extends HTMLElement {})
    document.head.querySelector('script')?.dispatchEvent(new Event('load'))
    await expect(pending).resolves.toBeUndefined()
  })

  it('rejects on script error and allows a retry', async () => {
    vi.spyOn(customElements, 'get').mockReturnValue(undefined)
    const { loadGenuiRuntime } = await import('../src/client/load-genui-runtime.ts')
    const pending = loadGenuiRuntime()
    document.head.querySelector('script')?.dispatchEvent(new Event('error'))
    await expect(pending).rejects.toThrow(/failed to load/)
    expect(document.head.querySelectorAll('script')).toHaveLength(0)

    const retry = loadGenuiRuntime()
    expect(document.head.querySelectorAll('script')).toHaveLength(1)
    document.head.querySelector('script')?.dispatchEvent(new Event('error'))
    await expect(retry).rejects.toThrow(/failed to load/)
  })

  it('restores runtime styles when the element survives a live plugin reload', async () => {
    // The loader deleted style[data-plugin="dsh-genui"], but the custom element
    // is still registered, so the module script never re-evaluates.
    ;(globalThis as unknown as Record<string, unknown>)[GENUI_CSS_REGISTRY_KEY] = new Map([
      ['dsh-genui/node_modules/@opentiny/vue-theme/base/index.css', '.tiny-button{color:red}'],
    ])
    vi.spyOn(customElements, 'get').mockReturnValue(class extends HTMLElement {})

    const { loadGenuiRuntime } = await import('../src/client/load-genui-runtime.ts')
    await expect(loadGenuiRuntime()).resolves.toBeUndefined()

    const restored = [...document.head.querySelectorAll('style')]
    expect(restored).toHaveLength(1)
    expect(restored[0]?.dataset.pluginCss).toBe('dsh-genui/node_modules/@opentiny/vue-theme/base/index.css')
    // No second <script>: the runtime is already in the document's module map.
    expect(document.head.querySelectorAll('script')).toHaveLength(0)
  })
})

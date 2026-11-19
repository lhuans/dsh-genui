// @vitest-environment jsdom
import { afterEach, describe, expect, it } from 'vitest'
import {
  GENUI_CSS_OWNER,
  GENUI_CSS_REGISTRY_KEY,
  ensureGenuiRuntimeStyles,
} from '../src/client/genui-runtime-styles.ts'

function publish(entries: [string, string][]): void {
  ;(globalThis as unknown as Record<string, unknown>)[GENUI_CSS_REGISTRY_KEY] = new Map(entries)
}

function tags(): HTMLStyleElement[] {
  return [...document.head.querySelectorAll('style')]
}

afterEach(() => {
  document.head.replaceChildren()
  delete (globalThis as unknown as Record<string, unknown>)[GENUI_CSS_REGISTRY_KEY]
})

describe('ensureGenuiRuntimeStyles', () => {
  it('puts back the stylesheets a live plugin reload removed', () => {
    publish([
      ['dsh-genui/node_modules/@opentiny/vue-theme/base/index.css', '.tiny-button{color:red}'],
      ['dsh-genui/src/client/genui-card-host.css', '.tg-config-provider{--content-bg:#fff}'],
    ])

    // What DSH's client-modules does to style[data-plugin="dsh-genui"].
    expect(ensureGenuiRuntimeStyles()).toBe(true)

    expect(tags().map(tag => tag.dataset.pluginCss)).toEqual([
      'dsh-genui/node_modules/@opentiny/vue-theme/base/index.css',
      'dsh-genui/src/client/genui-card-host.css',
    ])
    expect(tags().map(tag => tag.dataset.plugin)).toEqual([GENUI_CSS_OWNER, GENUI_CSS_OWNER])
    expect(tags()[0]?.textContent).toBe('.tiny-button{color:red}')
  })

  it('re-adds only the stylesheets that are missing', () => {
    publish([
      ['dsh-genui/a.css', '.a{}'],
      ['dsh-genui/b.css', '.b{}'],
    ])
    const kept = document.createElement('style')
    kept.dataset.pluginCss = 'dsh-genui/a.css'
    kept.textContent = '.a{}'
    document.head.appendChild(kept)

    expect(ensureGenuiRuntimeStyles()).toBe(true)
    expect(tags()).toHaveLength(2)
    expect(tags()[0]).toBe(kept)
    // Second pass is a no-op, so callers can run it on every mount.
    expect(ensureGenuiRuntimeStyles()).toBe(false)
    expect(tags()).toHaveLength(2)
  })

  it('no-ops before the runtime module published its registry', () => {
    expect(ensureGenuiRuntimeStyles()).toBe(false)
    expect(tags()).toHaveLength(0)
  })
})

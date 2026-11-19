import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const thinClient = [
  'src/client/index.ts',
  'src/client/GenuiAssistantNodeView.tsx',
  'src/client/GenuiTextBody.tsx',
  'src/client/GenuiVueCard.tsx',
  'src/client/load-genui-runtime.ts',
  'src/client/genui-card-tag.ts',
]

describe('client bundle split', () => {
  it('keeps Vue and OpenTiny materials out of the thin client graph', () => {
    for (const file of thinClient) {
      const src = readFileSync(resolve(file), 'utf8').replace(/^import\s+type\s+[\s\S]*?from\s+['"].*['"]/gm, '')
      expect(src, file).not.toMatch(/from ['"]vue['"]/)
      expect(src, file).not.toMatch(/from ['"]@opentiny\/genui-sdk-materials/)
      expect(src, file).not.toMatch(/from ['"]@opentiny\/genui-sdk-vue\//)
      expect(src, file).not.toContain('genui-card-element')
    }
  })

  it('replaces bare Vue esm-bundler feature flags in the built runtime (prepublishOnly: build runs first)', () => {
    const bundle = resolve('lib/genui-runtime.js')
    if (!existsSync(bundle)) return // dev checkout without a build
    const src = readFileSync(bundle, 'utf8')
    // Bare identifier references throw ReferenceError in the browser; the
    // remaining safe forms are string literals ('__VUE_INSTANCE_SETTERS__')
    // and property access (n.__VUE__, t.__VUE_DEVTOOLS_HOOK_REPLAY__).
    for (const flag of ['__VUE_OPTIONS_API__', '__VUE_PROD_DEVTOOLS__', '__VUE_PROD_HYDRATION_MISMATCH_DETAILS__']) {
      expect(src.match(new RegExp(`(?<![.\\w'"])${flag}(?![\\w'"])`)), flag).toBeNull()
    }
  })

  it('ships dark-mode theme sync in the built runtime', () => {
    const bundle = resolve('lib/genui-runtime.js')
    if (!existsSync(bundle)) return // dev checkout without a build
    const src = readFileSync(bundle, 'utf8')
    // The card observes DSH's body[data-ds-dark-theme] marker and feeds the
    // resolved mode to GenuiConfigProvider. Chart schemas receive one of the
    // cloud themes because canvas output does not inherit CSS variables.
    expect(src).toContain('data-ds-dark-theme')
    expect(src).toContain('cloud-dark')
    expect(src).toContain('cloud-light')
  })

  it('records runtime stylesheets so the thin client can restore them after a reload', () => {
    const bundle = resolve('lib/genui-runtime.js')
    if (!existsSync(bundle)) return // dev checkout without a build
    const src = readFileSync(bundle, 'utf8')
    // DSH's loader deletes style[data-plugin="dsh-genui"] on a live plugin
    // reload while the custom element survives; the runtime records its CSS in
    // this global registry so ensureGenuiRuntimeStyles() can re-add it.
    expect(src).toContain('__dshGenuiCss')
  })
})

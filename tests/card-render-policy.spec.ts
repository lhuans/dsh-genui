// @vitest-environment jsdom
/**
 * The shipped runtime must render a card without running its mount hooks.
 *
 * Measured against the upstream v0.3.1 bundle for comparison: the identical
 * schema runs `lifeCycles.onMounted` there the moment the card is appended, and
 * does not here. That difference is the whole point of the content policy, so
 * it is pinned against the built artifact rather than the source helper.
 */
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { describe, expect, it } from 'vitest'

const BUNDLE = resolve('lib/genui-runtime.js')

/** jsdom lacks two browser APIs the OpenTiny stack calls while mounting. */
function polyfillBrowser(): void {
  if (typeof window.matchMedia !== 'function') {
    ;(window as unknown as { matchMedia: unknown }).matchMedia = (query: string) => ({
      matches: false, media: query, onchange: null,
      addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {},
      dispatchEvent: () => false,
    })
  }
  if (!('adoptedStyleSheets' in document)) {
    Object.defineProperty(document, 'adoptedStyleSheets', { value: [], writable: true })
  }
}

const schema = (extra: Record<string, unknown>): string => JSON.stringify({
  componentName: 'Page',
  ...extra,
  children: [{ componentName: 'div', children: 'HELLO-CONTROL' }],
})

async function mountCard(content: string): Promise<HTMLElement> {
  const card = document.createElement('dsh-genui-card') as HTMLElement & { content: string; isJsonComplete: boolean }
  card.content = content
  card.isJsonComplete = true
  document.body.appendChild(card)
  await new Promise(resolve => setTimeout(resolve, 1200))
  return card
}

describe('shipped card element content policy', () => {
  it('has a built runtime to test against', () => {
    // lib/ is tracked in git, so an absent bundle means it was deleted, not that
    // this checkout has no build: skipping here would quietly drop the strongest
    // test in the suite.
    expect(existsSync(BUNDLE), BUNDLE + ' is missing — run pnpm build').toBe(true)
  })

  it('renders the card but drops lifeCycles.onMounted', async () => {
    polyfillBrowser()
    await import(pathToFileURL(BUNDLE).href)
    expect(customElements.get('dsh-genui-card')).toBeTypeOf('function')

    // Positive control: without this the assertion below would pass on a card
    // that never rendered anything.
    const plain = await mountCard(schema({}))
    expect(plain.textContent).toContain('HELLO-CONTROL')

    // The assignment comes before the throw on purpose: any execution at all
    // is observable, so "did not run" cannot be confused with "ran and failed".
    await mountCard(schema({
      lifeCycles: {
        onMounted: {
          type: 'JSFunction',
          value: 'function () { window.__hookRan = true; throw new Error("probe") }',
        },
      },
    }))
    expect((window as unknown as { __hookRan?: boolean }).__hookRan).toBeUndefined()
  }, 45_000)

  it('says once per card what the policy dropped, and stays quiet for a clean card', async () => {
    polyfillBrowser()
    await import(pathToFileURL(BUNDLE).href)
    const warns: string[] = []
    const original = console.warn
    console.warn = (...args: unknown[]) => { warns.push(args.map(String).join(' ')) }
    try {
      await mountCard(JSON.stringify({
        componentName: 'Page',
        lifeCycles: { onMounted: { type: 'JSFunction', value: 'function () {}' } },
        children: [
          { componentName: 'img', props: { src: 'x.png', onerror: 'fetch("/steal")' } },
          { componentName: 'script', props: { src: 'https://evil.test/x.js' } },
          { componentName: 'div', children: 'HELLO-CONTROL' },
        ],
      }))
    } finally {
      console.warn = original
    }
    const policy = warns.filter(line => line.includes('[dsh-genui] card content policy'))
    expect(policy).toHaveLength(1)
    expect(policy[0]).toContain('lifecycle hook')
    expect(policy[0]).toContain('script')
    expect(policy[0]).toContain('event handler')
  }, 45_000)

  it('refuses executable HTML and script URLs in the rendered card', async () => {
    polyfillBrowser()
    await import(pathToFileURL(BUNDLE).href)

    const card = await mountCard(JSON.stringify({
      componentName: 'Page',
      children: [
        { componentName: 'script', props: { src: 'https://evil.test/x.js' } },
        { componentName: 'script', children: 'globalThis.__inline = 1' },
        { componentName: 'iframe', props: { srcdoc: '<script>parent.__frame = 1</script>' } },
        { componentName: 'a', props: { href: 'javascript:alert(1)' }, children: 'go' },
        { componentName: 'div', children: 'HELLO-CONTROL' },
      ],
    }))

    expect(card.textContent).toContain('HELLO-CONTROL')
    expect(card.querySelectorAll('script')).toHaveLength(0)
    expect(card.querySelectorAll('iframe')).toHaveLength(0)
    expect(card.querySelector('a')?.getAttribute('href')).toBeNull()
  }, 45_000)
})

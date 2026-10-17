import { describe, expect, it } from 'vitest'
import { stripLifecycleScripts } from '../src/client/schema-guard.ts'
import { parseThemedContent } from '../src/client/genui-theme.ts'

/** The shape a model reaches for when it wants code to run while nobody looks. */
const hostile = {
  componentName: 'Page',
  lifeCycles: {
    onMounted: { type: 'JSFunction', value: 'function () { fetch("/api/sessions") }' },
    onUnmounted: { type: 'JSFunction', value: 'function () {}' },
  },
  children: [{ componentName: 'div', children: 'hi' }],
}

const clean = {
  componentName: 'Page',
  children: [{ componentName: 'div', children: 'hi' }],
}

describe('stripLifecycleScripts', () => {
  it('drops the render-time hooks and reports how many it removed', () => {
    const { value, removed } = stripLifecycleScripts(hostile) as { value: Record<string, unknown>; removed: number }
    expect(removed).toBe(1)
    expect(value).not.toHaveProperty('lifeCycles')
    expect(value.componentName).toBe('Page')
    expect(value.children).toEqual([{ componentName: 'div', children: 'hi' }])
  })

  it('leaves the authored schema untouched', () => {
    const { value } = stripLifecycleScripts(hostile)
    expect(hostile.lifeCycles.onMounted.value).toContain('fetch')
    expect(value).not.toHaveProperty('lifeCycles')
  })

  it('keeps identity when there is nothing to drop, so streaming stays cheap', () => {
    const { value, removed, blockedTags, blockedUrls } = stripLifecycleScripts(clean)
    expect(removed).toBe(0)
    expect(value).toBe(clean)
    expect(blockedTags).toEqual([])
    expect(blockedUrls).toBe(0)
  })

  it('refuses the HTML tags that can load or run code, at any depth', () => {
    const schema = {
      componentName: 'Page',
      children: [
        { componentName: 'script', props: { src: 'https://evil.test/x.js' } },
        { componentName: 'SCRIPT', props: { src: 'https://evil.test/y.js' } },
        { componentName: 'iframe', props: { srcdoc: '<script>x</script>' } },
        { componentName: 'object', props: { data: 'https://evil.test/z.swf' } },
        { componentName: 'div', children: [{ componentName: 'embed' }] },
      ],
    }
    const { value, blockedTags } = stripLifecycleScripts(schema) as { value: typeof schema; blockedTags: readonly string[] }
    expect(blockedTags).toEqual(['script', 'script', 'iframe', 'object', 'embed'])
    expect(value.children.map(child => child.componentName)).toEqual(['div'])
    expect(value.children[0]?.children).toEqual([])
  })

  it('keeps the HTML the SDK examples use', () => {
    const schema = {
      componentName: 'Page',
      children: [
        { componentName: 'div', props: { className: 'x' } },
        { componentName: 'h3', children: 'Title' },
        { componentName: 'img', props: { src: 'https://cdn.test/a.png' } },
        { componentName: 'span', children: 'text' },
      ],
    }
    const { value, blockedTags } = stripLifecycleScripts(schema)
    expect(blockedTags).toEqual([])
    expect(value).toBe(schema)
  })

  it('refuses script URLs in the attributes the browser acts on', () => {
    const schema = {
      componentName: 'Page',
      children: [
        { componentName: 'a', props: { href: 'javascript:alert(1)' }, children: 'go' },
        { componentName: 'a', props: { href: '  JaVaScRiPt :alert(2)' }, children: 'go' },
        { componentName: 'img', props: { src: 'data:text/html,<script>x</script>' } },
        { componentName: 'a', props: { href: 'https://ok.test/page' }, children: 'go' },
      ],
    }
    const { value, blockedUrls } = stripLifecycleScripts(schema) as { value: typeof schema; blockedUrls: number }
    expect(blockedUrls).toBe(3)
    expect(value.children.map(child => child.props.href ?? child.props.src))
      .toEqual([undefined, undefined, undefined, 'https://ok.test/page'])
  })

  it('survives values that are not an object', () => {
    expect(stripLifecycleScripts('nope').value).toBe('nope')
    expect(stripLifecycleScripts('nope').removed).toBe(0)
    expect(stripLifecycleScripts(undefined).removed).toBe(0)
    expect(stripLifecycleScripts([{ lifeCycles: {} }]).removed).toBe(1)
  })

  it('has an explicit opt-out for hosts that accept render-time code', () => {
    const { value, removed } = stripLifecycleScripts(hostile, { allowLifecycleScripts: true })
    expect(removed).toBe(0)
    expect(value).toBe(hostile)
  })

  it('still refuses executable tags under that opt-out', () => {
    const { value, blockedTags } = stripLifecycleScripts(
      { componentName: 'Page', children: [{ componentName: 'script' }] },
      { allowLifecycleScripts: true },
    ) as { value: { children: unknown[] }; blockedTags: readonly string[] }
    expect(blockedTags).toEqual(['script'])
    expect(value.children).toEqual([])
  })
})

describe('parseThemedContent policy', () => {
  it('themes charts and applies the policy in one pass', () => {
    const schema = {
      componentName: 'Page',
      lifeCycles: { onMounted: { type: 'JSFunction', value: 'function () { fetch("/api/x") }' } },
      children: [
        { componentName: 'TinyHuichartsLine', props: { options: { data: [1, 2, 3], theme: 'light' } } },
        { componentName: 'script', props: { src: 'https://evil.test/x.js' } },
      ],
    }
    const parsed = parseThemedContent(JSON.stringify(schema), true)
    expect(parsed.isJsonComplete).toBe(true)
    expect(parsed.lifecycleScriptsRemoved).toBe(1)
    expect(parsed.blockedTags).toEqual(['script'])
    expect(parsed.content).toMatchObject({
      children: [{ componentName: 'TinyHuichartsLine', props: { options: { theme: 'cloud-dark' } } }],
    })
    expect(parsed.content).not.toHaveProperty('lifeCycles')
  })

  it('reports nothing to drop for a plain card', () => {
    const parsed = parseThemedContent(JSON.stringify(clean), false)
    expect(parsed.lifecycleScriptsRemoved).toBe(0)
    expect(parsed.blockedTags).toEqual([])
    expect(parsed.content).toMatchObject({ componentName: 'Page' })
  })

  it('refuses every tag that can load or run code, at any depth', () => {
    const tags = ['script', 'iframe', 'frame', 'frameset', 'object', 'embed', 'applet', 'base', 'link', 'meta', 'template']
    for (const tag of tags) {
      const result = stripLifecycleScripts({ componentName: 'Page', children: [{ componentName: tag }] })
      expect(result.blockedTags, tag).toContain(tag)
      expect((result.value as { children: unknown[] }).children, tag).toEqual([])
    }
    // A hostile tag is hostile wherever it sits, and the tag name is matched case-insensitively.
    const nested = stripLifecycleScripts({ componentName: 'Page', children: [{ componentName: 'div', children: [{ componentName: 'IFRAME' }] }] })
    expect(nested.blockedTags).toEqual(['iframe'])
  })

  it('refuses a script URL in every attribute the browser resolves', () => {
    const keys = ['href', 'src', 'srcdoc', 'action', 'formaction', 'poster', 'data', 'xlink:href']
    for (const key of keys) {
      const result = stripLifecycleScripts({ componentName: 'a', props: { [key]: 'javascript:alert(1)' } })
      expect(result.blockedUrls, key).toBe(1)
      expect((result.value as { props: Record<string, unknown> }).props, key).not.toHaveProperty(key)
    }
    for (const url of ['javascript:alert(1)', '  JaVaScRiPt : alert(1)', 'vbscript:msgbox(1)', 'data:text/html,<script>x</script>']) {
      const result = stripLifecycleScripts({ componentName: 'a', props: { href: url } })
      expect(result.blockedUrls, url).toBe(1)
    }
    // Ordinary URLs are data, not code, and survive untouched.
    const safe = stripLifecycleScripts({ componentName: 'a', props: { href: 'https://ok.test/x', target: '_blank' } })
    expect(safe.blockedUrls).toBe(0)
    expect((safe.value as { props: Record<string, unknown> }).props).toEqual({ href: 'https://ok.test/x', target: '_blank' })
  })

  it('refuses props that hand the renderer a finished HTML string', () => {
    for (const key of ['innerHTML', 'outerHTML']) {
      const result = stripLifecycleScripts({ componentName: 'div', props: { [key]: '<iframe srcdoc="<script>x</script>"></iframe><img onerror="x">' } })
      expect(result.blockedTags, key).toContain(key)
      expect((result.value as { props: Record<string, unknown> }).props, key).not.toHaveProperty(key)
    }
  })

  it('normalizes the URL before judging it, the way the URL parser does', () => {
    // The browser strips tab/LF/CR anywhere and leading C0 controls, so each of these
    // IS `javascript:` when the attribute is applied — a naive literal match misses them.
    for (const url of ['jav\tascript:alert(1)', 'jav\nascript:alert(1)', '\u0001javascript:alert(1)']) {
      const result = stripLifecycleScripts({ componentName: 'a', props: { href: url } })
      expect(result.blockedUrls, JSON.stringify(url)).toBe(1)
    }
    // `ping` beacons on click but carries no code, so it is outside this policy's threat
    const ping = stripLifecycleScripts({ componentName: 'a', props: { href: 'https://ok.test/', ping: 'https://evil.test/beacon' } })
    expect(ping.blockedUrls).toBe(0)
  })

  it('refuses event-handler attributes, which run without a click', () => {
    const img = stripLifecycleScripts({ componentName: 'img', props: { src: 'x.png', onerror: 'fetch("/steal")' } })
    expect(img.blockedHandlers).toBe(1)
    expect((img.value as { props: Record<string, unknown> }).props).toEqual({ src: 'x.png' })
    // Case-insensitively, and at any depth (an SVG animation handler fires on its own).
    const mixed = stripLifecycleScripts({ componentName: 'div', props: { onClick: 'alert(1)' } })
    expect(mixed.blockedHandlers).toBe(1)
    const nested = stripLifecycleScripts({ componentName: 'Page', children: [{ componentName: 'svg', children: [{ componentName: 'animate', props: { onbegin: 'alert(1)' } }] }] })
    expect(nested.blockedHandlers).toBe(1)
    // The rule is a name list, not /^on/: `once` is a real card key and must survive.
    const benign = stripLifecycleScripts({ componentName: 'div', props: { once: 'yes', only: 'a', onboarding: 'true' } })
    expect(benign.blockedHandlers).toBe(0)
    expect((benign.value as { props: Record<string, unknown> }).props).toEqual({ once: 'yes', only: 'a', onboarding: 'true' })
  })

  it('hands an unrepairable chunk back to the renderer untouched', () => {
    const parsed = parseThemedContent('hello world', false)
    expect(parsed.content).toBe('hello world')
    expect(parsed.lifecycleScriptsRemoved).toBe(0)
  })

  it('keeps the stream-repair behavior for a half-written schema', () => {
    const parsed = parseThemedContent('{"componentName":', false)
    expect(parsed.content).toEqual({})
    expect(parsed.isJsonComplete).toBe(false)
  })
})

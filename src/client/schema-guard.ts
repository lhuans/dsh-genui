/**
 * Content policy for model-authored card schemas.
 *
 * A schema is code, and the renderer treats it that way: it compiles every
 * `JSExpression` / `JSFunction` value through the `customSettings.Function`
 * seam, and when a `componentName` misses the material set it falls back to
 * creating a raw HTML tag. Both are measured, not assumed — SECURITY.md carries
 * the probe table.
 *
 * This module narrows the two paths that need no interaction at all:
 *   - `lifeCycles` hooks, which the renderer awaits while mounting;
 *   - the HTML fallback for tags that can fetch or run code, plus
 *     `javascript:`-style URLs in attributes the browser acts on.
 *
 * It does **not** make a card inert. Property, state, refs, methods, condition
 * and loop expressions still evaluate during mount, and benign HTML tags still
 * render. Closing that needs an expression allowlist or a sandboxed frame; both
 * change what cards can do, so neither is decided here (see SECURITY.md).
 */

/** Schema key holding the render-time hooks. */
const LIFECYCLE_KEY = 'lifeCycles'

/**
 * Tags refused when the renderer falls back to raw HTML.
 * Every one of these can load a document or run script; the benign tags the
 * SDK's own examples use (`div`, `span`, headings, tables) are untouched.
 */
const FORBIDDEN_TAGS = new Set([
  'script', 'iframe', 'frame', 'frameset', 'object', 'embed', 'applet',
    'base', 'link', 'meta', 'template', 'style',
  
])

/** Attributes whose string value the browser resolves as a URL. */
const URL_KEYS = new Set(['href', 'src', 'srcdoc', 'action', 'formaction', 'poster', 'data', 'xlink:href'])

/**
 * Props that hand the renderer a finished HTML string. The guard walks the *schema*,
 * so a `<script>` hidden inside such a string is invisible to every rule below —
 * measured in jsdom: `{ props: { innerHTML: '<iframe srcdoc=…><img onerror=…>' } }`
 * reached the DOM intact on the unpatched branch. They are refused outright; a card
 * that genuinely needs composed HTML has to go through the host, not the model.
 */
const HTML_PROPS = new Set(['innerhtml', 'outerhtml'])

/**
 * What the URL parser will see. It ignores ASCII tab/LF/CR wherever they appear and
 * strips leading C0 controls, so `jav\tascript:` IS `javascript:` to the browser while
 * the literal string passes a naive regex (measured in jsdom: the attribute survived,
 * the resolved protocol was `javascript:`).
 */
function isScriptUrl(value: string): boolean {
  const seen = value.replace(/[\t\n\r]/g, '').replace(/^[\u0000-\u0020]+/, '')
  return SCRIPT_URL.test(seen)
}

/**
 * Attributes that are code, not data: the HTML/SVG event-handler content attributes.
 *
 * `onerror` on an `<img>` fires with no user interaction, and `setAttribute` compiles the
 * string, so a schema carrying one runs model code at render time — the same threat as a
 * `<script>` element, which is why the policy refuses it instead of relying on the tag.
 *
 * Matched against this list, not against `/^on[a-z]/i`: a pattern would also eat benign
 * keys such as `once` or `only` that a card may legitimately carry.
 */
const HANDLER_KEYS = new Set([
  'onabort', 'onactivate', 'onauxclick', 'onbeforeinput', 'onbeforematch', 'onbeforetoggle',
  'onbeforeunload', 'onbegin', 'onblur', 'onbounce', 'oncancel', 'oncanplay', 'oncanplaythrough',
  'onchange', 'onclick', 'onclose', 'oncontextlost', 'oncontextmenu', 'oncontextrestored',
  'oncopy', 'oncuechange', 'oncut', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter',
  'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'ondurationchange', 'onemptied',
  'onend', 'onended', 'onerror', 'onfinish', 'onfocus', 'onfocusin', 'onfocusout', 'onformdata',
  'onfullscreenchange', 'onfullscreenerror', 'onhashchange', 'oninput', 'oninvalid', 'onkeydown',
  'onkeypress', 'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata', 'onloadstart',
  'onmessage', 'onmessageerror', 'onmousedown', 'onmouseenter', 'onmouseleave', 'onmousemove',
  'onmouseout', 'onmouseover', 'onmouseup', 'onoffline', 'ononline', 'onpagehide', 'onpagereveal',
  'onpageshow', 'onpageswap', 'onpaste', 'onpause', 'onplay', 'onplaying', 'onpopstate',
  'onprogress', 'onratechange', 'onrejectionhandled', 'onrepeat', 'onreset', 'onresize',
  'onrejectionhandled', 'onscroll', 'onscrollend', 'onsecuritypolicyviolation', 'onseeked',
  'onseeking', 'onselect', 'onslotchange', 'onstalled', 'onstart', 'onstorage', 'onsubmit',
  'onsuspend', 'ontimeupdate', 'ontoggle', 'onunhandledrejection', 'onunload', 'onvolumechange',
  'onwaiting', 'onwheel', 'onzoom',
])

/** URL schemes that run code or load a document of the attacker's choosing. */
const SCRIPT_URL = /^\s*(?:(?:javascript|vbscript)\s*:|data\s*:\s*text\/html)/i

/** Sentinel telling a parent collection to drop this node / key. */
const DROPPED = Symbol('dsh-genui-dropped')

/** Options for {@link stripLifecycleScripts}. */
export interface SchemaGuardOptions {
  /**
   * Keep `lifeCycles` as authored.
   * Only for hosts that deliberately accept model code running at render time;
   * the DSH plugin never passes it.
   */
  readonly allowLifecycleScripts?: boolean | undefined
}

/** The policed schema plus an account of what the policy removed. */
export interface SchemaGuardResult {
  /** Schema safe to hand to the renderer. */
  readonly value: unknown
  /** How many `lifeCycles` blocks were dropped. */
  readonly removed: number
  /** Tag names refused because they can load or run code. */
  readonly blockedTags: readonly string[]
  /** How many URL-valued attributes were refused. */
  readonly blockedUrls: number
}

interface Counters {
  removed: number
  blockedTags: string[]
  blockedUrls: number
  /** Event-handler attributes refused because they run code. */
  readonly blockedHandlers: number
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

/** Copy only the nodes that change, so untouched schema keeps its identity. */
function scrub(node: unknown, counters: Counters, options: SchemaGuardOptions): unknown {
  if (Array.isArray(node)) {
    let changed = false
    const mapped: unknown[] = []
    for (const item of node) {
      const next = scrub(item, counters, options)
      if (next !== item) changed = true
      if (next === DROPPED) {
        changed = true
        continue
      }
      mapped.push(next)
    }
    return changed ? mapped : node
  }
  if (!isPlainObject(node)) return node

  const componentName = typeof node.componentName === 'string'
    ? node.componentName.trim().toLowerCase()
    : ''
  if (componentName !== '' && FORBIDDEN_TAGS.has(componentName)) {
    counters.blockedTags.push(componentName)
    return DROPPED
  }

  let changed = false
  const next: Record<string, unknown> = {}
  for (const [key, child] of Object.entries(node)) {
    if (key === LIFECYCLE_KEY && options.allowLifecycleScripts !== true) {
      counters.removed += 1
      changed = true
      continue
    }
    if (HANDLER_KEYS.has(key.toLowerCase())) {
      counters.blockedHandlers += 1
      changed = true
      continue
    }
    if (HTML_PROPS.has(key.toLowerCase())) {
      counters.blockedTags.push(key)
      changed = true
      continue
    }
    if (URL_KEYS.has(key.toLowerCase()) && typeof child === 'string' && isScriptUrl(child)) {
      counters.blockedUrls += 1
      changed = true
      continue
    }
    const mapped = scrub(child, counters, options)
    if (mapped !== child) changed = true
    if (mapped === DROPPED) {
      changed = true
      continue
    }
    next[key] = mapped
  }
  return changed ? next : node
}

/**
 * Apply the card content policy to a parsed schema.
 * Removal happens at any depth: a hostile tag is a hostile tag wherever it sits, and
 * nested `lifeCycles` are dropped too. (Measured on the upstream v0.3.1 bundle: only a
 * ROOT `lifeCycles` actually ran there — dropping nested ones is defence in depth, not a
 * fix for an observed exploit.)
 * @param value - parsed schema, or any value inside one.
 * @param options - policy overrides.
 * @returns The policed value and an account of what was removed.
 */
export function stripLifecycleScripts(
  value: unknown,
  options: SchemaGuardOptions = {},
): SchemaGuardResult {
  const counters: Counters = { removed: 0, blockedTags: [], blockedUrls: 0, blockedHandlers: 0 }
  if (options.allowLifecycleScripts === true && value === undefined) {
    return { value, removed: 0, blockedTags: [], blockedUrls: 0, blockedHandlers: 0 }
  }
  const guarded = options.allowLifecycleScripts === true
    ? scrub(value, counters, { allowLifecycleScripts: true })
    : scrub(value, counters, {})
  return {
    value: guarded === DROPPED ? {} : guarded,
    removed: counters.removed,
    blockedTags: counters.blockedTags,
    blockedUrls: counters.blockedUrls,
    blockedHandlers: counters.blockedHandlers,
  }
}

import type { IncomingMessage, ServerResponse } from 'node:http'

/** The minimal system-prompt registry face used by the toggle. */
export interface GenuiSystemPrompt {
  section(section: { name: string; order: number; text: string }): () => void
}

/** Registers and disposes one prompt section without leaking it on unload. */
export interface GenuiPromptControl {
  /** Whether the section is currently in the prompt registry. */
  isEnabled(): boolean
  /** Set the desired state and return the resulting state. */
  set(enabled: boolean): boolean
}

/** The persisted slice of prompt-toggle state in DSH settings. */
export interface GenuiPromptSettings {
  /** Whether the authoring prompt section is active. */
  enabled: boolean
}

/** One settings form row, as returned by DSH 0.2 `settings.describe()`. */
export interface PromptSettingsDescriptor {
  ns: string
  value: unknown
  schema: unknown
}

/**
 * Host settings seam. DSH 0.1 exposes `register`; DSH 0.2 exposes `describe` / `update`
 * and only accepts fields marked volatile on the plugin Config.
 */
export interface PromptSettingsHost {
  register?: (namespace: string, schema: unknown) => GenuiPromptSettingsScope
  describe?: () => readonly PromptSettingsDescriptor[]
  update?: (ns: string, patch: { promptEnabled: boolean }) => Promise<void>
}

const PROMPT_ENTRY_PREFERENCE = ['genui', 'dsh-genui']

/**
 * Pick the profile entry that owns this plugin's live `promptEnabled` field.
 * The bundled patch uses `genui`; a hand-written entry may use the package name.
 * @param descriptors - rows from `settings.describe()`.
 * @returns The entry id to pass to `settings.update`, when one row is ours.
 */
export function findPromptSettingsEntry(descriptors: readonly PromptSettingsDescriptor[]): string | undefined {
  const matches = descriptors.filter(mentionsPromptEnabled)
  for (const id of PROMPT_ENTRY_PREFERENCE) {
    if (matches.some(descriptor => descriptor.ns === id)) return id
  }
  return matches.length === 1 ? matches[0]?.ns : undefined
}

function mentionsPromptEnabled(descriptor: PromptSettingsDescriptor): boolean {
  const value = descriptor.value
  if (value !== null && typeof value === 'object' && 'promptEnabled' in value) return true
  return JSON.stringify(descriptor.schema ?? null).includes('"promptEnabled"')
}

/**
 * Open the settings scope for the prompt toggle.
 * @param settings - host settings service.
 * @param options.configEnabled - resolved Config value, used when the host has no separate register namespace.
 * @param options.schema - legacy `settings.register` schema.
 * @returns A get/update scope, or undefined when this host cannot persist the toggle.
 */
export function openPromptSettings(
  settings: PromptSettingsHost,
  options: { configEnabled: boolean; schema: unknown },
): GenuiPromptSettingsScope | undefined {
  if (typeof settings.register === 'function') {
    return settings.register('dsh-genui', options.schema)
  }
  if (typeof settings.update !== 'function') return undefined
  const update = settings.update.bind(settings)
  return {
    get: () => ({ enabled: options.configEnabled }),
    update(patch) {
      const described = typeof settings.describe === 'function' ? settings.describe() : []
      const ns = findPromptSettingsEntry(described) ?? 'genui'
      return update(ns, { promptEnabled: patch.enabled })
    },
  }
}

/** The owner-facing settings scope used by the toggle. */
export interface GenuiPromptSettingsScope {
  get(): GenuiPromptSettings
  update(patch: GenuiPromptSettings): Promise<void>
}

/**
 * Mirror prompt-toggle changes into DSH settings without delaying the UI.
 * @param control - the in-memory prompt section control.
 * @param settings - the registered settings scope.
 * @param initialEnabled - fallback when settings contains no stored value.
 * @param onError - called when persisting a user choice fails.
 */
export function createPersistedPromptControl(
  control: GenuiPromptControl,
  settings: GenuiPromptSettingsScope,
  initialEnabled: boolean,
  onError?: (error: unknown) => void,
  onPersist?: (enabled: boolean) => void,
): GenuiPromptControl {
  const stored = settings.get().enabled
  control.set(typeof stored === 'boolean' ? stored : initialEnabled)
  return {
    isEnabled: control.isEnabled,
    set(enabled) {
      const next = control.set(enabled)
      onPersist?.(next)
      void settings.update({ enabled: next }).catch(error => onError?.(error))
      return next
    },
  }
}

/**
 * Create the host-side on/off state for the GenUI authoring section.
 * @param section - stable prompt section values.
 * @param systemPrompt - host system-prompt registry.
 */
export function createGenuiPromptControl(
  section: { name: string; order: number; text: string },
  systemPrompt: GenuiSystemPrompt,
): GenuiPromptControl {
  let disposer: (() => void) | undefined
  return {
    isEnabled: () => disposer !== undefined,
    set(enabled) {
      if (enabled === (disposer !== undefined)) return enabled
      if (enabled) {
        disposer = systemPrompt.section(section)
      } else {
        disposer?.()
        disposer = undefined
      }
      return enabled
    },
  }
}

/**
 * Authorities this control is served on: loopback addresses and `localhost`
 * spellings. The composer talks to the plugin's own local server, so a Host
 * naming anything else is not this page — it is a rebound or remote name, and a
 * rebinding page's Host comparison passes by construction.
 */
const LOOPBACK_AUTHORITY = /^(?:localhost|\[::1\]|127(?:\.\d{1,3}){3}|\[::ffff:127(?:\.\d{1,3}){3}\])(?::\d+)?$/i

function isLoopbackAuthority(host: string): boolean {
  return LOOPBACK_AUTHORITY.test(host.trim())
}
/**
 * Whether a request came from the DSH page itself.
 *
 * The route carries no CSRF token, so it leans on the browser's own request
 * metadata instead: a cross-site `fetch` is labelled `Sec-Fetch-Site:
 * cross-site` and carries a foreign `Origin`, while the composer button talks
 * to its own host. Clients that send neither header (curl, a maintainer script)
 * keep working — they already run with the user's authority on the host.
 * @param req - incoming request; only the headers are read.
 * @returns true when the request may change toggle state.
 */
export function isTrustedPromptRequest(req: Pick<IncomingMessage, 'headers'>): boolean {
  const headers = req.headers ?? {}
  const site = headers['sec-fetch-site']
  if (typeof site === 'string' && site !== 'same-origin' && site !== 'none') return false

  // A named authority that is not this server's loopback address can never be this
  // server speaking to its own page: a rebound hostname resolves to the loopback
  // address while naming itself, so its Origin/Host comparison passes by construction
  // (measured before this rule existed). An unknowable host keeps the old behaviour.
  const host = headers.host
  if (typeof host === 'string' && host.length > 0 && !isLoopbackAuthority(host)) return false

  const origin = headers.origin
  // A same-origin GET carries no Origin; a browser POST always does. Header-less
  // clients (curl, maintainer scripts) keep working: they carry no page, so the
  // rebinding trick is not available to them.
  if (typeof origin !== 'string' || origin.length === 0) return true
  try {
    // Opaque origins ('null' from a sandboxed frame or a data: URL) do not parse.
    return new URL(origin).host === host
  } catch {
    return false
  }
}

/**
 * Handle GET (read state) and POST `{ enabled: boolean }` (set state).
 * This is deliberately tiny and same-origin only; the button owns the UI state.
 * @param control - host prompt toggle.
 */
export function createGenuiPromptControlHandler(
  control: Pick<GenuiPromptControl, 'isEnabled' | 'set'> & { persisted?: () => boolean },
): (req: IncomingMessage, res: ServerResponse) => Promise<void> {
  return async (req, res) => {
    // Reads are covered too: a rebound hostname could otherwise read the state
    // it cannot write (the composer's own GET carries no Origin and passes).
    if (!isTrustedPromptRequest(req)) {
      respond(res, 403, { error: 'cross-origin' })
      return
    }
    if (req.method === 'GET') {
      respond(res, 200, {
        enabled: control.isEnabled(),
        ...(control.persisted === undefined ? {} : { persisted: control.persisted() }),
      })
      return
    }
    if (req.method !== 'POST') {
      respond(res, 405, { error: 'method-not-allowed' })
      return
    }
    try {
      const payload = await readJsonObject(req)
      if (typeof payload.enabled !== 'boolean') {
        respond(res, 400, { error: 'enabled-must-be-boolean' })
        return
      }
      respond(res, 200, { enabled: control.set(payload.enabled) })
    } catch {
      respond(res, 400, { error: 'invalid-json' })
    }
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

async function readJsonObject(req: IncomingMessage): Promise<Record<string, unknown>> {
  const chunks: Buffer[] = []
  let total = 0
  for await (const chunk of req) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk)
    total += buffer.length
    if (total > 256) throw new Error('body-too-large')
    chunks.push(buffer)
  }
  if (chunks.length === 0) return {}
  const parsed: unknown = JSON.parse(Buffer.concat(chunks).toString('utf8'))
  if (!isRecord(parsed)) throw new Error('body-must-be-object')
  return parsed
}

function respond(
  res: ServerResponse,
  status: number,
  body: Record<string, unknown>,
): void {
  res.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
  })
  res.end(JSON.stringify(body))
}

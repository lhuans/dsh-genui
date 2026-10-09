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
 * Handle GET (read state) and POST `{ enabled: boolean }` (set state).
 * This is deliberately tiny and same-origin only; the button owns the UI state.
 * @param control - host prompt toggle.
 */
export function createGenuiPromptControlHandler(
  control: Pick<GenuiPromptControl, 'isEnabled' | 'set'> & { persisted?: () => boolean },
): (req: IncomingMessage, res: ServerResponse) => Promise<void> {
  return async (req, res) => {
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
  if (parsed === null || typeof parsed !== 'object' || Array.isArray(parsed)) {
    throw new Error('body-must-be-object')
  }
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

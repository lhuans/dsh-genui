import type { IncomingMessage, ServerResponse } from 'node:http'
import {
  isGenuiPromptMode,
  resolvePromptMode,
  type GenuiActivePromptMode,
  type GenuiPromptMode,
} from './prompt-mode.ts'

/** The minimal system-prompt registry face used by the composer control. */
export interface GenuiSystemPrompt {
  section(section: { name: string; order: number; text: string }): () => void
}

/** Registers and disposes one prompt section without leaking it on unload. */
export interface GenuiPromptControl {
  /** Active tier. `off` means the section is not in the registry. */
  mode(): GenuiPromptMode
  /** Whether a prompt section is currently registered. */
  isEnabled(): boolean
  /** Set the desired tier and return the resulting tier. */
  set(mode: GenuiPromptMode): GenuiPromptMode
}

/** The persisted slice of prompt-mode state in DSH settings. */
export interface GenuiPromptSettings {
  /** Selected tier, once the dropdown has been used or a new config is stored. */
  mode?: GenuiPromptMode
  /**
   * Legacy on/off toggle. `false` means off when `mode` is absent.
   * New writes set this to `mode !== 'off'` so older hosts still find the field.
   */
  enabled?: boolean
  /** Whether the composer sparkle control is registered. Defaults to true. */
  showPromptToggle?: boolean
}

/** Live composer + settings values exposed by the prompt control HTTP API. */
export interface GenuiPromptUiState {
  mode: GenuiPromptMode
  showPromptToggle: boolean
}

/** One settings form row, as returned by DSH 0.2 `settings.describe()`. */
export interface PromptSettingsDescriptor {
  ns: string
  value: unknown
  schema: unknown
}

/** Fields written into the plugin Config on DSH 0.2. */
export interface PromptConfigPatch {
  promptMode: GenuiPromptMode
  promptEnabled: boolean
  showPromptToggle: boolean
}

/**
 * Host settings seam. DSH 0.1 exposes `register`; DSH 0.2 exposes `describe` / `update`
 * and only accepts fields marked volatile on the plugin Config.
 */
export interface PromptSettingsHost {
  register?: (namespace: string, schema: unknown) => GenuiPromptSettingsScope
  describe?: () => readonly PromptSettingsDescriptor[]
  update?: (ns: string, patch: PromptConfigPatch) => Promise<void>
}

const PROMPT_ENTRY_PREFERENCE = ['genui', 'dsh-genui']

/**
 * Pick the profile entry that owns this plugin's live prompt fields.
 * The bundled patch uses `genui`; a hand-written entry may use the package name.
 * @param descriptors - rows from `settings.describe()`.
 * @returns The entry id to pass to `settings.update`, when one row is ours.
 */
export function findPromptSettingsEntry(descriptors: readonly PromptSettingsDescriptor[]): string | undefined {
  const matches = descriptors.filter(mentionsPromptSettings)
  for (const id of PROMPT_ENTRY_PREFERENCE) {
    if (matches.some(descriptor => descriptor.ns === id)) return id
  }
  return matches.length === 1 ? matches[0]?.ns : undefined
}

function mentionsPromptSettings(descriptor: PromptSettingsDescriptor): boolean {
  const value = descriptor.value
  if (value !== null && typeof value === 'object') {
    if ('promptEnabled' in value || 'promptMode' in value || 'showPromptToggle' in value) return true
  }
  const schema = JSON.stringify(descriptor.schema ?? null)
  return schema.includes('"promptEnabled"')
    || schema.includes('"promptMode"')
    || schema.includes('"showPromptToggle"')
}

/**
 * Open the settings scope for the prompt mode.
 * @param settings - host settings service.
 * @param options.configMode - resolved Config `promptMode`, when one was stored.
 * @param options.configEnabled - resolved Config `promptEnabled`.
 * @param options.configShowPromptToggle - resolved Config `showPromptToggle`.
 * @param options.schema - legacy `settings.register` schema.
 * @returns A get/update scope, or undefined when this host cannot persist the choice.
 */
export function openPromptSettings(
  settings: PromptSettingsHost,
  options: {
    configMode?: unknown
    configEnabled: boolean
    configShowPromptToggle?: unknown
    schema: unknown
  },
): GenuiPromptSettingsScope | undefined {
  if (typeof settings.register === 'function') {
    return settings.register('dsh-genui', options.schema)
  }
  if (typeof settings.update !== 'function') return undefined
  const update = settings.update.bind(settings)
  return {
    get: () => ({
      mode: isGenuiPromptMode(options.configMode) ? options.configMode : undefined,
      enabled: options.configEnabled,
      showPromptToggle: options.configShowPromptToggle !== false,
    }),
    update(patch) {
      const described = typeof settings.describe === 'function' ? settings.describe() : []
      const ns = findPromptSettingsEntry(described) ?? 'genui'
      return update(ns, {
        promptMode: patch.mode,
        promptEnabled: patch.mode !== 'off',
        showPromptToggle: patch.showPromptToggle,
      })
    },
  }
}

/** The owner-facing settings scope used by the composer control. */
export interface GenuiPromptSettingsScope {
  get(): GenuiPromptSettings
  update(patch: {
    mode: GenuiPromptMode
    enabled: boolean
    showPromptToggle: boolean
  }): Promise<void>
}

/**
 * Mirror prompt-mode changes into DSH settings without delaying the UI.
 * @param control - the in-memory prompt section control.
 * @param settings - the registered settings scope.
 * @param initialMode - fallback when settings contains neither a mode nor `enabled: false`.
 * @param onError - called when persisting a user choice fails.
 */
export function createPersistedPromptControl(
  control: GenuiPromptControl,
  settings: GenuiPromptSettingsScope,
  initialMode: GenuiPromptMode,
  options: {
    getShowPromptToggle: () => boolean
    onError?: (error: unknown) => void
    onPersist?: (mode: GenuiPromptMode) => void
  },
): GenuiPromptControl {
  control.set(resolvePromptMode(settings.get(), initialMode))
  return {
    mode: control.mode,
    isEnabled: control.isEnabled,
    set(mode) {
      const next = control.set(mode)
      options.onPersist?.(next)
      void settings.update({
        mode: next,
        enabled: next !== 'off',
        showPromptToggle: options.getShowPromptToggle(),
      }).catch(error => options.onError?.(error))
      return next
    },
  }
}

/**
 * Persist the composer-button visibility alongside the current prompt tier.
 * @param settings - settings scope opened for this plugin entry.
 * @param state - current mode and visibility to write.
 * @param onError - called when the write fails.
 */
export function persistPromptUiState(
  settings: GenuiPromptSettingsScope,
  state: GenuiPromptUiState,
  onError?: (error: unknown) => void,
): void {
  void settings.update({
    mode: state.mode,
    enabled: state.mode !== 'off',
    showPromptToggle: state.showPromptToggle,
  }).catch(error => onError?.(error))
}

/**
 * Create the host-side tier state for the GenUI authoring section.
 * `off` removes the section. Any other tier replaces its text.
 * @param section - stable prompt section name, order, and one text per active tier.
 * @param systemPrompt - host system-prompt registry.
 */
export function createGenuiPromptControl(
  section: {
    name: string
    order: number
    texts: Record<GenuiActivePromptMode, string>
  },
  systemPrompt: GenuiSystemPrompt,
): GenuiPromptControl {
  let disposer: (() => void) | undefined
  let mode: GenuiPromptMode = 'off'
  return {
    mode: () => mode,
    isEnabled: () => mode !== 'off',
    set(next) {
      if (next === mode) return mode
      disposer?.()
      disposer = undefined
      mode = next
      if (next !== 'off') {
        disposer = systemPrompt.section({
          name: section.name,
          order: section.order,
          text: section.texts[next],
        })
      }
      return mode
    },
  }
}

/** Host face for the shared prompt HTTP API (composer + plugin detail). */
export interface GenuiPromptUiControl extends Pick<GenuiPromptControl, 'mode' | 'set'> {
  showPromptToggle(): boolean
  setShowPromptToggle(show: boolean): boolean
  persisted?: () => boolean
}

/**
 * Handle GET (read UI state) and POST `{ mode?, showPromptToggle? }`.
 * This is deliberately tiny and same-origin only; the UIs own optimistic state.
 * @param control - host prompt UI control.
 */
export function createGenuiPromptControlHandler(
  control: GenuiPromptUiControl,
): (req: IncomingMessage, res: ServerResponse) => Promise<void> {
  return async (req, res) => {
    if (req.method === 'GET') {
      respond(res, 200, {
        mode: control.mode(),
        showPromptToggle: control.showPromptToggle(),
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
      const hasMode = isGenuiPromptMode(payload.mode)
      const hasShow = typeof payload.showPromptToggle === 'boolean'
      if (!hasMode && !hasShow) {
        respond(res, 400, { error: 'mode-or-show-required' })
        return
      }
      if (hasMode) control.set(payload.mode)
      if (hasShow) control.setShowPromptToggle(payload.showPromptToggle)
      respond(res, 200, {
        mode: control.mode(),
        showPromptToggle: control.showPromptToggle(),
      })
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
  return parsed as Record<string, unknown>
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

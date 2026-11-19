/**
 * Host half: injects the GenUI card-authoring system-prompt section so the
 * model emits ```schemaJson fences alongside normal markdown.
 */
import type { IncomingMessage, ServerResponse } from 'node:http'
import type { Context } from '@deepseek-ai/cordis'
import z from '@deepseek-ai/schemastery'
import {
  materialsMeta,
  miniMaterialsMeta,
  plusMaterialsMeta,
} from '@opentiny/genui-sdk-materials-vue-opentiny-vue/meta'
import { genPrompt, type IGenPromptCustomConfig, type IMaterialsMeta } from '@opentiny/genui-sdk-core'
import {
  createGenuiPromptControl,
  createGenuiPromptControlHandler,
  createPersistedPromptControl,
  openPromptSettings,
  persistPromptUiState,
  type GenuiPromptControl,
  type GenuiPromptSettings,
  type GenuiPromptUiControl,
  type PromptSettingsHost,
} from './prompt-control.ts'
import {
  DEFAULT_PROMPT_MODE,
  type GenuiPromptMode,
} from './prompt-mode.ts'
import { adjustAuthoringPrompt } from './authoring-prompt.ts'
import { GENUI_PROMPT_CONTROL_URL } from './prompt-control-url.ts'
import {
  GENUI_RUNTIME_MAP_URL,
  GENUI_RUNTIME_URL,
  genuiRuntimeArtifactPaths,
  serveStaticFile,
} from './serve-genui-runtime.ts'

export const name = 'dsh-genui'
export const inject = ['systemPrompt', 'webServer']

declare global {
  namespace Schemastery {
    interface Meta<T = any> {
      /** DSH 0.2 settings writes only fields marked volatile. */
      volatile?: boolean
    }
  }
}

interface WebServer {
  register(route: {
    kind: 'exact' | 'prefix'
    path: string
    handler: (req: IncomingMessage, res: ServerResponse) => void | Promise<void>
  }): () => void
}

/** Tunables for the GenUI prompt section. */
export interface Config {
  /** Registry order among system-prompt sections (higher = later). */
  sectionOrder: number
  /** Stable section name in the prompt registry. */
  sectionName: string
  /**
   * Legacy on/off toggle. Kept so a profile saved before prompt tiers still
   * resolves: `false` means off, otherwise standard when `promptMode` is absent.
   */
  promptEnabled: boolean
  /** Selected authoring tier. Omitted until the user picks one or a new write lands. */
  promptMode?: GenuiPromptMode
  /**
   * When false, the composer sparkle control is not registered.
   * Card rendering and prompt injection keep working from the last chosen tier.
   */
  showPromptToggle: boolean
}

const PromptModeSchema = z.union([
  z.const('off'),
  z.const('mini'),
  z.const('standard'),
  z.const('plus'),
])

export const Config: z<Config> = z.object({
  sectionOrder: z.number().default(80),
  sectionName: z.string().default('genui:cards'),
  promptEnabled: z.boolean().default(true).extra('volatile', true),
  promptMode: PromptModeSchema.extra('volatile', true),
  showPromptToggle: z.boolean().default(true).extra('volatile', true),
})

/** Settings schema for the user's last prompt-mode choice. */
export const PromptSettings: z<GenuiPromptSettings> = z.object({
  enabled: z.boolean().default(true),
  mode: PromptModeSchema,
  showPromptToggle: z.boolean().default(true),
})

const CONTINUE_CHAT = {
  customActions: [
    {
      name: 'continueChat',
      description:
        'Continue the conversation (e.g. form submit). Pass a short message only; the host appends the card state (formData, etc.) automatically.',
      parameters: {
        type: 'object',
        properties: {
          message: {
            type: 'string',
            description: 'Short follow-up text (button label or summary). Do not put form fields here.',
          },
        },
        required: ['message'],
      },
    },
  ],
} satisfies IGenPromptCustomConfig

/**
 * Build one authoring tier.
 * The SDK still marks "only schemaJson" and "always make a card" as highest
 * priority, so each tier is rewritten with the same DSH replacements.
 */
function genuiPromptText(meta: IMaterialsMeta): string {
  return adjustAuthoringPrompt(genPrompt('Vue', meta, CONTINUE_CHAT))
}

/**
 * Register the GenUI runtime and the authoring prompt toggle.
 * @param ctx - Cordis context with `systemPrompt` injected.
 * @param config - validated plugin config.
 */
export function apply(ctx: Context, config: Config): void {
  // systemPrompt is provided by the web/base profile; typed loosely for out-of-tree builds.
  const systemPrompt = (ctx as Context & {
    systemPrompt: { section: (section: { name: string; order: number; text: string }) => () => void }
  }).systemPrompt
  const promptControl = createGenuiPromptControl({
    name: config.sectionName,
    order: config.sectionOrder,
    texts: {
      mini: genuiPromptText(miniMaterialsMeta),
      standard: genuiPromptText(materialsMeta),
      plus: genuiPromptText(plusMaterialsMeta),
    },
  }, systemPrompt)

  // The endpoint must read through this indirection because settings attach
  // asynchronously after the web route has already been registered.
  let currentControl: Pick<GenuiPromptControl, 'mode' | 'set'> = promptControl
  let showPromptToggle = config.showPromptToggle !== false
  let persistUi: ((state: { mode: GenuiPromptMode; showPromptToggle: boolean }) => void) | undefined
  let persistedAttached = false
  const endpointControl: GenuiPromptUiControl = {
    mode: () => currentControl.mode(),
    set: mode => currentControl.set(mode),
    showPromptToggle: () => showPromptToggle,
    setShowPromptToggle(show) {
      if (show === showPromptToggle) return showPromptToggle
      showPromptToggle = show
      persistUi?.({ mode: currentControl.mode(), showPromptToggle })
      return showPromptToggle
    },
    persisted: () => persistedAttached,
  }

  // Authoring starts at standard; disposal keeps a reloaded plugin from leaking the section.
  ctx.effect(() => {
    promptControl.set(DEFAULT_PROMPT_MODE)
    return () => promptControl.set('off')
  }, 'dsh-genui: prompt mode state')

  ctx.inject(['settings'], (settingsCtx) => {
    const settings = (settingsCtx as Context & { settings: PromptSettingsHost }).settings
    const scope = openPromptSettings(settings, {
      configMode: config.promptMode,
      configEnabled: config.promptEnabled !== false,
      configShowPromptToggle: config.showPromptToggle,
      schema: PromptSettings,
    })
    if (scope === undefined) {
      ctx.logger.warn('dsh-genui: prompt mode will not persist')
      return
    }
    ctx.logger.debug('dsh-genui: settings service attached')
    settingsCtx.effect(() => {
      showPromptToggle = scope.get().showPromptToggle !== false
      // Persist explicit choices, but never write the unload-time cleanup state.
      const persistedControl = createPersistedPromptControl(promptControl, scope, DEFAULT_PROMPT_MODE, {
        getShowPromptToggle: () => showPromptToggle,
        onError: error => {
          ctx.logger.warn('dsh-genui: failed to persist prompt state', error)
        },
        onPersist: mode => {
          ctx.logger.debug('dsh-genui: persisting prompt state mode=%s', mode)
        },
      })
      currentControl = persistedControl
      persistUi = state => {
        persistPromptUiState(scope, state, error => {
          ctx.logger.warn('dsh-genui: failed to persist prompt UI state', error)
        })
      }
      persistedAttached = true
      return () => {
        currentControl = promptControl
        persistUi = undefined
        persistedAttached = false
      }
    }, 'dsh-genui: persisted prompt control')
  })

  const artifacts = genuiRuntimeArtifactPaths()
  const webServer = (ctx as Context & { webServer: WebServer }).webServer
  ctx.effect(
    () => webServer.register({
      kind: 'exact',
      path: GENUI_PROMPT_CONTROL_URL,
      handler: createGenuiPromptControlHandler(endpointControl),
    }),
    'dsh-genui: prompt mode endpoint',
  )
  ctx.effect(
    () => webServer.register({
      kind: 'exact',
      path: GENUI_RUNTIME_URL,
      handler: serveStaticFile(artifacts.js, 'text/javascript; charset=utf-8'),
    }),
    'dsh-genui: runtime.js',
  )
  ctx.effect(
    () => webServer.register({
      kind: 'exact',
      path: GENUI_RUNTIME_MAP_URL,
      handler: serveStaticFile(artifacts.map, 'application/json; charset=utf-8'),
    }),
    'dsh-genui: runtime.js.map',
  )
}

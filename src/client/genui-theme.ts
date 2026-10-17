import { RepairJsonState, repairJson } from '@opentiny/genui-sdk-core'
import { stripLifecycleScripts, type SchemaGuardOptions } from './schema-guard.ts'

/** DSH dark-mode marker on `<body>`. */
export const DARK_ATTR = 'data-ds-dark-theme'

/** Whether the DSH host is currently in dark mode. */
export function isDarkMode(): boolean {
  return typeof document !== 'undefined' && document.body?.hasAttribute(DARK_ATTR) === true
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value)
}

/**
 * Copy the schema and set the chart theme on every HuiCharts component.
 * Charts render to canvas and do not inherit the ConfigProvider CSS theme.
 */
export function applyChartTheme(value: unknown, dark: boolean): unknown {
  const themeName = dark ? 'cloud-dark' : 'cloud-light'

  function walk(node: unknown): unknown {
    if (Array.isArray(node)) return node.map(walk)
    if (!isPlainObject(node)) return node

    const next: Record<string, unknown> = { ...node }
    for (const [key, child] of Object.entries(node)) {
      next[key] = walk(child)
    }

    const componentName = typeof next.componentName === 'string' ? next.componentName : ''
    if (componentName.startsWith('TinyHuicharts')) {
      const props = isPlainObject(next.props) ? { ...next.props } : {}
      const options = isPlainObject(props.options) ? { ...props.options } : {}
      options.theme = themeName
      next.props = { ...props, options }
    }

    return next
  }

  return walk(value)
}

/** What the card element hands to the renderer, plus the policy's own report. */
export interface ThemedCardContent {
  readonly content: string | Record<string, unknown>
  readonly isJsonComplete: boolean
  /** Lifecycle hooks dropped by the schema guard (see `schema-guard.ts`). */
  readonly lifecycleScriptsRemoved: number
  /** Executable HTML tags the schema guard refused. */
  readonly blockedTags: readonly string[]
  /** URL attributes refused for carrying a script URL. */
  readonly blockedUrls: number
  /** Event-handler attributes refused because they run code. */
  readonly blockedHandlers: number
}

/** Theme a repaired schema and apply the content policy. */
function prepareCardContent(
  schema: Record<string, unknown>,
  dark: boolean,
  isJsonComplete: boolean,
  options: SchemaGuardOptions,
): ThemedCardContent {
  const guarded = stripLifecycleScripts(applyChartTheme(schema, dark), options)
  return {
    content: guarded.value as Record<string, unknown>,
    isJsonComplete,
    lifecycleScriptsRemoved: guarded.removed,
    blockedTags: guarded.blockedTags,
    blockedUrls: guarded.blockedUrls,
    blockedHandlers: guarded.blockedHandlers,
  }
}

/**
 * Parse with the SDK's stream repairer so charts can receive a themed schema
 * before the final chunk. If repair cannot produce an object, hand the
 * original string back to GenuiRenderer and let it show its normal error.
 * @param content - card payload, still streaming or final.
 * @param dark - resolved DSH theme.
 * @param isJsonComplete - whether the model finished the schema.
 * @param options - content-policy overrides.
 */
export function parseThemedContent(
  content: string | Record<string, unknown>,
  dark: boolean,
  isJsonComplete = true,
  options: SchemaGuardOptions = {},
): ThemedCardContent {
  if (typeof content !== 'string') {
    return prepareCardContent(content, dark, isJsonComplete, options)
  }
  if (!content.trim()) {
    return { content: {}, isJsonComplete: true, lifecycleScriptsRemoved: 0, blockedTags: [], blockedUrls: 0, blockedHandlers: 0 }
  }

  const repaired = repairJson(content)
  if (!repaired.value || typeof repaired.value !== 'object') {
    return { content, isJsonComplete, lifecycleScriptsRemoved: 0, blockedTags: [], blockedUrls: 0, blockedHandlers: 0 }
  }

  return prepareCardContent(
    repaired.value as Record<string, unknown>,
    dark,
    repaired.state === RepairJsonState.SUCCESS,
    options,
  )
}

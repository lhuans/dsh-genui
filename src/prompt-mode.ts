/** Authoring-prompt tiers shown in the composer. `plus` is the full component set. */
export const GENUI_PROMPT_MODES = ['off', 'mini', 'standard', 'plus'] as const

export type GenuiPromptMode = (typeof GENUI_PROMPT_MODES)[number]

/** Tiers that register a system-prompt section. */
export type GenuiActivePromptMode = Exclude<GenuiPromptMode, 'off'>

/** Default when a profile has never stored a mode and the old toggle was on. */
export const DEFAULT_PROMPT_MODE: GenuiPromptMode = 'standard'

export function isGenuiPromptMode(value: unknown): value is GenuiPromptMode {
  return typeof value === 'string' && (GENUI_PROMPT_MODES as readonly string[]).includes(value)
}

/**
 * Pick the mode to register.
 * A stored mode wins. Profiles saved by the old on/off toggle have no mode:
 * `enabled: false` stays off, anything else uses the fallback (standard).
 */
export function resolvePromptMode(
  stored: { mode?: unknown; enabled?: unknown } | null | undefined,
  fallback: GenuiPromptMode = DEFAULT_PROMPT_MODE,
): GenuiPromptMode {
  if (stored && isGenuiPromptMode(stored.mode)) return stored.mode
  if (stored?.enabled === false) return 'off'
  return fallback
}

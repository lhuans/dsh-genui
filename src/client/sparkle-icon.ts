import type { JSX } from 'react'

/** Composer sparkle icon. DSH 0.2 renamed the 16px export to Regular / Medium. */
export type SparkleIcon = (props: { size?: number }) => JSX.Element

const SPARKLE_EXPORTS = ['IconSparkleRegular', 'IconSparkleMedium', 'IconSparkle16'] as const

/**
 * Pick a sparkle icon export that this host actually ships.
 * @param mod - `@deepseek-ai/dsh-client-ui-primitives` module namespace.
 * @returns The first available icon component.
 */
export function pickSparkleIcon(mod: object): SparkleIcon | undefined {
  const icons = mod as Record<string, unknown>
  for (const name of SPARKLE_EXPORTS) {
    const icon = icons[name]
    if (typeof icon === 'function') return icon as SparkleIcon
  }
  return undefined
}

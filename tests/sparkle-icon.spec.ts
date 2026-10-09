import { describe, expect, it } from 'vitest'
import { pickSparkleIcon } from '../src/client/sparkle-icon.ts'

describe('pickSparkleIcon', () => {
  it('prefers the DSH 0.2 regular export', () => {
    const regular = () => null
    const legacy = () => null
    expect(pickSparkleIcon({ IconSparkleRegular: regular, IconSparkle16: legacy })).toBe(regular)
  })

  it('falls back to the 16px export on older hosts', () => {
    const legacy = () => null
    expect(pickSparkleIcon({ IconSparkle16: legacy })).toBe(legacy)
  })

  it('returns undefined when the host ships neither export', () => {
    expect(pickSparkleIcon({})).toBeUndefined()
  })
})

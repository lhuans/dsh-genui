import { describe, expect, it } from 'vitest'
import { en, promptModeText, zh } from '../src/client/prompt-mode-copy.ts'

describe('prompt mode copy', () => {
  it('gives English every key the Chinese dictionary has', () => {
    expect(Object.keys(en).sort()).toEqual(Object.keys(zh).sort())
  })

  it('uses the translator and falls back to Chinese when the key is missing', () => {
    expect(promptModeText(key => key === 'mode.off' ? 'Off' : key, 'mode.off')).toBe('Off')
    expect(promptModeText(key => key, 'mode.standard')).toBe('标准')
    expect(promptModeText(undefined, 'mode.plus')).toBe('全量')
  })
})
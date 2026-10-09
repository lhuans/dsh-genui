import { describe, expect, it } from 'vitest'
import { blockBelongsToGroupPart } from '../src/client/assistant-props.ts'

describe('blockBelongsToGroupPart', () => {
  it('keeps every block when the host does not split the step', () => {
    expect(blockBelongsToGroupPart('reasoning', undefined)).toBe(true)
    expect(blockBelongsToGroupPart('text', undefined)).toBe(true)
    expect(blockBelongsToGroupPart('image', undefined)).toBe(true)
  })

  it('paints only reasoning blocks in the reasoning group', () => {
    expect(blockBelongsToGroupPart('reasoning', 'reasoning')).toBe(true)
    expect(blockBelongsToGroupPart('text', 'reasoning')).toBe(false)
    expect(blockBelongsToGroupPart('image', 'reasoning')).toBe(false)
    expect(blockBelongsToGroupPart('tool-call', 'reasoning')).toBe(false)
  })

  it('omits reasoning blocks from the response group', () => {
    expect(blockBelongsToGroupPart('reasoning', 'response')).toBe(false)
    expect(blockBelongsToGroupPart('text', 'response')).toBe(true)
    expect(blockBelongsToGroupPart('image', 'response')).toBe(true)
    expect(blockBelongsToGroupPart('other', 'response')).toBe(true)
  })
})

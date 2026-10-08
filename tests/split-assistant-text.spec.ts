// @vitest-environment node
import { describe, expect, it } from 'vitest'
import { splitAssistantText } from '../src/client/split-assistant-text.ts'

describe('splitAssistantText', () => {
  it('returns plain markdown when no fence is present', () => {
    expect(splitAssistantText('hello', false)).toEqual([
      { kind: 'markdown', text: 'hello' },
    ])
  })

  it('returns empty output for empty input', () => {
    expect(splitAssistantText('', false)).toEqual([])
    expect(splitAssistantText('', true)).toEqual([])
  })

  it('extracts a complete schemaJson fence', () => {
    const text = 'before\n```schemaJson\n{"componentName":"Page"}\n```\nafter'
    expect(splitAssistantText(text, false)).toEqual([
      { kind: 'markdown', text: 'before\n' },
      { kind: 'schema', text: '{"componentName":"Page"}\n', complete: true },
      { kind: 'markdown', text: '\nafter' },
    ])
  })

  it('extracts multiple complete schemaJson fences', () => {
    const text = 'a\n```schemaJson\n{"a":1}\n```\nb\n```schemaJson\n{"b":2}\n```\nc'
    expect(splitAssistantText(text, false)).toEqual([
      { kind: 'markdown', text: 'a\n' },
      { kind: 'schema', text: '{"a":1}\n', complete: true },
      { kind: 'markdown', text: '\nb\n' },
      { kind: 'schema', text: '{"b":2}\n', complete: true },
      { kind: 'markdown', text: '\nc' },
    ])
  })

  it('handles CRLF line endings in a complete fence', () => {
    const text = 'lead\r\n```schemaJson\r\n{"x":1}\r\n```\r\ntail'
    expect(splitAssistantText(text, false)).toEqual([
      { kind: 'markdown', text: 'lead\r\n' },
      { kind: 'schema', text: '{"x":1}\r\n', complete: true },
      { kind: 'markdown', text: '\r\ntail' },
    ])
  })

  it('treats a trailing open fence as incomplete while streaming', () => {
    const text = 'intro\n```schemaJson\n{"componentName":"Page"'
    expect(splitAssistantText(text, true)).toEqual([
      { kind: 'markdown', text: 'intro\n' },
      { kind: 'schema', text: '{"componentName":"Page"', complete: false },
    ])
  })

  it('keeps a trailing open fence as markdown when not streaming', () => {
    const text = 'intro\n```schemaJson\n{"componentName":"Page"'
    expect(splitAssistantText(text, false)).toEqual([
      { kind: 'markdown', text: 'intro\n```schemaJson\n{"componentName":"Page"' },
    ])
  })

  it('treats a trailing open fence as incomplete after interruption', () => {
    const text = 'intro\n```schemaJson\n{"componentName":"Page"'
    expect(splitAssistantText(text, false, true)).toEqual([
      { kind: 'markdown', text: 'intro\n' },
      { kind: 'schema', text: '{"componentName":"Page"', complete: false },
    ])
  })

  it('accepts an empty but closed schemaJson fence', () => {
    const text = 'before\n```schemaJson\n```\nafter'
    expect(splitAssistantText(text, false)).toEqual([
      { kind: 'markdown', text: 'before\n' },
      { kind: 'schema', text: '', complete: true },
      { kind: 'markdown', text: '\nafter' },
    ])
  })

  it('does not treat other fenced code blocks as schema segments', () => {
    const text = '```json\n{"a":1}\n```'
    expect(splitAssistantText(text, false)).toEqual([
      { kind: 'markdown', text: '```json\n{"a":1}\n```' },
    ])
  })

  // XML-tag format tests

  it('extracts a complete schemaJson XML tag', () => {
    const text = 'before\n<schemaJson>\n{"componentName":"Page"}\n</schemaJson>\nafter'
    expect(splitAssistantText(text, false)).toEqual([
      { kind: 'markdown', text: 'before\n' },
      { kind: 'schema', text: '{"componentName":"Page"}\n', complete: true },
      { kind: 'markdown', text: '\nafter' },
    ])
  })

  it('extracts multiple complete schemaJson XML tags', () => {
    const text = '<schemaJson>{"a":1}</schemaJson>\n<schemaJson>{"b":2}</schemaJson>'
    expect(splitAssistantText(text, false)).toEqual([
      { kind: 'schema', text: '{"a":1}', complete: true },
      { kind: 'markdown', text: '\n' },
      { kind: 'schema', text: '{"b":2}', complete: true },
    ])
  })

  it('supports both formats in the same message', () => {
    const text = '<schemaJson>{"tag":1}</schemaJson>\n```schemaJson\n{"fence":2}\n```'
    expect(splitAssistantText(text, false)).toEqual([
      { kind: 'schema', text: '{"tag":1}', complete: true },
      { kind: 'markdown', text: '\n' },
      { kind: 'schema', text: '{"fence":2}\n', complete: true },
    ])
  })

  it('treats a trailing open XML tag as incomplete while streaming', () => {
    const text = 'intro\n<schemaJson>\n{"componentName":"Page"'
    expect(splitAssistantText(text, true)).toEqual([
      { kind: 'markdown', text: 'intro\n' },
      { kind: 'schema', text: '{"componentName":"Page"', complete: false },
    ])
  })

  it('keeps a trailing open XML tag as markdown when not streaming', () => {
    const text = 'intro\n<schemaJson>\n{"componentName":"Page"'
    expect(splitAssistantText(text, false)).toEqual([
      { kind: 'markdown', text: 'intro\n<schemaJson>\n{"componentName":"Page"' },
    ])
  })

  it('accepts an empty but closed schemaJson XML tag', () => {
    const text = 'before\n<schemaJson></schemaJson>\nafter'
    expect(splitAssistantText(text, false)).toEqual([
      { kind: 'markdown', text: 'before\n' },
      { kind: 'schema', text: '', complete: true },
      { kind: 'markdown', text: '\nafter' },
    ])
  })
})

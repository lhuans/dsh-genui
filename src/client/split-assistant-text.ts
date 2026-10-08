/**
 * Split assistant markdown into prose vs ```schemaJson card payloads.
 * Complete fences become schema segments; while streaming or interrupted, a
 * trailing open fence is treated as an incomplete schema segment for
 * GenuiRenderer.
 */

/** One display segment after schemaJson extraction. */
export type TextSegment =
  | { readonly kind: 'markdown'; readonly text: string }
  | { readonly kind: 'schema'; readonly text: string; readonly complete: boolean }

/**
 * Parse both backtick fences and XML-style tags so the plugin works whether
 * the model emits ```schemaJson … ``` (the GenUI-native syntax) or
 * <schemaJson> … </schemaJson> (the DSH boot-context syntax). Both formats
 * are common; accepting either prevents silent rendering failures.
 *
 * Examples of either format that genui recognizes:
 *
 *   ```schemaJson
 *   { "componentName": "Page" }
 *   ```
 *
 *   <schemaJson>
 *   { "componentName": "Page" }
 *   </schemaJson>
 */

// Backtick-fence format (GenUI-native)
const COMPLETE_FENCE = /```schemaJson\s*\r?\n?([\s\S]*?)```/g
const OPEN_FENCE = /```schemaJson\s*\r?\n?([\s\S]*)$/

// XML-tag format (DSH boot-context fallback)
const COMPLETE_TAG = /<schemaJson>\s*\r?\n?([\s\S]*?)<\/schemaJson>/g
const OPEN_TAG = /<schemaJson>\s*\r?\n?([\s\S]*)$/

/**
 * Split assistant text into markdown and schema-card segments.
 * @param text - full assistant text block (streaming or final).
 * @param streaming - whether the turn is still generating.
 * @param interrupted - whether generation was stopped after partial content.
 * @returns ordered segments for mixed markdown + GenUI rendering.
 */
export function splitAssistantText(text: string, streaming: boolean, interrupted = false): TextSegment[] {
  const live = streaming || interrupted
  const segments: TextSegment[] = []

  // Collect matches from both formats, deduplicated by position.
  const matches: Array<{ index: number; end: number; text: string }> = []

  // Check for backtick-fence format
  COMPLETE_FENCE.lastIndex = 0
  for (const match of text.matchAll(COMPLETE_FENCE)) {
    matches.push({ index: match.index ?? 0, end: (match.index ?? 0) + match[0].length, text: match[1] ?? '' })
  }

  // Check for XML-tag format
  COMPLETE_TAG.lastIndex = 0
  for (const match of text.matchAll(COMPLETE_TAG)) {
    matches.push({ index: match.index ?? 0, end: (match.index ?? 0) + match[0].length, text: match[1] ?? '' })
  }

  // Sort by position and deduplicate (if both formats overlap, first wins — backtick fence format was found first above)
  matches.sort((a, b) => a.index - b.index)
  const unique: typeof matches = []
  let lastEnd = -1
  for (const m of matches) {
    if (m.index >= lastEnd) {
      unique.push(m)
      lastEnd = m.end
    }
  }

  // Build segments from unique matches, merging consecutive schema blocks
  // into a JSON array so the Vue renderer mounts a single card (avoiding
  // the DSH client streaming-reconciliation crash that happens when
  // multiple cards are mounted in one turn).
  let last = 0
  let schemaBuffer: string[] = []
  function flushSchemaBuffer() {
    if (schemaBuffer.length === 0) return
    const merged = schemaBuffer.length === 1
      ? schemaBuffer[0]
      : '[' + schemaBuffer.join(',') + ']'
    segments.push({ kind: 'schema', text: merged, complete: true })
    schemaBuffer = []
  }
  for (const { index, end, text: content } of unique) {
    if (index > last) {
      flushSchemaBuffer()
      segments.push({ kind: 'markdown', text: text.slice(last, index) })
    }
    schemaBuffer.push(content)
    last = end
  }
  flushSchemaBuffer()

  const rest = text.slice(last)
  if (rest.length === 0) return segments
  if (live) {
    // Check for open backtick fence
    const open = OPEN_FENCE.exec(rest)
    if (open !== null && open.index !== undefined) {
      const before = rest.slice(0, open.index)
      if (before.length > 0) segments.push({ kind: 'markdown', text: before })
      segments.push({ kind: 'schema', text: open[1] ?? '', complete: false })
      return segments
    }
    // Check for open XML tag
    const openTag = OPEN_TAG.exec(rest)
    if (openTag !== null && openTag.index !== undefined) {
      const before = rest.slice(0, openTag.index)
      if (before.length > 0) segments.push({ kind: 'markdown', text: before })
      segments.push({ kind: 'schema', text: openTag[1] ?? '', complete: false })
      return segments
    }
  }
  segments.push({ kind: 'markdown', text: rest })
  return segments
}

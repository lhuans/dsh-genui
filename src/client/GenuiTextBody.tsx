/**
 * Mixed markdown + Vue GenUI card body for one assistant text block.
 */
import { memo, useMemo } from 'react'
import type { ReactNode } from 'react'
import type { MarkdownFileMentions } from '@deepseek-ai/dsh-client-ui-primitives'
import type { ICustomAction } from '@opentiny/genui-sdk-vue/renderer'
import { GenuiVueCard } from './GenuiVueCard.tsx'
import { MarkdownText } from './host-markdown.ts'
import type { GenuiMarkdownLabels } from './markdown-labels.ts'
import { splitAssistantText } from './split-assistant-text.ts'
import css from './genui-assistant.module.css'

export interface GenuiTextBodyProps {
  text: string
  streaming: boolean
  interrupted?: boolean | undefined
  labels: GenuiMarkdownLabels
  mentions?: MarkdownFileMentions | undefined
  customActions?: Record<string, ICustomAction> | undefined
  /** Admit selection in settled markdown segments, mirroring the built-in view. */
  textInteractionSource?: boolean | undefined
}

/** Render markdown segments and schemaJson fences as GenUI cards. */
export const GenuiTextBody = memo(function GenuiTextBody({
  text, streaming, interrupted, labels, mentions, customActions, textInteractionSource,
}: GenuiTextBodyProps) {
  const segments = useMemo(
    () => splitAssistantText(text, streaming, interrupted),
    [text, streaming, interrupted],
  )
  const nodes: ReactNode[] = []
  for (let i = 0; i < segments.length; i++) {
    const segment = segments[i]
    if (segment === undefined) continue
    if (segment.kind === 'markdown') {
      if (segment.text.trim().length === 0) continue
      nodes.push(
        <MarkdownText
          key={`md-${i}`}
          text={segment.text}
          streaming={streaming}
          labels={labels}
          fileMentions={mentions}
          textInteractionSource={textInteractionSource}
        />,
      )
      continue
    }
    nodes.push(
      <GenuiVueCard
        key={`schema-${i}`}
        className={css.card}
        content={segment.text}
        generating={streaming && !segment.complete}
        isJsonComplete={segment.complete}
        customActions={customActions}
      />,
    )
  }
  return <>{nodes}</>
})

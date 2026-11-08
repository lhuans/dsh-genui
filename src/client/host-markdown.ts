/**
 * MarkdownText typed for the DSH 0.2 `labels` prop.
 * The 0.0.1 package typings still call that field `codeLabels`.
 */
import type { ComponentType } from 'react'
import {
  MarkdownText as PrimitiveMarkdownText,
  type MarkdownFileMentions,
} from '@deepseek-ai/dsh-client-ui-primitives'
import type { GenuiMarkdownLabels } from './markdown-labels.ts'

/** Props the running DSH host accepts. */
export interface HostMarkdownProps {
  text: string
  streaming?: boolean
  labels: GenuiMarkdownLabels
  fileMentions?: MarkdownFileMentions | undefined
  /**
   * Present this text as a Chat text-interaction source. The built-in
   * assistant view sets it on settled prose only; hosts before 0.2.2 ignore
   * the extra prop, which keeps the cast compatible with 0.0.1 typings.
   */
  textInteractionSource?: boolean | undefined
}

/** Host markdown renderer. Kept out of markdown-labels so unit tests do not load its CSS. */
export const MarkdownText = PrimitiveMarkdownText as ComponentType<HostMarkdownProps>

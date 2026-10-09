/**
 * Duck-typed props for the shadowed assistant-step seat.
 * Avoids hard deps on @deepseek-ai/dsh-client-ui-chat at install time.
 */
import type { ReactNode } from 'react'
import type { MarkdownFileMentions } from '@deepseek-ai/dsh-client-ui-primitives'

/** Minimal assistant content block kinds this view understands. */
export type AssistantBlock =
  | { readonly kind: 'text'; readonly text: string }
  | { readonly kind: 'reasoning'; readonly text: string }
  | { readonly kind: 'image'; readonly attachment?: unknown }
  | { readonly kind: 'tool-call' }
  | { readonly kind: 'other'; readonly block: unknown }
  | { readonly kind: string; readonly block?: unknown; readonly text?: string }

/** Owner currency for file-mention resolution (turn-tail aligned). */
export interface TurnTailOwner {
  readonly turn: { readonly status: string }
  readonly seq: number
  readonly openFile: (path: string) => void
}

/** Session-kit input face (setDraft + submit) from conversation session provide. */
export interface GenuiInputActions {
  readonly setDraft: (text: string) => void
  readonly submit: () => void
}

/** One durable or preview image inside a message gallery group. */
export interface GenuiMessageImageSource {
  readonly attachment?: unknown
  readonly preview?: {
    readonly url: string
    readonly name?: string
    readonly width?: number
    readonly height?: number
  }
}

/** Slot-backed gallery renderer supplied by the Chat view owner. */
export type GenuiRenderMessageImages = (owner: {
  readonly images: readonly GenuiMessageImageSource[]
  readonly align: 'start' | 'end'
}) => ReactNode

/** Turn-process disclosure state for inline reasoning hiding. */
export interface GenuiTurnProcessOwner {
  readonly spec: { readonly answerStep: number; readonly inlineReasoning: boolean }
  readonly foldable: boolean
  readonly open: boolean
  setOpen(open: boolean): void
}

/**
 * Whether this block belongs on the current assistant-step mount.
 * DSH paints the same step once per group part (`reasoning` and `response`).
 * Hosts that still mount the step a single time omit `groupPart`; those
 * mounts keep every block.
 * @param kind - assistant block kind.
 * @param groupPart - chat group this mount is painting, when the host splits one.
 * @returns true when the block should be painted in this mount.
 */
export function blockBelongsToGroupPart(kind: string, groupPart: string | undefined): boolean {
  if (groupPart === 'reasoning') return kind === 'reasoning'
  if (groupPart === 'response') return kind !== 'reasoning'
  return true
}

/** Props passed by conversation.chat.node for key assistant-step. */
export interface GenuiAssistantNodeViewProps {
  readonly node: {
    readonly data: {
      readonly blocks: readonly AssistantBlock[]
      readonly status: string
      readonly finalNode?: { readonly seq: number }
      readonly step?: number
    }
    readonly location: {
      readonly kind: string
      readonly turn?: { readonly status: string }
    }
  }
  readonly renderMessageImages: GenuiRenderMessageImages
  readonly fileMentions: (owner: TurnTailOwner) => MarkdownFileMentions | undefined
  readonly t: (key: string, params?: Record<string, unknown>) => string
  readonly useTurnData: (key: string) => {
    readonly closing?: { readonly finalNode: { readonly seq: number } }
  } | undefined
  readonly openFile: (path: string) => void
  readonly turnProcess?: GenuiTurnProcessOwner | undefined
  /** Present on session-scoped chat nodes via the standard session kit. */
  readonly inputActions?: GenuiInputActions | undefined
  /**
   * Which half of a split assistant step this mount paints.
   * `reasoning` keeps only reasoning blocks; `response` keeps everything else.
   */
  readonly groupPart?: string | undefined
}

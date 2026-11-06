/**
 * Shadowed assistant-step renderer for the reply bubble. Thinking stays on
 * the built-in assistant view: Chat mounts that node once for reasoning and
 * once for the reply, and both mounts share this winning entry.
 */
import { Component, Fragment, memo, useMemo, useState } from 'react'
import type { ErrorInfo, ReactNode } from 'react'
import { JsonBlock } from '@deepseek-ai/dsh-client-ui-primitives'
import type { ICustomAction } from '@opentiny/genui-sdk-vue/renderer'
import { blockBelongsToGroupPart, type GenuiAssistantNodeViewProps } from './assistant-props.ts'
import {
  bindPresentation, useBuiltinAssistant, type BuiltinAssistant,
} from './builtin-assistant.ts'
import { GenuiTextBody } from './GenuiTextBody.tsx'
import { MarkdownText } from './host-markdown.ts'
import { markdownLabels, type GenuiMarkdownLabels } from './markdown-labels.ts'
import { MESSAGE_IMAGES_SLOT, REASONING_BODY_SLOT } from './reasoning-body.ts'
import css from './genui-assistant.module.css'

/** Priority below the built-in assistant-step (0) so this entry wins. */
export const ASSISTANT_STEP_PRIORITY = -1

/** Keyed Chat Node view. Reasoning mounts render the built-in assistant view. */
export const GenuiAssistantNodeView = memo(function GenuiAssistantNodeView(
  props: GenuiAssistantNodeViewProps,
) {
  const official = props.groupPart !== 'response'
    ? <OfficialReasoning {...props} />
    : null
  if (props.groupPart === 'reasoning') return official
  return (
    <>
      {official}
      <AssistantReply {...props} />
    </>
  )
})

/** Reply half: schemaJson cards and markdown. Reasoning blocks are omitted. */
const AssistantReply = memo(function AssistantReply(props: GenuiAssistantNodeViewProps) {
  const {
    node, renderMessageImages, fileMentions, loadImage, t, useTurnData, openFile, inputActions, groupPart,
    renderSlot,
  } = props
  const sessionId = (props as { sessionId?: unknown }).sessionId
  const data = node.data
  const streaming = data.status === 'running'
  const interrupted = data.status === 'interrupted'
  const turn = node.location.kind === 'turn' || node.location.kind === 'step'
    ? node.location.turn
    : undefined
  const tail = useTurnData('turn-tail')
  const owner = useMemo(() => {
    if (turn?.status !== 'closed' || data.finalNode === undefined) return undefined
    if (tail?.closing?.finalNode.seq !== data.finalNode.seq) return undefined
    return { turn, seq: data.finalNode.seq, openFile }
  }, [data.finalNode, openFile, tail, turn])
  const builtin = useBuiltinAssistant()
  const injectedMentions = useMemo(() => {
    if (typeof fileMentions === 'function' || builtin?.inject === undefined) return undefined
    try {
      return builtin.inject(sessionId)?.fileMentions
    } catch {
      return undefined
    }
  }, [builtin, fileMentions, sessionId])
  const mentions = useMemo(() => {
    if (owner === undefined) return undefined
    const mention = typeof fileMentions === 'function' ? fileMentions : injectedMentions
    if (typeof mention !== 'function') return undefined
    try {
      return mention(owner) as ReturnType<NonNullable<GenuiAssistantNodeViewProps['fileMentions']>>
    } catch {
      return undefined
    }
  }, [fileMentions, injectedMentions, owner])
  const labels = useMemo(() => markdownLabels(t), [t])
  const customActions = useMemo<Record<string, ICustomAction>>(() => ({
    continueChat: {
      name: 'continueChat',
      description: 'Continue the chat with a follow-up user message.',
      // Match GenUI Chat: short button label + card state (formData, …) for the model.
      execute: (params, context) => {
        const message = typeof params === 'object' && params !== null && 'message' in params
          ? String((params as { message: unknown }).message)
          : ''
        if (message.trim().length === 0 || inputActions === undefined) return
        let stateJson = '{}'
        try {
          stateJson = JSON.stringify(context?.state ?? {})
        } catch {
          stateJson = '{}'
        }
        const draft = `${message},相关参数为：${stateJson}`
        inputActions.setDraft(draft)
        inputActions.submit()
      },
    },
  }), [inputActions])

  const blocks = data.blocks
  const rendered: ReactNode[] = []
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i]
    if (block === undefined) continue
    if (!blockBelongsToGroupPart(block.kind, groupPart)) continue
    switch (block.kind) {
      case 'text': {
        const text = block.text
        if (typeof text !== 'string') break
        rendered.push(
          <GenuiTextBody
            key={i}
            text={text}
            streaming={streaming}
            interrupted={interrupted}
            labels={labels}
            mentions={mentions}
            customActions={customActions}
          />,
        )
        break
      }
      case 'reasoning':
        break
      case 'image': {
        const start = i
        const group = [block]
        while (i + 1 < blocks.length) {
          const next = blocks[i + 1]
          if (next === undefined || next.kind !== 'image') break
          group.push(next)
          i += 1
        }
        const images = group.map((item) => ({
          attachment: 'attachment' in item ? item.attachment : undefined,
        }))
        const gallery = typeof renderMessageImages === 'function'
          ? renderMessageImages({ images, align: 'start' })
          : renderSlot?.(MESSAGE_IMAGES_SLOT, { images, loadImage, align: 'start' } as never)
        if (gallery === undefined || gallery === null) break
        rendered.push(<Fragment key={start}>{gallery}</Fragment>)
        break
      }
      case 'tool-call':
        break
      default:
        rendered.push(
          <JsonBlock
            key={i}
            label={t('message.unknownBlock')}
            payload={'block' in block ? block.block : block}
            truncatedLabel={total => t('json.truncated', { total })}
          />,
        )
    }
  }

  // The stopped line belongs with the reply. A reasoning mount would paint it a second time.
  const showStopped = interrupted && groupPart !== 'reasoning'
  // Older hosts mount the step once and use an empty shell as the streaming
  // placeholder. A split response mount with nothing of its own yet should
  // stay empty instead of adding a second blank bubble.
  const legacyStreamingShell = streaming && groupPart === undefined
  if (rendered.length === 0 && !showStopped && !legacyStreamingShell) return null

  return (
    <div className={css.root} data-streaming={streaming || undefined} data-dsh-genui-assistant="">
      <div className={css.body}>
        {rendered}
        {showStopped ? <span className={css.stopped}>{t('message.stopped')}</span> : null}
      </div>
    </div>
  )
})

/**
 * Built-in thinking row. A failure stays inside this boundary so the reply
 * bubble keeps its shadow entry.
 */
function OfficialReasoning(props: GenuiAssistantNodeViewProps) {
  const fallback = <ReasoningBlocks {...props} />
  return (
    <OfficialReasoningBoundary fallback={fallback}>
      <OfficialReasoningBody {...props} />
    </OfficialReasoningBoundary>
  )
}

function OfficialReasoningBody(props: GenuiAssistantNodeViewProps) {
  const builtin = useBuiltinAssistant()
  const sessionId = (props as { sessionId?: unknown }).sessionId
  const injected = useMemo(() => {
    if (builtin?.inject === undefined) return undefined
    try {
      return builtin.inject(sessionId)
    } catch {
      return undefined
    }
  }, [builtin, sessionId])
  const presentation = injected?.hooks?.presentation
  const usePresentation = useMemo(
    () => (presentation === undefined ? undefined : bindPresentation(presentation)),
    [presentation],
  )
  if (builtin === undefined) return <ReasoningBlocks {...props} />
  const officialProps: Record<string, unknown> = {
    ...props,
    groupPart: 'reasoning',
    ...(usePresentation === undefined ? {} : { usePresentation }),
    ...(injected?.resolveFilePath === undefined ? {} : { resolveFilePath: injected.resolveFilePath }),
    ...(injected?.fileMentions === undefined ? {} : { fileMentions: injected.fileMentions }),
  }
  return createOfficialElement(builtin, officialProps)
}

/** Visible thinking text when the built-in view cannot be mounted. */
function ReasoningBlocks({ node, t, renderSlot }: GenuiAssistantNodeViewProps) {
  const labels = useMemo(() => markdownLabels(t), [t])
  const streaming = node.data.status === 'running'
  const blocks = node.data.blocks
  const last = blocks.length - 1
  const rows: ReactNode[] = []
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i]
    if (block === undefined || block.kind !== 'reasoning' || typeof block.text !== 'string') continue
    if (block.text.trim() === '') continue
    rows.push(
      <ReasoningDisclosure
        key={i}
        text={block.text}
        running={streaming && i === last}
        title={t('message.think')}
        labels={labels}
        renderSlot={renderSlot}
      />,
    )
  }
  if (rows.length === 0) return null
  return <>{rows}</>
}

function ReasoningDisclosure({
  text, running, title, labels, renderSlot,
}: {
  text: string
  running: boolean
  title: string
  labels: GenuiMarkdownLabels
  renderSlot: GenuiAssistantNodeViewProps['renderSlot']
}) {
  const [opened, setOpened] = useState(running)
  const shown = running || opened
  const body = renderSlot === undefined
    ? <MarkdownText text={text} streaming={running} labels={labels} />
    : renderSlot(REASONING_BODY_SLOT, { rawText: text, text, running })
  return (
    <details
      className={css.think}
      open={shown}
      onToggle={(event) => {
        if (running) return
        setOpened(event.currentTarget.open)
      }}
    >
      <summary>{title}</summary>
      {shown ? body : null}
    </details>
  )
}

function createOfficialElement(builtin: BuiltinAssistant, props: Record<string, unknown>): ReactNode {
  const Official = builtin.component
  return <Official {...props} />
}

class OfficialReasoningBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { failed: boolean }
> {
  override state = { failed: false }

  static getDerivedStateFromError(): { failed: boolean } {
    return { failed: true }
  }

  override componentDidCatch(_error: unknown, _info: ErrorInfo): void {
    this.setState({ failed: true })
  }

  override render(): ReactNode {
    return this.state.failed ? this.props.fallback : this.props.children
  }
}

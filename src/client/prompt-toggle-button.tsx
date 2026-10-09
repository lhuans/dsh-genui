import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import * as primitives from '@deepseek-ai/dsh-client-ui-primitives'
import type { PropsRuntime } from '@deepseek-ai/dsh-client-ui-slots'
import { GENUI_PROMPT_CONTROL_URL } from '../prompt-control-url.ts'
import { pickSparkleIcon } from './sparkle-icon.ts'
import css from './prompt-toggle-button.module.css'

/** Composer slot props; the toggle reads its state from the host route. */
export type PromptToggleButtonProps = PropsRuntime<'conversation.input.left'>

/**
 * Turn the GenUI authoring prompt on or off from the composer tool row.
 * Rendering stays installed either way; only the prompt section changes.
 */
const SparkleIcon = pickSparkleIcon(primitives)

export function PromptToggleButton(_props: PromptToggleButtonProps) {
  const [enabled, setEnabled] = useState(false)
  const [available, setAvailable] = useState(false)
  const [busy, setBusy] = useState(false)
  const [tooltipPoint, setTooltipPoint] = useState<{ left: number; top: number } | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const tooltipTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    let active = true
    const controller = new AbortController()
    fetch(GENUI_PROMPT_CONTROL_URL, { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error(String(response.status))
        const state = await response.json() as { enabled?: unknown }
        if (active) {
          setEnabled(state.enabled === true)
          setAvailable(true)
        }
      })
      .catch(() => {
        if (active) setAvailable(false)
      })
    return () => {
      active = false
      controller.abort()
    }
  }, [])

  const toggle = useCallback(async () => {
    if (busy) return
    const next = !enabled
    setBusy(true)
    setEnabled(next)
    try {
      const response = await fetch(GENUI_PROMPT_CONTROL_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ enabled: next }),
      })
      if (!response.ok) throw new Error(String(response.status))
      const state = await response.json() as { enabled?: unknown }
      setEnabled(state.enabled === true)
      setAvailable(true)
    } catch {
      setEnabled(!next)
      setAvailable(false)
    } finally {
      setBusy(false)
    }
  }, [busy, enabled])

  const showTooltip = useCallback(() => {
    if (tooltipTimer.current !== null) return
    tooltipTimer.current = setTimeout(() => {
      tooltipTimer.current = null
      const button = buttonRef.current
      if (button === null) return
      const rect = button.getBoundingClientRect()
      setTooltipPoint({ left: rect.left + rect.width / 2, top: rect.top - 8 })
    }, 120)
  }, [])

  const hideTooltip = useCallback(() => {
    if (tooltipTimer.current !== null) {
      clearTimeout(tooltipTimer.current)
      tooltipTimer.current = null
    }
    setTooltipPoint(null)
  }, [])

  const tooltipOpen = tooltipPoint !== null

  useLayoutEffect(() => {
    if (!tooltipOpen) return
    const update = () => {
      const button = buttonRef.current
      if (button === null) return
      const rect = button.getBoundingClientRect()
      setTooltipPoint({ left: rect.left + rect.width / 2, top: rect.top - 8 })
    }
    update()
    window.addEventListener('resize', update)
    window.addEventListener('scroll', update, true)
    return () => {
      window.removeEventListener('resize', update)
      window.removeEventListener('scroll', update, true)
    }
  }, [tooltipOpen])

  useEffect(() => hideTooltip, [hideTooltip])

  const label = available
    ? (enabled ? 'GenUI prompt on' : 'GenUI prompt off')
    : 'GenUI prompt unavailable'

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className={css.toggle}
        aria-label="GenUI prompt"
        aria-pressed={enabled}
        aria-disabled={!available}
        data-active={enabled || undefined}
        onClick={() => { if (available && !busy) void toggle() }}
        onMouseDown={(event) => { event.preventDefault() }}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
      >
        {SparkleIcon ? <SparkleIcon size={14} /> : null}
      </button>
      {tooltipPoint !== null && createPortal(
        <span
          className={css.tooltip}
          role="tooltip"
          style={{ left: tooltipPoint.left, top: tooltipPoint.top }}
        >
          {label}
        </span>,
        document.body,
      )}
    </>
  )
}

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import * as primitives from '@deepseek-ai/dsh-client-ui-primitives'
import { GENUI_PROMPT_CONTROL_URL } from '../prompt-control-url.ts'
import {
  isGenuiPromptMode,
  type GenuiPromptMode,
} from '../prompt-mode.ts'
import {
  PROMPT_MODE_MENU_MODES,
  promptModeOptionKey,
  promptModeText,
  type PromptModeCopyKey,
} from './prompt-mode-copy.ts'
import { pickSparkleIcon } from './sparkle-icon.ts'
import css from './prompt-toggle-button.module.css'

/** Composer slot props; `t` is present when the host installed the locale seat. */
export type PromptToggleButtonProps = {
  t?: (key: string) => string
}

/**
 * Choose the GenUI authoring prompt tier from the composer tool row.
 * Rendering stays installed either way; only the prompt section changes.
 */
const SparkleIcon = pickSparkleIcon(primitives)

export function PromptToggleButton({ t }: PromptToggleButtonProps) {
  const text = (key: PromptModeCopyKey) => promptModeText(t, key)
  const [mode, setMode] = useState<GenuiPromptMode>('standard')
  const [available, setAvailable] = useState(false)
  const [busy, setBusy] = useState(false)
  const [open, setOpen] = useState(false)
  const [menuPoint, setMenuPoint] = useState<{ left: number; top: number } | null>(null)
  const [hint, setHint] = useState<{ text: string; left: number; top: number; side: 'right' | 'left' } | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    let active = true
    const controller = new AbortController()
    fetch(GENUI_PROMPT_CONTROL_URL, { signal: controller.signal })
      .then(async (response) => {
        if (!response.ok) throw new Error(String(response.status))
        const state = await response.json() as { mode?: unknown }
        if (!active) return
        if (!isGenuiPromptMode(state.mode)) throw new Error('bad-mode')
        setMode(state.mode)
        setAvailable(true)
      })
      .catch(() => {
        if (active) setAvailable(false)
      })
    return () => {
      active = false
      controller.abort()
    }
  }, [])

  const showHint = useCallback((element: HTMLElement, text: string) => {
    const rect = element.getBoundingClientRect()
    const side = rect.right + 228 < window.innerWidth ? 'right' : 'left'
    setHint({
      text,
      left: side === 'right' ? rect.right + 8 : rect.left - 8,
      top: rect.top + rect.height / 2,
      side,
    })
  }, [])

  const choose = useCallback(async (next: GenuiPromptMode) => {
    setHint(null)
    setOpen(false)
    if (busy || !available || next === mode) return
    const previous = mode
    setBusy(true)
    setMode(next)
    try {
      const response = await fetch(GENUI_PROMPT_CONTROL_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ mode: next }),
      })
      if (!response.ok) throw new Error(String(response.status))
      const state = await response.json() as { mode?: unknown }
      if (!isGenuiPromptMode(state.mode)) throw new Error('bad-mode')
      setMode(state.mode)
      setAvailable(true)
    } catch {
      setMode(previous)
      setAvailable(false)
    } finally {
      setBusy(false)
    }
  }, [available, busy, mode])

  const placeMenu = useCallback(() => {
    const button = buttonRef.current
    if (button === null) return
    const rect = button.getBoundingClientRect()
    setMenuPoint({ left: rect.left, top: rect.top - 4 })
  }, [])

  useLayoutEffect(() => {
    if (!open) return
    placeMenu()
    window.addEventListener('resize', placeMenu)
    window.addEventListener('scroll', placeMenu, true)
    return () => {
      window.removeEventListener('resize', placeMenu)
      window.removeEventListener('scroll', placeMenu, true)
    }
  }, [open, placeMenu])

  useEffect(() => {
    if (!open) return
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target
      if (!(target instanceof Node)) return
      if (buttonRef.current?.contains(target)) return
      if (menuRef.current?.contains(target)) return
      setOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setHint(null)
        setOpen(false)
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const label = available ? text(promptModeOptionKey(mode, 'mode')) : text('unavailable')
  const menuLabel = text('menu')
  const menuId = 'genui-prompt-mode-menu'

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className={css.trigger}
        aria-label={menuLabel}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        aria-disabled={!available}
        data-active={available && mode !== 'off' ? '' : undefined}
        onClick={() => {
          if (!available || busy) return
          setHint(null)
          setOpen(current => !current)
        }}
        onMouseDown={(event) => { event.preventDefault() }}
      >
        {SparkleIcon ? <SparkleIcon size={14} /> : null}
        <span className={css.label}>{label}</span>
      </button>
      {open && menuPoint !== null && createPortal(
        <div
          ref={menuRef}
          id={menuId}
          className={css.menu}
          role="listbox"
          aria-label={menuLabel}
          style={{ left: menuPoint.left, top: menuPoint.top }}
        >
          {PROMPT_MODE_MENU_MODES.map(optionMode => {
            const optionLabel = text(promptModeOptionKey(optionMode, 'mode'))
            const description = text(promptModeOptionKey(optionMode, 'hint'))
            return (
              <button
                key={optionMode}
                type="button"
                className={css.option}
                role="option"
                aria-selected={optionMode === mode}
                aria-label={`${optionLabel}. ${description}`}
                onMouseDown={(event) => { event.preventDefault() }}
                onMouseEnter={(event) => { showHint(event.currentTarget, description) }}
                onFocus={(event) => { showHint(event.currentTarget, description) }}
                onMouseLeave={() => { setHint(null) }}
                onBlur={() => { setHint(null) }}
                onClick={() => { void choose(optionMode) }}
              >
                {optionLabel}
              </button>
            )
          })}
        </div>,
        document.body,
      )}
      {hint !== null && createPortal(
        <span
          className={css.hint}
          role="tooltip"
          data-side={hint.side}
          style={{ left: hint.left, top: hint.top }}
        >
          {hint.text}
        </span>,
        document.body,
      )}
    </>
  )
}

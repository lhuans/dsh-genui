/**
 * Plugin-detail controls for composer visibility and authoring tier.
 * Shares state with PromptToggleButton through the prompt control API.
 */
import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { DEFAULT_PROMPT_MODE } from '../prompt-mode.ts'
import {
  fetchPromptUiState,
  postPromptUiState,
  publishPromptUiState,
  subscribePromptUiState,
  type GenuiPromptClientState,
} from './prompt-settings-api.ts'
import {
  PROMPT_MODE_MENU_MODES,
  promptModeOptionKey,
  promptModeText,
  type PromptModeCopyKey,
} from './prompt-mode-copy.ts'
import css from './genui-bundle-config.module.css'

/** Bundle config slot props; `t` is present when the host installed the locale seat. */
export type GenuiBundleConfigProps = {
  t?: (key: string) => string
}

/**
 * Settings block on the Plugins bundle detail page.
 * @param props - locale helper from the slot seat.
 */
export function GenuiBundleConfig({ t }: GenuiBundleConfigProps) {
  const text = (key: PromptModeCopyKey) => promptModeText(t, key)
  const toggleId = useId()
  const modeId = useId()
  const menuId = `${modeId}-menu`
  const [state, setState] = useState<GenuiPromptClientState>({
    mode: DEFAULT_PROMPT_MODE,
    showPromptToggle: true,
  })
  const [available, setAvailable] = useState(false)
  const [busy, setBusy] = useState(false)
  const [open, setOpen] = useState(false)
  const [menuPoint, setMenuPoint] = useState<{ left: number; top: number; width: number } | null>(null)
  const [tip, setTip] = useState<{ text: string; left: number; top: number; side: 'right' | 'left' } | null>(null)
  const triggerRef = useRef<HTMLButtonElement | null>(null)
  const menuRef = useRef<HTMLDivElement | null>(null)

  const showTip = useCallback((element: HTMLElement, tipText: string) => {
    const rect = element.getBoundingClientRect()
    const side = rect.left - 228 > 8 ? 'left' : 'right'
    setTip({
      text: tipText,
      left: side === 'right' ? rect.right + 8 : rect.left - 8,
      top: rect.top + rect.height / 2,
      side,
    })
  }, [])

  const applyState = useCallback((next: GenuiPromptClientState) => {
    setState(next)
    setAvailable(true)
  }, [])

  useEffect(() => {
    let active = true
    const controller = new AbortController()
    const refresh = () => {
      void fetchPromptUiState(controller.signal)
        .then((next) => {
          if (!active) return
          applyState(next)
          publishPromptUiState(next)
        })
        .catch(() => {
          if (active) setAvailable(false)
        })
    }
    refresh()
    const unsubscribe = subscribePromptUiState((next) => {
      if (active) applyState(next)
    })
    const onVisibility = () => {
      if (document.visibilityState === 'visible') refresh()
    }
    document.addEventListener('visibilitychange', onVisibility)
    return () => {
      active = false
      controller.abort()
      unsubscribe()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [applyState])

  const write = useCallback(async (patch: Partial<GenuiPromptClientState>) => {
    if (busy || !available) return
    const previous = state
    const optimistic: GenuiPromptClientState = {
      mode: patch.mode ?? state.mode,
      showPromptToggle: patch.showPromptToggle ?? state.showPromptToggle,
    }
    setBusy(true)
    setState(optimistic)
    try {
      applyState(await postPromptUiState(patch))
    } catch {
      setState(previous)
      setAvailable(false)
    } finally {
      setBusy(false)
    }
  }, [applyState, available, busy, state])

  const placeMenu = useCallback(() => {
    const trigger = triggerRef.current
    if (trigger === null) return
    const rect = trigger.getBoundingClientRect()
    const width = Math.max(rect.width, 96)
    const left = Math.min(rect.right - width, window.innerWidth - width - 8)
    const below = rect.bottom + 4
    const menuHeight = 4 + PROMPT_MODE_MENU_MODES.length * 30
    const top = below + menuHeight > window.innerHeight - 8
      ? Math.max(8, rect.top - 4 - menuHeight)
      : below
    setMenuPoint({ left: Math.max(8, left), top, width })
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
      if (triggerRef.current?.contains(target)) return
      if (menuRef.current?.contains(target)) return
      setTip(null)
      setOpen(false)
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setTip(null)
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

  const disabled = busy || !available
  const modeLabel = text(promptModeOptionKey(state.mode, 'mode'))

  return (
    <section className={css.panel} aria-label={text('settings.title')}>
      <h4 className={css.title}>{text('settings.title')}</h4>
      <div className={css.row}>
        <div className={css.labelRow}>
          <label className={css.label} htmlFor={toggleId}>{text('settings.showToggle')}</label>
          <button
            id={toggleId}
            type="button"
            className={css.toggle}
            role="switch"
            aria-checked={state.showPromptToggle}
            data-on={state.showPromptToggle ? '' : undefined}
            disabled={disabled}
            onClick={() => { void write({ showPromptToggle: !state.showPromptToggle }) }}
          >
            <span className={css.toggleKnob} />
          </button>
        </div>
        <p className={css.hint}>{text('settings.showToggleHint')}</p>
      </div>
      <div className={css.row}>
        <div className={css.labelRow}>
          <label className={css.label} htmlFor={modeId}>{text('settings.mode')}</label>
          <button
            ref={triggerRef}
            id={modeId}
            type="button"
            className={css.selectTrigger}
            aria-haspopup="listbox"
            aria-expanded={open}
            aria-controls={open ? menuId : undefined}
            disabled={disabled}
            onClick={() => {
              if (disabled) return
              setTip(null)
              setOpen(current => !current)
            }}
          >
            <span className={css.selectValue}>{modeLabel}</span>
            <svg className={css.selectChevron} viewBox="0 0 12 12" aria-hidden="true">
              <path
                d="M2.5 4.5 L6 8 L9.5 4.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <p className={css.hint}>{text('settings.modeHint')}</p>
      </div>
      {!available && <p className={css.status} role="status">{text('settings.unavailable')}</p>}
      {open && menuPoint !== null && createPortal(
        <div
          ref={menuRef}
          id={menuId}
          className={css.menu}
          role="listbox"
          aria-label={text('settings.mode')}
          style={{ left: menuPoint.left, top: menuPoint.top, width: menuPoint.width }}
        >
          {PROMPT_MODE_MENU_MODES.map((mode) => {
            const optionLabel = text(promptModeOptionKey(mode, 'mode'))
            const description = text(promptModeOptionKey(mode, 'hint'))
            return (
              <button
                key={mode}
                type="button"
                className={css.option}
                role="option"
                aria-selected={mode === state.mode}
                aria-label={`${optionLabel}. ${description}`}
                onMouseEnter={(event) => { showTip(event.currentTarget, description) }}
                onFocus={(event) => { showTip(event.currentTarget, description) }}
                onMouseLeave={() => { setTip(null) }}
                onBlur={() => { setTip(null) }}
                onClick={() => {
                  setTip(null)
                  setOpen(false)
                  if (mode !== state.mode) void write({ mode })
                }}
              >
                {optionLabel}
              </button>
            )
          })}
        </div>,
        document.body,
      )}
      {tip !== null && createPortal(
        <span
          className={css.tip}
          role="tooltip"
          data-side={tip.side}
          style={{ left: tip.left, top: tip.top }}
        >
          {tip.text}
        </span>,
        document.body,
      )}
    </section>
  )
}

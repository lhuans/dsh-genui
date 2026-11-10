import { GENUI_PROMPT_MODES, type GenuiPromptMode } from '../prompt-mode.ts'

/** Dictionary registered as the `dsh-genui` locale namespace. */
export interface PromptModeCopy {
  unavailable: string
  menu: string
  'mode.off': string
  'mode.mini': string
  'mode.standard': string
  'mode.plus': string
  'hint.off': string
  'hint.mini': string
  'hint.standard': string
  'hint.plus': string
  'settings.title': string
  'settings.showToggle': string
  'settings.showToggleHint': string
  'settings.mode': string
  'settings.modeHint': string
  'settings.unavailable': string
}

export type PromptModeCopyKey = keyof PromptModeCopy

/** Chinese copy. Other shipped languages fall back to English through DSH. */
export const zh: PromptModeCopy = {
  unavailable: 'GenUI',
  menu: 'GenUI 提示词',
  'mode.off': '关闭',
  'mode.mini': '精简',
  'mode.standard': '标准',
  'mode.plus': '全量',
  'hint.off': '不注入Genui提示词，模型按普通对话回答。已有卡片仍会渲染。',
  'hint.mini': '只提供表单、表格和卡片，提示词最短。',
  'hint.standard': '在精简之外加上标签页和图表。默认使用这一档。',
  'hint.plus': '再加入树、弹窗、折叠、步骤和轮播等组件',
  'settings.title': 'GenUI 提示词',
  'settings.showToggle': '在输入框展示',
  'settings.showToggleHint': '关闭后输入框工具行不再出现档位按钮；卡片渲染与提示词注入不受影响。',
  'settings.mode': '提示词档位',
  'settings.modeHint': '与输入框星形菜单共用同一选择，两边会同步。',
  'settings.unavailable': '暂时无法读取或保存 GenUI 设置。',
}

/** English copy, used for every non-Chinese DSH language. */
export const en: PromptModeCopy = {
  unavailable: 'GenUI',
  menu: 'GenUI prompt',
  'mode.off': 'Off',
  'mode.mini': 'Mini',
  'mode.standard': 'Standard',
  'mode.plus': 'Plus',
  'hint.off': 'No GenUI prompt. The model answers in plain text. Existing cards still render.',
  'hint.mini': 'Forms, tables, and cards only. The shortest prompt.',
  'hint.standard': 'Adds tabs and charts on top of Mini. This is the default.',
  'hint.plus': 'Also adds trees, dialogs, collapse, steps, and carousels. The longest prompt.',
  'settings.title': 'GenUI prompt',
  'settings.showToggle': 'Show in composer',
  'settings.showToggleHint': 'When off, the sparkle control leaves the composer tool row. Cards and prompt injection keep working.',
  'settings.mode': 'Prompt tier',
  'settings.modeHint': 'Shared with the composer sparkle menu; both sides stay in sync.',
  'settings.unavailable': 'Could not load or save GenUI settings right now.',
}

/**
 * Read one menu string from the active DSH locale.
 * Hosts without a locale seat, and a missing key, keep the Chinese copy.
 */
export function promptModeText(
  t: ((key: string) => string) | undefined,
  key: PromptModeCopyKey,
): string {
  if (t === undefined) return zh[key]
  const value = t(key)
  return value === key ? zh[key] : value
}

export function promptModeOptionKey(mode: GenuiPromptMode, kind: 'mode' | 'hint'): PromptModeCopyKey {
  return `${kind}.${mode}`
}

export const PROMPT_MODE_MENU_MODES = GENUI_PROMPT_MODES

import type { IncomingMessage, ServerResponse } from 'node:http'
import { describe, expect, it, vi } from 'vitest'
import {
  createGenuiPromptControl,
  createGenuiPromptControlHandler,
  createPersistedPromptControl,
  findPromptSettingsEntry,
  openPromptSettings,
  type GenuiPromptSettings,
} from '../src/prompt-control.ts'
import { resolvePromptMode } from '../src/prompt-mode.ts'

const section = {
  name: 'genui:cards',
  order: 80,
  texts: {
    mini: 'mini prompt',
    standard: 'standard prompt',
    plus: 'plus prompt',
  },
}

function mockRes(): ServerResponse & {
  statusCodeOut: number
  headersOut: Record<string, string>
  bodyOut: unknown
} {
  const rec = {
    statusCodeOut: 0,
    headersOut: {} as Record<string, string>,
    bodyOut: undefined as unknown,
    writeHead(statusCode: number, headers?: Record<string, string>) {
      rec.statusCodeOut = statusCode
      rec.headersOut = headers ?? {}
      return rec
    },
    end(body?: unknown) {
      rec.bodyOut = body
      return rec
    },
  }
  return rec as unknown as ServerResponse & typeof rec
}

function mockReq(method: string, chunks: readonly string[] = []): IncomingMessage {
  const buffers = chunks.map((chunk) => Buffer.from(chunk))
  return {
    method,
    async *[Symbol.asyncIterator]() {
      yield* buffers
    },
  } as IncomingMessage
}

function parseBody(response: ServerResponse & { bodyOut: unknown }): Record<string, unknown> {
  return JSON.parse(String(response.bodyOut)) as Record<string, unknown>
}

describe('resolvePromptMode', () => {
  it('keeps a stored tier and maps the old off toggle', () => {
    expect(resolvePromptMode({ mode: 'plus', enabled: false })).toBe('plus')
    expect(resolvePromptMode({ enabled: false })).toBe('off')
    expect(resolvePromptMode({ enabled: true })).toBe('standard')
    expect(resolvePromptMode({})).toBe('standard')
    expect(resolvePromptMode({ mode: 'nope' })).toBe('standard')
  })
})

describe('createGenuiPromptControl', () => {
  it('swaps the registered prompt text when the tier changes', () => {
    const dispose = vi.fn()
    const registered: Array<Record<string, unknown>> = []
    const control = createGenuiPromptControl(section, {
      section(values) {
        registered.push(values)
        return dispose
      },
    })

    expect(control.mode()).toBe('off')
    expect(control.isEnabled()).toBe(false)

    expect(control.set('mini')).toBe('mini')
    expect(control.set('mini')).toBe('mini')
    expect(control.isEnabled()).toBe(true)
    expect(registered).toEqual([{ name: 'genui:cards', order: 80, text: 'mini prompt' }])

    expect(control.set('plus')).toBe('plus')
    expect(dispose).toHaveBeenCalledTimes(1)
    expect(registered[1]).toEqual({ name: 'genui:cards', order: 80, text: 'plus prompt' })

    expect(control.set('off')).toBe('off')
    expect(control.set('off')).toBe('off')
    expect(dispose).toHaveBeenCalledTimes(2)
    expect(control.isEnabled()).toBe(false)
  })
})

describe('createPersistedPromptControl', () => {
  it('initializes from settings and mirrors explicit changes', async () => {
    const dispose = vi.fn()
    const registered: Array<Record<string, unknown>> = []
    const updates: Array<{ mode: GenuiPromptSettings['mode']; enabled: boolean }> = []
    let stored: GenuiPromptSettings = { enabled: false }
    const control = createPersistedPromptControl(
      createGenuiPromptControl(section, {
        section(values) {
          registered.push(values)
          return dispose
        },
      }),
      {
        get: () => stored,
        update(patch) {
          updates.push(patch)
          stored = { ...stored, ...patch }
          return Promise.resolve()
        },
      },
      'standard',
    )

    expect(control.mode()).toBe('off')
    expect(registered).toEqual([])

    expect(control.set('standard')).toBe('standard')
    await Promise.resolve()
    expect(updates).toEqual([{ mode: 'standard', enabled: true }])
    expect(registered).toEqual([{ name: 'genui:cards', order: 80, text: 'standard prompt' }])

    expect(control.set('off')).toBe('off')
    await Promise.resolve()
    expect(updates).toEqual([
      { mode: 'standard', enabled: true },
      { mode: 'off', enabled: false },
    ])
    expect(control.isEnabled()).toBe(false)
  })

  it('uses a stored tier over the legacy enabled flag', () => {
    const registered: Array<Record<string, unknown>> = []
    const control = createPersistedPromptControl(
      createGenuiPromptControl(section, {
        section(values) {
          registered.push(values)
          return () => {}
        },
      }),
      {
        get: () => ({ mode: 'mini', enabled: false }),
        update: () => Promise.resolve(),
      },
      'standard',
    )

    expect(control.mode()).toBe('mini')
    expect(registered).toEqual([{ name: 'genui:cards', order: 80, text: 'mini prompt' }])
  })

  it('falls back to the supplied default for a malformed stored value', () => {
    const control = createPersistedPromptControl(
      createGenuiPromptControl(section, { section: () => () => {} }),
      {
        get: () => ({ mode: 'nope' as unknown as 'standard' }),
        update: () => Promise.resolve(),
      },
      'plus',
    )

    expect(control.mode()).toBe('plus')
  })

  it('keeps the runtime state when persistence fails', async () => {
    const onError = vi.fn()
    const control = createPersistedPromptControl(
      createGenuiPromptControl(section, { section: () => () => {} }),
      {
        get: () => ({ mode: 'standard', enabled: true }),
        update: () => Promise.reject(new Error('persist-failed')),
      },
      'standard',
      onError,
    )

    expect(control.set('off')).toBe('off')
    await new Promise(resolve => setTimeout(resolve, 0))
    expect(control.mode()).toBe('off')
    expect(onError).toHaveBeenCalledTimes(1)
  })
})

describe('createGenuiPromptControlHandler', () => {
  it('reads the initial mode and updates it with POST', async () => {
    const control = createGenuiPromptControl(section, {
      section: () => () => {},
    })
    const handler = createGenuiPromptControlHandler(control)

    const read = mockRes()
    await handler(mockReq('GET'), read)
    expect(read.statusCodeOut).toBe(200)
    expect(parseBody(read)).toEqual({ mode: 'off' })

    const enable = mockRes()
    await handler(mockReq('POST', [JSON.stringify({ mode: 'plus' })]), enable)
    expect(enable.statusCodeOut).toBe(200)
    expect(parseBody(enable)).toEqual({ mode: 'plus' })
    expect(control.mode()).toBe('plus')

    const disable = mockRes()
    await handler(mockReq('POST', [JSON.stringify({ mode: 'off' })]), disable)
    expect(disable.statusCodeOut).toBe(200)
    expect(parseBody(disable)).toEqual({ mode: 'off' })
    expect(control.isEnabled()).toBe(false)
  })

  it('rejects unsupported methods and malformed bodies', async () => {
    const control = createGenuiPromptControl(section, {
      section: () => () => {},
    })
    const handler = createGenuiPromptControlHandler(control)

    const put = mockRes()
    await handler(mockReq('PUT'), put)
    expect(put.statusCodeOut).toBe(405)

    const invalidJson = mockRes()
    await handler(mockReq('POST', ['{']), invalidJson)
    expect(invalidJson.statusCodeOut).toBe(400)

    const missingMode = mockRes()
    await handler(mockReq('POST', [JSON.stringify({})]), missingMode)
    expect(missingMode.statusCodeOut).toBe(400)
    expect(control.mode()).toBe('off')

    const unknownMode = mockRes()
    await handler(mockReq('POST', [JSON.stringify({ mode: 'full' })]), unknownMode)
    expect(unknownMode.statusCodeOut).toBe(400)
    expect(control.mode()).toBe('off')
  })
})

describe('openPromptSettings', () => {
  it('keeps the DSH 0.1 register namespace', () => {
    const register = vi.fn(() => ({
      get: () => ({ enabled: true, mode: 'mini' as const }),
      update: async () => {},
    }))
    const scope = openPromptSettings({ register }, { configEnabled: false, schema: { kind: 'legacy' } })
    expect(register).toHaveBeenCalledWith('dsh-genui', { kind: 'legacy' })
    expect(scope?.get().mode).toBe('mini')
  })

  it('writes promptMode and promptEnabled on the DSH 0.2 entry that owns the field', async () => {
    const update = vi.fn(async () => {})
    const scope = openPromptSettings({
      describe: () => [{ ns: 'genui', value: { promptEnabled: false }, schema: {} }],
      update,
    }, { configEnabled: false, schema: {} })
    expect(resolvePromptMode(scope?.get())).toBe('off')
    await scope?.update({ mode: 'plus', enabled: true })
    expect(update).toHaveBeenCalledWith('genui', { promptMode: 'plus', promptEnabled: true })
  })

  it('falls back to the bundled entry id before describe can see this plugin', async () => {
    const update = vi.fn(async () => {})
    const scope = openPromptSettings({
      describe: () => [],
      update,
    }, { configMode: 'standard', configEnabled: true, schema: {} })
    await scope?.update({ mode: 'off', enabled: false })
    expect(update).toHaveBeenCalledWith('genui', { promptMode: 'off', promptEnabled: false })
  })
})

describe('findPromptSettingsEntry', () => {
  it('prefers the bundled genui id over another row that mentions the field', () => {
    expect(findPromptSettingsEntry([
      { ns: 'other', value: { promptEnabled: true }, schema: {} },
      { ns: 'genui', value: {}, schema: { dict: { promptMode: 1 } } },
    ])).toBe('genui')
  })
})

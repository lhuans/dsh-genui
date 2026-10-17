import type { IncomingMessage, ServerResponse } from 'node:http'
import { describe, expect, it, vi } from 'vitest'
import {
  createGenuiPromptControl,
  createGenuiPromptControlHandler,
  createPersistedPromptControl,
  findPromptSettingsEntry,
  isTrustedPromptRequest,
  openPromptSettings,
} from '../src/prompt-control.ts'

const section = { name: 'genui:cards', order: 80, text: 'GenUI prompt' }

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

function mockReq(
  method: string,
  chunks: readonly string[] = [],
  headers: Record<string, string> = {},
): IncomingMessage {
  const buffers = chunks.map((chunk) => Buffer.from(chunk))
  return {
    method,
    headers,
    async *[Symbol.asyncIterator]() {
      yield* buffers
    },
  } as IncomingMessage
}

function parseBody(response: ServerResponse & { bodyOut: unknown }): Record<string, unknown> {
  return JSON.parse(String(response.bodyOut)) as Record<string, unknown>
}

describe('createGenuiPromptControl', () => {
  it('registers and releases the prompt section on demand', () => {
    const dispose = vi.fn()
    const registered: Array<Record<string, unknown>> = []
    const control = createGenuiPromptControl(section, {
      section(values) {
        registered.push(values)
        return dispose
      },
    })

    expect(control.isEnabled()).toBe(false)
    expect(control.set(true)).toBe(true)
    expect(control.set(true)).toBe(true)
    expect(control.isEnabled()).toBe(true)
    expect(registered).toEqual([section])

    expect(control.set(false)).toBe(false)
    expect(control.set(false)).toBe(false)
    expect(dispose).toHaveBeenCalledTimes(1)
    expect(control.isEnabled()).toBe(false)
  })
})

describe('createPersistedPromptControl', () => {
  it('initializes from settings and mirrors explicit changes', async () => {
    const dispose = vi.fn()
    const registered: Array<Record<string, unknown>> = []
    const updates: Array<{ enabled: boolean }> = []
    let stored = { enabled: false }
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
      true,
    )

    expect(control.isEnabled()).toBe(false)
    expect(registered).toEqual([])

    expect(control.set(true)).toBe(true)
    await Promise.resolve()
    expect(updates).toEqual([{ enabled: true }])
    expect(control.isEnabled()).toBe(true)

    expect(control.set(false)).toBe(false)
    await Promise.resolve()
    expect(updates).toEqual([{ enabled: true }, { enabled: false }])
    expect(control.isEnabled()).toBe(false)
  })

  it('falls back to the supplied default for a malformed stored value', () => {
    const control = createPersistedPromptControl(
      createGenuiPromptControl(section, { section: () => () => {} }),
      {
        get: () => ({ enabled: undefined as unknown as boolean }),
        update: () => Promise.resolve(),
      },
      true,
    )

    expect(control.isEnabled()).toBe(true)
  })

  it('keeps the runtime state when persistence fails', async () => {
    const onError = vi.fn()
    const control = createPersistedPromptControl(
      createGenuiPromptControl(section, { section: () => () => {} }),
      {
        get: () => ({ enabled: true }),
        update: () => Promise.reject(new Error('persist-failed')),
      },
      true,
      onError,
    )

    expect(control.set(false)).toBe(false)
    await new Promise(resolve => setTimeout(resolve, 0))
    expect(control.isEnabled()).toBe(false)
    expect(onError).toHaveBeenCalledTimes(1)
  })
})

describe('createGenuiPromptControlHandler', () => {
  it('reads the initial state and updates it with POST', async () => {
    const control = createGenuiPromptControl(section, {
      section: () => () => {},
    })
    const handler = createGenuiPromptControlHandler(control)

    const read = mockRes()
    await handler(mockReq('GET'), read)
    expect(read.statusCodeOut).toBe(200)
    expect(parseBody(read)).toEqual({ enabled: false })

    const enable = mockRes()
    await handler(mockReq('POST', [JSON.stringify({ enabled: true })]), enable)
    expect(enable.statusCodeOut).toBe(200)
    expect(parseBody(enable)).toEqual({ enabled: true })
    expect(control.isEnabled()).toBe(true)

    const disable = mockRes()
    await handler(mockReq('POST', [JSON.stringify({ enabled: false })]), disable)
    expect(disable.statusCodeOut).toBe(200)
    expect(parseBody(disable)).toEqual({ enabled: false })
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

    const missingEnabled = mockRes()
    await handler(mockReq('POST', [JSON.stringify({})]), missingEnabled)
    expect(missingEnabled.statusCodeOut).toBe(400)
    expect(control.isEnabled()).toBe(false)
  })

  it('refuses a cross-site toggle and leaves the control alone', async () => {
    const control = createGenuiPromptControl(section, {
      section: () => () => {},
    })
    const handler = createGenuiPromptControlHandler(control)

    const foreign = mockRes()
    await handler(
      mockReq('POST', [JSON.stringify({ enabled: true })], {
        origin: 'https://evil.example',
        host: '127.0.0.1:3080',
      }),
      foreign,
    )
    expect(foreign.statusCodeOut).toBe(403)
    expect(parseBody(foreign)).toEqual({ error: 'cross-origin' })
    expect(control.isEnabled()).toBe(false)

    // A cross-site read is refused the same way a cross-site write is.
    const foreignRead = mockRes()
    await handler(mockReq('GET', [], { origin: 'https://evil.example', host: '127.0.0.1:3080' }), foreignRead)
    expect(foreignRead.statusCodeOut).toBe(403)

    // The browser's own fetch from the DSH page still works.
    const own = mockRes()
    await handler(
      mockReq('POST', [JSON.stringify({ enabled: true })], {
        origin: 'http://127.0.0.1:3080',
        host: '127.0.0.1:3080',
        'sec-fetch-site': 'same-origin',
      }),
      own,
    )
    expect(own.statusCodeOut).toBe(200)
    expect(control.isEnabled()).toBe(true)
  })
})

describe('isTrustedPromptRequest', () => {
  it('refuses a rebound authority even when its own label looks same-origin', () => {
  // Measured before the loopback rule: a page served from a rebound hostname is
  // same-origin with itself, so its Sec-Fetch-Site and its Origin/Host comparison
  // both passed. The authority is what gives it away — this endpoint is loopback-only.
  expect(isTrustedPromptRequest({ headers: { origin: 'http://evil', host: 'evil' } })).toBe(false)
  expect(isTrustedPromptRequest({ headers: { 'sec-fetch-site': 'same-origin', host: 'evil' } })).toBe(false)
  expect(isTrustedPromptRequest({ headers: { origin: 'http://evil', host: 'evil:3080' } })).toBe(false)
  // Clients that send no headers (curl) name the real loopback host and keep working.
  expect(isTrustedPromptRequest({ headers: { host: '127.0.0.1:3080' } })).toBe(true)
  expect(isTrustedPromptRequest({ headers: { host: 'localhost:3080' } })).toBe(true)
})

it('accepts the composer button talking to its own host', () => {
    expect(isTrustedPromptRequest({
      headers: { origin: 'http://127.0.0.1:3080', host: '127.0.0.1:3080' },
    })).toBe(true)
  })

  it('rejects a foreign origin, a cross-site fetch, and an opaque origin', () => {
    expect(isTrustedPromptRequest({
      headers: { origin: 'https://evil.example', host: '127.0.0.1:3080' },
    })).toBe(false)
    expect(isTrustedPromptRequest({
      headers: { 'sec-fetch-site': 'cross-site', host: '127.0.0.1:3080' },
    })).toBe(false)
    expect(isTrustedPromptRequest({
      headers: { origin: 'null', host: '127.0.0.1:3080' },
    })).toBe(false)
  })

  it('accepts a same-origin request that carries no browser label', () => {
    // No Sec-Fetch-Site at all: the Origin/Host comparison is the only rule in
    // play, so a broken comparison cannot hide behind the label.
    expect(isTrustedPromptRequest({
      headers: { origin: 'http://127.0.0.1:3080', host: '127.0.0.1:3080' },
    })).toBe(true)
    expect(isTrustedPromptRequest({
      headers: { origin: 'http://127.0.0.1:9999', host: '127.0.0.1:3080' },
    })).toBe(false)
  })

  it('refuses a rebound host, which matches its own Host header', () => {
    // evil.test resolves to the loopback address: Origin and Host agree, so only
    // the browser's own label distinguishes the request from the real button.
    expect(isTrustedPromptRequest({
      headers: { origin: 'http://evil.test', host: 'evil.test', 'sec-fetch-site': 'cross-site' },
    })).toBe(false)
    expect(isTrustedPromptRequest({
      headers: { origin: 'http://evil.test', host: 'evil.test', 'sec-fetch-site': 'same-site' },
    })).toBe(false)
    // The composer's own call carries same-origin and keeps working.
    expect(isTrustedPromptRequest({
      headers: { origin: 'http://127.0.0.1:3080', host: '127.0.0.1:3080', 'sec-fetch-site': 'same-origin' },
    })).toBe(true)
  })

  it('keeps header-less clients working, but not when the host is unknowable', () => {
    expect(isTrustedPromptRequest({ headers: {} })).toBe(true)
    expect(isTrustedPromptRequest({ headers: { origin: 'http://127.0.0.1:3080' } })).toBe(false)
  })
})

describe('openPromptSettings', () => {
  it('keeps the DSH 0.1 register namespace', () => {
    const register = vi.fn(() => ({
      get: () => ({ enabled: true }),
      update: async () => {},
    }))
    const scope = openPromptSettings({ register }, { configEnabled: false, schema: { kind: 'legacy' } })
    expect(register).toHaveBeenCalledWith('dsh-genui', { kind: 'legacy' })
    expect(scope?.get().enabled).toBe(true)
  })

  it('writes promptEnabled on the DSH 0.2 entry that owns the field', async () => {
    const update = vi.fn(async () => {})
    const scope = openPromptSettings({
      describe: () => [{ ns: 'genui', value: { promptEnabled: false }, schema: {} }],
      update,
    }, { configEnabled: false, schema: {} })
    expect(scope?.get().enabled).toBe(false)
    await scope?.update({ enabled: true })
    expect(update).toHaveBeenCalledWith('genui', { promptEnabled: true })
  })

  it('falls back to the bundled entry id before describe can see this plugin', async () => {
    const update = vi.fn(async () => {})
    const scope = openPromptSettings({
      describe: () => [],
      update,
    }, { configEnabled: true, schema: {} })
    await scope?.update({ enabled: false })
    expect(update).toHaveBeenCalledWith('genui', { promptEnabled: false })
  })
})

describe('findPromptSettingsEntry', () => {
  it('prefers the bundled genui id over another row that mentions the field', () => {
    expect(findPromptSettingsEntry([
      { ns: 'other', value: { promptEnabled: true }, schema: {} },
      { ns: 'genui', value: {}, schema: { dict: { promptEnabled: 1 } } },
    ])).toBe('genui')
  })
})

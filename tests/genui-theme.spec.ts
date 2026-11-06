import { describe, expect, it } from 'vitest'
import { applyChartTheme, parseThemedContent } from '../src/client/genui-theme.ts'

const schema = {
  componentName: 'Page',
  children: [{
    componentName: 'TinyHuichartsLine',
    props: { options: { data: [1, 2, 3], theme: 'light' } },
  }, {
    componentName: 'Text',
    props: { text: 'TinyHuichartsLine' },
  }],
}

describe('GenUI theme helpers', () => {
  it('copies chart schemas and overrides only chart options themes', () => {
    const light = applyChartTheme(schema, false) as typeof schema
    const dark = applyChartTheme(schema, true) as typeof schema

    expect(light.children?.[0]?.props?.options?.theme).toBe('cloud-light')
    expect(dark.children?.[0]?.props?.options?.theme).toBe('cloud-dark')
    expect(dark).not.toBe(schema)
    expect(dark.children?.[0]).not.toBe(schema.children[0])
    expect(schema.children[0]?.props?.options?.theme).toBe('light')
    expect(dark.children?.[1]?.props.text).toBe('TinyHuichartsLine')
  })

  it('repairs stream chunks and keeps completion state for the renderer', () => {
    const partial = parseThemedContent('{"componentName":"Page","children":[{"componentName":"TinyHuichartsLine"', true)
    expect(partial.isJsonComplete).toBe(false)

    const complete = parseThemedContent(JSON.stringify(schema), true, true)
    expect(complete.isJsonComplete).toBe(true)
    expect(complete.content).toMatchObject({
      children: [
        { componentName: 'TinyHuichartsLine', props: { options: { theme: 'cloud-dark' } } },
        { componentName: 'Text' },
      ],
    })
  })
})

import { genPrompt } from '@opentiny/genui-sdk-core'
import { materialsMeta } from '@opentiny/genui-sdk-materials-vue-opentiny-vue/meta'
import { describe, expect, it } from 'vitest'
import { adjustAuthoringPrompt } from '../src/authoring-prompt.ts'

describe('adjustAuthoringPrompt', () => {
  const prompt = adjustAuthoringPrompt(genPrompt('Vue', materialsMeta))

  it('stops requiring a schemaJson card for every reply', () => {
    expect(prompt).not.toContain('除了 schemaJson 之外，不要生成其他任何内容')
    expect(prompt).not.toContain('如果有信息要展示，请主动生成卡片')
    expect(prompt).toContain('直接用文字回答')
    expect(prompt).toContain('需要生成卡片时，根据用户输入挑选合适的组件')
  })

  it('forbids claiming an action ran when it did not', () => {
    expect(prompt).toContain('禁止在 schemaJson 中断言未实际执行的动作')
    expect(prompt).toContain('待执行')
  })

  it('requires sample data to be labeled inside the card', () => {
    expect(prompt).not.toContain('可以使用Mock数据来完成会话')
    expect(prompt).toContain('标注「示例数据」')
  })
})

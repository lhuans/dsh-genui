import { genPrompt } from '@opentiny/genui-sdk-core'
import {
  materialsMeta,
  miniMaterialsMeta,
  plusMaterialsMeta,
} from '@opentiny/genui-sdk-materials-vue-opentiny-vue/meta'
import { describe, expect, it } from 'vitest'
import { adjustAuthoringPrompt } from '../src/authoring-prompt.ts'

const tiers = {
  mini: adjustAuthoringPrompt(genPrompt('Vue', miniMaterialsMeta)),
  standard: adjustAuthoringPrompt(genPrompt('Vue', materialsMeta)),
  plus: adjustAuthoringPrompt(genPrompt('Vue', plusMaterialsMeta)),
}

describe('adjustAuthoringPrompt', () => {
  it('stops requiring a schemaJson card for every tier', () => {
    for (const prompt of Object.values(tiers)) {
      expect(prompt).not.toContain('除了 schemaJson 之外，不要生成其他任何内容')
      expect(prompt).not.toContain('如果有信息要展示，请主动生成卡片')
      expect(prompt).toContain('直接用文字回答')
      expect(prompt).toContain('需要生成卡片时，根据用户输入挑选合适的组件')
    }
  })

  it('forbids claiming an action ran when it did not', () => {
    expect(tiers.standard).toContain('禁止在 schemaJson 中断言未实际执行的动作')
    expect(tiers.standard).toContain('待执行')
  })

  it('requires sample data to be labeled inside the card', () => {
    expect(tiers.standard).not.toContain('可以使用Mock数据来完成会话')
    expect(tiers.standard).toContain('标注「示例数据」')
  })

  it('keeps plus-only components out of the mini prompt', () => {
    expect(tiers.mini).not.toContain('TinyTree')
    expect(tiers.plus).toContain('TinyTree')
  })
})

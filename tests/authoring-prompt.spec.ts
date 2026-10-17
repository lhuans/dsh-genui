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

  it('keeps "make me a calculator" a card, inside the block that overrides it', () => {
    // Field report, twice: "生成一个计算器" — the plugin's own README example —
    // produced calculator.html. The exception was in the task block, which the
    // prompt's own conflict rule lets the highest-priority block override, so
    // the code-gets-text rule won. It has to sit in the same block, after it.
    const block = prompt.slice(prompt.indexOf('最高优先级规则'))
    const codeRule = block.indexOf('写代码、排查问题、执行命令')
    const exception = block.indexOf('能直接用的东西')
    expect(codeRule).toBeGreaterThan(-1)
    expect(exception, '例外必须在最高优先级块里、且排在那条规则之后').toBeGreaterThan(codeRule)
    expect(block).toContain('不要写代码文件')
  })

  it('stops asking for the mount hook the renderer policy removes', () => {
    expect(prompt).toContain('不要使用 lifeCycles')
    expect(prompt).toContain('需要初始化数据就把值直接写在 state 里')
  })

  it('requires sample data to be labeled inside the card', () => {
    expect(prompt).not.toContain('可以使用Mock数据来完成会话')
    expect(prompt).toContain('标注「示例数据」')
  })
})

const TASK_BLOCK = `# 任务说明

仔细阅读以下内容，并根据上下文信息生成一个卡片的 schemaJSON。

**重要：** 除了 schemaJson 之外，不要生成其他任何内容。`

const TASK_REPLACEMENT = `# 任务说明

按任务类型选择输出格式：

- 需要卡片时：任务适合用卡片、图表、表格、表单来展示数据、展示结构化信息或收集输入，或用户明确要求生成卡片时，只输出一个 \`\`\`schemaJson 代码块，代码块前后不添加额外说明。
- 不需要卡片时：写代码、排查问题、执行命令、解释原理、日常问答、方案讨论等普通任务，直接用文字回答，不要输出 schemaJson，也不要把文字内容塞进卡片里。
- 不要为了满足格式把普通回答改写成卡片，也不要生成只有标题没有内容的空卡片。`

const COMPONENT_LINE = '根据用户输入，挑选合适的组件生成对应卡片的 schemaJSON。请尽量使用丰富的 UI 组件生成漂亮的卡片。'

const COMPONENT_REPLACEMENT = '需要生成卡片时，根据用户输入挑选合适的组件生成对应卡片的 schemaJSON。请尽量使用丰富的 UI 组件生成漂亮的卡片。'

const MOCK_LINE = '- 如果上下文或者工具调用结果中没有可用数据，可以使用Mock数据来完成会话'

const MOCK_REPLACEMENT = '- 如果上下文或者工具调用结果中没有可用数据，可以使用 Mock 数据来完成会话，但必须在卡片内用可见文字标注「示例数据」'

const PRIORITY_LINES = `- 如果有信息要展示，请主动生成卡片
- 如果需要用户提供更多信息补充，请主动生成表单卡片`

const PRIORITY_REPLACEMENT = `- 只有适合用卡片展示的信息才生成卡片；写代码、排查问题、执行命令、解释原理、日常问答直接用文字回答，不要输出 schemaJson
- 需要用户补充信息且适合用表单收集时，再生成表单卡片；不适合时直接用文字追问
- 禁止在 schemaJson 中断言未实际执行的动作（如「已验证」「已安装」「已生效」）；未执行的只能写「待执行」`

/**
 * Rewrite the stock GenUI authoring prompt.
 * The SDK marks "emit only schemaJson" and "always make a card" as highest
 * priority, so later rules cannot override them. The replacements sit in
 * those same sentences.
 * @param prompt - text returned by `genPrompt`.
 * @returns Prompt text whose card rules no longer hijack ordinary replies.
 */
export function adjustAuthoringPrompt(prompt: string): string {
  return prompt
    .replace(TASK_BLOCK, TASK_REPLACEMENT)
    .replace(COMPONENT_LINE, COMPONENT_REPLACEMENT)
    .replace(MOCK_LINE, MOCK_REPLACEMENT)
    .replace(PRIORITY_LINES, PRIORITY_REPLACEMENT)
}

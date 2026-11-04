export type Locale = 'en' | 'zh'

export interface Messages {
  nav: {
    github: string
    npm: string
    langToggle: string
  }
  hero: {
    titleBefore: string
    titleAccent: string
    titleAfter: string
    subtitle: string
    installHint: string
    copy: string
    copied: string
  }
  tags: string[]
  examples: {
    title: string
    calculator: { title: string; desc: string }
    form: { title: string; desc: string }
    chart: { title: string; desc: string }
    dashboard: { title: string; desc: string }
  }
  compare: {
    title: string
    headers: [string, string, string]
    rows: [string, string, string][]
  }
  features: {
    title: string
    items: { title: string; desc: string; prompt: string }[]
  }
  howItWorks: {
    title: string
    body: string
  }
  install: {
    title: string
    steps: string[]
    enable: string
    toggleImageAlt: string
    verify: string
    remove: string
  }
  faq: {
    title: string
    items: { q: string; a: string }[]
  }
  footer: {
    license: string
    links: string
  }
}

export const en: Messages = {
  nav: {
    github: 'GitHub',
    npm: 'npm',
    langToggle: '中文',
  },
  hero: {
    titleBefore: 'Generative UI ',
    titleAccent: 'inside',
    titleAfter: ' DeepSeek Harness',
    subtitle:
      'Turn AI replies from a wall of text into interfaces you can click — charts, forms, calculators, and mini apps rendered inline, with actions flowing back to the conversation.',
    installHint:
      'Then restart `dsh web`, refresh the browser, and say "generate a calculator" to see it live.',
    copy: 'Copy',
    copied: 'Copied!',
  },
  tags: [
    'Charts',
    'Forms',
    'Calculators',
    'Dashboards',
    'Tables',
    'Workflows',
    'OpenTiny GenUI',
    'DSH Plugin',
  ],
  examples: {
    title: 'Real examples',
    calculator: {
      title: '"Generate a calculator"',
      desc: 'Every key works — digits, operators, parentheses, backspace, clear. The result was typed on the keypad, not written by the model.',
    },
    form: {
      title: '"Generate a form"',
      desc: 'One sentence produces a full proposal form with validation, radios, dropdowns, date picker, toggles, and submit — answers flow back to the AI.',
    },
    chart: {
      title: '"Show traffic as a line chart"',
      desc: 'Two series, legend, axes, gridlines — a rendered chart inside the reply, not ASCII art.',
    },
    dashboard: {
      title: '"Mock a dashboard"',
      desc: 'A generated dashboard follows the dark DSH surface, so charts, labels, and legends stay readable.',
    },
  },
  compare: {
    title: 'Before and after',
    headers: ['Situation', 'Plain chat', 'With dsh-genui'],
    rows: [
      ['You need a tool', 'The AI hands you code to run', 'The tool appears in the reply'],
      ['Collecting input', 'Eight items typed one by one', 'One form: pick, fill, submit'],
      ['Reading data', 'Text tables, trends imagined', 'Lines, bars, pies — obvious at a glance'],
      ['Making a choice', 'You reply "option B"', 'Click a button, choice carries forward'],
      ['Setup cost', '—', 'One command, no source changes'],
    ],
  },
  features: {
    title: 'What you can ask for',
    items: [
      {
        title: 'Data: charts',
        desc: 'Bar, line, pie, radar, gauge, funnel, scatter, waterfall, and more.',
        prompt: '"Chart revenue for the last three quarters as bars"',
      },
      {
        title: 'Input: forms',
        desc: 'Text fields, dropdowns, radios, checkboxes, toggles, date pickers — submitted values return automatically.',
        prompt: '"Make a time-off request form with leave type and dates"',
      },
      {
        title: 'Tools: mini apps',
        desc: 'Calculators, converters, to-do lists, raffles — one sentence, something that actually works.',
        prompt: '"Generate a calculator"',
      },
      {
        title: 'Structure: tables & layout',
        desc: 'Tables with paging, timelines, tabs, cards, tree views, and collapsible panels.',
        prompt: '"Compare these options in a table with price and risk columns"',
      },
      {
        title: 'Workflows: multi-turn',
        desc: 'Clicks and submissions flow back into the conversation for guided flows.',
        prompt: '"Give me three options as cards — expand whichever I click"',
      },
    ],
  },
  howItWorks: {
    title: 'How it works',
    body: 'The plugin adds a prompt that teaches the model to output structured JSON in `schemaJson` code blocks when a UI helps. The composer sparkle menu is labeled 关闭, 精简, 标准, and 全量, and starts on 标准. Hover an item to see what it includes. DSH renders that JSON into real components via OpenTiny GenUI SDK — streaming as the model writes, and keeping already rendered cards visible if generation is paused. Components are whitelisted; no arbitrary HTML or scripts.',
  },
  install: {
    title: 'Install',
    steps: [
      'Node.js and pnpm installed (`corepack enable` or `npm i -g pnpm`)',
      'DSH running: `npx @deepseek-ai/dsh web` → http://127.0.0.1:3080',
      'Run the install command above in a new terminal',
      'Stop DSH (Ctrl+C), restart with `dsh web`, refresh browser, open a new session',
    ],
    enable: 'GenUI authoring starts on 标准 and remembers your last choice after DSH restarts. Use the sparkle menu in the composer tool row to pick 关闭, 精简, 标准, or 全量. Hover an item for a short explanation. Card rendering stays installed.',
    toggleImageAlt: 'DSH composer showing the sparkle menu for GenUI prompt modes.',
    verify: 'In a new session, say "generate a calculator". If keys appear and work, you\'re set.',
    remove: 'Remove: `dsh plugin --profile web remove dsh-genui` (restart required).',
  },
  faq: {
    title: 'FAQ',
    items: [
      {
        q: 'Still seeing code blocks?',
        a: 'Check the sparkle menu first, then the restart. Stop DSH, restart, refresh, and open a new session.',
      },
      {
        q: 'pnpm not found?',
        a: 'Run `corepack enable` or `npm i -g pnpm`, then open a fresh terminal.',
      },
      {
        q: 'AI not using UI by default?',
        a: '标准 is the default. If it gets stuck on text, pick 精简, 标准, or 全量 in the sparkle menu, then ask: "answer with a chart/form/interface".',
      },
      {
        q: 'Breaks plain text replies?',
        a: 'No. Text-only answers work exactly as before.',
      },
      {
        q: 'What happens if I pause a reply?',
        a: 'Cards that have already rendered stay on screen. They do not turn back into incomplete JSON.',
      },
      {
        q: 'Does it match the DSH theme?',
        a: 'Yes. Both light and dark themes are supported.',
      },
    ],
  },
  footer: {
    license: 'MIT · dsh-genui',
    links: 'OpenTiny GenUI · DeepSeek Harness · Plugin Market',
  },
}

export const zh: Messages = {
  nav: {
    github: 'GitHub',
    npm: 'npm',
    langToggle: 'English',
  },
  hero: {
    titleBefore: '生成式 UI，',
    titleAccent: '嵌入',
    titleAfter: ' DeepSeek Harness',
    subtitle:
      '让 AI 的回答从「一段文字」变成「能点的界面」—— 图表、表单、计算器、小应用直接在对话里渲染，你的操作自动回到下一轮对话。',
    installHint:
      '然后重启 `dsh web`，刷新浏览器，说一句「生成一个计算器」即可看到效果。',
    copy: '复制',
    copied: '已复制！',
  },
  tags: [
    '图表',
    '表单',
    '计算器',
    '仪表盘',
    '表格',
    '多轮交互',
    'OpenTiny GenUI',
    'DSH 插件',
  ],
  examples: {
    title: '真实例子',
    calculator: {
      title: '说「生成一个计算器」',
      desc: '数字键、四则运算、括号、退格、清空都能按。算出来的结果是真按出来的，不是 AI 写在文字里的。',
    },
    form: {
      title: '说「生成一个表单」',
      desc: '一句话生成整张立项申请表：必填校验、单选、下拉、日期、开关、多选、长文本，填完提交后内容回到对话。',
    },
    chart: {
      title: '说「用折线图展示访问量」',
      desc: '双折线、图例、坐标轴、网格线 —— 渲染出来的图，不是字符画。',
    },
    dashboard: {
      title: '说「mock 一个大屏看板」',
      desc: '生成的看板会跟随 DSH 暗色界面，图表、文字和图例保持清晰可读。',
    },
  },
  compare: {
    title: '装之前 vs 装之后',
    headers: ['场景', '普通对话', '装了 dsh-genui'],
    rows: [
      ['要一个工具', 'AI 给你一段代码，自己去跑', '工具直接出现在回答里，当场能用'],
      ['收集信息', '列出 8 项，你一条条打字', '一张表单，选完填完点提交'],
      ['看数据', '文本表格，趋势靠脑补', '折线、柱状、饼图，一眼看出走势'],
      ['做选择', '你回一句「我选 B」', '点一下按钮，选择自动进入下一轮'],
      ['接入成本', '—', '一行命令，不动 DSH 源码'],
    ],
  },
  features: {
    title: '你可以让它做什么',
    items: [
      {
        title: '看数据：图表',
        desc: '柱状图、折线图、饼图、雷达图、仪表盘、漏斗图、散点图、瀑布图等。',
        prompt: '「把这三个季度的营收画成柱状图」',
      },
      {
        title: '收信息：表单',
        desc: '输入框、下拉、单选、多选、开关、日期选择 —— 提交后内容自动回到对话。',
        prompt: '「生成一张请假申请表」',
      },
      {
        title: '做工具：小应用',
        desc: '计算器、BMI 换算、汇率工具、待办清单 —— 一句话造个能用的小东西。',
        prompt: '「生成一个计算器」',
      },
      {
        title: '理内容：表格与结构',
        desc: '带分页搜索的表格、时间线、标签页、卡片、树形目录、折叠面板。',
        prompt: '「把几个方案做成对比表」',
      },
      {
        title: '走流程：多轮交互',
        desc: '界面上的操作回到对话里，可以做「你点一下、我接着干」的流程。',
        prompt: '「给我三个方案做成卡片，点哪个就展开哪个」',
      },
    ],
  },
  howItWorks: {
    title: '它是怎么做到的',
    body: '插件给模型加一段提示词，教它在需要时输出结构化 JSON（写在 `schemaJson` 代码块里）；输入框里的星形菜单选择关闭、精简、标准或全量，默认是标准。悬停选项可看这一档包含什么。DSH 网页端拿到 JSON 后，通过 OpenTiny GenUI SDK 渲染成真实组件，流式输出，写到哪渲染到哪。如果中途暂停，已经渲染出的卡片会保留在界面上。组件来自白名单，塞不进 HTML 或脚本。',
  },
  install: {
    title: '怎么装',
    steps: [
      '装好 Node.js 和 pnpm（`corepack enable` 或 `npm i -g pnpm`）',
      'DSH 能跑起来：`npx @deepseek-ai/dsh web` → http://127.0.0.1:3080',
      '在新终端执行上面的安装命令',
      '回到 DSH 终端 Ctrl+C 停掉，重新 `dsh web`，刷新浏览器，开新会话',
    ],
    enable: 'GenUI 提示词默认是「标准」，并会记住你上一次的选择，DSH 重启后保持不变。输入框工具行里的星形菜单可选关闭、精简、标准、全量，悬停可看说明；卡片渲染能力始终保留。',
    toggleImageAlt: 'DSH 输入框截图：星形菜单用于选择 GenUI 提示词档位。',
    verify: '在新会话里说「生成一个计算器」。如果出现能按的计算器，就成了。',
    remove: '卸载：`dsh plugin --profile web remove dsh-genui`（同样需要重启）。',
  },
  faq: {
    title: '常见问题',
    items: [
      {
        q: '装完还是显示成代码块？',
        a: '先检查星形菜单，再检查重启。停服务 → 重启 → 刷新 → 开新会话。',
      },
      {
        q: '提示 pnpm not found？',
        a: '执行 `corepack enable` 后新开一个终端再试。',
      },
      {
        q: 'AI 不主动用界面？',
        a: 'GenUI 提示词默认是「标准」。如果它一直用文字回答，先把星形菜单改成精简、标准或全量，再说「用界面/表单/图表的方式给我」。',
      },
      {
        q: '会不会影响原来的用法？',
        a: '不会，不需要界面的问题照常用文字回答。',
      },
      {
        q: '中途暂停回复会怎样？',
        a: '已经渲染出来的卡片会保留在界面上，不会退回成不完整的 JSON。',
      },
      {
        q: '会跟随 DSH 主题吗？',
        a: '会，亮色和暗色主题都已适配。',
      },
    ],
  },
  footer: {
    license: 'MIT · dsh-genui',
    links: 'OpenTiny GenUI · DeepSeek Harness · 插件市场',
  },
}

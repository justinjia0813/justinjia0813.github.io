export interface ToolItem {
  name: string
  lang: string
  desc: string
  url: string
}

// 手动维护的工具/项目列表。新增项目时追加一条即可。
// 数据来源：https://github.com/justinjia0813?tab=repositories
export const tools: ToolItem[] = [
  {
    name: "jvc-analyst",
    lang: "Python",
    desc: "本地优先（local-first）的一级市场早期投资尽职调查工具包，面向中国市场的标的分析。",
    url: "https://github.com/justinjia0813/jvc-analyst",
  },
  {
    name: "meeting-notes",
    lang: "Python",
    desc: "AI 会议转写 + 随笔，一键生成结构化访谈纪要（Word 文档）。",
    url: "https://github.com/justinjia0813/meeting-notes",
  },
  {
    name: "invoice-manager",
    lang: "Python",
    desc: "OCR 识别 PDF 发票，按模板生成报销汇总表，并按行程自动归档。",
    url: "https://github.com/justinjia0813/invoice-manager",
  },
  {
    name: "weeklens",
    lang: "Python",
    desc: "周度复盘与阅读聚合工具，把一周的信息透镜压缩成可回看的结构。",
    url: "https://github.com/justinjia0813/weeklens",
  },
  {
    name: "oh-my-waist",
    lang: "Shell",
    desc: "久坐提醒脚本，守护长时间编码的你的腰。",
    url: "https://github.com/justinjia0813/oh-my-waist",
  },
  {
    name: "digital-person-skill",
    lang: "Python",
    desc: "数字人 Agent 技能包，沉淀可复用的个人工作流。",
    url: "https://github.com/justinjia0813/digital-person-skill",
  },
  {
    name: "ai-zhiyuan-consulting",
    lang: "Python",
    desc: "AI 咨询相关项目（智源 consulting）。",
    url: "https://github.com/justinjia0813/ai-zhiyuan-cosulting",
  },
]

// 站点本体仓库（用于「工具」板块展示，可按需移除）
export const siteRepo: ToolItem = {
  name: "justinjia0813.github.io",
  lang: "TypeScript",
  desc: "本站的源码（Quartz v4 静态站点）。",
  url: "https://github.com/justinjia0813/justinjia0813.github.io",
}

// 渲染「工具」板块时使用的数据（站点仓库置于末尾）
export const allTools: ToolItem[] = [...tools, siteRepo]

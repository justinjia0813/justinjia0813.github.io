export interface ToolItem {
  name: string
  lang: string
  desc: string
  url: string
  linkLabel?: string
}

export const allTools: ToolItem[] = [
  {
    name: "dottify",
    lang: "Live Site",
    desc: "论点拆解与证据验证工作台，把复杂判断拆到可验证的原子并回传置信度。",
    url: "https://dottify-20260717.justinjia0813.chatgpt.site",
    linkLabel: "Live Site",
  },
  {
    name: "VCagents",
    lang: "Live Site",
    desc: "面向国内一级市场的双向意向匹配演示，支持投资人与项目方双角色体验。",
    url: "https://vcagents-20260715.justinjia0813.chatgpt.site",
    linkLabel: "Live Site",
  },
  {
    name: "jvc-analyst",
    lang: "Python",
    desc: "本地优先（local-first）的一级市场早期投资尽职调查工具包，面向中国市场的标的分析。",
    url: "https://github.com/justinjia0813/jvc-analyst",
  },
  {
    name: "digital-person-skill",
    lang: "Python",
    desc: "数字人 Agent 技能包，沉淀可复用的个人工作流。",
    url: "https://github.com/justinjia0813/digital-person-skill",
  },
  {
    name: "oh-my-waist",
    lang: "Shell",
    desc: "久坐提醒脚本，守护长时间编码的你的腰。",
    url: "https://github.com/justinjia0813/oh-my-waist",
  },
]

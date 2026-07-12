export interface ToolItem {
  name: string
  lang: string
  desc: string
  url: string
}

export const allTools: ToolItem[] = [
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

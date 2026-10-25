export interface ResearchIssue {
  /** Issue number within the Justified Research column */
  issue: string
  title: string
  subtitle: string
  topic: string
  date: string
  abstract: string
  /** Paths relative to the site root (no leading slash) */
  htmlPath: string
  cover?: string
  kpis?: [string, string][]
}

export const researchIssues: ResearchIssue[] = [
  {
    issue: "No. 02",
    title: "谁拥有标签，飞轮就在谁那里",
    subtitle: "AI4M 的数据、模型、飞轮与自主实验室 · 学习笔记",
    topic: "AI4M · 概念框架",
    date: "2026-10",
    abstract:
      "AI4M 的竞争正在从「谁的模型更好」转向「谁拥有带标签的真实数据」。公开与计算数据变成人人都有的底座，通用原子模型被开源拉平；可留存的价值在私有数据校准的专用模型、承载领域规则与验证器的 harness，以及能低成本生产带过程与失败数据的自主实验室。",
    htmlPath: "research/ai4m/02/",
    cover: "static/research/ai4m-02-flywheel.png",
    kpis: [
      ["3", "条正交轴给数据定位"],
      ["6", "层技术栈，从大模型到执行层"],
      ["2", "个飞轮，只有一个必然转得起来"],
      ["7", "个自主实验室壁垒"],
    ],
  },
  {
    issue: "No. 01",
    title: "AI for Materials：从“算得准”到“做得出”",
    subtitle: "AI4M（AI for Materials，AI 驱动材料研发）行业深度研究",
    topic: "AI4M · 行业深度",
    date: "2026-10",
    abstract:
      "AI4M 的价值正在从“算得准”迁移到“做得出、测得准、能复现”。模型层已经被开源和大厂做成公共品，护城河落在自主实验室、专有实验数据、场景 know-how 和放大验证上。报告覆盖技术路线、应用场景、产业链与商业模式、市场规模测算、竞争格局、融资估值与投资框架，建议按“材料公司 + AI”的逻辑看待这一赛道。",
    htmlPath: "research/ai4m/",
    cover: "static/research/ai4m-prometheus.png",
    kpis: [
      ["45.1 亿元", "中国 AI4M 对外市场 2030E（中性）"],
      ["57%", "2026–2030E CAGR"],
      ["~11.3 亿美元", "海外 AI4M 已确认融资（2025）"],
    ],
  },
]

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
    issue: "No. 03",
    title: "材料 AI 的算法地图与未来三年的演进",
    subtitle: "AI for Materials 的核心算法与趋势",
    topic: "AI4M · 算法与趋势",
    date: "2026-11",
    abstract:
      "材料 AI 的算法可以按六类映射来组织：势能面、性质预测、电子结构、逆向设计、合成规划和序贯决策，大语言模型横跨其中。2024 到 2026 年进展最快的是机器学习势和电子结构的机器学习，最慢的是合成规划；评价方法的变化在多个方向上比模型结构的变化更快。未来三年，对称性、精度阶梯和不确定性三件事会决定大多数方向的算法设计。",
    htmlPath: "research/ai4m/03/",
    cover: "static/research/ai4m-03-algorithms.png",
    kpis: [
      ["6", "类映射，组织材料 AI 的全部算法"],
      ["0.913", "Matbench Discovery 榜首综合分（2026-10-31）"],
      ["2.8", "kcal/mol，Skala 泛函在 GMTKN55 上的误差"],
      ["8", "条 2026–2028 年跨领域算法趋势"],
    ],
  },
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

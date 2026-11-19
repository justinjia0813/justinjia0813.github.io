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
    issue: "No. 06",
    title: "把太阳装进工程进度表：可控核聚变系统性研究",
    subtitle: "技术路线、全球与中国格局、供应链利润池、市场测算与投资判断",
    topic: "可控核聚变 · 行业深度",
    date: "2026-11",
    abstract:
      "可控核聚变在物理上已经越过“点火”门槛，但到 2026 年 11 月，全球还没有任何一台装置实现工程增益大于 1，也没有向电网送过一度电。未来五年这个行业花的钱，主要用来建实验装置和示范装置，并不用来卖电。中性情景下 2025–2030 年全球聚变设备市场每年约 300 亿元，中国约 110 亿元。建设期的利润集中在高温超导带材、回旋管与加热系统、大功率电源和燃料循环。2027 年是关键验证年：SPARC 能否做出磁约束 Q>1、BEST 能否如期建成，会决定此后几年的资本流向。",
    htmlPath: "research/fusion/",
    cover: "static/research/fusion-06.png",
    kpis: [
      ["0", "截至 2026-11 实现工程增益 Q_eng>1 的装置数"],
      ["~300 亿元", "2025–2030 年全球聚变设备市场年均规模（中性，本报告测算）"],
      ["44.8 亿美元", "私营聚变 12 个月新增融资（FIA 2026，创纪录）"],
      ["2027", "关键验证年：SPARC 冲击 Q>1，BEST 目标建成"],
    ],
  },
  {
    issue: "No. 05",
    title: "验证越快的地方，钱反而越少",
    subtitle: "AI for Science 全景：七个分支的技术、资本与价值留存",
    topic: "AI4S · 全景",
    date: "2026-11",
    abstract:
      "AI for Science 在 2024 到 2026 年从生物医药扩展到七个分支，进展速度主要由验证一次答案要花多长时间决定。闭环最快的气象和数学已经饱和或业务化，拿到的资金最少；闭环最慢的生物医药、材料和通用科学模型拿走了大部分资金。本报告整理的公开 AI4S 一级融资约 437 亿美元。投资人在买“用自建实验室把慢闭环变快”的期权，但更快的研发能否换成收入，到 2026 年 11 月还没有被证实。",
    htmlPath: "research/ai4s/",
    cover: "static/research/ai4s-05-landscape.png",
    kpis: [
      ["437 亿美元", "2023 年至 2026-11 公开 AI4S 一级融资（本报告整理）"],
      ["3.3%", "AI 药企合作首付款占公告总额的中位数"],
      ["3 亿美元", "气象分支同期一级融资，七个分支中最少"],
      ["7", "个分支放在同一张地图上比较"],
    ],
  },
  {
    issue: "No. 04",
    title: "把实验做成流水线：材料自动化实验室专题",
    subtitle: "AI for Materials 的后端：硬件、软件、测量、市场与格局",
    topic: "AI4M · 自动化实验室",
    date: "2026-11",
    abstract:
      "材料自动化实验室的闭环速度由测量和可靠性决定，机器人搬运只占很小一部分预算。2025 年全球材料与化学研发用自动化实验室市场约 13.2 亿元，中国约 2.2 亿元，规模远小于第三方\"实验室自动化\"报告给出的口径；中性情景下 2030 年全球约 36 亿元，中国约 11 亿元。中国的系统集成在公开中标中已由国产厂商承接，高端表征仪器仍以进口为主。未来三到五年，测量模块、编排软件和与中试衔接的能力，比整线集成更可能留住利润。",
    htmlPath: "research/ai4m/04/",
    cover: "static/research/ai4m-04-labs.png",
    kpis: [
      ["45%", "测试表征在一套国产电池材料自主实验室设备额中的占比"],
      ["13.2 亿元", "2025 年全球材料与化学研发用自动化实验室市场（本报告测算）"],
      ["38%", "中国 2025–2030 年中性情景年复合增速"],
      ["17%", "2026 年上半年国产 XRD 按中标金额的份额"],
    ],
  },
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

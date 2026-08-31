import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import cvLanguageScript from "./scripts/cvLanguage.inline"

type Language = "zh" | "en"

const copy = {
  zh: {
    name: "贾睿童",
    title: "硬科技分析师",
    focus: "聚焦 AI、能源与物质科学",
    intro:
      "具备材料科研与硬科技投资研究背景，持续关注人工智能、能源与物质科学。擅长从技术路线、产业链、竞争格局、商业模式与估值的交叉视角分析前沿产业，并参与从行业研判、项目筛选到投资决策与执行的完整流程。",
    experienceLabel: "任职档案",
    workLabel: "研究索引",
    researchLabel: "学术底稿",
    educationLabel: "教育经历",
    capabilitiesLabel: "分析方法",
    contactLabel: "联系",
    experience: [
      {
        period: "2024.07—2026.08",
        company: "广东华胥私募基金管理有限公司",
        role: "行业研究 / 分析师",
        bullets: [
          "覆盖新能源、半导体、新材料与人工智能，参与政策、产业、项目与技术路线研究。",
          "重点研究固态电池、可控核聚变、先进电池材料、半导体材料、大模型、人工智能基础设施与科学智能。",
          "参与项目挖掘、筛选、立项、投资决策与执行，支持亿元级资金部署。",
        ],
      },
      {
        period: "2023.05—2023.08",
        company: "江苏天汇红优投资管理有限公司",
        role: "行业研究实习生",
        bullets: [
          "覆盖新能源、半导体及相关新材料研究。",
          "参与科研文献、市场格局、创新技术与投融资动态分析，并支持项目访谈、跟进和执行。",
        ],
      },
    ],
    work: [
      {
        id: "R-01",
        title: "DeepSeek 投资分析",
        status: "立项",
        subject: "前沿大模型公司及其投资价值",
        question: "技术路线、模型能力和训练成本能否形成持续优势",
        analysis: "模型能力、训练与推理成本、竞争格局、商业模式和估值",
      },
      {
        id: "R-02",
        title: "AI for Materials",
        status: "投委会 / 参与孵化",
        subject: "人工智能在材料研发中的产业机会与代表公司",
        question: "能力边界、实验闭环和商业模式能否形成可交付的研发系统",
        analysis: "技术路线、数据与工具链、竞争格局、商业模式和估值",
      },
      {
        id: "R-03",
        title: "AI 芯片散热材料",
        status: "立项",
        subject: "人工智能芯片算力提升带来的先进散热材料机会",
        question: "不同材料路线如何解决封装与系统级热管理瓶颈",
        analysis: "热界面材料、封装散热材料和金刚石散热路线",
      },
      {
        id: "R-04",
        title: "AI 基础设施能源侧研究",
        status: "持续研究",
        subject: "人工智能基础设施的电力供给与能源技术",
        question: "高功率、稳定性和部署周期如何改变能源技术选择",
        analysis: "燃气轮机、储能、固体氧化物燃料电池、小型模块化反应堆和可控核聚变",
      },
    ],
    research: [
      {
        period: "2021.03—2022.03",
        title: "树枝化聚合物拓扑结构对温敏行为与微限域效应的研究",
        text: "合成不同寡聚乙二醇支化密度的树枝化聚合物，研究拓扑结构与温敏行为、微限域效应之间的关系；以共同作者身份在 Macromolecules 发表论文一篇。",
      },
      {
        period: "2022.09—2025.06",
        title: "仿生智能材料在软体机器人领域的应用",
        text: "通过动态共价交联构筑温敏手性水凝胶，研究冷冻交联、可压缩形变、溶剂编程与导电开关响应；以第一作者或共同作者身份在 European Polymer Journal 发表论文一篇。",
      },
    ],
    education: [
      "上海大学 · 应用化学 · 本科 · 2018—2022",
      "上海大学 · 高分子化学与物理 · 硕士 · 2022—2025",
    ],
    capabilities: [
      ["技术判断", "技术路线 · 能力边界 · 关键瓶颈 · 可制造性"],
      ["产业研究", "产业链拆解 · 竞争格局 · 市场与政策 · 商业模式"],
      ["投资分析", "项目筛选 · 估值 · 立项与投委会材料 · 投资执行支持"],
      ["研究工作流", "英文论文与产业资料 · 人工智能原生研究工具与工作流"],
    ],
    credential: "基金从业资格",
    contact: "如果你也在研究人工智能、能源或物质科学，欢迎交流。",
  },
  en: {
    name: "Justin Jia",
    title: "Hard-Tech Analyst",
    focus: "Focused on AI, Energy & Materials Science",
    intro:
      "A hard-tech analyst with a background in materials research and private-market investing. I evaluate frontier industries across technology routes, value chains, competitive structure, business models and valuation, and have worked across research, screening, investment decisions and execution.",
    experienceLabel: "Experience",
    workLabel: "Selected Work",
    researchLabel: "Research & Publications",
    educationLabel: "Education",
    capabilitiesLabel: "Capabilities",
    contactLabel: "Contact",
    experience: [
      {
        period: "2024.07—2026.08",
        company: "广东华胥私募基金管理有限公司",
        role: "Industry Research / Analyst",
        bullets: [
          "Covered new energy, semiconductors, advanced materials and artificial intelligence across policy, industry, project and technology-route research.",
          "Focused on solid-state batteries, fusion, battery and semiconductor materials, foundation models, AI infrastructure and AI for Science.",
          "Contributed to sourcing, screening, project initiation, investment decisions and execution supporting approximately 100 million yuan of capital deployment.",
        ],
      },
      {
        period: "2023.05—2023.08",
        company: "江苏天汇红优投资管理有限公司",
        role: "Industry Research Intern",
        bullets: [
          "Researched new energy, semiconductors and related advanced materials.",
          "Supported literature review, market and competitive analysis, technology tracking, project interviews and execution.",
        ],
      },
    ],
    work: [
      {
        id: "R-01",
        title: "DeepSeek Investment Analysis",
        status: "Initiated",
        subject: "Investment value of a frontier foundation-model company",
        question:
          "Whether its technology route, model capability and training economics could sustain an advantage",
        analysis:
          "Model capability, training and inference cost, competition, business model and valuation",
      },
      {
        id: "R-02",
        title: "AI for Materials",
        status: "Investment Committee / Incubation",
        subject:
          "Industrial opportunities and representative companies in AI-enabled materials research",
        question:
          "Whether capability boundaries, experimental loops and business models form a deliverable research system",
        analysis: "Technology routes, data and toolchains, competition, business model and valuation",
      },
      {
        id: "R-03",
        title: "Thermal Materials for AI Chips",
        status: "Initiated",
        subject: "Advanced thermal materials created by rising AI-chip compute density",
        question: "How material routes address packaging and system-level thermal bottlenecks",
        analysis: "Thermal interface materials, packaging materials and diamond-based thermal routes",
      },
      {
        id: "R-04",
        title: "Energy for AI Infrastructure",
        status: "Ongoing Research",
        subject: "Power supply and energy technologies for AI infrastructure",
        question: "How power density, reliability and deployment time reshape technology choices",
        analysis:
          "Gas turbines, storage, solid oxide fuel cells, small modular reactors and fusion",
      },
    ],
    research: [
      {
        period: "2021.03—2022.03",
        title: "Dendritic Polymer Topology, Thermoresponsive Behavior and Microconfinement",
        text: "Synthesized dendritic polymers with different oligoethylene-glycol branching densities and studied their structure–property relationships; co-authored one paper in Macromolecules.",
      },
      {
        period: "2022.09—2025.06",
        title: "Biomimetic Smart Materials for Soft Robotics",
        text: "Built thermoresponsive chiral hydrogels through dynamic covalent crosslinking and studied compressibility, solvent programming and conductive switching; first or co-author of one paper in European Polymer Journal.",
      },
    ],
    education: [
      "Shanghai University · Bachelor of Science in Applied Chemistry · 2018—2022",
      "Shanghai University · Master of Science in Polymer Chemistry and Physics · 2022—2025",
    ],
    capabilities: [
      [
        "Technology",
        "Technology routes · Capability boundaries · Bottlenecks · Manufacturability",
      ],
      [
        "Industry",
        "Value chains · Competitive structure · Markets and policy · Business models",
      ],
      [
        "Investment",
        "Screening · Valuation · Initiation and investment-committee materials · Execution support",
      ],
      [
        "Research Workflow",
        "English literature and industry research · AI-native tools and workflows",
      ],
    ],
    credential: "Fund practitioner qualification",
    contact:
      "If you are also working on artificial intelligence, energy or materials science, let’s connect.",
  },
} as const

const renderLanguage = (language: Language) => {
  const text = copy[language]
  const sectionLink = (id: string) => `#${language}-${id}`

  return (
    <div class="jvc-cv-language" data-language-content={language} hidden={language === "en"}>
      <aside class="jvc-cv-sidebar">
        <p class="jvc-cv-file">JVC-CV / 2026 / 01</p>
        <h1 class="jvc-cv-name">{text.name}</h1>
        <p class="jvc-cv-role">{text.title}</p>
        <p class="jvc-cv-focus">{text.focus}</p>
        <div class="jvc-cv-domains" aria-label="Focus areas">
          <span>AI</span>
          <span>ENERGY</span>
          <span>MATERIALS SCIENCE</span>
        </div>
        <nav class="jvc-cv-index" aria-label={language === "zh" ? "履历章节" : "CV sections"}>
          <a href={sectionLink("experience")}>01 {text.experienceLabel}</a>
          <a href={sectionLink("work")}>02 {text.workLabel}</a>
          <a href={sectionLink("research")}>03 {text.researchLabel}</a>
          <a href={sectionLink("education")}>04 {text.educationLabel}</a>
          <a href={sectionLink("capabilities")}>05 {text.capabilitiesLabel}</a>
          <a href={sectionLink("contact")}>06 {text.contactLabel}</a>
        </nav>
      </aside>

      <main class="jvc-cv-main">
        <section class="jvc-cv-intro">
          <p>{text.intro}</p>
        </section>

        <section class="jvc-cv-section" id={`${language}-experience`}>
          <p class="jvc-cv-section-label">01 / {text.experienceLabel}</p>
          {text.experience.map((entry) => (
            <article class="jvc-cv-entry" key={`${language}-${entry.company}`}>
              <div class="jvc-cv-entry-meta">
                <time>{entry.period}</time>
                <span>{entry.role}</span>
              </div>
              <div>
                <h2>{entry.company}</h2>
                <ul>
                  {entry.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </section>

        <section class="jvc-cv-section" id={`${language}-work`}>
          <p class="jvc-cv-section-label">02 / {text.workLabel}</p>
          {text.work.map((project) => (
            <article class="jvc-cv-project" key={`${language}-${project.id}`}>
              <p class="jvc-cv-project-id">{project.id}</p>
              <div>
                <h2>{project.title}</h2>
                <dl>
                  <dt>{language === "zh" ? "研究对象" : "Subject"}</dt>
                  <dd>{project.subject}</dd>
                  <dt>{language === "zh" ? "核心问题" : "Question"}</dt>
                  <dd>{project.question}</dd>
                  <dt>{language === "zh" ? "分析维度" : "Analysis"}</dt>
                  <dd>{project.analysis}</dd>
                </dl>
              </div>
              <p class="jvc-cv-stamp">{project.status}</p>
            </article>
          ))}
        </section>

        <section class="jvc-cv-section" id={`${language}-research`}>
          <p class="jvc-cv-section-label">03 / {text.researchLabel}</p>
          {text.research.map((item) => (
            <article class="jvc-cv-research" key={`${language}-${item.title}`}>
              <time>{item.period}</time>
              <div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </section>

        <section class="jvc-cv-section" id={`${language}-education`}>
          <p class="jvc-cv-section-label">04 / {text.educationLabel}</p>
          <ul class="jvc-cv-education">
            {text.education.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section class="jvc-cv-section" id={`${language}-capabilities`}>
          <p class="jvc-cv-section-label">05 / {text.capabilitiesLabel}</p>
          <div class="jvc-cv-capabilities">
            {text.capabilities.map(([title, detail]) => (
              <div key={`${language}-${title}`}>
                <h2>{title}</h2>
                <p>{detail}</p>
              </div>
            ))}
          </div>
          <p class="jvc-cv-credential">{text.credential}</p>
        </section>

        <section class="jvc-cv-section jvc-cv-contact" id={`${language}-contact`}>
          <p class="jvc-cv-section-label">06 / {text.contactLabel}</p>
          <p>{text.contact}</p>
          <a href="mailto:justinjia0813@gmail.com">justinjia0813@gmail.com</a>
        </section>
      </main>
    </div>
  )
}

export default (() => {
  const CVPage: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    if (fileData.slug !== "cv") return null

    return (
      <div class="jvc-cv">
        <div class="jvc-cv-toolbar">
          <a href="../">← JVC Notes</a>
          <div class="jvc-cv-language-switch" aria-label="Language">
            <button type="button" data-cv-lang="zh" aria-pressed="true">中文</button>
            <span>/</span>
            <button type="button" data-cv-lang="en" aria-pressed="false">EN</button>
          </div>
        </div>
        {renderLanguage("zh")}
        {renderLanguage("en")}
      </div>
    )
  }

  CVPage.afterDOMLoaded = cvLanguageScript
  return CVPage
}) satisfies QuartzComponentConstructor

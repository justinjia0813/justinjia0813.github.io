import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import cvLanguageScript from "./scripts/cvLanguage.inline"

type Language = "zh" | "en"

const copy = {
  zh: {
    name: "贾睿童",
    title: "硬科技分析师",
    focus: "聚焦 AI、能源与物质科学",
    shortIntro:
      "材料科研与硬科技投资复合背景，关注技术如何从实验室进入产业，并最终形成可投资的商业价值。",
    contactLabel: "联系信息",
    experienceLabel: "职业经历",
    summaryLabel: "个人简介",
    educationLabel: "教育经历",
    publicationsLabel: "学术发表",
    skillsLabel: "技能与资质",
    contact: [
      ["姓名", "贾睿童"],
      ["职业", "硬科技分析师"],
      ["邮箱", "justinjia0813@gmail.com"],
    ],
    experience: [
      {
        period: "2025.07—2026.08",
        role: "分析师 / 行业研究",
        company: "广东华胥私募基金管理有限公司",
        bullets: [
          "负责新能源、新材料与人工智能前沿方向的行业研究和标的挖掘，重点覆盖固态电池、可控核聚变、先进电池材料、半导体材料、大模型、AI 基础设施与 AI for Science。",
          "参与潜在项目的筛选、技术与商业分析、访谈、投决支持及投资执行，累计推动亿元级资金落地，形成从行业研判到项目执行的完整经验。",
          "完成 DeepSeek 投资分析并支持项目立项；完成 AI 芯片散热材料行业研究并支持项目立项；推动 AI for Materials 项目进入投决，并主导参与一家相关企业的早期孵化。",
          "围绕人工智能基础设施的能源约束，分别研究燃气轮机、储能、固体氧化物燃料电池、小型模块化反应堆与可控核聚变等供能路径并形成专题报告。",
        ],
      },
      {
        period: "2024.07—2025.06",
        role: "行业研究",
        company: "广东华胥私募基金管理有限公司",
        bullets: [
          "开展新能源、半导体及相关新材料领域的前瞻研究，持续跟踪国家与地方政策、行业动态、市场趋势和技术路线变化。",
          "参与制定研究方案、撰写行业与项目报告，并围绕新材料在新能源和半导体中的应用梳理产业化空间与潜在投资机会。",
          "参与目标项目的访谈、跟进和投资执行，将案头研究转化为项目判断与决策支持。",
        ],
      },
      {
        period: "2023.05—2023.08",
        role: "行业研究实习生",
        company: "江苏天汇红优投资管理有限公司",
        bullets: [
          "协助完成新能源、半导体及相关新材料细分行业研究，分析科研文献、产业趋势、竞争格局和投融资动态。",
          "参与潜在项目挖掘与调研，跟踪创新技术进展并协助形成调研分析报告。",
          "支持目标项目访谈、持续跟进和投资执行，建立早期硬科技项目研究的基础方法。",
        ],
      },
    ],
    summary:
      "具备材料科学训练与一级市场投资研究经验，能够从技术原理、产业链、竞争格局、商业模式和估值等维度交叉判断前沿产业。工作重点不是复述行业信息，而是识别技术路线的能力边界、产业化约束与价值归属，并将判断落实到项目筛选、立项、投决和执行。",
    education: [
      { period: "2022—2025", degree: "高分子化学与物理 · 硕士", school: "上海大学" },
      { period: "2018—2022", degree: "应用化学 · 本科", school: "上海大学" },
    ],
    publications: [
      {
        year: "2025",
        title:
          "Sponge-Like thermoresponsive hydrogels from helical dendronized Poly(phenylacetylene)s as soft actuators",
        href: "https://doi.org/10.1016/j.eurpolymj.2025.114357",
        journal: "European Polymer Journal · Volume 240 · Article 114357",
        authors: "Lei Wang, Ruitong Jia, Afang Zhang, Wen Li",
        role: "第二作者",
        note: "以肟化学交联构筑温敏手性水凝胶，并验证其可压缩形变与应变响应导电特性。",
      },
      {
        year: "2022",
        title:
          "Topological Effects of Dendronized Polymers on Their Thermoresponsiveness and Microconfinement",
        href: "https://doi.org/10.1021/acs.macromol.1c02066",
        journal: "Macromolecules · Volume 55, Issue 2 · 630–642",
        authors: "Gang Xu, Jiaxing Zhang, Ruitong Jia, Wen Li, Afang Zhang",
        role: "第三作者",
        note: "研究树枝化聚合物拓扑结构对温敏行为、分子包覆效应与微限域能力的影响。",
      },
    ],
    skills: [
      {
        title: "投资与产业研究",
        level: "熟练",
        detail:
          "产业链拆解、技术路线研判、竞争格局分析、商业模式与估值分析、项目筛选、立项及投决材料撰写。",
      },
      {
        title: "硬科技覆盖",
        level: "持续研究",
        detail:
          "人工智能基础设施、大模型与科学智能；固态电池、可控核聚变；先进电池材料、半导体材料与 AI for Materials。",
      },
      {
        title: "研究工作流",
        level: "熟练",
        detail:
          "快速阅读英文论文与产业资料，使用 AI 原生研究工具完成信息检索、证据核验、结构化分析与报告写作。",
      },
      {
        title: "专业资质与语言",
        level: "已取得",
        detail: "基金从业资格；普通话二级甲等；大学英语六级（CET-6）。",
      },
    ],
  },
  en: {
    name: "Justin Jia",
    title: "Hard-Tech Analyst",
    focus: "Focused on AI, Energy & Materials Science",
    shortIntro:
      "A materials researcher turned hard-tech investor, focused on how frontier technologies move from laboratories into industry and investable businesses.",
    contactLabel: "Contact Information",
    experienceLabel: "Experience",
    summaryLabel: "Summary",
    educationLabel: "Education",
    publicationsLabel: "Publications",
    skillsLabel: "Skills & Credentials",
    contact: [
      ["Name", "Justin Jia"],
      ["Professional Title", "Hard-Tech Analyst"],
      ["Email", "justinjia0813@gmail.com"],
    ],
    experience: [
      {
        period: "2025.07—2026.08",
        role: "Analyst / Industry Research",
        company: "Guangdong Huaxu Private Fund Management Co., Ltd.",
        bullets: [
          "Led industry research and company sourcing across new energy, advanced materials and artificial intelligence, covering solid-state batteries, fusion, battery and semiconductor materials, foundation models, AI infrastructure and AI for Science.",
          "Supported project screening, technical and commercial analysis, interviews, investment-committee decisions and execution; contributed to approximately RMB 100 million in deployed capital.",
          "Produced the DeepSeek investment analysis and an AI-chip thermal-materials study that advanced to project initiation; helped move an AI for Materials opportunity into investment review and led participation in the early incubation of a related company.",
          "Authored focused studies on gas turbines, energy storage, solid oxide fuel cells, small modular reactors and fusion as power pathways for AI infrastructure.",
        ],
      },
      {
        period: "2024.07—2025.06",
        role: "Industry Research",
        company: "Guangdong Huaxu Private Fund Management Co., Ltd.",
        bullets: [
          "Conducted forward-looking research on new energy, semiconductors and advanced materials, tracking policy, industry dynamics, market trends and technology routes.",
          "Supported research planning and industry and company reports, assessing commercialization opportunities for advanced materials in energy and semiconductor applications.",
          "Participated in company interviews, project follow-up and investment execution, translating desk research into project-level judgment and decision support.",
        ],
      },
      {
        period: "2023.05—2023.08",
        role: "Industry Research Intern",
        company: "Jiangsu Tianhui Hongyou Investment Management Co., Ltd.",
        bullets: [
          "Researched new energy, semiconductors and related advanced materials through academic literature, industry trends, competitive landscapes and financing activity.",
          "Supported company sourcing and research, tracked emerging technologies and contributed to research reports.",
          "Assisted with company interviews, project follow-up and investment execution, establishing a foundation in early-stage hard-tech research.",
        ],
      },
    ],
    summary:
      "I combine materials-science training with private-market investment research. My work evaluates frontier industries across technical principles, value chains, competitive structure, business models and valuation. The objective is not to restate industry information, but to identify capability boundaries, commercialization constraints and where value ultimately accrues—and then translate those judgments into screening, project initiation, investment decisions and execution.",
    education: [
      {
        period: "2022—2025",
        degree: "M.S., Polymer Chemistry and Physics",
        school: "Shanghai University",
      },
      { period: "2018—2022", degree: "B.S., Applied Chemistry", school: "Shanghai University" },
    ],
    publications: [
      {
        year: "2025",
        title:
          "Sponge-Like thermoresponsive hydrogels from helical dendronized Poly(phenylacetylene)s as soft actuators",
        href: "https://doi.org/10.1016/j.eurpolymj.2025.114357",
        journal: "European Polymer Journal · Volume 240 · Article 114357",
        authors: "Lei Wang, Ruitong Jia, Afang Zhang, Wen Li",
        role: "Second author",
        note: "Developed thermoresponsive chiral hydrogels through oxime crosslinking and demonstrated compressive deformation and strain-responsive conductivity.",
      },
      {
        year: "2022",
        title:
          "Topological Effects of Dendronized Polymers on Their Thermoresponsiveness and Microconfinement",
        href: "https://doi.org/10.1021/acs.macromol.1c02066",
        journal: "Macromolecules · Volume 55, Issue 2 · 630–642",
        authors: "Gang Xu, Jiaxing Zhang, Ruitong Jia, Wen Li, Afang Zhang",
        role: "Third author",
        note: "Studied how dendronized-polymer topology governs thermoresponsiveness, molecular-envelope effects and microconfinement.",
      },
    ],
    skills: [
      {
        title: "Investment & Industry Research",
        level: "Proficient",
        detail:
          "Value-chain mapping, technology-route assessment, competitive analysis, business models, valuation, project screening, initiation and investment-committee materials.",
      },
      {
        title: "Hard-Tech Coverage",
        level: "Active coverage",
        detail:
          "AI infrastructure, foundation models and AI for Science; solid-state batteries and fusion; battery materials, semiconductor materials and AI for Materials.",
      },
      {
        title: "Research Workflow",
        level: "Proficient",
        detail:
          "Rapid review of English literature and industry sources; AI-native workflows for retrieval, evidence verification, structured analysis and report writing.",
      },
      {
        title: "Credentials & Languages",
        level: "Qualified",
        detail:
          "Fund practitioner qualification; Mandarin Proficiency Test Level 2-A; College English Test Band 6 (CET-6).",
      },
    ],
  },
} as const

const renderLanguage = (language: Language) => {
  const text = copy[language]

  return (
    <div class="jvc-cv-language" data-language-content={language} hidden={language === "en"}>
      <header class="jvc-cv-hero">
        <p class="jvc-cv-kicker">CV</p>
        <h1>{text.name}</h1>
        <p class="jvc-cv-role">{text.title}</p>
        <p class="jvc-cv-focus">{text.focus}</p>
        <p class="jvc-cv-lede">{text.shortIntro}</p>
      </header>

      <main class="jvc-cv-main">
        <section class="jvc-cv-section jvc-cv-contact-card">
          <h2>{text.contactLabel}</h2>
          <dl>
            {text.contact.map(([label, value]) => (
              <div key={`${language}-${label}`}>
                <dt>{label}</dt>
                <dd>
                  {label === "邮箱" || label === "Email" ? (
                    <a href="mailto:justinjia0813@gmail.com">{value}</a>
                  ) : (
                    value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </section>

        <section class="jvc-cv-section">
          <h2>{text.experienceLabel}</h2>
          <div class="jvc-cv-list">
            {text.experience.map((entry) => (
              <article class="jvc-cv-entry" key={`${language}-${entry.period}-${entry.role}`}>
                <div class="jvc-cv-entry-meta">
                  <time>{entry.period}</time>
                </div>
                <div>
                  <h3>{entry.role}</h3>
                  <p class="jvc-cv-organization">{entry.company}</p>
                  <ul>
                    {entry.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section class="jvc-cv-section jvc-cv-summary">
          <h2>{text.summaryLabel}</h2>
          <p>{text.summary}</p>
        </section>

        <section class="jvc-cv-section">
          <h2>{text.educationLabel}</h2>
          <div class="jvc-cv-list">
            {text.education.map((item) => (
              <article class="jvc-cv-education" key={`${language}-${item.period}-${item.degree}`}>
                <time>{item.period}</time>
                <div>
                  <h3>{item.degree}</h3>
                  <p>{item.school}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section class="jvc-cv-section">
          <h2>{text.publicationsLabel}</h2>
          <div class="jvc-cv-list">
            {text.publications.map((publication) => (
              <article class="jvc-cv-publication" key={`${language}-${publication.href}`}>
                <time>{publication.year}</time>
                <div>
                  <h3>
                    <a href={publication.href} target="_blank" rel="noopener noreferrer">
                      {publication.title}
                    </a>
                  </h3>
                  <p class="jvc-cv-publication-journal">{publication.journal}</p>
                  <p>{publication.authors}</p>
                  <p>
                    <span class="jvc-cv-tag">{publication.role}</span>
                    {publication.note}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section class="jvc-cv-section">
          <h2>{text.skillsLabel}</h2>
          <div class="jvc-cv-skills">
            {text.skills.map((skill) => (
              <article key={`${language}-${skill.title}`}>
                <h3>{skill.title}</h3>
                <p class="jvc-cv-skill-level">{skill.level}</p>
                <p>{skill.detail}</p>
              </article>
            ))}
          </div>
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
            <button type="button" data-cv-lang="zh" aria-pressed="true">
              中文
            </button>
            <span>/</span>
            <button type="button" data-cv-lang="en" aria-pressed="false">
              EN
            </button>
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

import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
// @ts-ignore
import cvLanguageScript from "./scripts/cvLanguage.inline"

type Language = "zh" | "en"

const copy = {
  zh: {
    name: "贾睿童",
    title: "硬科技投资分析师",
    focus: "中国一级市场｜人工智能基础设施、先进材料与新能源",
    shortIntro:
      "材料科学硕士，参与项目筛选、技术与商业分析、立项、投决支持及投资执行，关注技术从实验室走向产业的价值形成过程。",
    snapshotLabel: "投资概览",
    experienceLabel: "职业经历",
    investmentsLabel: "代表性投资与项目",
    writingLabel: "代表性研究与观点",
    educationLabel: "教育经历",
    publicationsLabel: "学术发表",
    skillsLabel: "技能与资质",
    snapshot: [
      ["市场", "中国一级市场硬科技投资"],
      ["覆盖", "人工智能基础设施 · 先进材料 · 新能源"],
      ["工作环节", "项目筛选 · 技术与商业分析 · 立项 · 投决支持 · 投资执行"],
      ["代表成果", "固态电池产业链相关项目投资超过 1 亿元"],
    ],
    experience: [
      {
        period: "2024.07—2026.08",
        role: "行业研究 → 分析师",
        company: "广东华胥私募基金管理有限公司",
        bullets: [
          "2024.07—2025.06：开展新能源、半导体及相关新材料领域的前瞻研究，跟踪政策、行业动态、市场趋势与技术路线，并参与项目访谈、跟进和投资执行。",
          "2025.07—2026.08：独立覆盖新能源、新材料与人工智能前沿方向，负责行业研究、标的挖掘、项目筛选及技术与商业分析。",
          "工作职责由研究支持扩展至立项、投决支持和投资执行，形成从产业判断到项目推进的完整经验。",
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
    investments: [
      {
        title: "固态电池产业链",
        status: "投决与投资执行",
        scope: "硅碳负极 · 半固态电池 · 固态电解质",
        role: "参与产业链研究、标的筛选、技术与商业分析、投决支持及投资执行。",
        outcome: "推进相关项目投资超过 1 亿元。",
      },
      {
        title: "AI for Materials",
        status: "投决 / 早期孵化",
        scope: "人工智能驱动材料研发",
        role: "分析技术路线、能力边界、竞争格局、商业模式与估值。",
        outcome: "推动项目进入投决，并参与一家相关企业的早期孵化。",
      },
      {
        title: "DeepSeek 投资分析",
        status: "立项",
        scope: "前沿大模型公司",
        role: "分析技术路线、模型能力、训练成本、竞争格局、商业模式与估值。",
        outcome: "形成投资分析及立项材料，支持项目立项。",
      },
      {
        title: "AI 芯片散热材料",
        status: "立项",
        scope: "热界面材料 · 封装散热材料 · 金刚石散热",
        role: "研究不同材料路线解决封装与系统级热管理瓶颈的能力。",
        outcome: "形成行业研究报告并支持项目立项。",
      },
    ],
    writing: [
      {
        title: "信息处理的五个层次：如何判断一个投资人的水平",
        href: "../blogs/看一个人处理信息的深度，即可洞悉其水平",
        description: "从结论、信源、边界、机制与价值五个层次拆解投资判断。",
      },
      {
        title: "制造业投资：龙头为什么拥有犯错权",
        href: "../blogs/制造业投资，我们应该只投龙头",
        description: "讨论领先身位为何经常转化为更高投资胜率，以及方法何时失效。",
      },
      {
        title: "AI时代，分析师的能与不能",
        href: "../blogs/AI时代，分析师的能与不能",
        description: "讨论分析师价值如何迁移到问题定义、事实验证、因果判断与责任承担。",
      },
    ],
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
        title: "投资工作",
        level: "全流程支持",
        detail:
          "产业链拆解、技术路线研判、竞争格局分析、商业模式与估值分析、项目筛选、立项及投决材料撰写。",
      },
      {
        title: "技术研究",
        level: "材料科学背景",
        detail:
          "能够结合论文、专利与产业资料判断技术路线、能力边界、关键瓶颈、产业化约束与可制造性。",
      },
      {
        title: "研究工作流",
        level: "AI-native",
        detail:
          "使用人工智能原生工具完成信息检索、证据核验、结构化分析与报告写作，能够快速阅读英文专业资料。",
      },
      {
        title: "专业资质",
        level: "已取得",
        detail: "基金从业资格。",
      },
    ],
  },
  en: {
    name: "Justin Jia",
    title: "Hard-Tech Investment Analyst",
    focus: "China Private Markets | AI Infrastructure, Advanced Materials & New Energy",
    shortIntro:
      "M.S. in materials science with experience across project screening, technical and commercial analysis, project initiation, investment review support and execution.",
    snapshotLabel: "Investment Snapshot",
    experienceLabel: "Experience",
    investmentsLabel: "Selected Investments & Projects",
    writingLabel: "Selected Research & Writing",
    educationLabel: "Education",
    publicationsLabel: "Publications",
    skillsLabel: "Skills & Credentials",
    snapshot: [
      ["Market", "Hard-tech investing in China private markets"],
      ["Coverage", "AI infrastructure · Advanced materials · New energy"],
      [
        "Workflow",
        "Screening · Technical and commercial analysis · Initiation · Investment review · Execution",
      ],
      [
        "Representative Outcome",
        "More than RMB 100 million invested across the solid-state battery value chain",
      ],
    ],
    experience: [
      {
        period: "2024.07—2026.08",
        role: "Industry Research → Analyst",
        company: "Guangdong Huaxu Private Fund Management Co., Ltd.",
        bullets: [
          "2024.07—2025.06: Conducted forward-looking research on new energy, semiconductors and advanced materials; tracked policy, industry dynamics, market trends and technology routes; and supported company interviews, follow-up and execution.",
          "2025.07—2026.08: Independently covered frontier opportunities in new energy, advanced materials and artificial intelligence, with responsibility for industry research, company sourcing, screening, and technical and commercial analysis.",
          "Expanded from research support into project initiation, investment review support and execution, building end-to-end experience from industry judgment to project advancement.",
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
    investments: [
      {
        title: "Solid-State Battery Value Chain",
        status: "Investment Review & Execution",
        scope: "Silicon-carbon anodes · Semi-solid batteries · Solid electrolytes",
        role: "Supported value-chain research, company screening, technical and commercial analysis, investment review and execution.",
        outcome: "Advanced more than RMB 100 million in related investments.",
      },
      {
        title: "AI for Materials",
        status: "Investment Review / Early Incubation",
        scope: "AI-enabled materials research",
        role: "Assessed technology routes, capability boundaries, competition, business models and valuation.",
        outcome:
          "Helped advance the project into investment review and participated in the early incubation of a related company.",
      },
      {
        title: "DeepSeek Investment Analysis",
        status: "Project Initiation",
        scope: "Frontier foundation-model company",
        role: "Assessed the technology route, model capability, training economics, competition, business model and valuation.",
        outcome:
          "Produced investment analysis and initiation materials supporting project initiation.",
      },
      {
        title: "Thermal Materials for AI Chips",
        status: "Project Initiation",
        scope: "Thermal interface materials · Packaging materials · Diamond-based thermal routes",
        role: "Evaluated how different material routes address packaging and system-level thermal bottlenecks.",
        outcome: "Produced the industry report supporting project initiation.",
      },
    ],
    writing: [
      {
        title: "Five Levels of Information Processing: How to Judge an Investor",
        href: "../blogs/看一个人处理信息的深度，即可洞悉其水平",
        description:
          "A framework moving from conclusions and sources to boundaries, mechanisms and investment value.",
      },
      {
        title: "Manufacturing Investment: Why Leaders Earn the Right to Make Mistakes",
        href: "../blogs/制造业投资，我们应该只投龙头",
        description:
          "Why accumulated leadership often improves investment odds—and where the method fails.",
      },
      {
        title: "What Analysts Can and Cannot Do in the AI Era",
        href: "../blogs/AI时代，分析师的能与不能",
        description:
          "How analyst value shifts toward problem definition, verification, causal judgment and accountability.",
      },
    ],
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
        title: "Investment Work",
        level: "End-to-end support",
        detail:
          "Value-chain mapping, technology-route assessment, competitive analysis, business models, valuation, project screening, initiation and investment-committee materials.",
      },
      {
        title: "Technical Research",
        level: "Materials-science background",
        detail:
          "Uses papers, patents and industry sources to assess technology routes, capability boundaries, bottlenecks, commercialization constraints and manufacturability.",
      },
      {
        title: "Research Workflow",
        level: "AI-native",
        detail:
          "AI-native workflows for retrieval, evidence verification, structured analysis and report writing, with rapid review of English technical sources.",
      },
      {
        title: "Credential",
        level: "Qualified",
        detail: "Fund practitioner qualification.",
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
        <a class="jvc-cv-email" href="mailto:justinjia0813@gmail.com">
          justinjia0813@gmail.com
        </a>
      </header>

      <main class="jvc-cv-main">
        <section class="jvc-cv-section jvc-cv-snapshot">
          <h2>{text.snapshotLabel}</h2>
          <dl>
            {text.snapshot.map(([label, value]) => (
              <div key={`${language}-${label}`}>
                <dt>{label}</dt>
                <dd>{value}</dd>
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

        <section class="jvc-cv-section">
          <h2>{text.investmentsLabel}</h2>
          <div class="jvc-cv-investments">
            {text.investments.map((investment) => (
              <article key={`${language}-${investment.title}`}>
                <div class="jvc-cv-investment-head">
                  <h3>{investment.title}</h3>
                  <span class="jvc-cv-tag">{investment.status}</span>
                </div>
                <p class="jvc-cv-investment-scope">{investment.scope}</p>
                <p>{investment.role}</p>
                <p class="jvc-cv-investment-outcome">{investment.outcome}</p>
              </article>
            ))}
          </div>
        </section>

        <section class="jvc-cv-section">
          <h2>{text.writingLabel}</h2>
          <div class="jvc-cv-writing">
            {text.writing.map((item) => (
              <a href={item.href} key={`${language}-${item.href}`}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <span>Read →</span>
              </a>
            ))}
          </div>
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

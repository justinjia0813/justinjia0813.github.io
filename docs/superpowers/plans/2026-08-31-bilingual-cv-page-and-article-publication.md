# Bilingual CV Page and Article Publication Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish the approved bilingual CV page and the currently local-only analyst workflow article on the JVC Quartz website.

**Architecture:** Render `/cv` from one Quartz component containing paired Chinese and English content, with a tiny native browser script for language switching and browser-local preference. Reuse the existing JVC layout, typography, colors, and build pipeline; publish the article by removing its draft flag, then merge the verified branch into `v4` so the existing GitHub Pages workflow deploys both outputs.

**Tech Stack:** Quartz 4.5.2, Preact, TypeScript, Sass, Node test runner, GitHub Pages

---

## File map

- Create `content/cv.md`: supplies the `/cv` route and page metadata.
- Create `quartz/components/CVPage.tsx`: owns all public Chinese and English CV content and the static page structure.
- Create `quartz/components/scripts/cvLanguage.inline.ts`: switches languages, remembers the choice, and restores the site language after single-page navigation.
- Create `quartz/components/CVPage.test.ts`: protects the content, privacy, navigation, language, layout, and style contracts.
- Modify `quartz/components/index.ts`: exports the new page component.
- Modify `quartz/components/HomePage.tsx`: adds `04 CV` to the primary navigation.
- Modify `quartz.layout.ts`: renders the custom component at slug `cv` and suppresses article chrome there.
- Modify `quartz/styles/custom.scss`: adds the approved editorial archive layout and responsive rules.
- Modify `content/blogs/调研之后：分析师如何找到自己的技术栈.md`: changes the approved article from draft to published.

### Task 1: Publish the analyst workflow article locally

**Files:**

- Modify: `content/blogs/调研之后：分析师如何找到自己的技术栈.md:1-6`

- [ ] **Step 1: Change the publication flag**

Replace the frontmatter field:

```yaml
draft: true
```

with:

```yaml
draft: false
```

- [ ] **Step 2: Verify the article is no longer filtered**

Run:

```bash
rg -n '^title:|^date:|^draft:' 'content/blogs/调研之后：分析师如何找到自己的技术栈.md'
```

Expected output includes:

```text
title: 调研之后：分析师如何找到自己的技术栈
date: 2026-08-31
draft: false
```

- [ ] **Step 3: Commit**

```bash
git add 'content/blogs/调研之后：分析师如何找到自己的技术栈.md'
git commit -m 'content: publish analyst workflow article'
```

### Task 2: Add the CV content contract and page component

**Files:**

- Create: `quartz/components/CVPage.test.ts`
- Create: `content/cv.md`
- Create: `quartz/components/CVPage.tsx`
- Modify: `quartz/components/index.ts`

- [ ] **Step 1: Write the failing content and privacy test**

Create `quartz/components/CVPage.test.ts`:

```ts
import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"
import { fileURLToPath } from "node:url"

const componentPath = fileURLToPath(new URL("./CVPage.tsx", import.meta.url))
const contentPath = fileURLToPath(new URL("../../content/cv.md", import.meta.url))

test("CV page keeps the approved public content and privacy boundary", () => {
  const component = readFileSync(componentPath, "utf8")
  const content = readFileSync(contentPath, "utf8")
  const publicSource = `${component}\n${content}`

  assert.match(content, /^title: CV$/m)
  assert.match(component, /硬科技分析师/)
  assert.match(component, /聚焦 AI、能源与物质科学/)
  assert.match(component, /广东华胥私募基金管理有限公司/)
  assert.match(component, /江苏天汇红优投资管理有限公司/)
  assert.match(component, /R-01/)
  assert.match(component, /R-04/)
  assert.match(component, /Macromolecules/)
  assert.match(component, /European Polymer Journal/)
  assert.match(component, /justinjia0813@gmail\.com/)
  assert.doesNotMatch(publicSource, /18632269955/)
  assert.doesNotMatch(publicSource, /justinrt670/)
  assert.doesNotMatch(publicSource, /30-60K/)
  assert.doesNotMatch(publicSource, /期望城市/)
})
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```bash
npm test -- quartz/components/CVPage.test.ts
```

Expected: FAIL because `CVPage.tsx` and `content/cv.md` do not exist.

- [ ] **Step 3: Create the route metadata**

Create `content/cv.md`:

```markdown
---
title: CV
date: 2026-08-31
description: 贾睿童的公开履历：硬科技分析师，聚焦人工智能、能源与物质科学。
draft: false
---
```

- [ ] **Step 4: Create the component with one bilingual data source**

Create `quartz/components/CVPage.tsx` with the following structure and exact public facts:

```tsx
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
        analysis:
          "Technology routes, data and toolchains, competition, business model and valuation",
      },
      {
        id: "R-03",
        title: "Thermal Materials for AI Chips",
        status: "Initiated",
        subject: "Advanced thermal materials created by rising AI-chip compute density",
        question: "How material routes address packaging and system-level thermal bottlenecks",
        analysis:
          "Thermal interface materials, packaging materials and diamond-based thermal routes",
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
      ["Technology", "Technology routes · Capability boundaries · Bottlenecks · Manufacturability"],
      ["Industry", "Value chains · Competitive structure · Markets and policy · Business models"],
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
            <article class="jvc-cv-entry">
              <div class="jvc-cv-entry-meta">
                <time>{entry.period}</time>
                <span>{entry.role}</span>
              </div>
              <div>
                <h2>{entry.company}</h2>
                <ul>
                  {entry.bullets.map((bullet) => (
                    <li>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </section>
        <section class="jvc-cv-section" id={`${language}-work`}>
          <p class="jvc-cv-section-label">02 / {text.workLabel}</p>
          {text.work.map((project) => (
            <article class="jvc-cv-project">
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
            <article class="jvc-cv-research">
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
            {text.education.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
        </section>
        <section class="jvc-cv-section" id={`${language}-capabilities`}>
          <p class="jvc-cv-section-label">05 / {text.capabilitiesLabel}</p>
          <div class="jvc-cv-capabilities">
            {text.capabilities.map(([title, detail]) => (
              <div>
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
```

- [ ] **Step 5: Export the component**

In `quartz/components/index.ts`, add:

```ts
import CVPage from "./CVPage"
```

and add `CVPage` to the export list.

- [ ] **Step 6: Run the focused test**

Run:

```bash
npm test -- quartz/components/CVPage.test.ts
```

Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add content/cv.md quartz/components/CVPage.tsx quartz/components/CVPage.test.ts quartz/components/index.ts
git commit -m 'feat: add bilingual CV content'
```

### Task 3: Add navigation, layout, and language behavior

**Files:**

- Modify: `quartz/components/CVPage.test.ts`
- Create: `quartz/components/scripts/cvLanguage.inline.ts`
- Modify: `quartz/components/HomePage.tsx`
- Modify: `quartz.layout.ts`

- [ ] **Step 1: Add the failing integration test**

Append to `quartz/components/CVPage.test.ts`:

```ts
const homePath = fileURLToPath(new URL("./HomePage.tsx", import.meta.url))
const layoutPath = fileURLToPath(new URL("../../quartz.layout.ts", import.meta.url))
const languageScriptPath = fileURLToPath(new URL("./scripts/cvLanguage.inline.ts", import.meta.url))

test("CV page is linked, custom-rendered, and progressively enhanced", () => {
  const home = readFileSync(homePath, "utf8")
  const layout = readFileSync(layoutPath, "utf8")
  const script = readFileSync(languageScriptPath, "utf8")

  assert.match(home, /nav-num">04<\/span>CV/)
  assert.match(home, /href="\.\/cv\/"/)
  assert.match(layout, /Component\.CVPage\(\)/)
  assert.match(layout, /page\.fileData\.slug !== "cv"/)
  assert.match(script, /jvc-cv-language/)
  assert.match(script, /localStorage/)
  assert.match(script, /aria-pressed/)
  assert.match(script, /document\.documentElement\.lang/)
  assert.match(script, /window\.addCleanup/)
})
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```bash
npm test -- quartz/components/CVPage.test.ts
```

Expected: FAIL because the navigation, layout, and language script are not implemented.

- [ ] **Step 3: Add `04 CV` to the home navigation**

In `quartz/components/HomePage.tsx`, after the community link, add:

```tsx
<a href="./cv">
  <span class="nav-num">04</span>CV
</a>
```

- [ ] **Step 4: Render the custom page and suppress article chrome**

In `quartz.layout.ts`, add the CV component to `beforeBody` and exclude `cv` wherever article chrome is conditionally rendered:

```ts
Component.ConditionalRender({
  component: Component.CVPage(),
  condition: (page) => page.fileData.slug === "cv",
}),
```

Use this condition for breadcrumbs, article title, content metadata, and the desktop table of contents:

```ts
;(page) => page.fileData.slug !== "index" && page.fileData.slug !== "cv"
```

- [ ] **Step 5: Implement the native language switch**

Create `quartz/components/scripts/cvLanguage.inline.ts`:

```ts
document.addEventListener("nav", () => {
  const root = document.querySelector<HTMLElement>(".jvc-cv")
  if (!root) return

  const key = "jvc-cv-language"
  const buttons = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-cv-lang]"))
  const panels = Array.from(root.querySelectorAll<HTMLElement>("[data-language-content]"))

  const applyLanguage = (language: "zh" | "en") => {
    root.dataset.language = language
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en"
    for (const panel of panels) panel.hidden = panel.dataset.languageContent !== language
    for (const button of buttons)
      button.setAttribute("aria-pressed", String(button.dataset.cvLang === language))
  }

  let language: "zh" | "en" = "zh"
  try {
    if (window.localStorage.getItem(key) === "en") language = "en"
  } catch {}
  applyLanguage(language)

  const onClick = (event: Event) => {
    const value = (event.currentTarget as HTMLButtonElement).dataset.cvLang
    if (value !== "zh" && value !== "en") return
    applyLanguage(value)
    try {
      window.localStorage.setItem(key, value)
    } catch {}
  }

  for (const button of buttons) button.addEventListener("click", onClick)
  window.addCleanup(() => {
    for (const button of buttons) button.removeEventListener("click", onClick)
    document.documentElement.lang = "zh-CN"
  })
})
```

- [ ] **Step 6: Run the focused test**

Run:

```bash
npm test -- quartz/components/CVPage.test.ts
```

Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add quartz/components/CVPage.test.ts quartz/components/scripts/cvLanguage.inline.ts quartz/components/HomePage.tsx quartz.layout.ts
git commit -m 'feat: integrate CV navigation and language switch'
```

### Task 4: Add the editorial archive styling

**Files:**

- Modify: `quartz/components/CVPage.test.ts`
- Modify: `quartz/styles/custom.scss`

- [ ] **Step 1: Add the failing style contract test**

Append to `quartz/components/CVPage.test.ts`:

```ts
const stylesPath = fileURLToPath(new URL("../styles/custom.scss", import.meta.url))

test("CV page keeps the approved editorial archive and responsive layout", () => {
  const styles = readFileSync(stylesPath, "utf8")
  assert.match(styles, /body\[data-slug="cv"\]/)
  assert.match(styles, /\.jvc-cv-language/)
  assert.match(styles, /grid-template-columns: minmax\(210px, 0\.28fr\) minmax\(0, 1fr\)/)
  assert.match(styles, /\.jvc-cv-stamp/)
  assert.match(styles, /\.jvc-cv a:focus-visible/)
  assert.match(styles, /@media \(max-width: 760px\)/)
})
```

- [ ] **Step 2: Run the test to verify it fails**

Run:

```bash
npm test -- quartz/components/CVPage.test.ts
```

Expected: FAIL because the CV selectors do not exist.

- [ ] **Step 3: Add the page styles**

Append a `CV page — editorial archive` section to `quartz/styles/custom.scss` with these rules:

```scss
body[data-slug="cv"] .page {
  max-width: 1280px;
}
body[data-slug="cv"] .page > #quartz-body {
  grid-template-columns: minmax(0, 1fr);
  grid-template-areas: "grid-sidebar-left" "grid-header" "grid-center" "grid-footer";
}
body[data-slug="cv"] .right.sidebar,
body[data-slug="cv"] .center > article,
body[data-slug="cv"] .center > hr {
  display: none;
}
.jvc-cv {
  --cv-accent: var(--secondary);
  padding: 3.5rem 0 6rem;
}
.jvc-cv-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--jvc-border);
  padding-bottom: 1rem;
}
.jvc-cv-toolbar > a {
  color: var(--dark);
  font-family: var(--jvc-mono-font);
  font-size: 0.72rem;
  text-decoration: none;
}
.jvc-cv-language-switch {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-family: var(--jvc-mono-font);
  font-size: 0.72rem;
}
.jvc-cv-language-switch button {
  border: 0;
  padding: 0.35rem 0.2rem;
  background: transparent;
  color: var(--jvc-muted);
  cursor: pointer;
}
.jvc-cv-language-switch button[aria-pressed="true"] {
  color: var(--cv-accent);
}
.jvc-cv-language[hidden] {
  display: none;
}
.jvc-cv-language {
  display: grid;
  grid-template-columns: minmax(210px, 0.28fr) minmax(0, 1fr);
  gap: clamp(3rem, 7vw, 7rem);
  padding-top: 3.5rem;
}
.jvc-cv article {
  max-width: none;
  margin: 0;
  padding-bottom: 0;
  font-size: inherit;
}
.jvc-cv article p,
.jvc-cv article li {
  text-align: left;
}
.jvc-cv-sidebar {
  position: sticky;
  top: 7rem;
  align-self: start;
}
.jvc-cv-file,
.jvc-cv-section-label,
.jvc-cv-entry-meta,
.jvc-cv-project-id,
.jvc-cv-stamp {
  font-family: var(--jvc-mono-font);
}
.jvc-cv-file {
  margin: 0 0 2rem;
  color: var(--cv-accent);
  font-size: 0.68rem;
  letter-spacing: 0.05em;
}
.jvc-cv-name {
  margin: 0;
  font-family: var(--jvc-display-font);
  font-size: clamp(2.4rem, 4vw, 4rem);
  line-height: 1;
}
.jvc-cv-role {
  margin: 1.3rem 0 0;
  font-weight: 700;
}
.jvc-cv-focus {
  margin: 0.5rem 0 0;
  color: var(--jvc-muted);
  line-height: 1.65;
}
.jvc-cv-domains {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 1.6rem;
}
.jvc-cv-domains span {
  border: 1px solid var(--jvc-border);
  padding: 0.3rem 0.45rem;
  font-family: var(--jvc-mono-font);
  font-size: 0.58rem;
}
.jvc-cv-index {
  display: grid;
  gap: 0.75rem;
  margin-top: 3rem;
}
.jvc-cv-index a {
  color: var(--jvc-muted);
  font-family: var(--jvc-mono-font);
  font-size: 0.68rem;
  text-decoration: none;
}
.jvc-cv-intro {
  padding: 0 0 4rem;
}
.jvc-cv-intro p {
  max-width: 780px;
  margin: 0;
  font-family: var(--jvc-display-font);
  font-size: clamp(1.4rem, 2.4vw, 2.15rem);
  line-height: 1.65;
}
.jvc-cv-section {
  scroll-margin-top: 7rem;
  border-top: 1px solid var(--jvc-border);
  padding: 1.1rem 0 4.5rem;
}
.jvc-cv-section-label {
  margin: 0 0 2rem;
  color: var(--cv-accent);
  font-size: 0.68rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
.jvc-cv-entry,
.jvc-cv-research {
  display: grid;
  grid-template-columns: 170px minmax(0, 1fr);
  gap: 2rem;
  margin: 0;
  border-top: 1px solid var(--jvc-hairline);
  padding: 1.6rem 0;
}
.jvc-cv-entry:first-of-type,
.jvc-cv-research:first-of-type {
  border-top: 0;
}
.jvc-cv-entry-meta {
  display: flex;
  flex-direction: column;
  gap: 0.55rem;
  color: var(--jvc-muted);
  font-size: 0.67rem;
  line-height: 1.45;
}
.jvc-cv-entry h2,
.jvc-cv-project h2,
.jvc-cv-research h2,
.jvc-cv-capabilities h2 {
  margin: 0;
  font-family: var(--jvc-display-font);
  font-size: 1.05rem;
}
.jvc-cv-entry ul {
  margin: 0.9rem 0 0;
  padding-left: 1.1rem;
}
.jvc-cv-entry li,
.jvc-cv-research p,
.jvc-cv-capabilities p {
  color: var(--jvc-muted);
  font-size: 0.9rem;
  line-height: 1.75;
}
.jvc-cv-project {
  display: grid;
  grid-template-columns: 56px minmax(0, 1fr) 112px;
  gap: 1.2rem;
  margin: 0;
  border-top: 1px solid var(--jvc-hairline);
  padding: 1.6rem 0;
}
.jvc-cv-project-id {
  margin: 0;
  color: var(--cv-accent);
  font-size: 0.68rem;
}
.jvc-cv-project dl {
  display: grid;
  grid-template-columns: 78px minmax(0, 1fr);
  gap: 0.5rem 1rem;
  margin: 1rem 0 0;
  font-size: 0.84rem;
  line-height: 1.65;
}
.jvc-cv-project dt {
  color: var(--jvc-muted);
}
.jvc-cv-project dd {
  margin: 0;
}
.jvc-cv-stamp {
  align-self: start;
  margin: 0;
  border: 1px solid var(--cv-accent);
  padding: 0.35rem 0.45rem;
  color: var(--cv-accent);
  font-size: 0.58rem;
  line-height: 1.35;
  text-align: center;
}
.jvc-cv-research time {
  color: var(--jvc-muted);
  font-family: var(--jvc-mono-font);
  font-size: 0.67rem;
}
.jvc-cv-research p {
  margin: 0.75rem 0 0;
}
.jvc-cv-education {
  display: grid;
  gap: 0.75rem;
  margin: 0;
  padding: 0;
  list-style: none;
}
.jvc-cv-education li {
  border-top: 1px solid var(--jvc-hairline);
  padding: 1rem 0;
}
.jvc-cv-capabilities {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
}
.jvc-cv-capabilities > div {
  border-top: 1px solid var(--jvc-hairline);
  padding-top: 1rem;
}
.jvc-cv-capabilities p {
  margin: 0.65rem 0 0;
}
.jvc-cv-credential {
  margin: 2rem 0 0;
  color: var(--jvc-muted);
  font-family: var(--jvc-mono-font);
  font-size: 0.7rem;
}
.jvc-cv-contact > p:not(.jvc-cv-section-label) {
  max-width: 680px;
  font-size: 1.2rem;
  line-height: 1.7;
}
.jvc-cv-contact a {
  display: inline-block;
  margin-top: 1rem;
  color: var(--cv-accent);
  font-family: var(--jvc-mono-font);
}
.jvc-cv a:focus-visible,
.jvc-cv button:focus-visible {
  outline: 2px solid var(--cv-accent);
  outline-offset: 4px;
}

@media (max-width: 760px) {
  body[data-slug="cv"] .page {
    padding: 0 1.25rem;
  }
  .jvc-cv {
    padding-top: 2rem;
  }
  .jvc-cv-language {
    grid-template-columns: 1fr;
    gap: 3.5rem;
    padding-top: 2.5rem;
  }
  .jvc-cv-sidebar {
    position: static;
  }
  .jvc-cv-index {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .jvc-cv-entry,
  .jvc-cv-research,
  .jvc-cv-project {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
  .jvc-cv-project dl {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }
  .jvc-cv-project dd {
    margin-bottom: 0.7rem;
  }
  .jvc-cv-stamp {
    width: fit-content;
  }
  .jvc-cv-capabilities {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 4: Run focused and full checks**

Run:

```bash
npx prettier --write quartz/components/CVPage.tsx quartz/components/CVPage.test.ts quartz/components/scripts/cvLanguage.inline.ts quartz/components/HomePage.tsx quartz/components/index.ts quartz.layout.ts quartz/styles/custom.scss content/cv.md
npm test -- quartz/components/CVPage.test.ts
npm test
npm run check
```

Expected: all tests, TypeScript checks, and formatting checks pass.

- [ ] **Step 5: Commit**

```bash
git add quartz/components/CVPage.test.ts quartz/styles/custom.scss
git commit -m 'style: add editorial CV layout'
```

### Task 5: Build and inspect the complete local site

**Files:**

- Verify generated output under `public/`; do not commit it.

- [ ] **Step 1: Build the production site**

Run:

```bash
npm run quartz -- build
```

Expected: build succeeds and emits both `public/cv.html` and the analyst workflow article.

- [ ] **Step 2: Check generated privacy and publication output**

Run:

```bash
test -f public/cv.html
rg -n '硬科技分析师|Hard-Tech Analyst|justinjia0813@gmail.com' public/cv.html
! rg -n '18632269955|justinrt670|30-60K|期望城市' public/cv.html
find public/blogs -type f -name '*技术栈*' -print
```

Expected: the CV contains only the approved public identity, no sensitive values, and the article file exists.

- [ ] **Step 3: Serve the built site and inspect desktop layout**

Run:

```bash
npm run quartz -- build --serve
```

Open `/cv` and the article in the local browser. At desktop width, confirm the archive sidebar and content column are visible, the page has no clipping, and the language switch changes all visible content without moving to the top.

- [ ] **Step 4: Inspect mobile layout and browser state**

At 375 pixels width, confirm:

```js
document.documentElement.scrollWidth === window.innerWidth
```

Then select English, reload, and confirm English remains selected. Navigate back to the home page and confirm the document language returns to Chinese. Check the browser console for warnings and errors.

- [ ] **Step 5: Inspect the article locally**

Open the analyst workflow article and confirm it appears on the homepage article list, has the date `2026-08-31`, and renders all sections and outbound links.

### Task 6: Publish through `v4` and verify production

**Files:**

- No additional source files expected.

- [ ] **Step 1: Confirm the branch contains only intended commits**

Run:

```bash
git status --short --branch
git log --oneline origin/v4..HEAD
git diff --stat origin/v4...HEAD
```

Expected: clean branch containing the local analyst workflow article commits, CV design and plan, and CV implementation commits.

- [ ] **Step 2: Push the feature branch**

```bash
git push -u origin codex/cv-page-design
```

Expected: push succeeds.

- [ ] **Step 3: Open and merge the pull request**

```bash
gh pr create --base v4 --head codex/cv-page-design --title 'Publish analyst workflow article and bilingual CV' --body 'Publishes the approved analyst workflow article and adds a bilingual editorial CV page with privacy checks, responsive layout, and local verification.'
gh pr merge --merge
```

Expected: the pull request merges into `v4`.

- [ ] **Step 4: Wait for GitHub Pages deployment**

Run:

```bash
gh run list --workflow deploy.yml --branch v4 --limit 1
gh run watch <run-id> --exit-status
```

Expected: the latest `Deploy Quartz site to GitHub Pages` run completes successfully.

- [ ] **Step 5: Verify production URLs**

Verify:

```text
https://justinjia0813.github.io/cv
https://justinjia0813.github.io/blogs/调研之后：分析师如何找到自己的技术栈
```

Confirm HTTP success, the home navigation includes `04 CV`, the article is listed on the homepage, the CV language switch works, and mobile width has no overflow.

- [ ] **Step 6: Report the release**

Report the pull request number, merge commit, deployment result, CV URL, article URL, and any remaining limitation. Do not claim publication until both production pages have been opened and verified.

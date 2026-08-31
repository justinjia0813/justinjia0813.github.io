# 《调研之后：分析师如何找到自己的技术栈》Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 写成一篇承接《AI时代，分析师的能与不能》的博客初稿，说明分析师如何从真实业务瓶颈出发，建立能够持续复利的个人技术栈。

**Architecture:** 只新增一份产品能力核验记录和一篇博客初稿，不修改站点结构。先用官方资料核验少量当前产品示例，再按“四类摩擦—五层系统—项目闭环—购买、组合与自建”的主线写作，最后完成论证、格式和本地页面检查。

**Tech Stack:** Markdown、Quartz v4、官方产品文档、Node.js 测试与构建、本地浏览器验收

---

## 文件结构

- Create: `docs/research/2026-08-31-analyst-workflow-tech-stack-sources.md` — 记录正文可能使用的产品示例、官方来源、可支持能力和不应越界的表述。
- Create: `content/blogs/调研之后：分析师如何找到自己的技术栈.md` — 待用户审阅的博客初稿。
- Read: `content/blogs/AI时代，分析师的能与不能.md` — 只用于衔接上一篇结论，避免重复能力边界论证。
- Read: `docs/superpowers/specs/2026-08-31-analyst-workflow-tech-stack-article-design.md` — 已确认的文章设计与完成标准。
- Existing: `package.json` — 复用已有测试和 Quartz 构建命令，不新增依赖。

### Task 1: 核验少量当前产品示例

**Files:**

- Create: `docs/research/2026-08-31-analyst-workflow-tech-stack-sources.md`
- Read: `docs/superpowers/specs/2026-08-31-analyst-workflow-tech-stack-article-design.md`

- [ ] **Step 1: 按功能层限定检索范围**

只从产品官方文档或官方帮助中心核验五类能力：数据存储与关联、自动归档与同步、人工智能检索与处理、任务与提醒、历史判断与结果回填。每层最多保留两个候选产品，正文每层最多出现一个示例；如果官方资料不能直接证明所需能力，则不写产品名，只写能力类别。

Expected: 产品示例只承担“当前可如何实现”的说明作用，不把文章改写成选型清单。

- [ ] **Step 2: 记录每个示例的证据边界**

研究记录统一使用以下格式：

```markdown
## 产品或能力名称

- 官方来源：实际访问的官方文档链接
- 核验日期：2026-08-31
- 对应层级：数据层 / 自动化层 / 智能层 / 行动层 / 反馈层
- 可以支持：官方资料直接证明的能力
- 不能支持：官方资料没有证明或需要自行集成的能力
- 正文用途：一句示例或不采用
```

Expected: 不把“能够连接”写成“已经形成闭环”，不把人工智能辅助功能写成自动承担投资判断。

- [ ] **Step 3: 检查来源记录**

Run:

```bash
npx prettier --check docs/research/2026-08-31-analyst-workflow-tech-stack-sources.md
rg -n "官方来源|核验日期|可以支持|不能支持|正文用途" docs/research/2026-08-31-analyst-workflow-tech-stack-sources.md
```

Expected: Prettier 通过；每个被采用的产品示例都有官方来源、核验日期和能力边界。

- [ ] **Step 4: 提交研究记录**

```bash
git add docs/research/2026-08-31-analyst-workflow-tech-stack-sources.md
git diff --cached --check
git commit -m "docs: research analyst workflow tool examples"
```

Expected: 只提交产品能力核验记录。

### Task 2: 撰写博客初稿

**Files:**

- Create: `content/blogs/调研之后：分析师如何找到自己的技术栈.md`
- Read: `content/blogs/AI时代，分析师的能与不能.md`
- Read: `docs/research/2026-08-31-analyst-workflow-tech-stack-sources.md`
- Read: `docs/superpowers/specs/2026-08-31-analyst-workflow-tech-stack-article-design.md`

- [ ] **Step 1: 写入草稿 frontmatter**

文章从以下内容开始：

```markdown
---
title: 调研之后：分析师如何找到自己的技术栈
date: 2026-08-31
description: 当调研不再是主要瓶颈，分析师需要从等待、搬运、丢失和遗忘出发，把数据、自动化、智能、行动与反馈连接成能够持续复利的个人工作系统。
draft: true
---
```

Expected: 日期使用实际写作日期；保留 `draft: true`，本轮不直接公开。

- [ ] **Step 2: 按七段结构完成正文**

正文依次使用以下二级标题：

```markdown
## 调研不再是瓶颈

## 不要从工具清单开始

## 先找出等待、搬运、丢失与遗忘

## 五层个人投资操作系统

## 让一个项目完整穿过系统

## 通用能力购买，流程连接组合，差异化资产自建

## 下一代分析师，也是自己的系统设计者
```

写作要求：

- 开篇用一至两段承接上一篇“公共信息整理与成文正在商品化”的结论，不复述人工智能与分析师各自的能力边界；
- 明确调研完成后，瓶颈迁移到信息进入系统、判断转化为行动、项目持续跟踪和经验复用；
- 用分析师的完整工作流解释四类摩擦，而不是先介绍产品；
- 将数据层、自动化层、智能层、行动层和反馈层写成一条数据流，不写成五套彼此孤立的软件；
- 贯穿一个投资项目，展示材料进入、证据形成、访谈、待验证问题、跟进、决策记录、事件对照和复盘回流；
- 保留核心原则“通用能力购买，流程连接组合，差异化资产自建”；
- 正文约 3,000—4,000 字，产品名只作少量例子，不承担中心论证；
- 首次出现 `AI` 时写为“人工智能（Artificial Intelligence，AI，指用模型完成信息处理、生成与辅助推理）”；其他英文缩写首次出现时也写明英文全称、中文全称和一句简要解释。

- [ ] **Step 3: 写入最小闭环和衡量标准**

正文保留：

```markdown
> 访谈记录 → 待验证问题 → 跟进任务 → 结果回填
```

并明确技术栈至少应由三项结果衡量：信息到行动的距离是否缩短，关键信息与判断是否更少丢失，一个项目是否降低了下一个项目的认知成本。

- [ ] **Step 4: 只采用已核验的产品示例**

产品名称只从 Task 1 的研究记录中选择，并把链接放在对应能力附近。若五层中的某一层没有合适的官方资料，则只描述能力，不为了形式完整强行补产品名。

- [ ] **Step 5: 提交正文初稿**

```bash
git add "content/blogs/调研之后：分析师如何找到自己的技术栈.md"
git diff --cached --check
git commit -m "content: draft analyst workflow tech stack article"
```

Expected: 只新增一篇 `draft: true` 的文章，不修改站点代码。

### Task 3: 审查论证、边界与表达

**Files:**

- Modify: `content/blogs/调研之后：分析师如何找到自己的技术栈.md`
- Read: `docs/research/2026-08-31-analyst-workflow-tech-stack-sources.md`
- Read: `docs/superpowers/specs/2026-08-31-analyst-workflow-tech-stack-article-design.md`

- [ ] **Step 1: 检查设计覆盖**

逐项确认正文回答：

1. 为什么调研效率提高后，分析师仍然会被其他环节限制；
2. 为什么技术栈必须从真实瓶颈而不是新产品开始；
3. 等待、搬运、丢失和遗忘分别如何发生；
4. 五层系统如何形成闭环；
5. 一个项目如何从进入系统走到结果回流；
6. 哪些能力购买、哪些流程组合、哪些资产自建；
7. 为什么个人系统会形成复利。

Expected: 每一问有明确答案，正文没有退化成效率工具介绍。

- [ ] **Step 2: 检查产品与能力边界**

逐个核对产品名称、链接和能力描述：

- 只保留官方资料直接支持的功能；
- 需要自行连接的环节明确写成组合方案；
- 不暗示某个产品天然覆盖完整投资工作流；
- 不把自动摘要、检索或任务生成描述为自动作出投资决策；
- 删除与中心论证无关的产品功能。

Expected: 即使删除全部产品名，文章的框架和结论仍然成立。

- [ ] **Step 3: 检查缩写、日期与篇幅**

Run:

```bash
rg -n "\b[A-Z][A-Z0-9]{1,}\b" "content/blogs/调研之后：分析师如何找到自己的技术栈.md"
rg -n "^title: 调研之后：分析师如何找到自己的技术栈$|^date: 2026-08-31$|^draft: true$" "content/blogs/调研之后：分析师如何找到自己的技术栈.md"
wc -m "content/blogs/调研之后：分析师如何找到自己的技术栈.md"
```

Expected: 英文缩写首次出现时已展开；标题、日期和草稿状态准确；正文保持完整论证密度。

- [ ] **Step 4: 格式化并检查差异**

Run:

```bash
npx prettier --write "content/blogs/调研之后：分析师如何找到自己的技术栈.md" docs/research/2026-08-31-analyst-workflow-tech-stack-sources.md
git diff --check
git diff --stat origin/v4...HEAD
```

Expected: 没有空白错误；分支只包含设计、计划、研究记录和目标文章。

- [ ] **Step 5: 提交审校结果**

```bash
git add "content/blogs/调研之后：分析师如何找到自己的技术栈.md" docs/research/2026-08-31-analyst-workflow-tech-stack-sources.md
git diff --cached --check
git commit -m "content: refine analyst workflow tech stack article"
```

Expected: 如果审校没有产生变化，则跳过空提交。

### Task 4: 完成本地站点验收

**Files:**

- Verify: `content/blogs/调研之后：分析师如何找到自己的技术栈.md`
- Do not commit: `public/`、`.playwright-cli/`、`output/playwright/`

- [ ] **Step 1: 临时预览草稿并运行检查**

在本地预览前暂时将：

```yaml
draft: true
```

改为：

```yaml
draft: false
```

但不提交该变化。然后运行：

```bash
npm test
npm run quartz -- build
```

Expected: 现有测试全部通过；Quartz 成功生成包含目标文章的本地站点。

- [ ] **Step 2: 启动本地站点**

Run:

```bash
npm run quartz -- build --serve
```

Expected: 本地站点可通过 `http://localhost:8080` 访问。

- [ ] **Step 3: 检查桌面端和手机端页面**

在 1440×900 与 390×844 两个视口检查：

- 标题、日期、七个正文标题和引用链条完整显示；
- 长标题、产品名称、英文内容和引用块不产生横向溢出；
- 外部链接存在且指向 Task 1 核验过的官方页面；
- `document.documentElement.scrollWidth === window.innerWidth`；
- 浏览器控制台无 error 和 warning。

Expected: 文章在桌面端和手机端均可完整阅读，无裁切或布局异常。

- [ ] **Step 4: 恢复草稿状态并确认工作区**

将 frontmatter 中的：

```yaml
draft: false
```

恢复为：

```yaml
draft: true
```

删除或移走本地预览产物，然后运行：

```bash
rg -n "^draft: true$" "content/blogs/调研之后：分析师如何找到自己的技术栈.md"
git status --short
git diff --check
```

Expected: 文章仍为草稿；没有未提交的正文变化或浏览器产物。

### Task 5: 交付正文供用户审阅

**Files:**

- Deliver: `content/blogs/调研之后：分析师如何找到自己的技术栈.md`
- Deliver: `docs/research/2026-08-31-analyst-workflow-tech-stack-sources.md`

- [ ] **Step 1: 汇总交付状态**

报告文章路径、核心结构、实际采用的产品示例、本地测试与页面检查结果，以及仍保留 `draft: true` 的状态。

Expected: 不声称文章已经上线，不推送分支，不创建 Pull Request，不触发网站部署。

- [ ] **Step 2: 等待正文确认**

用户确认正文并明确要求上线后，再单独制定并执行最小发布步骤：移除 `draft: true`、核对实际发布日期、基于最新 `origin/v4` 合并、等待 GitHub Pages 成功，并验证线上文章与首页入口。

Expected: 发布动作与正文写作清楚分离，未经确认不发生外部写入。

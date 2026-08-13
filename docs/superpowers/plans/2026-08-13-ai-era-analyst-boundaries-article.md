# 《AI时代，分析师的能与不能》Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 写成并上线《AI时代，分析师的能与不能》，用材料投资案例说明人工智能与投资分析师的双重能力边界。

**Architecture:** 只新增一篇公开博客和一份研究来源记录，不修改站点结构。先核验材料案例所需的一手证据，再写正文、审查证据边界，最后沿用 Quartz 现有测试、构建、浏览器与 GitHub Pages 发布流程。

**Tech Stack:** Markdown、Quartz v4、Node.js 测试与构建、Playwright 浏览器验收、GitHub Pull Request 与 GitHub Pages

---

## 文件结构

- Create: `docs/research/2026-08-13-ai-era-analyst-boundaries-sources.md` — 保存实际查阅的一手来源、可支持结论、不能支持的越界表述和核验日期。
- Create: `content/blogs/AI时代，分析师的能与不能.md` — 最终公开文章。
- Existing: `docs/superpowers/specs/2026-08-13-ai-era-analyst-boundaries-article-design.md` — 已确认的文章设计与验收标准，只读参考。
- Existing: `package.json` — 使用已有测试与 Quartz 构建命令，不修改依赖。

### Task 1: 建立材料案例的证据底稿

**Files:**

- Create: `docs/research/2026-08-13-ai-era-analyst-boundaries-sources.md`
- Input: 用户提供的原始灵感材料

- [ ] **Step 1: 启动研究流程并限定来源**

读取 `research` skill，只检索文章实际需要的材料投资例证。优先核验以下一手来源：SEMI 2025 年材料市场公告、台积电 2026 技术论坛资料、Micron HBM4 公告、NVIDIA 2026 系统架构更新、Entegris 2025 年报和 Qnity 2025 年报。

预期：得到足够支撑“架构变化不等于公司收入、送样不等于量产、认证是关键转换条件”的 2—4 个例证；不为凑数量纳入不能直接支持文章主张的资料。

- [ ] **Step 2: 为每条来源记录证据边界**

在研究记录中逐条写明：

```markdown
## 来源名称

- URL：实际访问的一手来源链接
- 核验日期：2026-08-13
- 证据类型：公开事实 / 公司自述 / 监管披露
- 可以支持：来源直接证明的最窄结论
- 不能支持：容易被误写但来源没有证明的结论
- 正文用途：对应文章中的一句主张或案例位置
```

预期：公司路线图和产品进展保留“公司自述”主体；“送样、认证、小批量、量产、规模化收入”不互相替代。

- [ ] **Step 3: 检查来源有效性与研究记录格式**

Run:

```bash
npx prettier --check docs/research/2026-08-13-ai-era-analyst-boundaries-sources.md
rg -n "可以支持|不能支持|核验日期" docs/research/2026-08-13-ai-era-analyst-boundaries-sources.md
```

Expected: Prettier 通过；每一条被采用的来源都有正反证据边界和核验日期。

- [ ] **Step 4: 提交研究记录**

```bash
git add docs/research/2026-08-13-ai-era-analyst-boundaries-sources.md
git diff --cached --check
git commit -m "docs: research AI era analyst boundaries article"
```

Expected: 只提交研究来源记录。

### Task 2: 撰写公开文章

**Files:**

- Create: `content/blogs/AI时代，分析师的能与不能.md`
- Read: `docs/superpowers/specs/2026-08-13-ai-era-analyst-boundaries-article-design.md`
- Read: `docs/research/2026-08-13-ai-era-analyst-boundaries-sources.md`

- [ ] **Step 1: 写入准确的 frontmatter**

文章从以下内容开始：

```markdown
---
title: AI时代，分析师的能与不能
date: 2026-08-13
description: 当公开信息与完整报告变得廉价，投资分析师的价值将从信息生产迁移到问题定义、事实验证、因果判断、交易定价与责任承担。
---
```

Expected: 不设置 `draft: true`，发布日期与实际上线日期一致。

- [ ] **Step 2: 按七段结构完成正文**

正文依次使用以下二级标题：

```markdown
## 当完整报告变得廉价

## 人工智能的“能”

## 分析师的“不能”

## 人工智能的“不能”

## 从公开信息到可下注的因果链

## 材料投资：报告结束的地方，分析才刚开始

## 把人人都有的信息，推进为敢于负责的判断
```

写作要求：

- 开篇明确“贬值的是公共信息的整理与成文，不是所有研究工作”；
- 将人工智能擅长的检索、整理、比较、建模与反证概括为“证据工程”；
- 将人工智能的当前边界归因于证据可得性、现场验证和责任归属，不写成人类永久优越性；
- 明确分析师必须为最终的交易判断承担后果，人工智能只能提供输入而不能接管责任；
- 用材料投资因果链作为全文唯一的深案例；
- 全文约 4,000—5,000 字，材料案例约占三分之一；
- 首次出现 `AI` 时写为“人工智能（Artificial Intelligence，AI，指使用模型完成信息处理、推理与生成）”；
- 其他英文缩写首次出现时同样写明英文全称、中文全称和一句简要解释。

- [ ] **Step 3: 写入两条核心表达**

中段保留：

```markdown
> 技术架构变化 → 新增材料用量 → 客户认证 → 量产份额 → 公司利润 → 融资价格与退出赔率
```

并明确这是逐层验证的因果链。随后写入：

```markdown
> 可投洞见＝新增可信事实 × 因果机制 × 单位经济性 × 公司映射 × 交易赔率
```

同时说明该公式是分析框架，而非精确数学模型。

- [ ] **Step 4: 将来源放在实际支持的主张附近**

只引用 Task 1 已核验的来源。具体产品阶段、市场数据或认证周期的链接紧邻对应句子；作者的职业判断清楚写成判断，不用无关数据伪装成事实。

- [ ] **Step 5: 提交正文初稿**

```bash
git add "content/blogs/AI时代，分析师的能与不能.md"
git diff --cached --check
git commit -m "content: draft AI era analyst boundaries article"
```

Expected: 正文文件公开、结构完整、没有改动站点代码。

### Task 3: 审查文章的论证与证据边界

**Files:**

- Modify: `content/blogs/AI时代，分析师的能与不能.md`
- Read: `docs/research/2026-08-13-ai-era-analyst-boundaries-sources.md`

- [ ] **Step 1: 做逐项论证检查**

确认正文分别回答：

1. 哪类分析劳动正在商品化；
2. 人工智能适合做什么；
3. 分析师不该再把什么当作壁垒；
4. 为什么公共信息不能直接变成投资结论；
5. 分析师怎样把事实推进成因果链与交易判断；
6. 材料案例如何证明上述区别；
7. 新的人机分工如何形成更高质量的判断。

Expected: 每一问都有明确答案，且没有重复堆砌同一结论。

- [ ] **Step 2: 做证据等级检查**

逐句检查具体事实，并按以下规则修改：

- 一手来源直接支持的事实可以陈述；
- 公司公告使用“公司披露、公司表示、公司计划”等主体限定；
- 计算结果使用“模型估算”，写出关键变量；
- 没有证据的现场状态保留为待验证问题；
- 删除从行业增长直接跳到单家公司收入的句子。

Expected: 不出现“平台量产＝国内材料导入”“送样＝量产”“名义产能＝有效产能”等越级推断。

- [ ] **Step 3: 检查缩写、日期和篇幅**

Run:

```bash
rg -n "\b[A-Z][A-Z0-9]{1,}\b" "content/blogs/AI时代，分析师的能与不能.md"
rg -n "^date: 2026-08-13$|^title: AI时代，分析师的能与不能$" "content/blogs/AI时代，分析师的能与不能.md"
wc -m "content/blogs/AI时代，分析师的能与不能.md"
```

Expected: 每个英文缩写首次出现时均已展开；日期与标题准确；正文保持设计要求的完整论证密度。

- [ ] **Step 4: 格式化并检查最终差异**

Run:

```bash
npx prettier --write "content/blogs/AI时代，分析师的能与不能.md" docs/research/2026-08-13-ai-era-analyst-boundaries-sources.md
git diff --check
git diff --stat origin/v4...HEAD
```

Expected: 没有空白错误；分支只包含设计、计划、研究记录和目标文章。

- [ ] **Step 5: 提交审校结果**

```bash
git add "content/blogs/AI时代，分析师的能与不能.md" docs/research/2026-08-13-ai-era-analyst-boundaries-sources.md
git diff --cached --check
git commit -m "content: refine AI era analyst boundaries article"
```

Expected: 如审校没有产生变化，则跳过空提交。

### Task 4: 完成本地站点与浏览器验收

**Files:**

- Verify: `content/blogs/AI时代，分析师的能与不能.md`
- Do not commit: `.playwright-cli/`, `output/playwright/`, `public/`

- [ ] **Step 1: 运行完整测试和构建**

Run:

```bash
npm test
npm run quartz -- build
```

Expected: 71 项现有测试全部通过；Quartz 成功生成站点。

- [ ] **Step 2: 启动本地站点**

Run:

```bash
npm run quartz -- build --serve
```

Expected: 本地站点可通过 `http://localhost:8080` 访问。

- [ ] **Step 3: 使用 Playwright 检查桌面端**

打开文章页并在 1440×900 视口验证：

- 页面标题为“AI时代，分析师的能与不能”；
- 日期为“2026年8月13日”；
- 七个正文标题和参考资料可见；
- 外部来源链接存在且可访问；
- `document.documentElement.scrollWidth === window.innerWidth`；
- 浏览器控制台无 error 和 warning。

- [ ] **Step 4: 使用 Playwright 检查手机端**

在 390×844 视口验证：

- 标题完整显示在视口内；
- 正文、引用块和长英文内容不溢出；
- `document.documentElement.scrollWidth === window.innerWidth`；
- 浏览器控制台无 error 和 warning。

保存临时截图用于目视检查，随后将 `.playwright-cli/` 和 `output/playwright/` 移到 `/tmp`，不得提交。

- [ ] **Step 5: 确认工作区干净**

Run:

```bash
git status --short
git diff --check
```

Expected: 没有未提交的文章改动或浏览器产物。

### Task 5: 通过 Pull Request 发布并验证线上结果

**Files:**

- Publish: branch `codex/ai-era-analyst-boundaries`
- Base: branch `v4`

- [ ] **Step 1: 运行完成分支流程**

读取 `finishing-a-development-branch` skill，确认测试通过、分支基于最新 `origin/v4`，再推送当前分支。

```bash
git push -u origin codex/ai-era-analyst-boundaries
```

Expected: 远程分支创建成功。

- [ ] **Step 2: 创建并检查 Pull Request**

创建标题为 `发布《AI时代，分析师的能与不能》` 的 Pull Request，目标分支为 `v4`。正文列出：文章主张、材料案例的证据边界、测试与桌面/手机验收结果。

Expected: Pull Request 可合并，差异只包含本计划定义的四个文件。

- [ ] **Step 3: 合并并等待 GitHub Pages**

合并 Pull Request，等待 `Deploy Quartz site to GitHub Pages` 工作流针对合并提交返回 `success`。

Expected: 构建与部署任务均成功；若失败，先查看失败日志，不声明文章已上线。

- [ ] **Step 4: 验证线上文章与首页**

验证以下页面返回 HTTP 200：

```text
https://justinjia0813.github.io/blogs/AI时代，分析师的能与不能
https://justinjia0813.github.io/
```

使用真实浏览器再次检查桌面端与手机端的标题、日期、目录、外部链接、横向溢出和控制台，并确认首页出现新文章入口。

Expected: 线上消费制品与本地验收一致，方可报告发布完成。

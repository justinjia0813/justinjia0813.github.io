# Investment Momentum Article Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish a source-backed Chinese article that explains when valuation momentum reflects rational capital effects and when it becomes fear-driven chasing.

**Architecture:** Add one Markdown article to the existing Quartz blog. Use DeepSeek only as a carefully qualified opening example, build the argument around the approved four-layer framework, then validate the generated page before merging into `v4`.

**Tech Stack:** Markdown, Quartz 4.5.2, GitHub Pages

---

### Task 1: Verify the evidence

**Files:**
- Reference: `docs/superpowers/specs/2026-07-15-investment-momentum-article-design.md`

- [ ] **Step 1: Verify the DeepSeek valuation comparison**

  Confirm that the reported first round uses a post-money valuation near 52 billion United States dollars, the reported new discussion uses a pre-money valuation near 71 billion United States dollars, the latter is not a completed financing, and the numerical increase is about 36.5% rather than 100%.

- [ ] **Step 2: Find direct research for both sides of the thesis**

  Use primary academic sources for the claim that venture capital can affect innovation and experimentation, and for the claim that excess capital inflows can raise private-market valuations.

### Task 2: Write the article

**Files:**
- Create: `content/blogs/投资动能：什么时候应该追，什么时候应该停.md`

- [ ] **Step 1: Add publishable frontmatter**

  Set the title to `投资动能：什么时候应该追，什么时候应该停`, date to `2026-07-15`, add a concise description, and omit draft status so the page is public.

- [ ] **Step 2: Write the approved argument**

  Follow this sequence: qualified DeepSeek opening; financing as both signal and state change; information, resources, coordination, and pricing; limits of capital-created speed; four investor questions; final distinction between valuation momentum and growth-function change.

- [ ] **Step 3: Add adjacent citations and explain abbreviations**

  Link every factual or research-based claim to an actually retrieved source. On first use, expand every English abbreviation with its English full name, Chinese full name, and a one-sentence explanation.

### Task 3: Validate the article

**Files:**
- Verify: `content/blogs/投资动能：什么时候应该追，什么时候应该停.md`

- [ ] **Step 1: Check factual wording and metadata**

  Run: `rg -n "翻倍|已经完成.*710|draft: true|FOMO|AI" 'content/blogs/投资动能：什么时候应该追，什么时候应该停.md'`

  Expected: no claim that 52 billion to 71 billion is a doubling; no claim that the 71 billion valuation financing is complete; no draft flag; any abbreviation is expanded on first use.

- [ ] **Step 2: Build and test**

  Run: `npx quartz build && npm test`

  Expected: Quartz emits the article page and all tests pass.

- [ ] **Step 3: Inspect the generated page**

  Confirm that the page contains the title, four-layer framework, final investment question, and working source links.

### Task 4: Publish and verify online

**Files:**
- Publish: `content/blogs/投资动能：什么时候应该追，什么时候应该停.md`

- [ ] **Step 1: Commit and push the scoped changes**

  Commit only the design, plan, and article on `codex/publish-investment-momentum-article`, then push the branch.

- [ ] **Step 2: Merge into `v4`**

  Create a merge request targeting `v4`, verify its checks, and merge it.

- [ ] **Step 3: Verify deployment and live content**

  Wait for the GitHub Pages deployment to succeed, then request the public article URL and confirm an HTTP 200 response plus the expected title and final paragraph.

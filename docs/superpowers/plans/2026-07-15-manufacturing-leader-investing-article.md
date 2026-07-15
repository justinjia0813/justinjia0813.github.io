# Manufacturing Leader Investing Article Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Turn the existing manufacturing-leader idea note into a complete, evidence-backed Chinese blog draft with explicit limits on when leader investing works.

**Architecture:** Modify only the existing Markdown article. Keep it unpublished with `draft: true`, build the argument from personal observation through compounding mechanisms and counterexamples, and end with an actionable investment test rather than an absolute rule.

**Tech Stack:** Markdown, Quartz 4.5.2

---

### Task 1: Write the article

**Files:**
- Modify: `content/blogs/制造业投资，我们应该只投龙头.md`

- [ ] **Step 1: Replace the idea-note metadata**

  Change the title to `制造业投资：龙头为什么拥有犯错权`, write a description that distinguishes enterprise win rate from investment return, and retain `draft: true`.

- [ ] **Step 2: Replace the idea bullets with the full article**

  Use this sequence: recent investment observation; Ningde Times as a corrected positive case; the four compounding loops; why leaders have larger but finite error budgets; Taiwan Semiconductor Manufacturing Company as a second positive case; Intel, Wuxi Suntech, and Boeing as counterexamples; the observable definition of a leading position; enterprise win rate versus investment return; final test for investing in a challenger.

- [ ] **Step 3: Add traceable sources**

  Link each factual company claim to an annual report, company filing, court record, regulator notice, or primary research page. Avoid the unsupported phrase `十年前就是第一`; use `至少从 2017 年起连续九年` for Ningde Times.

- [ ] **Step 4: Check language and scope**

  Run: `rg -n "十年前就是第一|泛制造业.*都|永远|必然|只投龙头" 'content/blogs/制造业投资，我们应该只投龙头.md'`

  Expected: no unsupported absolute claim in the article body; the phrase `只投龙头` may appear only as a question being challenged.

### Task 2: Validate the site artifact

**Files:**
- Verify: `content/blogs/制造业投资，我们应该只投龙头.md`

- [ ] **Step 1: Check frontmatter and source links**

  Run: `sed -n '1,20p' 'content/blogs/制造业投资，我们应该只投龙头.md' && rg -c "https://" 'content/blogs/制造业投资，我们应该只投龙头.md'`

  Expected: valid frontmatter with `draft: true`; at least six source links.

- [ ] **Step 2: Build the Quartz site**

  Run: `npx quartz build`

  Expected: build completes without an error caused by the article.

- [ ] **Step 3: Review the generated article**

  Confirm that headings render in order, source links are present, and no raw idea-note sections remain.


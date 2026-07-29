# Justin Portfolio Site Replication — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the jvcblog homepage with a terminal/OS-style landing page that replicates `https://hiesther.me`, using Justin's existing content, while preserving the Quartz v4 blog experience.

**Architecture:** Add homepage-only styles to Quartz's existing `custom.scss`, add a small inline script component for the Enter-to-launch interaction, and rewrite `content/index.md` as a self-contained HTML landing page. Blog pages remain unchanged.

**Tech Stack:** Quartz v4, SCSS, TypeScript inline scripts, Preact components.

---

## Task 1: Create the homepage terminal script component

**Files:**

- Create: `quartz/components/scripts/home-terminal.inline.ts`
- Create: `quartz/components/HomeTerminal.tsx`
- Modify: `quartz/components/index.ts`
- Modify: `quartz.layout.ts`

- [ ] **Step 1: Write the inline script**

Create `quartz/components/scripts/home-terminal.inline.ts`:

```typescript
const TERMINAL_STORAGE_KEY = "jvc-terminal-launched"

document.addEventListener("nav", () => {
  const hero = document.querySelector<HTMLElement>(".jvc-terminal-hero")
  const main = document.querySelector<HTMLElement>(".jvc-terminal-main")
  const hint = document.querySelector<HTMLElement>(".jvc-terminal-hint")

  if (!hero || !main) return

  const launch = () => {
    hero.classList.add("launched")
    main.classList.add("visible")
    localStorage.setItem(TERMINAL_STORAGE_KEY, "1")
    setTimeout(() => {
      main.scrollIntoView({ behavior: "smooth" })
    }, 50)
  }

  const keyHandler = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      launch()
      window.removeEventListener("keydown", keyHandler)
    }
  }

  const clickHandler = () => {
    launch()
    window.removeEventListener("keydown", keyHandler)
  }

  // Reset state on each nav so the SPA re-attaches correctly
  hero.classList.remove("launched")
  main.classList.remove("visible")

  if (localStorage.getItem(TERMINAL_STORAGE_KEY) === "1") {
    hero.classList.add("launched")
    main.classList.add("visible")
  } else {
    window.addEventListener("keydown", keyHandler)
    hint?.addEventListener("click", clickHandler)
    window.addCleanup(() => {
      window.removeEventListener("keydown", keyHandler)
      hint?.removeEventListener("click", clickHandler)
    })
  }
})
```

- [ ] **Step 2: Write the component wrapper**

Create `quartz/components/HomeTerminal.tsx`:

```tsx
import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore
import script from "./scripts/home-terminal.inline"

export default (() => {
  const HomeTerminal: QuartzComponent = () => {
    return null
  }
  HomeTerminal.afterDOMLoaded = script
  return HomeTerminal
}) satisfies QuartzComponentConstructor
```

- [ ] **Step 3: Export the component from the components index**

Modify `quartz/components/index.ts` to add:

```ts
export { default as HomeTerminal } from "./HomeTerminal"
```

- [ ] **Step 4: Register the component in the shared layout**

Modify `quartz.layout.ts`, in `sharedPageComponents.afterBody`, add `Component.HomeTerminal()`:

```ts
afterBody: [Component.HomeTerminal()],
```

- [ ] **Step 5: Verify TypeScript compiles**

Run: `npx tsc --noEmit`
Expected: No errors.

---

## Task 2: Add terminal/OS styles scoped to the homepage

**Files:**

- Modify: `quartz/styles/custom.scss`

- [ ] **Step 1: Append homepage terminal styles**

Add the following block to the end of `quartz/styles/custom.scss`:

```scss
// ------------------------------------------------------------------
// Terminal / OS style homepage (hiesther.me replication)
// ------------------------------------------------------------------

body[data-slug="index"] {
  background: #0d0d0c;
  color: #fbf8ed;
  font-family: "IBM Plex Mono", "SF Mono", "Cascadia Code", "Fira Code", monospace;
}

body[data-slug="index"] .page {
  max-width: none;
  padding: 0;
}

body[data-slug="index"] .page > #quartz-body {
  display: block;
}

body[data-slug="index"] .left.sidebar,
body[data-slug="index"] .page-footer,
body[data-slug="index"] .page-header {
  display: none !important;
}

body[data-slug="index"] article {
  max-width: none;
  padding: 0;
}

body[data-slug="index"] a {
  color: inherit;
  text-decoration: none;
}

.jvc-terminal-home {
  --term-bg: #0d0d0c;
  --term-fg: #fbf8ed;
  --term-muted: #969489;
  --term-green: #6bc7aa;
  --term-orange: #ff6d4a;
  --term-border: #34352f;
  min-height: 100vh;
}

.jvc-terminal-hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
  padding: 2rem;
  box-sizing: border-box;
  transition:
    opacity 0.6s ease,
    transform 0.6s ease;
}

.jvc-terminal-hero.launched {
  opacity: 0;
  transform: translateY(-20px);
  pointer-events: none;
  min-height: 0;
  height: 0;
  overflow: hidden;
  padding: 0;
}

.jvc-terminal-prompt {
  color: var(--term-green);
  font-size: 0.95rem;
  margin-bottom: 1rem;
}

.jvc-terminal-hint {
  cursor: pointer;
  color: var(--term-fg);
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
}

.jvc-terminal-hint:hover {
  color: var(--term-orange);
}

.jvc-terminal-arrow {
  color: var(--term-muted);
  font-size: 1.2rem;
  animation: bounce 1.4s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(6px);
  }
}

.jvc-terminal-main {
  display: none;
  max-width: 880px;
  margin: 0 auto;
  padding: 3rem 1.5rem 6rem;
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 0.7s ease,
    transform 0.7s ease;
}

.jvc-terminal-main.visible {
  display: block;
  opacity: 1;
  transform: translateY(0);
}

.jvc-terminal-nav {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  color: var(--term-orange);
  font-size: 0.85rem;
}

.jvc-terminal-nav a:hover {
  text-decoration: underline;
}

.jvc-terminal-identity {
  margin-bottom: 3rem;
}

.jvc-terminal-identity h1 {
  font-size: clamp(2rem, 6vw, 3.6rem);
  font-weight: 700;
  margin: 0 0 0.8rem;
  color: var(--term-fg);
}

.jvc-terminal-identity p {
  color: var(--term-muted);
  font-size: 1rem;
  margin: 0 0 1.5rem;
}

.jvc-terminal-separator {
  color: var(--term-green);
  font-size: 1.1rem;
  letter-spacing: 0.35em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: clip;
  margin-bottom: 3rem;
}

.jvc-terminal-section {
  margin-bottom: 4rem;
}

.jvc-terminal-section-title {
  color: var(--term-orange);
  font-size: 0.9rem;
  margin-bottom: 1.2rem;
}

.jvc-terminal-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.jvc-terminal-card {
  border: 1px solid var(--term-border);
  border-radius: 6px;
  padding: 1.2rem;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;
}

.jvc-terminal-card:hover {
  border-color: var(--term-green);
  transform: translateY(-3px);
}

.jvc-terminal-card .dim {
  color: var(--term-green);
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
}

.jvc-terminal-card h3 {
  font-size: 1.05rem;
  margin: 0 0 0.6rem;
  color: var(--term-fg);
}

.jvc-terminal-card p {
  font-size: 0.82rem;
  color: var(--term-muted);
  margin: 0 0 0.8rem;
  line-height: 1.5;
}

.jvc-terminal-card a {
  display: inline-block;
  font-size: 0.8rem;
  color: var(--term-orange);
  margin-right: 0.8rem;
}

.jvc-terminal-card a:hover {
  text-decoration: underline;
}

.jvc-terminal-os-list {
  display: grid;
  gap: 1.2rem;
}

.jvc-terminal-os-item h3 {
  color: var(--term-fg);
  font-size: 1rem;
  margin: 0 0 0.4rem;
}

.jvc-terminal-os-item p {
  color: var(--term-muted);
  font-size: 0.85rem;
  margin: 0;
}

.jvc-terminal-footer {
  border-top: 1px solid var(--term-border);
  padding-top: 2rem;
  margin-top: 2rem;
}

.jvc-terminal-footer .prompt {
  color: var(--term-green);
  margin-bottom: 0.8rem;
}

.jvc-terminal-footer a {
  color: var(--term-orange);
}

.jvc-terminal-footer a:hover {
  text-decoration: underline;
}

.jvc-terminal-quote {
  margin-top: 1.5rem;
  color: var(--term-muted);
  font-size: 0.85rem;
  font-style: italic;
}

.jvc-terminal-copyright {
  margin-top: 3rem;
  color: var(--term-muted);
  font-size: 0.75rem;
  text-align: center;
}

@media (max-width: 600px) {
  .jvc-terminal-main {
    padding: 2rem 1rem 4rem;
  }

  .jvc-terminal-nav {
    gap: 1rem;
    font-size: 0.78rem;
  }

  .jvc-terminal-grid {
    grid-template-columns: 1fr;
  }

  .jvc-terminal-separator {
    letter-spacing: 0.15em;
    font-size: 0.9rem;
  }
}
```

- [ ] **Step 2: Verify SCSS compiles**

Run: `npx quartz build`
Expected: Build completes without SCSS errors.

---

## Task 3: Rewrite the homepage content

**Files:**

- Modify: `content/index.md`

- [ ] **Step 1: Replace `content/index.md` with the terminal landing page**

```markdown
---
title: Justin / JVC Notes
date: 2026-07-08
description: 一级市场投资记录，持续递归优化物质、能量、信息三大本源。
---

<div class="jvc-terminal-home">
  <section class="jvc-terminal-hero">
    <div class="jvc-terminal-prompt">justin@universe ~ zsh</div>
    <div class="jvc-terminal-hint">Press Enter to Launch</div>
    <div class="jvc-terminal-arrow">↓</div>
  </section>

  <main class="jvc-terminal-main">
    <nav class="jvc-terminal-nav">
      <a href="#home">01主页</a>
      <a href="#works">02作品集</a>
      <a href="#os">03我的OS</a>
    </nav>

    <section class="jvc-terminal-section jvc-terminal-identity" id="home">
      <h1>Justin / JVC Notes</h1>
      <p>一级市场投资记录 · 持续递归优化物质、能量、信息三大本源</p>
      <div class="jvc-terminal-separator">✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦</div>
    </section>

    <section class="jvc-terminal-section" id="works">
      <div class="jvc-terminal-section-title">ls works/</div>
      <div class="jvc-terminal-grid">
        <article class="jvc-terminal-card">
          <div class="dim">dim_01</div>
          <h3>AI 投资笔记</h3>
          <p>记录 AI 应用层、宏观判断与第二层机会的投资思考。</p>
          <a href="./blogs/">进入 Blogs</a>
          <a href="./blogs/AI时代的两层机会">两层机会</a>
        </article>

        <article class="jvc-terminal-card">
          <div class="dim">dim_02</div>
          <h3>AI for Materials</h3>
          <p>用一级市场视角拆解 AI 材料公司的投资框架与关键证据。</p>
          <a href="./blogs/ai-materials-investment-thesis">阅读笔记</a>
        </article>

        <article class="jvc-terminal-card">
          <div class="dim">dim_03</div>
          <h3>AI 科学家创业</h3>
          <p>从 Periodic Labs 这类公司看 AI 科学家创业的窗口与变量。</p>
          <a href="./blogs/periodic-labs-style-investment-note">阅读笔记</a>
        </article>

        <article class="jvc-terminal-card">
          <div class="dim">dim_04</div>
          <h3>投资框架与方法论</h3>
          <p>否定之否定：用三段论理解 AI 繁荣的物理、资本与应用三角博弈。</p>
          <a href="./blogs/否定之否定：AI宏观三段论">阅读笔记</a>
        </article>
      </div>
    </section>

    <section class="jvc-terminal-section" id="os">
      <div class="jvc-terminal-section-title">$ cat my-os.md</div>
      <div class="jvc-terminal-os-list">
        <div class="jvc-terminal-os-item">
          <h3>RESEARCH & THINK</h3>
          <p>行业判断 · 宏观框架 · 反方验证 · 第一性原理</p>
        </div>
        <div class="jvc-terminal-os-item">
          <h3>ANALYZE & OPERATE</h3>
          <p>公司观察 · 投资备忘 · 复盘 · 决策记录</p>
        </div>
      </div>
    </section>

    <footer class="jvc-terminal-footer">
      <div class="prompt">$ cat contact.md</div>
      <p>📮 <a href="mailto:justinjia0813@gmail.com">justinjia0813@gmail.com</a></p>
      <p>🐙 <a href="https://github.com/justinjia0813" target="_blank" rel="noopener">github.com/justinjia0813</a></p>
      <p class="jvc-terminal-quote">“找到你喜欢的事，然后让它杀死你。” — Bukowski</p>
      <p class="jvc-terminal-copyright">© 2026 Justin / JVC Notes · Built with AI & attitude</p>
    </footer>

  </main>
</div>
```

- [ ] **Step 2: Build the site**

Run: `npx quartz build`
Expected: Build succeeds, `public/index.html` contains the new terminal markup.

---

## Task 4: Verify the implementation

**Files:** None (verification only).

- [ ] **Step 1: Start local server and inspect the homepage**

Run: `npx quartz build --serve`
Open: http://localhost:8080 (or the printed port).
Expected: Terminal hero shows. Pressing Enter reveals the main content.

- [ ] **Step 2: Verify links**

Click each of the four work cards and confirm they navigate to the expected blog pages.

- [ ] **Step 3: Verify blog pages are unchanged**

Navigate to `/blogs/AI时代的两层机会` and confirm the existing Quartz blog layout and styling still render correctly.

- [ ] **Step 4: Check mobile viewport**

Use browser dev tools at 375px width. Confirm no horizontal overflow and the works grid stacks vertically.

- [ ] **Step 5: Run TypeScript and Prettier checks**

Run: `npm run check`
Expected: `tsc --noEmit` passes and Prettier reports no issues (or only pre-existing issues).

---

## Task 5: Clean up brainstorming artifacts

**Files:**

- Delete: `.superpowers/brainstorm/32748-1783525819/` directory (optional, already gitignored)

- [ ] **Step 1: Stop the brainstorming server**

Run: `"/Users/justinjia/.agents/skills/brainstorming/scripts/stop-server.sh" "/Users/justinjia/Desktop/personal project/jvcblog/.superpowers/brainstorm/32748-1783525819"`
Expected: Server stops.

- [ ] **Step 2: Remove temporary brainstorm files**

Run: `rm -rf "/Users/justinjia/Desktop/personal project/jvcblog/.superpowers"`
Expected: Directory removed.

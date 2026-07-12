# v2.0 Three-Module Terminal Accent Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Keep the articles, tools, and community homepage structure while adding the selected light terminal accents from design option C.

**Architecture:** Reuse the existing `HomePage` markup and design tokens. Add only the missing terminal-card treatment and keyboard focus styling in the existing homepage stylesheet; do not add scripts, components, dependencies, or data changes.

**Tech Stack:** Quartz v4, TypeScript, Preact, Sass-compatible stylesheets, Node test runner.

---

### Task 1: Lock the selected visual contract

**Files:**

- Modify: `quartz/components/HomePageV2.test.ts`
- Modify: `quartz/styles/custom.scss`

- [ ] **Step 1: Write the failing style contract test**

Extend `HomePageV2.test.ts` with the stylesheet path and this test:

```ts
const stylesPath = fileURLToPath(new URL("../styles/custom.scss", import.meta.url))

test("option C adds terminal card and focus accents without changing the three modules", () => {
  const styles = readFileSync(stylesPath, "utf8")

  assert.match(styles, /\.jvc-article-card \{[^}]*border: 1px solid var\(--jvc-border\)/)
  assert.match(styles, /\.jvc-article-card:hover \{[^}]*transform: translateY\(-3px\)/)
  assert.match(styles, /\.jvc-home a:focus-visible/)
})
```

- [ ] **Step 2: Run the test and verify failure**

Run:

```bash
npx tsx --test quartz/components/HomePageV2.test.ts
```

Expected: the new option C test fails because article cards lack a full border and the homepage lacks an explicit focus rule.

- [ ] **Step 3: Add the minimum missing styles**

Update the existing homepage rules in `quartz/styles/custom.scss`:

```scss
.jvc-article-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem;
}

.jvc-article-card {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding: 1.6rem;
  border: 1px solid var(--jvc-border);
  border-radius: 4px;
  background: color-mix(in srgb, var(--light) 60%, var(--dark) 0%);
  text-decoration: none;
  transition:
    border-color 0.2s ease,
    transform 0.2s ease;
}

.jvc-article-card:hover {
  border-color: var(--secondary);
  transform: translateY(-3px);
}

.jvc-article-card:hover .jvc-article-title {
  color: var(--secondary);
}

.jvc-home a:focus-visible {
  outline: 2px solid var(--tertiary);
  outline-offset: 4px;
}
```

Keep all existing typography, prompt colors, navigation, tool cards, module order, and mobile single-column rules unchanged.

- [ ] **Step 4: Run the focused test and format check**

Run:

```bash
npx prettier quartz/components/HomePageV2.test.ts quartz/styles/custom.scss --write
npx tsx --test quartz/components/HomePageV2.test.ts
```

Expected: both homepage contract tests pass.

### Task 2: Verify and serve the local preview

**Files:** None.

- [ ] **Step 1: Run the full automated checks**

Run:

```bash
npm test
npm run check
npx quartz build
```

Expected: all tests pass, formatting and type checks pass, and the site builds successfully.

- [ ] **Step 2: Verify the generated homepage contract**

Read `public/index.html` and assert that it contains `articles`, `tools`, and `community`; contains the three selected tool names; and does not contain `jvc-terminal-home`.

Expected: the generated page preserves the three modules and contains exactly the selected tools.

- [ ] **Step 3: Start the local preview**

Run:

```bash
npx quartz build --serve
```

Expected: the local site is available at `http://localhost:8080`.

- [ ] **Step 4: Inspect desktop and mobile layouts**

In the local browser, verify that all three modules are visible, article cards and tool cards share the terminal-accent border treatment, the 375-pixel viewport has no horizontal overflow, and the browser reports no errors.

- [ ] **Step 5: Stop before publishing**

Keep the preview running for user review. Do not commit implementation changes or push the branch until the user approves the local result.

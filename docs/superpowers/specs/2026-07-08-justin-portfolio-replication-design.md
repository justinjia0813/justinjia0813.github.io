# Justin Portfolio Site Replication — Design Spec

## Goal

Rebuild the jvcblog homepage to visually replicate the terminal/OS-style personal site `https://hiesther.me`, while keeping all existing Quartz v4 blog functionality intact. Content is derived from materials already present in the repo.

## Reference Analysis

`hiesther.me` is a single-page, dark, terminal-themed portfolio with these signature elements:

- A full-screen zsh-style terminal hero that requires pressing **Enter** to reveal the rest of the page.
- A top "tab" nav: `01主页 02作品集 03我的OS`.
- A decorative separator line made of `✦` characters.
- A canvas-like works grid (`dim_01` … `dim_04`) with project cards.
- An "My OS" section listing capabilities (research, build, analyze, operate).
- A terminal-style footer with contact info and a quote.
- Typography: monospace/code fonts, high-contrast dark palette, pixel/retro accents.

## Current Project Context

- Quartz v4 static site at `/Users/justinjia/Desktop/personal project/jvcblog`.
- Existing content lives in `content/` and `content/blogs/`.
- `quartz.config.ts` already defines a dark-aware palette, but it is a "digital garden" theme, not a terminal theme.
- `quartz.layout.ts` uses standard Quartz page layout.
- Build command: `npx quartz build --serve`.

## Chosen Approach

**Option A — Terminal homepage + independent blog.**

- Replace `content/index.md` with a custom HTML landing page that mimics the reference site's structure.
- Add scoped custom styles and scripts only for the homepage.
- Leave the rest of the site (blog posts, folder listings, RSS, sitemap) untouched so Quartz continues to manage them.

### Why Option A

- Minimal invasion of Quartz internals → easier upgrades and maintenance.
- Preserves the existing writing/reading workflow the user already has.
- Achieves the requested "complete replication" feel on the homepage.

## Content Mapping

| Reference Section                                                                                                                           | Justin Equivalent                                                                                             | Source in Repo                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| ESTHER不二 · INTJ · 南大建筑 → 米兰理工 → AI · ColaOS                                                                                       | **Justin / JVC Notes** · 一级市场投资记录 · 物质 · 能量 · 信息                                                | `content/index.md` title + hero text               |
| 01主页 02作品集 03我的OS                                                                                                                    | Same three tabs                                                                                               | Derived from reference structure                   |
| 域名教程 / 人生系统 / 部署教程 / 和AI搭档生活 / Cola+OB自媒体 / 心理学书库 / Design Skill / Build Your Tool / 不二的个人看板 / Work With Me | **dim_01 AI 投资笔记** · **dim_02 AI for Materials** · **dim_03 AI 科学家创业** · **dim_04 投资框架与方法论** | `content/blogs/` posts                             |
| RESEARCH & THINK / CREATE & BUILD / ANALYZE & OPERATE                                                                                       | **RESEARCH & THINK** / **ANALYZE & OPERATE**                                                                  | Derived from the user's two primary writing themes |
| Contact: esther.sjw@gmail.com / 小红书                                                                                                      | Contact: justinjia0813@gmail.com / GitHub                                                                     | Git history + `quartz.layout.ts` footer links      |
| Quote: Bukowski                                                                                                                             | Same Bukowski quote unless user replaces it                                                                   | Reference site                                     |

### Detailed Card Links

- **dim_01 AI 投资笔记** → links to `./blogs/`
  - Sub-links: `AI时代的两层机会`, `否定之否定：AI宏观三段论`
- **dim_02 AI for Materials** → links to `./blogs/ai-materials-investment-thesis`
- **dim_03 AI 科学家创业** → links to `./blogs/periodic-labs-style-investment-note`
- **dim_04 投资框架与方法论** → links to `./blogs/否定之否定：AI宏观三段论`

## Architecture

```
content/index.md                 # Landing page markup (HTML inside markdown)
quartz/styles/custom-home.scss   # Homepage-only terminal/OS styles
quartz/components/scripts/
  └── home-terminal.inline.ts    # Enter-to-launch + typewriter effects
quartz.layout.ts                 # Unchanged for blog pages
quartz.config.ts                 # Minor typography tweak if needed
```

### Components

1. **Terminal Hero**
   - Prompt line: `justin@universe ~ zsh`
   - Instruction: `Press Enter to Launch`
   - Animated caret or down-arrow.

2. **Nav Tabs**
   - `01主页`, `02作品集`, `03我的OS` as anchor links.
   - Optional active-state highlight.

3. **Identity Block**
   - Big title: `Justin / JVC Notes`
   - Subtitle: `一级市场投资记录 · 持续递归优化物质、能量、信息三大本源`
   - Decorative `✦` separator.

4. **Works Grid (`ls works/`)**
   - Four `dim_` cards in a responsive grid.
   - Each card has a title, one-line description, and links.

5. **My OS Section (`$ cat my-os.md`)**
   - Two capability blocks: `RESEARCH & THINK` and `ANALYZE & OPERATE`.
   - Each lists 2–3 concrete activities drawn from the user's posts.

6. **Terminal Footer**
   - `$ cat contact.md` with email and GitHub.
   - Quote block.
   - Copyright and back-to-top link.

## Styling

- Use a dark terminal palette:
  - Background: `#0d0d0c` or `#111211`
  - Text: `#fbf8ed`
  - Accent 1 (prompt/success): `#6bc7aa`
  - Accent 2 (tabs/commands): `#ff6d4a`
  - Muted: `#969489`
- Font stack: `IBM Plex Mono`, `SF Mono`, `monospace`.
- Avoid relying on Quartz's existing light-mode variables on the homepage by scoping styles under a homepage class.

## Data Flow

1. Quartz parses `content/index.md`.
2. HTML block inside markdown is emitted as the page body.
3. `custom-home.scss` is loaded via Quartz's style pipeline.
4. `home-terminal.inline.ts` attaches event listeners after DOM ready:
   - Keydown `Enter` hides the overlay/hero and scrolls to the identity block.
   - Optional typewriter effect for the prompt line.

## Error Handling & Edge Cases

- If JavaScript fails, the page still renders all content; the Enter overlay is non-blocking.
- Mobile: stack the works grid vertically; reduce font sizes; keep tap targets large.
- Blog pages must not load homepage-only styles/scripts (scope selectors to `.jvc-home`).

## Testing & Verification

1. `npx quartz build` completes without errors.
2. `npx quartz build --serve` shows the new homepage.
3. Pressing Enter on the hero reveals the main content.
4. All four work cards link to the correct pages.
5. Existing blog posts render unchanged.
6. Mobile viewport looks acceptable (no horizontal overflow).

## Risks & Limitations

- Heavy custom HTML in `index.md` makes it harder to edit in Obsidian.
- Quartz updates may change class names or style pipeline; the custom SCSS file isolates most of this risk.
- Exact pixel-level fidelity to `hiesther.me` is not guaranteed without inspecting its CSS; the goal is "complete replication" in structure and feel.

## Out of Scope

- Replicating the draggable/zoomable canvas behavior of the reference site (would require a custom JS library).
- Changing the layout of non-homepage blog posts.
- Adding new blog content; only reusing existing posts.

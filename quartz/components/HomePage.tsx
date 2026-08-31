import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { joinSegments, pathToRoot, resolveRelative } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"
import { byDateAndAlphabetical } from "./PageList"
import { Date as DateComponent, getDate } from "./Date"
import { allTools } from "./data/tools"
// @ts-ignore
import homepageFlowScript from "./scripts/homepageFlow.inline"

export default (() => {
  const HomePage: QuartzComponent = ({ fileData, allFiles, cfg }: QuartzComponentProps) => {
    if (fileData.slug !== "index") {
      return null
    }

    // 文章：仅取 blogs/ 下已发布文章，按日期倒序
    const articles: QuartzPluginData[] = allFiles
      .filter((file) => file.slug?.startsWith("blogs/"))
      .sort(byDateAndAlphabetical(cfg))
    const [featuredArticle, ...otherArticles] = articles
    const staticRoot = joinSegments(pathToRoot(fileData.slug!), "static/assets")

    return (
      <div class="jvc-home">
        <section class="jvc-home-hero">
          <img
            class="jvc-hero-visual"
            src={joinSegments(staticRoot, "jvc-home-coordinate-field.webp")}
            alt=""
            aria-hidden="true"
          />
          <canvas class="jvc-hero-flow" aria-hidden="true" />
          <div class="jvc-hero-content">
            <p class="jvc-kicker">31.2304° N, 121.4737° E · INDEPENDENT RESEARCH</p>
            <h1 class="jvc-hero-title">Justin / JVC Notes</h1>
            <p class="jvc-hero-copy">
              <strong>一级市场投资记录</strong>
              <span>持续递归优化物质、能量、信息三大本源</span>
            </p>
            <p class="jvc-hero-thesis">研究不是预测答案，而是持续校准坐标。</p>
            <nav class="jvc-home-nav" aria-label="首页分区">
              <a href="#articles">
                <span class="nav-num">01</span>文章
              </a>
              <a href="#tools">
                <span class="nav-num">02</span>项目/工具
              </a>
              <a href="#community">
                <span class="nav-num">03</span>社区
              </a>
              <a href="./cv/">
                <span class="nav-num">04</span>CV
              </a>
            </nav>
          </div>
        </section>

        <section class="jvc-home-section" id="articles">
          <div class="jvc-section-head">
            <span class="jvc-section-num">01</span>
            <h2 class="jvc-section-title">最新研究</h2>
            <a class="jvc-section-link" href="./blogs/">
              查看全部文章 →
            </a>
          </div>
          {featuredArticle && (
            <a
              class="jvc-featured-article"
              href={resolveRelative(fileData.slug!, featuredArticle.slug!)}
            >
              <img
                src={joinSegments(staticRoot, "jvc-home-research-thumbnail.webp")}
                alt=""
                loading="eager"
              />
              <div class="jvc-featured-copy">
                {getDate(cfg, featuredArticle) && (
                  <span class="jvc-article-meta">
                    <DateComponent date={getDate(cfg, featuredArticle)!} locale={cfg.locale} />
                  </span>
                )}
                <h3 class="jvc-article-title">{featuredArticle.frontmatter?.title ?? "未命名"}</h3>
                {featuredArticle.frontmatter?.description && (
                  <p class="jvc-article-desc">{featuredArticle.frontmatter.description}</p>
                )}
                <span class="jvc-article-action">研究笔记 · 阅读全文 →</span>
              </div>
            </a>
          )}
          {otherArticles.length > 0 && (
            <div class="jvc-article-grid">
              {otherArticles.map((page) => {
                const title = page.frontmatter?.title ?? "未命名"
                const desc = page.frontmatter?.description ?? ""
                const date = getDate(cfg, page)
                return (
                  <a class="jvc-article-card" href={resolveRelative(fileData.slug!, page.slug!)}>
                    {date && (
                      <span class="jvc-article-meta">
                        <DateComponent date={date} locale={cfg.locale} />
                      </span>
                    )}
                    <h3 class="jvc-article-title">{title}</h3>
                    {desc && <p class="jvc-article-desc">{desc}</p>}
                  </a>
                )
              })}
            </div>
          )}
        </section>

        <section class="jvc-home-section" id="tools">
          <div class="jvc-section-head">
            <span class="jvc-section-num">02</span>
            <h2 class="jvc-section-title">项目/工具</h2>
            <p class="jvc-section-prompt">WORKING SYSTEMS</p>
          </div>
          <div class="jvc-tool-grid">
            {allTools.map((tool) => (
              <a class="jvc-tool-card" href={tool.url} target="_blank" rel="noopener">
                <div class="jvc-tool-head">
                  <h3 class="jvc-tool-name">{tool.name}</h3>
                  <span class="jvc-tool-lang">{tool.lang}</span>
                </div>
                <p class="jvc-tool-desc">{tool.desc}</p>
                <span class="jvc-tool-link">{tool.linkLabel ?? "github.com/justinjia0813"} →</span>
              </a>
            ))}
          </div>
        </section>

        <section class="jvc-home-section" id="community">
          <div class="jvc-section-head">
            <span class="jvc-section-num">03</span>
            <h2 class="jvc-section-title">社区</h2>
            <p class="jvc-section-prompt">OPEN NOTES</p>
          </div>
          <div class="jvc-community-grid">
            <div class="jvc-os">
              <div class="jvc-os-item">
                <h3>RESEARCH & THINK</h3>
                <p>行业判断 · 宏观框架 · 反方验证 · 第一性原理</p>
              </div>
              <div class="jvc-os-item">
                <h3>ANALYZE & OPERATE</h3>
                <p>公司观察 · 投资备忘 · 复盘 · 决策记录</p>
              </div>
            </div>
            <div class="jvc-contact">
              <p class="jvc-contact-prompt">CONTACT</p>
              <a href="mailto:justinjia0813@gmail.com">EMAIL · justinjia0813@gmail.com</a>
              <a href="https://github.com/justinjia0813" target="_blank" rel="noopener">
                GITHUB · github.com/justinjia0813
              </a>
              <p class="jvc-quote">“找到你喜欢的事，然后让它杀死你。” — Bukowski</p>
            </div>
          </div>
          <p class="jvc-copyright">© 2026 Justin / JVC Notes · Built with AI & attitude</p>
        </section>
      </div>
    )
  }

  HomePage.afterDOMLoaded = homepageFlowScript

  return HomePage
}) satisfies QuartzComponentConstructor

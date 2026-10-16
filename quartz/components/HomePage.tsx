import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { joinSegments, pathToRoot, resolveRelative } from "../util/path"
import { QuartzPluginData } from "../plugins/vfile"
import { byDateAndAlphabetical } from "./PageList"
import { Date as DateComponent, getDate } from "./Date"
import { allTools } from "./data/tools"
import { researchIssues } from "./data/research"

export default (() => {
  const HomePage: QuartzComponent = ({ fileData, allFiles, cfg }: QuartzComponentProps) => {
    if (fileData.slug !== "index") {
      return null
    }

    // 博客：仅取 blogs/ 下已发布文章，按日期倒序
    const articles: QuartzPluginData[] = allFiles
      .filter((file) => file.slug?.startsWith("blogs/"))
      .sort(byDateAndAlphabetical(cfg))
    const [featuredArticle, ...otherArticles] = articles
    const root = pathToRoot(fileData.slug!)
    const at = (p: string) => joinSegments(root, p)
    const [latestIssue] = researchIssues

    return (
      <div class="jvc-home">
        <section class="jvc-home-hero">
          <div class="jvc-hero-content">
            <img
              class="jvc-hero-pixel"
              src={at("static/assets/jr-home-pixel-hero.webp")}
              alt="Justified Research pixel art"
              width="1280"
              height="720"
              loading="eager"
              decoding="async"
            />
            <p class="jvc-hero-tagline">持续递归优化物质、能量、信息三大本源</p>
            <nav class="jvc-home-nav" aria-label="首页分区">
              <a href="#articles">
                <span class="nav-num">01</span>博客
              </a>
              <a href="#research">
                <span class="nav-num">02</span>专栏
              </a>
              <a href="#tools">
                <span class="nav-num">03</span>项目
              </a>
              <a href="#community">
                <span class="nav-num">04</span>社区
              </a>
              <a href="./cv">
                <span class="nav-num">05</span>CV
              </a>
            </nav>
          </div>
        </section>

        <section class="jvc-home-section" id="articles">
          <div class="jvc-section-head">
            <span class="jvc-section-num">01 · Blog</span>
            <h2 class="jvc-section-title">最新博客</h2>
            <a class="jvc-section-link" href="./blogs/">
              查看全部博客 →
            </a>
          </div>
          {featuredArticle && (
            <a
              class="jvc-featured-article"
              href={resolveRelative(fileData.slug!, featuredArticle.slug!)}
            >
              <div class="jvc-featured-copy">
                <span class="jvc-article-meta">
                  <span>Featured</span>
                  {getDate(cfg, featuredArticle) && (
                    <DateComponent date={getDate(cfg, featuredArticle)!} locale={cfg.locale} />
                  )}
                </span>
                <h3 class="jvc-article-title">{featuredArticle.frontmatter?.title ?? "未命名"}</h3>
                {featuredArticle.frontmatter?.description && (
                  <p class="jvc-article-desc">{featuredArticle.frontmatter.description}</p>
                )}
                <span class="jvc-article-action">阅读全文 →</span>
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

        {latestIssue && (
          <section class="jvc-home-section" id="research">
            <div class="jvc-section-head">
              <span class="jvc-section-num">02 · Column</span>
              <h2 class="jvc-section-title">最新专栏</h2>
              <a class="jvc-section-link" href="./research/">
                进入专栏 →
              </a>
            </div>
            <div class="jvc-research-feature">
              {latestIssue.cover && (
                <a class="jvc-research-cover" href={at(latestIssue.htmlPath)} data-router-ignore>
                  <img src={at(latestIssue.cover)} alt="" loading="lazy" />
                </a>
              )}
              <div class="jvc-research-copy">
                <p class="jvc-article-meta">
                  <span>{latestIssue.issue}</span>
                  <span>{latestIssue.topic}</span>
                  <span>{latestIssue.date}</span>
                </p>
                <h3 class="jvc-research-title">
                  <a href={at(latestIssue.htmlPath)} data-router-ignore>
                    {latestIssue.title}
                  </a>
                </h3>
                <p class="jvc-article-desc">{latestIssue.abstract}</p>
                <p class="jvc-research-actions">
                  <a href={at(latestIssue.htmlPath)} data-router-ignore>
                    阅读报告 →
                  </a>
                </p>
              </div>
            </div>
          </section>
        )}

        <section class="jvc-home-section" id="tools">
          <div class="jvc-section-head">
            <span class="jvc-section-num">03 · Projects</span>
            <h2 class="jvc-section-title">最新项目</h2>
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
            <span class="jvc-section-num">04 · Community</span>
            <h2 class="jvc-section-title">社区</h2>
          </div>
          <div class="jvc-contact">
            <a href="mailto:justinjia0813@gmail.com">EMAIL · justinjia0813@gmail.com</a>
            <a href="https://github.com/justinjia0813" target="_blank" rel="noopener">
              GITHUB · github.com/justinjia0813
            </a>
          </div>
          <p class="jvc-copyright">© 2026 Justified Research · justinjia.si</p>
        </section>
      </div>
    )
  }

  return HomePage
}) satisfies QuartzComponentConstructor

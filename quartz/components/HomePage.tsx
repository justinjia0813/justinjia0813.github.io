import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { allTools } from "./data/tools"

export default (() => {
  const HomePage: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    if (fileData.slug !== "index") {
      return null
    }

    return (
      <div class="jvc-terminal-home">
        <section class="jvc-terminal-hero">
          <div class="jvc-terminal-prompt">justin@universe ~ zsh</div>
          <button class="jvc-terminal-hint" type="button">
            Press Enter to Launch
          </button>
          <div class="jvc-terminal-arrow" aria-hidden="true">
            ↓
          </div>
        </section>

        <main class="jvc-terminal-main" tabindex={-1}>
          <nav class="jvc-terminal-nav" aria-label="主页导航">
            <a href="#home">01主页</a>
            <a href="#works">02作品集</a>
            <a href="#tools">03工具</a>
            <a href="#os">04我的OS</a>
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

          <section class="jvc-terminal-section" id="tools">
            <div class="jvc-terminal-section-title">ls tools/</div>
            <div class="jvc-terminal-grid">
              {allTools.map((tool) => (
                <article class="jvc-terminal-card">
                  <div class="dim">{tool.lang}</div>
                  <h3>{tool.name}</h3>
                  <p>{tool.desc}</p>
                  <a href={tool.url} target="_blank" rel="noopener">
                    查看项目
                  </a>
                </article>
              ))}
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
            <p>
              📮 <a href="mailto:justinjia0813@gmail.com">justinjia0813@gmail.com</a>
            </p>
            <p>
              🐙{" "}
              <a href="https://github.com/justinjia0813" target="_blank" rel="noopener">
                github.com/justinjia0813
              </a>
            </p>
            <p class="jvc-terminal-quote">“找到你喜欢的事，然后让它杀死你。” — Bukowski</p>
            <p class="jvc-terminal-copyright">
              © 2026 Justin / JVC Notes · Built with AI & attitude
            </p>
          </footer>
        </main>
      </div>
    )
  }

  return HomePage
}) satisfies QuartzComponentConstructor

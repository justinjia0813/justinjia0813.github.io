import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { joinSegments, pathToRoot } from "../util/path"
import { researchIssues } from "./data/research"

/**
 * Justified Research column index (/research/).
 * Styled after the report covers: logo, intro line, issue cards.
 * Issue links point at standalone HTML reports, so they bypass the SPA router.
 */
export default (() => {
  const ResearchPage: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    if (fileData.slug !== "research/index") return null
    const root = pathToRoot(fileData.slug!)
    const at = (p: string) => joinSegments(root, p)

    return (
      <div class="jr-column">
        <header class="jr-cover">
          <img
            class="jr-logo jr-logo-light"
            src={at("static/research/justified-research_horizontal.svg")}
            alt="Justified Research"
            width="369"
            height="100"
          />
          <img
            class="jr-logo jr-logo-dark"
            src={at("static/research/justified-research_horizontal_reverse.svg")}
            alt=""
            aria-hidden="true"
            width="369"
            height="100"
          />
          <p class="jr-kicker">专栏 · Column</p>
          <h1 class="jr-title">长篇行业研究</h1>
          <p class="jr-lede">
            每一期把一个硬科技赛道从技术、市场、竞争讲到估值，每个关键判断都标注证据等级与来源。
          </p>
          <div class="jr-meta">
            <span>Long-form · 行业深度</span>
            <span>{researchIssues.length} Issue</span>
            <span>HTML</span>
          </div>
        </header>

        <section class="jr-issues" aria-label="Issues">
          <div class="jr-issues-head">
            <span>Issues · 往期</span>
            <span>Latest first</span>
          </div>
          {researchIssues.map((issue) => (
            <article class="jr-issue">
              {issue.cover && (
                <a class="jr-issue-cover" href={at(issue.htmlPath)} data-router-ignore>
                  <img src={at(issue.cover)} alt="" loading="lazy" />
                </a>
              )}
              <div class="jr-issue-body">
                <p class="jr-issue-meta">
                  <span>{issue.issue}</span>
                  <span>{issue.topic}</span>
                  <span>{issue.date}</span>
                </p>
                <h2 class="jr-issue-title">
                  <a href={at(issue.htmlPath)} data-router-ignore>
                    {issue.title}
                  </a>
                </h2>
                <p class="jr-issue-sub">{issue.subtitle}</p>
                <p class="jr-issue-abstract">{issue.abstract}</p>
                {issue.kpis && (
                  <dl class="jr-issue-kpis">
                    {issue.kpis.map(([value, label]) => (
                      <div>
                        <dt>{value}</dt>
                        <dd>{label}</dd>
                      </div>
                    ))}
                  </dl>
                )}
                <p class="jr-issue-actions">
                  <a class="jr-btn jr-btn-primary" href={at(issue.htmlPath)} data-router-ignore>
                    阅读 HTML 版 →
                  </a>
                </p>
              </div>
            </article>
          ))}
        </section>

        <p class="jr-note">
          本专栏为独立研究，仅代表作者个人观点，不构成任何投资建议。数据截至各期发布日期。
        </p>
      </div>
    )
  }

  return ResearchPage
}) satisfies QuartzComponentConstructor

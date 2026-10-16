import { joinSegments, pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  const at = (p: string) => joinSegments(baseDir, p)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir} aria-label={title}>
        <img
          class="site-logo site-logo-light"
          src={at("static/research/justified-research_horizontal.svg")}
          alt="Justified Research"
          width="369"
          height="100"
        />
        <img
          class="site-logo site-logo-dark"
          src={at("static/research/justified-research_horizontal_reverse.svg")}
          alt=""
          aria-hidden="true"
          width="369"
          height="100"
        />
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  font-family: var(--titleFont);
}

.site-logo {
  display: block;
  width: 168px;
  height: auto;
}

.site-logo-dark {
  display: none;
}

:root[saved-theme="dark"] .site-logo-light {
  display: none;
}

:root[saved-theme="dark"] .site-logo-dark {
  display: block;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor

import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir} aria-label={title}>
        <svg
          class="site-logo"
          width="260"
          height="120"
          viewBox="0 0 260 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="JVC"
        >
          <path
            d="M18 96C48 88 86 82 122 82C168 82 208 94 244 78"
            stroke="#A46A50"
            stroke-width="5"
            stroke-linecap="round"
          />
          <text
            x="14"
            y="76"
            fill="currentColor"
            font-family="Snell Roundhand, Apple Chancery, Brush Script MT, Segoe Script, cursive"
            font-size="72"
            font-weight="500"
            letter-spacing="0"
          >
            JVC
          </text>
        </svg>
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
  width: 86px;
  height: auto;
  color: var(--dark);
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor

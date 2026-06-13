import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

function renderMixedTitle(title: string) {
  return title.split(/([A-Za-z0-9][A-Za-z0-9 .,&/+:#-]*)/g).map((part) => {
    if (/^[A-Za-z0-9]/.test(part)) {
      return <span class="latin-run">{part}</span>
    }

    return part
  })
}

const ArticleTitle: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const title = fileData.frontmatter?.title
  if (title) {
    return <h1 class={classNames(displayClass, "article-title")}>{renderMixedTitle(title)}</h1>
  } else {
    return null
  }
}

ArticleTitle.css = `
.article-title {
  margin: 2rem 0 0 0;
}
`

export default (() => ArticleTitle) satisfies QuartzComponentConstructor

import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      Research: "/research/",
      GitHub: "https://github.com/justinjia0813",
      RSS: "/index.xml",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => !["index", "cv", "research/index"].includes(page.fileData.slug!),
    }),
    Component.ConditionalRender({
      component: Component.HomePage(),
      condition: (page) => page.fileData.slug === "index",
    }),
    Component.ConditionalRender({
      component: Component.CVPage(),
      condition: (page) => page.fileData.slug === "cv",
    }),
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => !["index", "cv", "research/index"].includes(page.fileData.slug!),
    }),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) => !["index", "cv", "research/index"].includes(page.fileData.slug!),
    }),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
  ],
  right: [
    Component.ConditionalRender({
      component: Component.DesktopOnly(Component.TableOfContents()),
      condition: (page) => !["index", "cv", "research/index"].includes(page.fileData.slug!),
    }),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
const isResearchColumn = (page: { fileData: { slug?: string } }) =>
  page.fileData.slug === "research/index"

export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.ResearchPage(),
      condition: isResearchColumn,
    }),
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => !isResearchColumn(page),
    }),
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => !isResearchColumn(page),
    }),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) => !isResearchColumn(page),
    }),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
  ],
  right: [],
}

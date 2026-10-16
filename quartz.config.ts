import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Justified Research",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "cloudflare",
      token: "ef878bf00d314aa5996403a9d6404b39",
    },
    locale: "zh-CN",
    baseUrl: "justinjia.si",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "published", // frontmatter `date` (aliases: published, publishDate)
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        // Justified Research editorial system: light sans body, serif display, mono labels
        header: { name: "Source Serif 4", weights: [300, 400, 600], includeItalic: true },
        body: { name: "Noto Sans SC", weights: [300, 400, 500] },
        code: { name: "JetBrains Mono", weights: [400, 500] },
      },
      colors: {
        lightMode: {
          light: "#f7f2ed",
          lightgray: "#ddd5cb",
          gray: "#777c71",
          darkgray: "#30332f",
          dark: "#202020",
          secondary: "#c4775a",
          tertiary: "#4f6d7a",
          highlight: "rgba(196, 119, 90, 0.09)",
          textHighlight: "rgba(196, 119, 90, 0.22)",
        },
        darkMode: {
          light: "#1b1a18",
          lightgray: "#3a3833",
          gray: "#8f8c82",
          darkgray: "#d9d3c8",
          dark: "#f2ece3",
          secondary: "#d98b6e",
          tertiary: "#8fb0bd",
          highlight: "rgba(217, 139, 110, 0.12)",
          textHighlight: "rgba(217, 139, 110, 0.28)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
        // Include every post in /index.xml instead of Quartz's default of 10
        rssLimit: undefined,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config

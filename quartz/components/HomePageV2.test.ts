import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"
import { fileURLToPath } from "node:url"
import { allTools } from "./data/tools"

const componentPath = fileURLToPath(new URL("./HomePage.tsx", import.meta.url))
const stylesPath = fileURLToPath(new URL("../styles/custom.scss", import.meta.url))
const pageTitlePath = fileURLToPath(new URL("./PageTitle.tsx", import.meta.url))

test("homepage keeps blogs, column, projects, and community modules", () => {
  const component = readFileSync(componentPath, "utf8")

  assert.match(component, /allFiles/)
  assert.match(component, /id="articles"/)
  assert.match(component, /id="tools"/)
  assert.match(component, /id="community"/)
  assert.match(component, /span>博客/)
  assert.match(component, /span>专栏/)
  assert.match(component, /span>项目\n/)
  assert.match(component, /最新博客/)
  assert.match(component, /最新专栏/)
  assert.match(component, /最新项目/)
  assert.doesNotMatch(component, /最新研究/)
  assert.doesNotMatch(component, /项目\/工具/)
  assert.doesNotMatch(component, /Justin \/ JVC Notes/)
  assert.doesNotMatch(component, /一级市场投资记录/)
  assert.doesNotMatch(component, /jvc-terminal-home/)
  assert.deepEqual(
    allTools.map((tool) => tool.name),
    ["dottify", "VCagents", "Investable", "jvc-analyst"],
  )
  assert.deepEqual(
    allTools.slice(0, 3).map(({ url, linkLabel }) => ({ url, linkLabel })),
    [
      {
        url: "https://dottify-20260717.justinjia0813.chatgpt.site",
        linkLabel: "Live Site",
      },
      {
        url: "https://vcagents-20260715.justinjia0813.chatgpt.site",
        linkLabel: "Live Site",
      },
      {
        url: "https://investable-20260722.justinjia0813.chatgpt.site",
        linkLabel: "Live Site",
      },
    ],
  )
})

test("editorial homepage uses pixel hero art and keeps accessibility contracts", () => {
  const component = readFileSync(componentPath, "utf8")
  const styles = readFileSync(stylesPath, "utf8")

  assert.match(component, /jvc-hero-pixel/)
  assert.match(component, /jr-home-pixel-hero\.webp/)
  assert.match(component, /持续递归优化物质、能量、信息三大本源/)
  assert.doesNotMatch(component, /jvc-hero-flow/)
  assert.doesNotMatch(component, /homepageFlowScript/)
  assert.doesNotMatch(component, /研究不是预测答案，而是持续校准坐标/)
  assert.match(styles, /body\[data-slug="index"\]/)
  assert.match(styles, /\.jvc-hero-pixel/)
  assert.match(styles, /prefers-reduced-motion: reduce/)
  assert.match(styles, /\.jvc-home a:focus-visible/)
})

test("homepage links the Justified Research column", () => {
  const component = readFileSync(componentPath, "utf8")

  assert.match(component, /id="research"/)
  assert.match(component, /researchIssues/)
  assert.match(component, /data-router-ignore/)
})

test("community section only exposes contact links", () => {
  const component = readFileSync(componentPath, "utf8")

  assert.match(component, /mailto:justinjia0813@gmail\.com/)
  assert.match(component, /github\.com\/justinjia0813/)
  assert.doesNotMatch(component, /RESEARCH & THINK/)
  assert.doesNotMatch(component, /ANALYZE & OPERATE/)
  assert.doesNotMatch(component, /OPEN NOTES/)
  assert.doesNotMatch(component, /Bukowski/)
  assert.match(component, /Justified Research · justinjia\.si/)
})

test("page title uses Justified Research brand marks", () => {
  const pageTitle = readFileSync(pageTitlePath, "utf8")

  assert.match(pageTitle, /justified-research_horizontal\.svg/)
  assert.match(pageTitle, /justified-research_horizontal_reverse\.svg/)
  assert.doesNotMatch(pageTitle, />JVC</)
})

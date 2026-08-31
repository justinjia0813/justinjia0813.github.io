import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"
import { fileURLToPath } from "node:url"

const componentPath = fileURLToPath(new URL("./CVPage.tsx", import.meta.url))
const contentPath = fileURLToPath(new URL("../../content/cv.md", import.meta.url))
const homePath = fileURLToPath(new URL("./HomePage.tsx", import.meta.url))
const layoutPath = fileURLToPath(new URL("../../quartz.layout.ts", import.meta.url))
const languageScriptPath = fileURLToPath(new URL("./scripts/cvLanguage.inline.ts", import.meta.url))
const stylesPath = fileURLToPath(new URL("../styles/custom.scss", import.meta.url))

test("CV page keeps the approved public content and privacy boundary", () => {
  const component = readFileSync(componentPath, "utf8")
  const content = readFileSync(contentPath, "utf8")
  const publicSource = `${component}\n${content}`

  assert.match(content, /^title: CV$/m)
  assert.match(component, /硬科技分析师/)
  assert.match(component, /聚焦 AI、能源与物质科学/)
  assert.match(component, /广东华胥私募基金管理有限公司/)
  assert.match(component, /江苏天汇红优投资管理有限公司/)
  assert.match(component, /累计推动亿元级资金落地/)
  assert.match(component, /DeepSeek 投资分析并支持项目立项/)
  assert.match(component, /学术发表/)
  assert.match(component, /10\.1021\/acs\.macromol\.1c02066/)
  assert.match(component, /10\.1016\/j\.eurpolymj\.2025\.114357/)
  assert.match(component, /第二作者/)
  assert.match(component, /第三作者/)
  assert.match(component, /技能与资质/)
  assert.match(component, /基金从业资格/)
  assert.match(component, /justinjia0813@gmail\.com/)
  assert.doesNotMatch(component, /R-0[1-4]/)
  assert.doesNotMatch(component, /16\.6-67\.2/)
  assert.doesNotMatch(component, /溶剂编程/)
  assert.doesNotMatch(publicSource, /18632269955/)
  assert.doesNotMatch(publicSource, /justinrt670/)
  assert.doesNotMatch(publicSource, /30-60K/)
  assert.doesNotMatch(publicSource, /期望城市/)
})

test("CV page is linked, custom-rendered, and progressively enhanced", () => {
  const home = readFileSync(homePath, "utf8")
  const layout = readFileSync(layoutPath, "utf8")
  const script = readFileSync(languageScriptPath, "utf8")

  assert.match(home, /nav-num">04<\/span>CV/)
  assert.match(home, /href="\.\/cv"/)
  assert.doesNotMatch(home, /href="\.\/cv\/"/)
  assert.match(layout, /Component\.CVPage\(\)/)
  assert.match(layout, /page\.fileData\.slug !== "cv"/)
  assert.match(script, /jvc-cv-language/)
  assert.match(script, /localStorage/)
  assert.match(script, /aria-pressed/)
  assert.match(script, /document\.documentElement\.lang/)
  assert.match(script, /window\.addCleanup/)
})

test("CV page keeps the reference-inspired single-column and responsive layout", () => {
  const styles = readFileSync(stylesPath, "utf8")

  assert.match(styles, /body\[data-slug="cv"\]/)
  assert.match(styles, /\.jvc-cv-language/)
  assert.match(styles, /max-width: 820px/)
  assert.match(styles, /\.jvc-cv-contact-card/)
  assert.match(styles, /\.jvc-cv-publication/)
  assert.match(styles, /\.jvc-cv-skills/)
  assert.match(styles, /\.jvc-cv a:focus-visible/)
  assert.match(styles, /@media \(max-width: 760px\)/)
})

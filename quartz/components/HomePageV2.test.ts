import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"
import { fileURLToPath } from "node:url"
import { allTools } from "./data/tools"

const componentPath = fileURLToPath(new URL("./HomePage.tsx", import.meta.url))
const stylesPath = fileURLToPath(new URL("../styles/custom.scss", import.meta.url))
const flowScriptPath = fileURLToPath(new URL("./scripts/homepageFlow.inline.ts", import.meta.url))

test("v2 homepage keeps the articles, tools, and community modules", () => {
  const component = readFileSync(componentPath, "utf8")

  assert.match(component, /allFiles/)
  assert.match(component, /id="articles"/)
  assert.match(component, /id="tools"/)
  assert.match(component, /id="community"/)
  assert.equal((component.match(/项目\/工具/g) ?? []).length, 2)
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

test("coordinate-field homepage keeps the approved visual contract", () => {
  const component = readFileSync(componentPath, "utf8")
  const styles = readFileSync(stylesPath, "utf8")
  const flowScript = readFileSync(flowScriptPath, "utf8")

  assert.match(component, /jvc-home-coordinate-field\.webp/)
  assert.match(component, /jvc-hero-flow/)
  assert.match(component, /HomePage\.afterDOMLoaded = homepageFlowScript/)
  assert.match(component, /jvc-home-research-thumbnail\.webp/)
  assert.match(component, /研究不是预测答案，而是持续校准坐标/)
  assert.match(styles, /body\[data-slug="index"\]/)
  assert.match(styles, /@keyframes jvc-coordinate-drift/)
  assert.match(styles, /prefers-reduced-motion: reduce/)
  assert.match(styles, /\.jvc-home a:focus-visible/)
  assert.match(flowScript, /requestAnimationFrame/)
  assert.match(flowScript, /pointermove/)
  assert.match(flowScript, /prefers-reduced-motion: reduce/)
  assert.match(flowScript, /window\.addCleanup/)
})

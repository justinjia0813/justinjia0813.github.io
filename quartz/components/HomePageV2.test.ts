import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"
import { fileURLToPath } from "node:url"
import { allTools } from "./data/tools"

const componentPath = fileURLToPath(new URL("./HomePage.tsx", import.meta.url))
const stylesPath = fileURLToPath(new URL("../styles/custom.scss", import.meta.url))

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
    ["dottify", "VCagents", "jvc-analyst", "digital-person-skill", "oh-my-waist"],
  )
  assert.deepEqual(
    allTools.slice(0, 2).map(({ url, linkLabel }) => ({ url, linkLabel })),
    [
      {
        url: "https://dottify-20260717.justinjia0813.chatgpt.site",
        linkLabel: "Live Site",
      },
      {
        url: "https://vcagents-20260715.justinjia0813.chatgpt.site",
        linkLabel: "Live Site",
      },
    ],
  )
})

test("option C adds terminal card and focus accents without changing the three modules", () => {
  const styles = readFileSync(stylesPath, "utf8")

  assert.match(styles, /\.jvc-article-card \{[^}]*border: 1px solid var\(--jvc-border\)/)
  assert.match(styles, /\.jvc-article-card:hover \{[^}]*transform: translateY\(-3px\)/)
  assert.match(styles, /\.jvc-home a:focus-visible/)
})

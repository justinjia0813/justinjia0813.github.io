import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"
import { fileURLToPath } from "node:url"
import { allTools } from "./data/tools"

const componentPath = fileURLToPath(new URL("./HomePage.tsx", import.meta.url))
const stylesPath = fileURLToPath(new URL("../styles/custom.scss", import.meta.url))
const materialsPath = fileURLToPath(
  new URL("../../content/blogs/ai-materials-investment-thesis.md", import.meta.url),
)
const periodicLabsPath = fileURLToPath(
  new URL("../../content/blogs/periodic-labs-style-investment-note.md", import.meta.url),
)

test("terminal homepage source contract renders the fixed landing page on index only", () => {
  const component = readFileSync(componentPath, "utf8")
  const styles = readFileSync(stylesPath, "utf8")
  const materials = readFileSync(materialsPath, "utf8")
  const periodicLabs = readFileSync(periodicLabsPath, "utf8")

  assert.match(component, /fileData\.slug !== "index"/)
  assert.match(component, /jvc-terminal-hero/)
  assert.match(component, /jvc-terminal-main/)
  assert.match(component, /tabindex=\{-1\}/)
  assert.match(component, /jvc-terminal-hint/)
  assert.match(component, /href="#home"/)
  assert.match(component, /href="#works"/)
  assert.match(component, /href="#tools"/)
  assert.match(component, /href="#os"/)
  assert.match(component, /href="\.\/blogs\/"/)
  assert.match(component, /href="\.\/blogs\/ai-materials-investment-thesis"/)
  assert.match(component, /href="\.\/blogs\/periodic-labs-style-investment-note"/)
  assert.match(component, /href="\.\/blogs\/否定之否定：AI宏观三段论"/)
  assert.match(component, /dim_04/)
  assert.doesNotMatch(component, /allFiles|jvc-article-grid/)

  assert.match(styles, /body\[data-slug="index"\]/)
  assert.match(styles, /\.jvc-terminal-grid/)
  assert.match(styles, /@media \(max-width: 600px\)/)
  assert.match(styles, /:focus-visible/)
  assert.match(styles, /prefers-reduced-motion: reduce/)
  assert.match(styles, /html\.jvc-terminal-ready/)
  assert.match(styles, /\.jvc-terminal-main \{\n    max-width: 880px;/)
  assert.match(
    styles,
    /html\.jvc-terminal-ready body\[data-slug="index"\] \{\n  \.jvc-terminal-main \{\n    display: none;/,
  )
  assert.match(materials, /^draft: false$/m)
  assert.match(periodicLabs, /^draft: false$/m)
})

test("tools section displays only the three selected projects", () => {
  const component = readFileSync(componentPath, "utf8")

  assert.match(component, /id="tools"/)
  assert.match(component, /allTools\.map/)
  assert.deepEqual(
    allTools.map((tool) => tool.name),
    ["jvc-analyst", "digital-person-skill", "oh-my-waist"],
  )
})

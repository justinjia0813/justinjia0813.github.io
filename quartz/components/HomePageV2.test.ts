import assert from "node:assert/strict"
import { readFileSync } from "node:fs"
import test from "node:test"
import { fileURLToPath } from "node:url"
import { allTools } from "./data/tools"

const componentPath = fileURLToPath(new URL("./HomePage.tsx", import.meta.url))

test("v2 homepage keeps the articles, tools, and community modules", () => {
  const component = readFileSync(componentPath, "utf8")

  assert.match(component, /allFiles/)
  assert.match(component, /id="articles"/)
  assert.match(component, /id="tools"/)
  assert.match(component, /id="community"/)
  assert.doesNotMatch(component, /jvc-terminal-home/)
  assert.deepEqual(
    allTools.map((tool) => tool.name),
    ["jvc-analyst", "digital-person-skill", "oh-my-waist"],
  )
})

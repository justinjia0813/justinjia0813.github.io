import assert from "node:assert/strict"
import { existsSync, readFileSync } from "node:fs"
import test from "node:test"
import { fileURLToPath } from "node:url"

const componentPath = fileURLToPath(new URL("./HomeTerminal.tsx", import.meta.url))
const scriptPath = fileURLToPath(new URL("./scripts/home-terminal.inline.ts", import.meta.url))

test("home terminal static integration contract is homepage-scoped and registers cleanup", () => {
  assert.ok(existsSync(componentPath), "HomeTerminal component should exist")
  assert.ok(existsSync(scriptPath), "home terminal script should exist")

  const component = readFileSync(componentPath, "utf8")
  const script = readFileSync(scriptPath, "utf8")

  assert.match(component, /HomeTerminal\.afterDOMLoaded/)
  assert.match(script, /\.jvc-terminal-hero/)
  assert.match(script, /\.jvc-terminal-main/)
  assert.match(script, /event\.key === "Enter"/)
  assert.match(script, /if \(!hero \|\| !main\) \{/)
  assert.match(script, /document\.documentElement\.classList\.remove\("jvc-terminal-ready"\)/)
  assert.match(script, /document\.documentElement\.classList\.add\("jvc-terminal-ready"\)/)
  assert.match(script, /localStorage\.setItem\(TERMINAL_STORAGE_KEY, "1"\)/)
  assert.match(script, /main\.focus\(\{ preventScroll: true \}\)/)
  assert.match(script, /prefers-reduced-motion: reduce/)
  assert.match(script, /scrollIntoView\(\{ behavior \}\)/)
  assert.match(script, /hint\?\.addEventListener\("click", launch\)/)
  assert.match(script, /window\.addCleanup\(/)
  assert.match(script, /removeEventListener\("keydown", launchOnEnter\)/)
  assert.match(script, /removeEventListener\("click", launch\)/)
})

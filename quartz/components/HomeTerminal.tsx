import { QuartzComponent, QuartzComponentConstructor } from "./types"
// @ts-ignore
import script from "./scripts/home-terminal.inline"

const HomeTerminal: QuartzComponent = () => null
HomeTerminal.afterDOMLoaded = script

export default (() => HomeTerminal) satisfies QuartzComponentConstructor

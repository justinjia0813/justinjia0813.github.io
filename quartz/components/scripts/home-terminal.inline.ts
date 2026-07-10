const TERMINAL_STORAGE_KEY = "jvc-terminal-launched"

document.addEventListener("nav", () => {
  const hero = document.querySelector<HTMLElement>(".jvc-terminal-hero")
  const main = document.querySelector<HTMLElement>(".jvc-terminal-main")
  const hint = document.querySelector<HTMLElement>(".jvc-terminal-hint")

  if (!hero || !main) {
    document.documentElement.classList.remove("jvc-terminal-ready")
    return
  }

  document.documentElement.classList.add("jvc-terminal-ready")
  const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"

  const launchOnEnter = (event: KeyboardEvent) => {
    if (event.key === "Enter") launch()
  }

  const launch = () => {
    hero.classList.add("launched")
    main.classList.add("visible")
    main.focus({ preventScroll: true })
    localStorage.setItem(TERMINAL_STORAGE_KEY, "1")
    window.removeEventListener("keydown", launchOnEnter)
    hint?.removeEventListener("click", launch)
    setTimeout(() => main.scrollIntoView({ behavior }), 50)
  }

  hero.classList.remove("launched")
  main.classList.remove("visible")

  if (localStorage.getItem(TERMINAL_STORAGE_KEY) === "1") {
    hero.classList.add("launched")
    main.classList.add("visible")
    return
  }

  window.addEventListener("keydown", launchOnEnter)
  hint?.addEventListener("click", launch)
  window.addCleanup(() => {
    window.removeEventListener("keydown", launchOnEnter)
    hint?.removeEventListener("click", launch)
  })
})

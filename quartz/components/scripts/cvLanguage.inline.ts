document.addEventListener("nav", () => {
  const root = document.querySelector<HTMLElement>(".jvc-cv")
  if (!root) return

  const key = "jvc-cv-language"
  const buttons = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-cv-lang]"))
  const panels = Array.from(
    root.querySelectorAll<HTMLElement>(".jvc-cv-language[data-language-content]"),
  )

  const applyLanguage = (language: "zh" | "en") => {
    root.dataset.language = language
    document.documentElement.lang = language === "zh" ? "zh-CN" : "en"

    for (const panel of panels) {
      panel.hidden = panel.dataset.languageContent !== language
    }
    for (const button of buttons) {
      button.setAttribute("aria-pressed", String(button.dataset.cvLang === language))
    }
  }

  let language: "zh" | "en" = "zh"
  try {
    if (window.localStorage.getItem(key) === "en") language = "en"
  } catch {}
  applyLanguage(language)

  const onClick = (event: Event) => {
    const value = (event.currentTarget as HTMLButtonElement).dataset.cvLang
    if (value !== "zh" && value !== "en") return

    applyLanguage(value)
    try {
      window.localStorage.setItem(key, value)
    } catch {}
  }

  for (const button of buttons) button.addEventListener("click", onClick)

  window.addCleanup(() => {
    for (const button of buttons) button.removeEventListener("click", onClick)
    document.documentElement.lang = "zh-CN"
  })
})

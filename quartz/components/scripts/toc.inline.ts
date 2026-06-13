function toggleToc(this: HTMLElement) {
  this.classList.toggle("collapsed")
  this.setAttribute(
    "aria-expanded",
    this.getAttribute("aria-expanded") === "true" ? "false" : "true",
  )
  const content = this.nextElementSibling as HTMLElement | undefined
  if (!content) return
  content.classList.toggle("collapsed")
}

function updateTocHighlight() {
  const headers = Array.from(
    document.querySelectorAll<HTMLElement>("h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]"),
  )
  const tocEntryElements = document.querySelectorAll("a[data-for]")

  tocEntryElements.forEach((tocEntryElement) => tocEntryElement.classList.remove("in-view"))

  if (headers.length === 0 || tocEntryElements.length === 0) {
    return
  }

  const activationLine = window.innerHeight * 0.3
  let activeSlug = headers[0].id

  for (const header of headers) {
    if (header.getBoundingClientRect().top <= activationLine) {
      activeSlug = header.id
    } else {
      break
    }
  }

  document
    .querySelectorAll(`a[data-for="${activeSlug}"]`)
    .forEach((tocEntryElement) => tocEntryElement.classList.add("in-view"))
}

function setupToc() {
  for (const toc of document.getElementsByClassName("toc")) {
    const button = toc.querySelector(".toc-header")
    const content = toc.querySelector(".toc-content")
    if (!button || !content) return
    button.addEventListener("click", toggleToc)
    window.addCleanup(() => button.removeEventListener("click", toggleToc))
  }
}

document.addEventListener("nav", () => {
  setupToc()
  updateTocHighlight()

  window.addEventListener("scroll", updateTocHighlight, { passive: true })
  window.addEventListener("resize", updateTocHighlight)
  window.addCleanup(() => {
    window.removeEventListener("scroll", updateTocHighlight)
    window.removeEventListener("resize", updateTocHighlight)
  })
})

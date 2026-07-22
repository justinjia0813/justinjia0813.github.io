interface FlowParticle {
  x: number
  y: number
  speed: number
  phase: number
  warm: boolean
}

document.addEventListener("nav", () => {
  const canvas = document.querySelector<HTMLCanvasElement>(".jvc-hero-flow")
  const hero = canvas?.closest<HTMLElement>(".jvc-home-hero")
  const context = canvas?.getContext("2d")
  if (!canvas || !hero || !context) return

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)")
  const pointer = {
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    strength: 0,
    targetStrength: 0,
  }

  let width = 1
  let height = 1
  let particles: FlowParticle[] = []
  let animationFrame: number | undefined
  let isVisible = true

  const seedParticles = () => {
    const count = width < 680 ? 42 : Math.min(96, Math.round(width / 15))
    particles = Array.from({ length: count }, (_, index) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: 0.45 + Math.random() * 0.8,
      phase: Math.random() * Math.PI * 2,
      warm: index % 7 === 0,
    }))
  }

  const flowAngle = (x: number, y: number, time: number, phase: number) =>
    Math.sin(x * 0.0065 + time * 0.00024 + phase) * 0.62 +
    Math.cos(y * 0.0052 - time * 0.0002) * 0.78 -
    0.22

  const drawFrame = (time: number, advance: boolean) => {
    context.clearRect(0, 0, width, height)
    context.globalCompositeOperation = "lighter"
    context.lineCap = "round"

    pointer.x += (pointer.targetX - pointer.x) * 0.14
    pointer.y += (pointer.targetY - pointer.y) * 0.14
    pointer.strength += (pointer.targetStrength - pointer.strength) * 0.1

    for (const particle of particles) {
      const angle = flowAngle(particle.x, particle.y, time, particle.phase)
      let velocityX = Math.cos(angle) * particle.speed
      let velocityY = Math.sin(angle) * particle.speed
      const deltaX = pointer.x - particle.x
      const deltaY = pointer.y - particle.y
      const distance = Math.hypot(deltaX, deltaY) || 1
      const radius = Math.min(220, Math.max(140, width * 0.15))
      const influence = Math.max(0, 1 - distance / radius) ** 2 * pointer.strength

      if (influence > 0) {
        const normalX = deltaX / distance
        const normalY = deltaY / distance
        velocityX += (normalX * 0.5 - normalY * 2.1) * influence
        velocityY += (normalY * 0.5 + normalX * 2.1) * influence
      }

      const tail = 7 + particle.speed * 9 + influence * 13
      context.beginPath()
      context.moveTo(particle.x - velocityX * tail, particle.y - velocityY * tail)
      context.lineTo(particle.x, particle.y)
      context.lineWidth = particle.warm ? 0.65 : 0.8 + influence * 0.65
      context.strokeStyle = particle.warm
        ? `rgba(232, 211, 170, ${0.12 + influence * 0.25})`
        : `rgba(112, 219, 199, ${0.15 + influence * 0.44})`
      context.stroke()

      if (!advance) continue
      particle.x += velocityX
      particle.y += velocityY

      if (particle.x < -24) particle.x = width + 24
      if (particle.x > width + 24) particle.x = -24
      if (particle.y < -24) particle.y = height + 24
      if (particle.y > height + 24) particle.y = -24
    }

    if (pointer.strength > 0.015) {
      const glow = context.createRadialGradient(
        pointer.x,
        pointer.y,
        0,
        pointer.x,
        pointer.y,
        Math.min(180, width * 0.13),
      )
      glow.addColorStop(0, `rgba(118, 225, 206, ${0.09 * pointer.strength})`)
      glow.addColorStop(0.45, `rgba(96, 205, 189, ${0.035 * pointer.strength})`)
      glow.addColorStop(1, "rgba(55, 164, 151, 0)")
      context.fillStyle = glow
      context.fillRect(0, 0, width, height)
    }

    context.globalCompositeOperation = "source-over"
  }

  const stop = () => {
    if (animationFrame === undefined) return
    cancelAnimationFrame(animationFrame)
    animationFrame = undefined
  }

  const tick = (time: number) => {
    animationFrame = undefined
    if (reducedMotion.matches || !isVisible || document.hidden) return
    drawFrame(time, true)
    animationFrame = requestAnimationFrame(tick)
  }

  const start = () => {
    if (reducedMotion.matches || !isVisible || document.hidden || animationFrame !== undefined) {
      return
    }
    canvas.dataset.flowState = "running"
    animationFrame = requestAnimationFrame(tick)
  }

  const resize = () => {
    const bounds = hero.getBoundingClientRect()
    width = Math.max(1, Math.round(bounds.width))
    height = Math.max(1, Math.round(bounds.height))
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2)
    canvas.width = Math.round(width * pixelRatio)
    canvas.height = Math.round(height * pixelRatio)
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
    pointer.x = pointer.targetX = width * 0.7
    pointer.y = pointer.targetY = height * 0.48
    seedParticles()
    drawFrame(0, false)
  }

  const onPointerMove = (event: PointerEvent) => {
    if (event.pointerType === "touch") return
    if (!hero.contains(event.target as Node)) {
      onPointerLeave()
      return
    }
    const bounds = hero.getBoundingClientRect()
    pointer.targetX = event.clientX - bounds.left
    pointer.targetY = event.clientY - bounds.top
    pointer.targetStrength = 1
    canvas.dataset.pointerState = "active"
  }

  const onPointerLeave = () => {
    pointer.targetStrength = 0
    canvas.dataset.pointerState = "idle"
  }

  const onVisibilityChange = () => {
    if (document.hidden) stop()
    else start()
  }

  const onMotionPreferenceChange = () => {
    stop()
    if (reducedMotion.matches) {
      canvas.dataset.flowState = "reduced"
      drawFrame(0, false)
    } else {
      start()
    }
  }

  const resizeObserver = new ResizeObserver(resize)
  const visibilityObserver = new IntersectionObserver(([entry]) => {
    isVisible = entry?.isIntersecting ?? true
    if (isVisible) start()
    else stop()
  })

  canvas.dataset.flowState = reducedMotion.matches ? "reduced" : "idle"
  canvas.dataset.pointerState = "idle"
  resize()
  resizeObserver.observe(hero)
  visibilityObserver.observe(hero)
  document.addEventListener("pointermove", onPointerMove, { passive: true })
  hero.addEventListener("pointerleave", onPointerLeave)
  document.addEventListener("visibilitychange", onVisibilityChange)
  reducedMotion.addEventListener("change", onMotionPreferenceChange)
  start()

  window.addCleanup(() => {
    stop()
    resizeObserver.disconnect()
    visibilityObserver.disconnect()
    document.removeEventListener("pointermove", onPointerMove)
    hero.removeEventListener("pointerleave", onPointerLeave)
    document.removeEventListener("visibilitychange", onVisibilityChange)
    reducedMotion.removeEventListener("change", onMotionPreferenceChange)
  })
})

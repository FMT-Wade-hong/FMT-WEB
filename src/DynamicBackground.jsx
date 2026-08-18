import { useEffect, useRef } from 'react'

const CYAN = '85, 200, 238'

export default function DynamicBackground({ variant = 'hero' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return undefined

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let width = 0
    let height = 0
    let particles = []
    let frame = 0
    let resizeFrame = 0
    let previous = performance.now()
    let visible = !document.hidden
    const pointer = { x: 0, y: 0, active: false }
    let pulses = []

    const makeParticle = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * (variant === 'hero' ? 14 : 9),
      vy: (Math.random() - 0.5) * (variant === 'hero' ? 11 : 7),
      size: 0.9 + Math.random() * 1.6,
      pulse: Math.random() * Math.PI * 2,
    })

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      width = Math.max(1, bounds.width)
      height = Math.max(1, bounds.height)
      const ratio = Math.min(window.devicePixelRatio || 1, 1.5)
      canvas.width = Math.round(width * ratio)
      canvas.height = Math.round(height * ratio)
      context.setTransform(ratio, 0, 0, ratio, 0, 0)
      const count = width < 640 ? 24 : variant === 'hero' ? 44 : 32
      particles = Array.from({ length: count }, makeParticle)
    }

    const drawRadar = (time) => {
      const x = width * (variant === 'hero' ? 0.77 : 0.82)
      const y = height * 0.5
      const radius = Math.min(width, height) * (variant === 'hero' ? 0.29 : 0.24)
      context.save()
      context.translate(x, y)
      context.strokeStyle = `rgba(${CYAN}, .22)`
      context.lineWidth = 1
      for (let ring = 1; ring <= 3; ring += 1) {
        context.beginPath()
        context.arc(0, 0, radius * ring / 3, 0, Math.PI * 2)
        context.stroke()
      }
      context.beginPath()
      context.moveTo(-radius, 0)
      context.lineTo(radius, 0)
      context.moveTo(0, -radius)
      context.lineTo(0, radius)
      context.stroke()

      const angle = reduceMotion.matches ? -0.7 : time * 0.00012
      const sweep = context.createConicGradient(angle, 0, 0)
      sweep.addColorStop(0, `rgba(${CYAN}, 0)`)
      sweep.addColorStop(.92, `rgba(${CYAN}, 0)`)
      sweep.addColorStop(.975, `rgba(${CYAN}, .3)`)
      sweep.addColorStop(1, `rgba(${CYAN}, 0)`)
      context.fillStyle = sweep
      context.beginPath()
      context.arc(0, 0, radius, 0, Math.PI * 2)
      context.fill()
      context.rotate(angle)
      context.strokeStyle = `rgba(${CYAN}, .48)`
      context.shadowColor = `rgba(${CYAN}, .72)`
      context.shadowBlur = 12
      context.beginPath()
      context.moveTo(0, 0)
      context.lineTo(radius, 0)
      context.stroke()
      context.restore()
    }

    const drawRoute = (time) => {
      const start = { x: width * .08, y: height * .72 }
      const control = { x: width * .42, y: height * .22 }
      const end = { x: width * .75, y: height * .58 }
      context.save()
      context.setLineDash([5, 10])
      context.lineDashOffset = reduceMotion.matches ? 0 : -time * .012
      context.strokeStyle = `rgba(${CYAN}, .34)`
      context.lineWidth = 1
      context.beginPath()
      context.moveTo(start.x, start.y)
      context.quadraticCurveTo(control.x, control.y, end.x, end.y)
      context.stroke()
      context.setLineDash([])
      ;[start, end].forEach((point) => {
        context.fillStyle = `rgba(${CYAN}, .9)`
        context.beginPath()
        context.arc(point.x, point.y, 3.2, 0, Math.PI * 2)
        context.fill()
      })
      const routeProgress = reduceMotion.matches ? 0.42 : (time * 0.00011) % 1
      const inverse = 1 - routeProgress
      const markerX = inverse * inverse * start.x + 2 * inverse * routeProgress * control.x + routeProgress * routeProgress * end.x
      const markerY = inverse * inverse * start.y + 2 * inverse * routeProgress * control.y + routeProgress * routeProgress * end.y
      context.fillStyle = `rgba(${CYAN}, .98)`
      context.shadowColor = `rgba(${CYAN}, .9)`
      context.shadowBlur = 18
      context.beginPath()
      context.arc(markerX, markerY, 4.2, 0, Math.PI * 2)
      context.fill()
      context.strokeStyle = `rgba(${CYAN}, .52)`
      context.lineWidth = 1.5
      context.beginPath()
      context.arc(markerX, markerY, 10 + Math.sin(time * .004) * 2.5, 0, Math.PI * 2)
      context.stroke()
      context.restore()
    }

    const drawInteraction = (time) => {
      if (!pointer.active || reduceMotion.matches) return
      context.save()
      context.strokeStyle = `rgba(${CYAN}, .72)`
      context.lineWidth = 1
      context.beginPath()
      context.arc(pointer.x, pointer.y, 13, 0, Math.PI * 2)
      context.moveTo(pointer.x - 20, pointer.y)
      context.lineTo(pointer.x - 8, pointer.y)
      context.moveTo(pointer.x + 8, pointer.y)
      context.lineTo(pointer.x + 20, pointer.y)
      context.moveTo(pointer.x, pointer.y - 20)
      context.lineTo(pointer.x, pointer.y - 8)
      context.moveTo(pointer.x, pointer.y + 8)
      context.lineTo(pointer.x, pointer.y + 20)
      context.stroke()

      pulses = pulses.filter((pulse) => time - pulse.started < 1100)
      pulses.forEach((pulse) => {
        const life = (time - pulse.started) / 1100
        context.strokeStyle = `rgba(${CYAN}, ${(1 - life) * .8})`
        context.beginPath()
        context.arc(pulse.x, pulse.y, 12 + life * 92, 0, Math.PI * 2)
        context.stroke()
      })
      context.restore()
    }

    const drawParticles = (time, delta) => {
      const linkDistance = width < 640 ? 90 : 135
      particles.forEach((particle) => {
        if (!reduceMotion.matches) {
          particle.x += particle.vx * delta
          particle.y += particle.vy * delta
          if (pointer.active) {
            const dx = particle.x - pointer.x
            const dy = particle.y - pointer.y
            const distance = Math.max(1, Math.hypot(dx, dy))
            if (distance < 145) {
              const force = (1 - distance / 145) * 34 * delta
              particle.x += dx / distance * force
              particle.y += dy / distance * force
            }
          }
          if (particle.x < -10) particle.x = width + 10
          if (particle.x > width + 10) particle.x = -10
          if (particle.y < -10) particle.y = height + 10
          if (particle.y > height + 10) particle.y = -10
        }
      })

      for (let first = 0; first < particles.length; first += 1) {
        for (let second = first + 1; second < particles.length; second += 1) {
          const dx = particles[first].x - particles[second].x
          const dy = particles[first].y - particles[second].y
          const distance = Math.hypot(dx, dy)
          if (distance < linkDistance) {
            context.strokeStyle = `rgba(${CYAN}, ${(1 - distance / linkDistance) * .28})`
            context.beginPath()
            context.moveTo(particles[first].x, particles[first].y)
            context.lineTo(particles[second].x, particles[second].y)
            context.stroke()
          }
        }
      }

      particles.forEach((particle) => {
        const glow = reduceMotion.matches ? .48 : .45 + Math.sin(time * .0018 + particle.pulse) * .22
        context.fillStyle = `rgba(${CYAN}, ${glow})`
        context.beginPath()
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        context.fill()
      })
    }

    const render = (time = performance.now()) => {
      const delta = Math.min((time - previous) / 1000, .05)
      previous = time
      context.clearRect(0, 0, width, height)
      drawRadar(time)
      drawRoute(time)
      drawParticles(time, delta)
      drawInteraction(time)
      if (visible && !reduceMotion.matches) frame = requestAnimationFrame(render)
    }

    const start = () => {
      cancelAnimationFrame(frame)
      previous = performance.now()
      render(previous)
    }

    const handleVisibility = () => {
      visible = !document.hidden
      if (visible) start()
      else cancelAnimationFrame(frame)
    }

    const handleMotion = () => start()
    const updatePointer = (event) => {
      const bounds = canvas.getBoundingClientRect()
      const inside = event.clientX >= bounds.left && event.clientX <= bounds.right && event.clientY >= bounds.top && event.clientY <= bounds.bottom
      pointer.active = inside
      if (!inside) return
      pointer.x = event.clientX - bounds.left
      pointer.y = event.clientY - bounds.top
    }
    const handlePointerDown = (event) => {
      updatePointer(event)
      if (pointer.active && !reduceMotion.matches) pulses.push({ x: pointer.x, y: pointer.y, started: performance.now() })
    }
    const handlePointerLeave = () => { pointer.active = false }
    const handleResize = () => {
      cancelAnimationFrame(resizeFrame)
      resizeFrame = requestAnimationFrame(() => { resize(); start() })
    }
    document.addEventListener('visibilitychange', handleVisibility)
    reduceMotion.addEventListener('change', handleMotion)
    window.addEventListener('resize', handleResize, { passive: true })
    window.addEventListener('pointermove', updatePointer, { passive: true })
    window.addEventListener('pointerdown', handlePointerDown, { passive: true })
    window.addEventListener('blur', handlePointerLeave)
    resize()
    start()

    return () => {
      cancelAnimationFrame(frame)
      cancelAnimationFrame(resizeFrame)
      document.removeEventListener('visibilitychange', handleVisibility)
      reduceMotion.removeEventListener('change', handleMotion)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('pointermove', updatePointer)
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('blur', handlePointerLeave)
    }
  }, [variant])

  return <canvas ref={canvasRef} className={`dynamic-canvas dynamic-canvas-${variant}`} aria-hidden="true" />
}

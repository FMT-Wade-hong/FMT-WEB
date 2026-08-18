import { useEffect, useRef } from 'react'

export default function VideoBackdrop() {
  const backdropRef = useRef(null)
  const videoRef = useRef(null)

  useEffect(() => {
    const backdrop = backdropRef.current
    const video = videoRef.current
    let frame = 0

    const applyMotion = (x, y) => {
      if (!backdrop) return
      backdrop.style.setProperty('--video-shift-x', `${x}px`)
      backdrop.style.setProperty('--video-shift-y', `${y}px`)
    }
    const onPointerMove = (event) => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const x = (event.clientX / window.innerWidth - 0.5) * -16
        const y = (event.clientY / window.innerHeight - 0.5) * -10
        applyMotion(x, y)
      })
    }
    const onPointerLeave = () => applyMotion(0, 0)

    video?.play().catch(() => undefined)
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('blur', onPointerLeave)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('blur', onPointerLeave)
    }
  }, [])

  return <div ref={backdropRef} className="site-video-backdrop" aria-hidden="true">
    <video ref={videoRef} autoPlay muted loop playsInline preload="metadata" poster={`${import.meta.env.BASE_URL}images/aerial-coast-wide.webp`}>
      <source src={`${import.meta.env.BASE_URL}videos/ardupilot-highlight.mp4`} type="video/mp4" />
    </video>
    <div className="video-flight-overlay"><i></i><i></i><i></i></div>
  </div>
}

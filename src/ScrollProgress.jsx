import { useEffect, useRef } from 'react'

export default function ScrollProgress({ lang }) {
  const progressRef = useRef(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      const maximum = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      const progress = Math.min(100, Math.max(0, window.scrollY / maximum * 100))
      if (progressRef.current) {
        progressRef.current.style.setProperty('--scroll-progress', `${progress}%`)
        progressRef.current.setAttribute('aria-valuenow', String(Math.round(progress)))
      }
    }
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    update()
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return <div ref={progressRef} className="scroll-progress" role="progressbar" aria-label={lang === 'zh' ? '頁面閱讀進度' : 'Page reading progress'} aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><span></span></div>
}

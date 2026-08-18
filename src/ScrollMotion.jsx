import { useEffect } from 'react'

const targets = [
  '.hero-content', '.hero-aircraft-media',
  '.focus-heading', '.focus-copy', '.focus-pillars > article',
  '.system-showcase > header', '.system-feature', '.platform-showcase-card',
  '.application-heading', '.application-list > a', '.cta > *',
  '.capability-section > header', '.home-experience > *',
  '.page-hero-copy', '.page-hero-mark', '.page-hero-photo', '.page-aircraft', '.tech-orbit',
  '.page-section-head', '.detail-card', '.qualification-list > div', '.timeline-list > div',
  '.product-feature > div', '.product-matrix > article', '.planner-feature > div',
  '.pillar-list > article', '.process-row > div', '.solution-detail-list > article',
  '.case-card', '.project-service > *', '.news-list > article', '.contact-layout > div',
  '.source-note',
].join(',')

export default function ScrollMotion({ route }) {
  useEffect(() => {
    const elements = [...document.querySelectorAll(targets)]
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    elements.forEach((element, index) => {
      element.classList.add('motion-reveal')
      element.style.setProperty('--motion-delay', `${Math.min(index % 5, 4) * 55}ms`)
      if (reduceMotion) element.classList.add('motion-visible')
    })

    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('motion-visible'))
      return undefined
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('motion-visible')
        observer.unobserve(entry.target)
      })
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 })

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [route])

  return null
}

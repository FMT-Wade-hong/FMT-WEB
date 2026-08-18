import { useEffect, useState } from 'react'
import { content, homeHighlights } from './content'
import { pageCopy, routes } from './pageContent'
import { RoutePage } from './pages'
import DynamicBackground from './DynamicBackground'
import ScrollMotion from './ScrollMotion'
import ScrollProgress from './ScrollProgress'
import VideoBackdrop from './VideoBackdrop'
import FieldGallery from './FieldGallery'

function Arrow() { return <span aria-hidden="true">↗</span> }

function getRoute() {
  const value = window.location.hash.replace(/^#\/?/, '').split('/')[0]
  return routes.some(({ key }) => key === value) ? value : 'home'
}

function Brand() {
  return <a className="brand" href="#/" aria-label="FMT FeiMao Tech home">
    <img className="brand-logo" src={`${import.meta.env.BASE_URL}images/fmt-logo-horizontal.png`} alt="FMT 飛貓科技" />
    <span className="brand-name"><b>FEIMAO TECH</b><small>飛貓科技</small></span>
  </a>
}

function Header({ lang, open, route, setLang, setOpen, labels }) {
  return <header className="header">
    <Brand />
    <nav className={open ? 'nav open' : 'nav'} aria-label="Primary navigation">
      {routes.map((item) => <a key={item.key} href={`#/${item.key}`} aria-current={route === item.key ? 'page' : undefined} onClick={() => setOpen(false)}>{item.label[lang]}</a>)}
    </nav>
    <div className="header-actions">
      <button className="lang" onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')} aria-label="Switch language">{lang === 'zh' ? 'EN' : '中'}</button>
      <button className="menu" onClick={() => setOpen(!open)} aria-label={open ? labels.close : labels.menu} aria-expanded={open}><span></span><span></span></button>
    </div>
  </header>
}

function HomePage({ lang, t }) {
  const h = homeHighlights[lang]
  return <main id="top">
    <section className="hero">
      <div className="hero-grid" aria-hidden="true"></div>
      <DynamicBackground variant="hero" />
      <div className="orb orb-one"></div><div className="orb orb-two"></div>
      <div className="hero-content">
        <p className="eyebrow">{t.eyebrow}</p>
        <h1>{t.title}</h1>
        <p className="hero-lead">{t.lead}</p>
        <div className="hero-actions"><a className="button primary" href="#/products">{t.explore} <Arrow /></a><a className="button ghost" href="#/contact">{t.contact}</a></div>
      </div>
      <div className="hero-aircraft-media" aria-label={lang === 'zh' ? 'FMT 無人機平台' : 'FMT UAV platforms'}>
        <figure className="aircraft-photo multirotor-photo">
          <img src={`${import.meta.env.BASE_URL}images/fmt-c4950.png`} alt={t.multirotorAlt} />
          <figcaption><span>01</span> C4950 · MULTIROTOR UAV</figcaption>
        </figure>
        <figure className="aircraft-photo batwing-photo">
          <img src={`${import.meta.env.BASE_URL}images/fmt-batwing-transparent.png`} alt={t.batwingAlt} />
          <figcaption><span>02</span> BATWING</figcaption>
        </figure>
      </div>
      <div className="scroll-line"><span></span>SCROLL TO EXPLORE</div>
    </section>

    <section className="focus-intro" id="about">
      <div className="focus-heading"><p className="section-no">{h.valueEyebrow}</p><h2>{h.valueTitle}</h2></div>
      <div className="focus-copy"><div className="focus-copy-media"><img src={`${import.meta.env.BASE_URL}images/engineering-uav-wireframe.webp`} alt={lang === 'zh' ? 'FMT 無人機機構與系統工程設計' : 'FMT UAV mechanical and system engineering'} loading="lazy" /></div><p>{h.valueText}</p><a className="text-link" href="#/technologies">{h.valueLink} <Arrow /></a></div>
    </section>

    <FieldGallery lang={lang} />

    <section className="system-showcase" id="products">
      <header><p className="section-no">{h.showcaseEyebrow}</p><h2>{h.showcaseTitle}</h2></header>
      <div className="platform-showcase-grid">
        <article className="platform-showcase-card c4950-card"><div className="platform-showcase-media"><img src={`${import.meta.env.BASE_URL}images/fmt-c4950.png`} alt={t.multirotorAlt} /></div><div><span>01 · {h.platformLabel}</span><h3>C4950</h3><p>{h.platformText}</p><a className="text-link" href="#/products">{h.detail} <Arrow /></a></div></article>
        <article className="platform-showcase-card batwing-card"><div className="platform-showcase-media"><img src={`${import.meta.env.BASE_URL}images/fmt-batwing-transparent.png`} alt={t.batwingAlt} /></div><div><span>02 · {h.batwingLabel}</span><h3>Batwing</h3><p>{h.batwingText}</p><a className="text-link" href="#/products">{h.detail} <Arrow /></a></div></article>
        <article className="platform-showcase-card planner-card"><div className="platform-showcase-media"><img src={`${import.meta.env.BASE_URL}images/fmtplanner-flight.webp`} alt="FMTPlanner flight data interface" /></div><div><span>03 · {h.plannerLabel}</span><h3>FMTPlanner</h3><p>{h.plannerText}</p><a className="text-link" href="#/products">{h.detail} <Arrow /></a></div></article>
      </div>
    </section>

    <section className="application-section" id="solutions">
      <div className="application-heading"><p className="section-no">{h.solutionsEyebrow}</p><h2>{h.solutionsTitle}</h2><a className="text-link" href="#/projects">{h.projectLink} <Arrow /></a></div>
      <div className="application-list">{h.solutionItems.map(([title, text], i) => <a href="#/solutions" key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div><div className="application-thumb"><img src={`${import.meta.env.BASE_URL}images/${['aerial-coast-wide.webp', 'engineering-flight-controller.webp', 'training-flight-field.webp', 'equipment-octocopter.webp'][i]}`} alt="" loading="lazy" /></div><Arrow /></a>)}</div>
    </section>

    <section className="capability-section" id="technologies">
      <header><p className="section-no">{h.capabilitiesEyebrow}</p><h2>{h.capabilitiesTitle}</h2></header>
      <div className="focus-pillars" aria-label={h.capabilitiesTitle}>{h.pillars.map(([no, title, text], i) => <article key={no}><div className="pillar-visual"><img src={`${import.meta.env.BASE_URL}images/${['engineering-flight-controller.webp', 'fmtplanner-flight.webp', 'training-flight-field.webp'][i]}`} alt={lang === 'zh' ? `${title}對應工程畫面` : `${title} engineering visual`} loading="lazy" /></div><span>{no}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="home-experience" id="projects">
      <div className="home-experience-media"><img src={`${import.meta.env.BASE_URL}images/training-flight-deck.webp`} alt={lang === 'zh' ? 'FMT 無人機現地飛行操作' : 'FMT UAV field flight operation'} /></div>
      <div className="home-experience-copy"><p className="section-no">{h.experienceEyebrow}</p><h2>{h.experienceTitle}</h2><p>{h.experienceText}</p><a className="text-link" href="#/projects">{h.projectLink} <Arrow /></a></div>
    </section>

    <section className="cta" id="contact"><p className="section-no">06 — CONTACT</p><h2>{t.cta}</h2><p>{t.ctaText}</p><a className="button light" href="mailto:wade@feimaotec.com">CONTACT FMT <Arrow /></a></section>
  </main>
}

function Footer({ t }) {
  return <footer><Brand /><p>© {new Date().getFullYear()} {t.footer}</p><p>TAIWAN · UAV ENGINEERING &amp; INTEGRATION</p></footer>
}

function App() {
  const [lang, setLang] = useState('zh')
  const [open, setOpen] = useState(false)
  const [route, setRoute] = useState(getRoute)
  const t = content[lang]

  useEffect(() => {
    const onHashChange = () => { setRoute(getRoute()); setOpen(false) }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en'
    const active = routes.find(({ key }) => key === route)
    document.title = active ? `${active.label[lang]} | FMT 飛貓科技` : 'FMT 飛貓科技 | FeiMao Tech'
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [lang, route])

  return <div className="site-shell">
    <VideoBackdrop />
    <DynamicBackground key={`ambient-${route}`} variant="ambient" />
    <ScrollMotion route={route} />
    <ScrollProgress lang={lang} />
    <Header lang={lang} open={open} route={route} setLang={setLang} setOpen={setOpen} labels={t} />
    {route === 'home' ? <HomePage lang={lang} t={t} /> : <RoutePage route={route} copy={pageCopy[lang]} />}
    <Footer t={t} />
  </div>
}

export default App

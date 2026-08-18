import { useEffect, useState } from 'react'
import { content, platforms, solutions, technologies } from './content'

const ids = ['about', 'products', 'technologies', 'solutions', 'projects', 'contact']

function Arrow() { return <span aria-hidden="true">↗</span> }

function App() {
  const [lang, setLang] = useState('zh')
  const [open, setOpen] = useState(false)
  const t = content[lang]
  useEffect(() => { document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en' }, [lang])

  return <div className="site-shell">
    <header className="header">
      <a className="brand" href="#top" aria-label="FMT home"><span className="brand-mark">F</span><span><b>FMT</b><small>FEIMAO TECH</small></span></a>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Primary navigation">
        {t.nav.map((item, i) => <a key={ids[i]} href={`#${ids[i]}`} onClick={() => setOpen(false)}>{item}</a>)}
      </nav>
      <div className="header-actions">
        <button className="lang" onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')} aria-label="Switch language">{lang === 'zh' ? 'EN' : '中'}</button>
        <button className="menu" onClick={() => setOpen(!open)} aria-label={open ? t.close : t.menu} aria-expanded={open}><span></span><span></span></button>
      </div>
    </header>

    <main id="top">
      <section className="hero">
        <div className="hero-grid" aria-hidden="true"></div>
        <div className="orb orb-one"></div><div className="orb orb-two"></div>
        <div className="hero-content">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p className="hero-lead">{t.lead}</p>
          <div className="hero-actions"><a className="button primary" href="#products">{t.explore} <Arrow /></a><a className="button ghost" href="#contact">{t.contact}</a></div>
        </div>
        <div className="aircraft" aria-label="UAV image placeholder"><span>FMT</span><div className="wing left"></div><div className="body"></div><div className="wing right"></div><small>UAV VISUAL PLACEHOLDER</small></div>
        <div className="scroll-line"><span></span>SCROLL TO EXPLORE</div>
      </section>

      <section className="section intro" id="about">
        <div><p className="section-no">01 — ABOUT</p><h2>{t.positioning}</h2></div>
        <div><p className="large-copy">{t.positioningText}</p><div className="capabilities"><span>AIRFRAME</span><span>AVIONICS</span><span>SOFTWARE</span><span>PAYLOAD</span></div></div>
      </section>

      <section className="section" id="products">
        <div className="section-heading"><div><p className="section-no">02 — PLATFORMS</p><h2>{t.platforms}</h2></div><p>{t.platformsLead}</p></div>
        <div className="platform-grid">{platforms.map((p) => <article className="platform-card" key={p.name}>
          <div className="platform-visual"><span className="card-code">{p.code}</span><div className="placeholder-shape"></div><small>IMAGE PLACEHOLDER</small></div>
          <div className="card-meta"><div><p>{p.type[lang]}</p><h3>{p.name}</h3></div><span className="pending">{t.pending}</span></div>
        </article>)}</div>
      </section>

      <section className="section tech-section" id="technologies">
        <div><p className="section-no">03 — TECHNOLOGIES</p><h2>{t.tech}</h2></div>
        <div className="tech-list">{technologies.map(([label, value], i) => <div className="tech-row" key={label}><span>0{i + 1}</span><p>{label}</p><strong>{value}</strong></div>)}</div>
      </section>

      <section className="section solutions" id="solutions">
        <p className="section-no">04 — SOLUTIONS</p><h2>{t.solutions}</h2>
        <div className="solution-list">{solutions[lang].map((s, i) => <div key={s}><span>{String(i + 1).padStart(2, '0')}</span><h3>{s}</h3><Arrow /></div>)}</div>
      </section>

      <section className="section experience" id="projects">
        <div className="experience-visual"><div className="radar"></div><span>PROJECT VISUAL<br/>PLACEHOLDER</span></div>
        <div className="experience-copy"><p className="section-no">05 — EXPERIENCE</p><h2>{t.experienceTitle}</h2><p>{t.experienceText}</p><div className="status"><i></i>{t.experience}</div></div>
      </section>

      <section className="cta" id="contact"><p className="section-no">06 — CONTACT</p><h2>{t.cta}</h2><p>{t.ctaText}</p><a className="button light" href="mailto:contact@example.com">CONTACT FMT <Arrow /></a><small>Email address placeholder — replace before launch</small></section>
    </main>
    <footer><a className="brand" href="#top"><span className="brand-mark">F</span><span><b>FMT</b><small>FEIMAO TECH</small></span></a><p>© {new Date().getFullYear()} {t.footer}</p><p>TAIWAN · UAV ENGINEERING & INTEGRATION</p></footer>
  </div>
}

export default App

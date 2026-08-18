import DynamicBackground from './DynamicBackground'

const asset = (name) => `${import.meta.env.BASE_URL}images/${name}`

function PageHero({ eyebrow, title, lead, meta, children }) {
  return <section className="page-hero">
    <div className="page-hero-grid" aria-hidden="true"></div>
    <DynamicBackground variant="page" />
    <div className="page-hero-copy"><p className="section-no">{eyebrow}</p><h1>{title}</h1><p>{lead}</p>{meta && <span className="page-meta">{meta}</span>}</div>
    {children}
  </section>
}

function SourceNote({ text }) { return <p className="source-note"><span>i</span>{text}</p> }

function NarrativeVisual({ name, alt, concept, className = '' }) {
  return <figure className={`narrative-visual ${className}`.trim()}>
    <img src={asset(name)} alt={alt} loading="lazy" />
    {concept && <figcaption>{concept}</figcaption>}
  </figure>
}

const aboutCapabilityImages = ['engineering-uav-wireframe.webp', 'engineering-flight-controller.webp', 'equipment-octocopter.webp', 'c4950-workshop.webp']
const timelineImages = ['c4950-workshop.webp', 'engineering-flight-controller.webp', 'fixed-wing-flight.webp', 'c4950-field.webp', 'fmtplanner-flight.webp']
const aircraftImages = ['equipment-white-uav.webp', 'equipment-octocopter.webp', 'flight-multirotor.webp', 'c4950-field.webp', 'equipment-octocopter.webp', 'fmt-batwing.png']
const componentImages = ['training-fpv-platform.webp', 'training-flight-field.webp', 'engineering-uav-wireframe.webp']
const technologyImages = ['equipment-octocopter.webp', 'engineering-flight-controller.webp', 'project-mapping.webp', 'fmtplanner-flight.webp', 'engineering-uav-wireframe.webp', 'flight-multirotor.webp']
const processImages = ['aerial-coast-wide.webp', 'engineering-uav-wireframe.webp', 'c4950-workshop.webp', 'training-flight-field.webp', 'training-classroom.webp']
const solutionImages = ['training-flight-field.webp', 'aerial-coast-rail.webp', 'project-mapping.webp', 'training-classroom.webp', 'project-night.webp', 'aerial-coast-wide.webp']
const solutionConcepts = [false, false, true, false, true, false]
const projectFallbackImages = ['project-flight-demo.webp', 'project-vantor.webp', 'c4950-workshop.webp', 'equipment-octocopter.webp', 'project-usv.webp', 'project-gorge.webp']
const newsImages = ['fmtplanner-mission.webp', 'project-flight-demo.webp', 'c4950-workshop.webp', 'project-vantor.webp', 'c4950-field.webp', 'fixed-wing-flight.webp']

export function AboutPage({ copy }) {
  const p = copy.about
  return <main className="internal-page">
    <PageHero {...p} meta={copy.common.updated}><img className="page-hero-mark" src={asset('fmt-logo-stacked.png')} alt="FMT 飛貓科技" /></PageHero>
    <section className="page-section split-statement"><p className="section-no">OUR MISSION</p><div><h2>{p.mission}</h2><p>{p.missionText}</p></div><NarrativeVisual name="c4950-workshop.webp" alt="FMT UAV engineering and prototype integration" className="statement-visual" /></section>
    <section className="visual-evidence-strip about-visuals"><img src={asset('training-classroom.webp')} alt="UAV classroom training" loading="lazy" /><img src={asset('training-flight-field.webp')} alt="UAV field training" loading="lazy" /><img src={asset('c4950-workshop.webp')} alt="UAV prototype workshop" loading="lazy" /></section>
    <section className="page-section"><header className="page-section-head"><p className="section-no">CAPABILITY MATRIX</p><h2>{p.capabilitiesTitle}</h2></header><div className="detail-grid">{p.capabilities.map(([title, text], i) => <article className="detail-card with-visual" key={title}><NarrativeVisual name={aboutCapabilityImages[i]} alt="FMT engineering capability" /><div className="detail-card-copy"><span>0{i + 1}</span><h3>{title}</h3><p>{text}</p></div></article>)}</div></section>
    <section className="page-section page-band qualification-section"><header className="page-section-head"><p className="section-no">QUALIFICATIONS</p><h2>{p.qualificationsTitle}</h2></header><div className="qualification-layout"><NarrativeVisual name="training-classroom.webp" alt="FMT UAV technical training classroom" /><div className="qualification-list">{p.qualifications.map((item) => <div key={item}><i></i>{item}</div>)}</div></div></section>
    <section className="page-section"><header className="page-section-head"><p className="section-no">2021 — 2026</p><h2>{p.timelineTitle}</h2></header><div className="timeline-list">{p.timeline.map(([year, text], i) => <div key={year}><strong>{year}</strong><p>{text}</p><NarrativeVisual name={timelineImages[i]} alt="FMT company milestone visual" /></div>)}</div><SourceNote text={copy.common.source} /></section>
  </main>
}

export function ProductsPage({ copy }) {
  const p = copy.products
  return <main className="internal-page">
    <PageHero {...p} meta={copy.common.updated}><div className="page-aircraft"><img src={asset('fmt-c4950.png')} alt="FMT C4950" /></div></PageHero>
    <section className="page-section product-feature"><div className="product-image"><img src={asset('fmt-c4950.png')} alt="FMT C4950 multirotor UAV" /></div><div><p className="section-no">SIGNATURE PLATFORM</p><h2>{p.c4950Title}</h2><p className="page-lead">{p.c4950Lead}</p><div className="spec-table">{p.c4950Specs.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div></div></section>
    <section className="visual-evidence-strip product-visuals"><img src={asset('c4950-field.webp')} alt="C4950 field test platform" loading="lazy" /><img src={asset('c4950-workshop.webp')} alt="C4950 prototype assembly" loading="lazy" /><img src={asset('equipment-white-uav.webp')} alt="UAV equipment integration" loading="lazy" /></section>
    <section className="page-section page-band"><header className="page-section-head"><p className="section-no">AIRCRAFT</p><h2>{p.aircraftTitle}</h2></header><div className="product-matrix">{p.aircraft.map(([name, type, detail], i) => <article key={name}><NarrativeVisual name={aircraftImages[i]} alt={`${name} platform visual`} /><div className="matrix-copy"><span>{type}</span><h3>{name}</h3><p>{detail}</p><small>{copy.common.pending}</small></div></article>)}</div></section>
    <section className="page-section"><header className="page-section-head"><p className="section-no">MIT MANUFACTURING</p><h2>{p.componentsTitle}</h2></header><div className="detail-grid three">{p.components.map(([name, type, text], i) => <article className="detail-card with-visual" key={name}><NarrativeVisual name={componentImages[i]} alt={`${name} visual`} /><div className="detail-card-copy"><span>{type}</span><h3>{name}</h3><p>{text}</p></div></article>)}</div></section>
    <section className="page-section planner-feature"><div className="planner-copy"><p className="section-no">GROUND CONTROL SOFTWARE</p><h2>{p.plannerTitle}</h2><p>{p.plannerLead}</p><ul>{p.plannerFeatures.map((f) => <li key={f}>{f}</li>)}</ul><p className="caution">{p.plannerCaution}</p><a className="button primary" href="https://github.com/FMT-Wade-hong/MP-GPTT" target="_blank" rel="noreferrer">{p.github}<span>↗</span></a></div><div className="planner-gallery"><img src={asset('fmtplanner-flight.webp')} alt="FMTPlanner flight data interface" loading="lazy" /><img src={asset('fmtplanner-mission.webp')} alt="FMTPlanner mission planning interface" loading="lazy" /></div></section>
    <section className="page-section compact"><SourceNote text={copy.common.source} /></section>
  </main>
}

export function TechnologiesPage({ copy }) {
  const p = copy.technologies
  return <main className="internal-page"><PageHero {...p} meta={copy.common.updated}><div className="tech-hero-visual"><img src={asset('engineering-flight-controller.webp')} alt="Flight controller and avionics integration" /><div className="tech-orbit" aria-hidden="true"><span>FMT</span></div></div></PageHero><section className="page-section"><div className="pillar-list">{p.pillars.map(([no, english, title, text, tags], i) => <article key={no}><span className="pillar-no">{no}</span><div><small>{english}</small><h2>{title}</h2><p>{text}</p></div><div className="tag-list">{tags.map(tag => <span key={tag}>{tag}</span>)}</div><NarrativeVisual name={technologyImages[i]} alt={`${english} engineering visual`} concept={i === 2 ? copy.common.concept : undefined} /></article>)}</div></section><section className="page-section page-band"><header className="page-section-head"><p className="section-no">FROM NEED TO FIELD</p><h2>{p.processTitle}</h2></header><div className="process-row">{p.process.map(([no, label], i) => <div key={no}><NarrativeVisual name={processImages[i]} alt="FMT engineering process visual" /><span>{no}</span><strong>{label}</strong></div>)}</div><SourceNote text={copy.common.source} /></section></main>
}

export function SolutionsPage({ copy }) {
  const p = copy.solutions
  return <main className="internal-page"><PageHero {...p} meta={copy.common.updated}><img className="page-hero-photo" src={asset('aerial-coast-wide.webp')} alt="Aerial coastline documentation" /></PageHero><section className="page-section"><div className="solution-detail-list">{p.items.map(([title, text, tags], i) => <article key={title}><span className="solution-index">0{i + 1}</span><div><h2>{title}</h2><p>{text}</p><div className="tag-list">{tags.map(tag => <span key={tag}>{tag}</span>)}</div></div><NarrativeVisual name={solutionImages[i]} alt={`${title} visual`} concept={solutionConcepts[i] ? copy.common.concept : undefined} /></article>)}</div><SourceNote text={copy.common.source} /></section></main>
}

export function ProjectsPage({ copy }) {
  const p = copy.projects
  return <main className="internal-page"><PageHero {...p} meta={copy.common.updated}><img className="page-hero-photo" src={asset('fixed-wing-flight.webp')} alt="Fixed-wing UAV flight validation" /></PageHero><section className="page-section"><div className="case-grid">{p.cases.map(([year, title, text, image], i) => <article className="case-card with-image" key={title}><img src={asset(image || projectFallbackImages[i])} alt={`${title} supporting visual`} loading="lazy" /><div><span>{year}</span><h2>{title}</h2><p>{text}</p></div></article>)}</div></section><section className="page-section page-band project-service"><p className="section-no">DELIVERY EXPERIENCE</p><h2>{p.serviceTitle}</h2><p>{p.serviceText}</p><div className="project-photo-strip"><img src={asset('training-flight-deck.webp')} alt="Field flight operation" loading="lazy" /><img src={asset('training-field-operation.webp')} alt="Coastal flight operation" loading="lazy" /><img src={asset('flight-multirotor.webp')} alt="Multirotor flight validation" loading="lazy" /></div><SourceNote text={copy.common.source} /></section></main>
}

export function NewsPage({ copy }) {
  const p = copy.news
  return <main className="internal-page"><PageHero {...p} meta={copy.common.updated}><img className="page-hero-photo" src={asset('c4950-field.webp')} alt="FMT product and engineering progress" /></PageHero><section className="page-section"><div className="news-list">{p.items.map(([date, title, text, type], i) => <article key={title}><div><time>{date}</time><span>{type}</span></div><h2>{title}</h2><p>{text}</p><NarrativeVisual name={newsImages[i]} alt={`${title} visual`} /></article>)}</div><SourceNote text={copy.common.source} /></section></main>
}

export function ContactPage({ copy }) {
  const p = copy.contact
  const subject = encodeURIComponent('FMT project inquiry / 飛貓科技專案需求')
  return <main className="internal-page"><PageHero {...p} meta={copy.common.updated}><img className="page-hero-mark contact-mark" src={asset('fmt-logo-stacked.png')} alt="FMT 飛貓科技" /></PageHero><section className="page-section contact-layout"><div className="contact-directory"><p className="section-no">DIRECT CONTACT</p><NarrativeVisual name="training-field-operation.webp" alt="FMT field operation and project discussion" /><div><span>{p.primary}</span><a href={`mailto:wade@feimaotec.com?subject=${subject}`}>wade@feimaotec.com</a></div><div><span>{p.support}</span><a href={`mailto:feimao@feimaotec.com?subject=${subject}`}>feimao@feimaotec.com</a></div><div><span>{p.location}</span><strong>{p.locationValue}</strong></div><div><span>{p.website}</span><a href="https://www.feimaotec.com" target="_blank" rel="noreferrer">www.feimaotec.com ↗</a></div><div><span>{p.repository}</span><a href="https://github.com/FMT-Wade-hong/MP-GPTT" target="_blank" rel="noreferrer">GitHub · MP-GPTT ↗</a></div></div><div className="contact-checklist"><p className="section-no">PROJECT BRIEF</p><NarrativeVisual name="engineering-uav-wireframe.webp" alt="UAV engineering requirements and system design" /><h2>{p.checklistTitle}</h2><ol>{p.checklist.map((item, i) => <li key={item}><span>{String(i + 1).padStart(2, '0')}</span>{item}</li>)}</ol><a className="button primary" href={`mailto:wade@feimaotec.com?subject=${subject}`}>{p.mailAction}<span>↗</span></a></div></section><section className="page-section compact"><SourceNote text={copy.common.source} /></section></main>
}

export function RoutePage({ route, copy }) {
  const pages = { about: AboutPage, products: ProductsPage, technologies: TechnologiesPage, solutions: SolutionsPage, projects: ProjectsPage, news: NewsPage, contact: ContactPage }
  const Page = pages[route]
  return Page ? <Page copy={copy} /> : null
}

import { useEffect, useState } from 'react'

const image = (name) => `${import.meta.env.BASE_URL}images/${name}`

const galleryItems = {
  zh: [
    ['aerial-clouds.webp', '空中視野', '山區雲海空拍', '以實際飛行影像呈現台灣多樣地形與環境。'],
    ['aerial-coast-rail.webp', '航拍紀錄', '海岸與交通廊帶', '透過空中影像建立現地觀察、紀錄與後續應用素材。'],
    ['training-flight-field.webp', '外場實務', '操作與教育訓練', '從飛行前準備、現場協作到操作流程，重視可重複的工程紀律。'],
    ['equipment-octocopter.webp', '設備整合', '多旋翼平台驗證', '依任務與設備需求進行載具、電力、通訊與酬載整合。'],
    ['engineering-flight-controller.webp', '工程研製', '飛控與電源整合', '以實機配線、介面驗證與測試紀錄支援平台開發。'],
    ['c4950-workshop.webp', '原型開發', '組裝、調校與測試', '由工作室原型到外場飛行，逐步驗證機體與系統整合。'],
  ],
  en: [
    ['aerial-clouds.webp', 'AERIAL VIEW', 'Mountain cloudscape', 'Real flight imagery presents the varied terrain and operating environments of Taiwan.'],
    ['aerial-coast-rail.webp', 'AERIAL RECORD', 'Coastline and transport corridor', 'Airborne imagery supports field observation, documentation, and later application planning.'],
    ['training-flight-field.webp', 'FIELD PRACTICE', 'Operations and training', 'From pre-flight preparation to field coordination, each activity follows a repeatable engineering process.'],
    ['equipment-octocopter.webp', 'SYSTEM INTEGRATION', 'Multirotor platform validation', 'Aircraft, power, communications, and payloads are integrated around the project requirement.'],
    ['engineering-flight-controller.webp', 'ENGINEERING', 'Flight-control and power integration', 'Physical wiring, interface verification, and test records support platform development.'],
    ['c4950-workshop.webp', 'PROTOTYPING', 'Assembly, tuning, and testing', 'The platform progresses from workshop prototypes to staged field validation.'],
  ],
}

export default function FieldGallery({ lang }) {
  const [active, setActive] = useState(0)
  const items = galleryItems[lang]

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (media.matches) return undefined
    const timer = window.setInterval(() => {
      if (!document.hidden && document.documentElement.dataset.motion !== 'paused') {
        setActive((current) => (current + 1) % items.length)
      }
    }, 5600)
    return () => window.clearInterval(timer)
  }, [items.length])

  const select = (index) => setActive((index + items.length) % items.length)
  const [, eyebrow, title, text] = items[active]

  const move = (event) => {
    const box = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--pointer-x', `${((event.clientX - box.left) / box.width - 0.5) * -18}px`)
    event.currentTarget.style.setProperty('--pointer-y', `${((event.clientY - box.top) / box.height - 0.5) * -18}px`)
  }

  const reset = (event) => {
    event.currentTarget.style.setProperty('--pointer-x', '0px')
    event.currentTarget.style.setProperty('--pointer-y', '0px')
  }

  return <section className="field-gallery" aria-label={lang === 'zh' ? '飛貓科技影像紀錄' : 'FeiMao Tech visual journal'}>
    <div className="field-gallery-stage" onPointerMove={move} onPointerLeave={reset}>
      {items.map(([itemFile, , itemTitle], index) => <img
        key={itemFile}
        className={index === active ? 'active' : ''}
        src={image(itemFile)}
        alt={itemTitle}
        loading={index === 0 ? 'eager' : 'lazy'}
      />)}
      <div className="field-gallery-shade" aria-hidden="true"></div>
      <div className="field-gallery-copy">
        <p className="section-no">{String(active + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')} · {eyebrow}</p>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      <div className="field-gallery-arrows">
        <button type="button" onClick={() => select(active - 1)} aria-label={lang === 'zh' ? '上一張' : 'Previous image'}>←</button>
        <button type="button" onClick={() => select(active + 1)} aria-label={lang === 'zh' ? '下一張' : 'Next image'}>→</button>
      </div>
    </div>
    <div className="field-gallery-tabs" role="tablist" aria-label={lang === 'zh' ? '選擇影像' : 'Select image'}>
      {items.map(([, itemEyebrow, itemTitle], index) => <button
        type="button"
        role="tab"
        aria-selected={index === active}
        key={itemTitle}
        onClick={() => select(index)}
      ><span>{String(index + 1).padStart(2, '0')}</span><b>{itemEyebrow}</b><small>{itemTitle}</small></button>)}
    </div>
  </section>
}

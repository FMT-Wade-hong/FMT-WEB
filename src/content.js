export const content = {
  zh: {
    nav: ['關於 FMT', '產品平台', '核心技術', '解決方案', '專案經驗', '聯絡我們'],
    eyebrow: 'UNMANNED SYSTEMS · TAIWAN',
    title: '讓無人系統，成為可靠的任務夥伴。',
    lead: '整合飛行平台、飛控、感測與導控軟體，為真實場域建立可驗證的無人系統。',
    explore: '探索產品平台', contact: '討論整合需求',
    positioning: '從飛行載具到任務系統',
    positioningText: '我們以工程整合為核心，協助合作夥伴完成無人載具設計、飛控調校、任務酬載、通訊鏈路與地面站整合。',
    platforms: '精選平台', platformsLead: '整合飛行載具、任務酬載與地面導控軟體；完整公開資料與注意事項請見產品分頁。',
    tech: '核心技術', solutions: '應用解決方案', experience: '整合經驗',
    experienceTitle: '以任務需求定義系統，而非讓任務遷就載具。',
    experienceText: '從需求釐清、原型驗證到系統整合，FMT 與產業、研究及教育夥伴共同推進無人系統專案。公開案例將在取得發布許可後陸續補充。',
    cta: '下一個任務，從對話開始。', ctaText: '告訴我們場域、任務與整合需求，一起找出合適的技術路徑。',
    footer: '飛貓科技有限公司', pending: '依專案確認', publicData: '公開資料', viewProducts: '查看完整產品資料', viewProjects: '查看公開專案', menu: '開啟選單', close: '關閉選單',
    multirotorAlt: 'C4950 多旋翼無人機', batwingAlt: 'Batwing 固定翼無人機'
  },
  en: {
    nav: ['About FMT', 'Platforms', 'Technologies', 'Solutions', 'Experience', 'Contact'],
    eyebrow: 'UNMANNED SYSTEMS · TAIWAN',
    title: 'Engineering unmanned systems for real-world missions.',
    lead: 'Integrated aircraft, flight control, sensing, and mission software for verifiable unmanned systems.',
    explore: 'Explore platforms', contact: 'Discuss your mission',
    positioning: 'From aircraft to mission system', positioningText: 'Engineering integration sits at the center of our work, spanning vehicle design, flight-control tuning, payloads, communications, and ground-control systems.',
    platforms: 'Featured platforms', platformsLead: 'Flight platforms, mission payloads, and ground-control software—see the product page for public data and operating notes.',
    tech: 'Core technologies', solutions: 'Solutions', experience: 'Integration experience',
    experienceTitle: 'Define the system around the mission—not the other way around.',
    experienceText: 'From requirements and prototypes to system integration, FMT works with industry, research, and education partners. Public cases will be added after publication approval.',
    cta: 'Your next mission starts with a conversation.', ctaText: 'Share your operating context, mission, and integration needs. We will explore the right technical path together.',
    footer: 'FeiMao Tech Co., Ltd.', pending: 'By project', publicData: 'Public data', viewProducts: 'View all product information', viewProjects: 'View public projects', menu: 'Open menu', close: 'Close menu',
    multirotorAlt: 'C4950 multirotor UAV', batwingAlt: 'Batwing fixed-wing UAV'
  }
}

export const platforms = [
  { name: 'C4950', type: { zh: '多旋翼無人機平台', en: 'Multirotor UAV platform' }, code: '01', image: 'images/fmt-c4950.png', verified: true },
  { name: 'Batwing', type: { zh: '固定翼平台', en: 'Fixed-wing platform' }, code: '02', image: 'images/fmt-batwing-transparent.png' },
  { name: 'FMTPlanner', type: { zh: '任務規劃軟體', en: 'Mission-planning software' }, code: '03', image: 'images/fmtplanner-flight.webp', verified: true },
]

export const technologies = [
  ['Flight Control', 'ArduPilot / PX4'], ['Navigation', 'GNSS / RTK'], ['Perception', 'Vision / LiDAR'],
  ['Edge Intelligence', 'AI Computing'], ['Interoperability', 'MAVLink'], ['Integration', 'Payload / Communications'],
]

export const solutions = {
  zh: ['安全與防護', '巡檢', '測繪', '搜救', 'AI 辨識', '教育訓練', '客製系統整合'],
  en: ['Security', 'Inspection', 'Surveying & Mapping', 'Search & Rescue', 'AI Recognition', 'Education & Training', 'Custom Integration'],
}

export const homeHighlights = {
  zh: {
    valueEyebrow: 'ENGINEERED AS ONE SYSTEM',
    valueTitle: '從飛行平台，到可執行的任務系統。',
    valueText: 'FMT 整合載具、飛控、感測、通訊與地面導控，讓跨領域需求收斂成一套可測試、可維護的工程方案。',
    valueLink: '了解核心技術',
    pillars: [
      ['01', '飛行平台工程', '多旋翼、固定翼與 VTOL 的結構、動力及飛控整合。'],
      ['02', '任務系統整合', '依場域配置感測、通訊、運算與任務酬載。'],
      ['03', '地面導控軟體', '以 FMTPlanner 支援航線、空域、地形與任務狀態。'],
    ],
    showcaseEyebrow: 'SELECTED SYSTEMS',
    showcaseTitle: '三個代表系統，連結飛行與任務。',
    platformLabel: '折疊式多旋翼平台',
    platformText: 'C4950 提供可延伸的載具基礎，實際配置依任務與專案條件確認。',
    batwingLabel: '固定翼飛行平台',
    batwingText: 'Batwing 聚焦固定翼載具與任務系統整合，公開配置依專案確認。',
    plannerLabel: '任務規劃與導控',
    plannerText: 'FMTPlanner 將繁體中文操作、台灣空域及任務資訊整合於單一介面。',
    detail: '查看重點資料',
    solutionsEyebrow: 'APPLICATIONS',
    solutionsTitle: '工程能力，落在真實場域。',
    solutionItems: [['巡檢與測繪', '影像、地形與任務規劃'], ['教育與研究', '操作、飛控與跨校驗證'], ['客製無人系統', 'UAV、USV 與特殊任務整合'], ['工程與任務紀錄', '空域申請、航線與影像交付']],
    projectLink: '瀏覽公開專案經驗',
    capabilitiesEyebrow: 'WHY FMT',
    capabilitiesTitle: '從平台、任務到導控，由同一個工程團隊整合。',
    experienceEyebrow: 'FIELD EXPERIENCE',
    experienceTitle: '讓系統在現地被驗證。',
    experienceText: 'FMT 與產業、研究及教育夥伴推進公開展示、飛行驗證與跨域整合；網站僅呈現已確認可公開的重點。',
  },
  en: {
    valueEyebrow: 'ENGINEERED AS ONE SYSTEM',
    valueTitle: 'From flight platform to an executable mission system.',
    valueText: 'FMT integrates aircraft, flight control, sensing, communications, and ground control into testable, maintainable engineering solutions.',
    valueLink: 'Explore core technology',
    pillars: [
      ['01', 'Aircraft engineering', 'Structures, propulsion, and flight controls for multirotor, fixed-wing, and VTOL platforms.'],
      ['02', 'Mission integration', 'Sensing, communications, compute, and payloads configured around the operating context.'],
      ['03', 'Ground-control software', 'FMTPlanner supports routes, airspace, terrain, and mission awareness.'],
    ],
    showcaseEyebrow: 'SELECTED SYSTEMS',
    showcaseTitle: 'Three representative systems connecting flight and mission.',
    platformLabel: 'Foldable multirotor platform',
    platformText: 'C4950 provides an extensible vehicle foundation; final configuration is confirmed by mission and project.',
    batwingLabel: 'Fixed-wing flight platform',
    batwingText: 'Batwing focuses on fixed-wing aircraft and mission-system integration; public configuration is confirmed by project.',
    plannerLabel: 'Mission planning & control',
    plannerText: 'FMTPlanner brings Traditional Chinese operation, Taiwan airspace, and mission information into one interface.',
    detail: 'View key information',
    solutionsEyebrow: 'APPLICATIONS',
    solutionsTitle: 'Engineering for real operating environments.',
    solutionItems: [['Inspection & mapping', 'Imagery, terrain, and mission planning'], ['Education & research', 'Operations, flight controls, and validation'], ['Custom unmanned systems', 'UAV, USV, and special-mission integration'], ['Engineering records', 'Airspace applications, routes, and imagery delivery']],
    projectLink: 'Explore public project experience',
    capabilitiesEyebrow: 'WHY FMT',
    capabilitiesTitle: 'One engineering team across platform, mission, and control.',
    experienceEyebrow: 'FIELD EXPERIENCE',
    experienceTitle: 'Validate the system in the field.',
    experienceText: 'FMT works with industry, research, and education partners on public demonstrations, flight validation, and cross-domain integration. Only confirmed public highlights are shown.',
  },
}

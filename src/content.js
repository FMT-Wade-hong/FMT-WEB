export const content = {
  zh: {
    nav: ['關於 FMT', '產品平台', '核心技術', '解決方案', '專案經驗', '聯絡我們'],
    eyebrow: 'UNMANNED SYSTEMS · TAIWAN',
    title: '讓無人系統，成為可靠的任務夥伴。',
    lead: '飛貓科技專注於無人機工程、飛控整合與客製化任務系統，串聯載具、感測、通訊與軟體，為真實場域打造可落地的整合方案。',
    explore: '探索產品平台', contact: '討論整合需求',
    positioning: '從飛行載具到任務系統',
    positioningText: '我們以工程整合為核心，協助合作夥伴完成無人載具設計、飛控調校、任務酬載、通訊鏈路與地面站整合。',
    platforms: '精選平台', platformsLead: '以下為平台架構預留；規格與正式影像將於資料確認後更新。',
    tech: '核心技術', solutions: '應用解決方案', experience: '整合經驗',
    experienceTitle: '以任務需求定義系統，而非讓任務遷就載具。',
    experienceText: '從需求釐清、原型驗證到系統整合，FMT 與產業、研究及教育夥伴共同推進無人系統專案。公開案例將在取得發布許可後陸續補充。',
    cta: '下一個任務，從對話開始。', ctaText: '告訴我們場域、任務與整合需求，一起找出合適的技術路徑。',
    footer: '飛貓科技有限公司', pending: '資料待確認', menu: '開啟選單', close: '關閉選單'
  },
  en: {
    nav: ['About FMT', 'Platforms', 'Technologies', 'Solutions', 'Experience', 'Contact'],
    eyebrow: 'UNMANNED SYSTEMS · TAIWAN',
    title: 'Engineering unmanned systems for real-world missions.',
    lead: 'FeiMao Tech specializes in UAV engineering, flight-control integration, and tailored mission systems—connecting airframes, sensing, communications, and software.',
    explore: 'Explore platforms', contact: 'Discuss your mission',
    positioning: 'From aircraft to mission system', positioningText: 'Engineering integration sits at the center of our work, spanning vehicle design, flight-control tuning, payloads, communications, and ground-control systems.',
    platforms: 'Featured platforms', platformsLead: 'Platform framework only. Verified specifications and official imagery will be added when available.',
    tech: 'Core technologies', solutions: 'Solutions', experience: 'Integration experience',
    experienceTitle: 'Define the system around the mission—not the other way around.',
    experienceText: 'From requirements and prototypes to system integration, FMT works with industry, research, and education partners. Public cases will be added after publication approval.',
    cta: 'Your next mission starts with a conversation.', ctaText: 'Share your operating context, mission, and integration needs. We will explore the right technical path together.',
    footer: 'FeiMao Tech Co., Ltd.', pending: 'Details pending verification', menu: 'Open menu', close: 'Close menu'
  }
}

export const platforms = [
  { name: 'C4950', type: { zh: '無人機平台', en: 'UAV platform' }, code: '01' },
  { name: 'Batwing', type: { zh: '固定翼平台', en: 'Fixed-wing platform' }, code: '02' },
  { name: 'FMTPlanner', type: { zh: '任務規劃軟體', en: 'Mission-planning software' }, code: '03' },
]

export const technologies = [
  ['Flight Control', 'ArduPilot / PX4'], ['Navigation', 'GNSS / RTK'], ['Perception', 'Vision / LiDAR'],
  ['Edge Intelligence', 'AI Computing'], ['Interoperability', 'MAVLink'], ['Integration', 'Payload / Communications'],
]

export const solutions = {
  zh: ['安全與防護', '巡檢', '測繪', '搜救', 'AI 辨識', '教育訓練', '客製系統整合'],
  en: ['Security', 'Inspection', 'Surveying & Mapping', 'Search & Rescue', 'AI Recognition', 'Education & Training', 'Custom Integration'],
}

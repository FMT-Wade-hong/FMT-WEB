# FMT-WEB Codex Instructions

## Project goal
Build the official corporate website for FeiMao Tech (FMT), a Taiwan UAV engineering and system-integration company.

The site should present FMT as an engineering-focused UAV technology company rather than a hobby/model-aircraft shop.

## Primary audience
- Government and defense-related customers
- Aerospace and UAV industry partners
- Universities and research institutions
- Enterprise customers seeking custom UAV integration
- Overseas buyers and technology partners

## Recommended stack
- React
- Vite
- JavaScript or TypeScript
- Responsive CSS
- GitHub Actions for deployment
- GitHub Pages compatible static build

Avoid unnecessary dependencies. Favor maintainability, fast load time, and predictable builds.

## Visual direction
- Modern aerospace / defense technology aesthetic
- Dark or deep navy base
- Sky-blue / cyan accents
- Clean white typography
- Strong use of UAV photography, silhouettes, engineering diagrams, and product imagery
- Minimal, premium, technical layout
- Avoid flashy gaming-style UI, excessive neon, or cluttered animations

## Brand name
Chinese: 飛貓科技有限公司
English: FeiMao Tech
Short name: FMT

## Core site sections
1. Home
2. About FMT
3. Products
4. Technologies
5. Solutions
6. Projects / Experience
7. News
8. Contact

## Product categories
- Multirotor UAV
- Fixed-wing UAV
- VTOL UAV
- Training / education platforms
- Ground-control / mission-planning software
- Payload and communication integration

Known product/platform names may include:
- C4950
- Batwing
- FMTPlanner

Do not invent technical specifications. Use placeholders when verified product data has not yet been supplied.

## Core technology themes
- ArduPilot / PX4 integration
- Flight-controller integration and tuning
- GNSS / RTK
- GPS-denied navigation
- AI edge computing
- Vision / LiDAR integration
- MAVLink integration
- Communications and payload integration
- UAV structural and power-system design

## Solutions themes
- Defense and security
- Inspection
- Surveying / mapping
- Search and rescue
- AI recognition
- Education and training
- Custom unmanned-system integration

## Language
Design the architecture for Traditional Chinese and English from the beginning.
Do not hard-code the site in a way that makes bilingual support difficult later.
Traditional Chinese is the initial primary language.

## Responsive requirements
The site must work well on:
- Desktop
- Tablet
- Mobile

Navigation, hero sections, product cards, data/spec tables, and contact areas must remain usable on small screens.

## Engineering rules
- Keep components modular and reusable.
- Keep page content separate from layout when practical.
- Do not duplicate navigation/footer code across pages.
- Use semantic HTML.
- Maintain basic accessibility: alt text, labels, keyboard-accessible controls, sufficient contrast.
- Optimize image loading.
- Avoid committing secrets, API keys, credentials, private customer data, or sensitive defense information.
- Do not expose internal project/customer information unless explicitly approved for publication.

## GitHub Pages
The finished project should be deployable from GitHub using GitHub Actions.
The Vite base path must support repository-based GitHub Pages hosting for `FMT-WEB` and should remain easy to change later when a custom domain is connected.

## Development workflow
Before large changes:
1. Inspect the existing structure.
2. Preserve working functionality.
3. Make focused changes.
4. Run build/lint checks when available.
5. Avoid broad rewrites unless specifically requested.

## Initial implementation target
Create a polished first-stage corporate homepage with:
- Header/navigation
- Hero section
- Company positioning
- Featured UAV platforms
- Core technologies
- Solutions
- Selected project/experience section
- Contact CTA
- Footer

Use placeholder image assets where final company photos/logos have not yet been committed.

## Important content rule
Never fabricate certifications, customers, performance numbers, product specifications, military capabilities, or project outcomes. Mark unknown content clearly for later replacement.

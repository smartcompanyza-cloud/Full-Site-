# Smart Your Company — PRD

## Original problem statement
Build a cinematic, movie-like marketing site for "Smart Your Company" (South African full-service business solutions provider) with 4 pages: Home, Design & Marketing, Compliance, Contact. Emphasis on "best UI system and animation" + "best graphic designing website".

### Iteration 2 (2026-01)
User asked to:
- Change yellow/amber accent to red
- Add graphics on the background across sections
- Add slideshows of logos, letterheads, etc. per category

## Architecture
- **Frontend**: React 19 + React Router 7 + Tailwind CSS + Framer Motion + Lenis + Embla Carousel
- **Backend**: FastAPI + MongoDB (motor)
- **Theme**: Dark cinematic obsidian `#050505` + red accent `#EF2B3B` (was amber)
- **Typography**: Cabinet Grotesk (display), Outfit (body), JetBrains Mono (accent)

## Core components
- `Navbar`, `Footer`, `Layout` (with Lenis smooth scroll)
- `PageHero`, `CTAStrip`, `FadeUp`, `SplitText` (animation primitives)
- `Slideshow` (Embla carousel with autoplay + dot indicators + prev/next)
- `BackgroundFX` (variants: grid / orbs / rays / dots / wave)
- `PortfolioMocks` — pure CSS/SVG mock visual assets:
  - `LogoCard` (5 logo styles: monogram, wordmark, combo, symbol, stacked)
  - `LetterheadCard`, `BusinessCardMock`, `SocialPostMock`, `AdCreativeMock`, `CertificateMock`

## Routes
- `/` — Home: Hero · About · Services · **Showcase** (4 tabs) · HowItWorks · WhyUs · Packages · CTA
- `/design-marketing` — PageHero · Graphic Design block + 3 slideshows (logos, letterheads, business cards) · Digital Marketing block + 2 slideshows (social, ads) · Why it matters · CTA
- `/compliance` — PageHero · 4 pillar cards · **Certificate slideshow** · Why compliance matters · CTA
- `/contact` — PageHero · Contact cards + working form (→ `POST /api/contact`)

## User personas
1. Founder / early-stage entrepreneur
2. SMB owner needing compliance help
3. Scaling business needing marketing & motion graphics

## What's been implemented
### v1.0 (2026-01) — MVP
- Full 4-page site with Framer Motion reveals and Lenis smooth scroll
- Home, Design & Marketing, Compliance, Contact with all copy per spec
- Working contact form → MongoDB persistence (`/api/contact`)

### v1.1 (2026-01) — Red theme + Slideshows + Backgrounds
- Amber `#FFB300` → Red `#EF2B3B` across 88 references
- Home Showcase: 4-tab carousel (Logos / Letterheads / Social / Compliance)
- Design & Marketing: 5 category slideshows inline (logos, letterheads, business cards, social posts, ad creatives)
- Compliance: 6-slide certificate showcase (CIPC, SARS, B-BBEE, annual returns, name reservation)
- BackgroundFX across About / Services / Showcase / WhyUs / Packages / DM blocks / Compliance pillars
- Fully CSS/SVG-based mocks (no external image dependencies) — crisp at any zoom
- 100% test pass on iteration 2 (zero amber left in DOM, all slideshow navigation works)

## APIs
- `POST /api/contact` · `GET /api/contact` · `GET /api/`

## Prioritized backlog
- **P1**: Email notifications on form submit (Resend / SendGrid)
- **P1**: Admin dashboard for contact inbox
- **P2**: Pause Embla autoplay on hover / after user interaction (embla-carousel-autoplay plugin with stopOnInteraction)
- **P2**: Real pricing on Packages cards
- **P2**: Replace mock brands in portfolio with real client work once available
- **P2**: Case studies / blog page for SEO
- **P3**: Rate limiting on `/api/contact`
- **P3**: Move backend logger init above route definitions
- **P3**: Align LOGO_ITEMS (6) and BUSINESS_CARD_ITEMS (5) count for consistency

## Next tasks list
1. Await user feedback on new red + slideshow look
2. If approved: wire SendGrid/Resend email notifications
3. Consider admin inbox UI so the user can read submissions in-app

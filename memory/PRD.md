# Smart Your Company — PRD

## Original problem statement
User asked for a cinematic, movie-like marketing website for "Smart Your Company" — a South African full-service business solutions provider. 4 pages with literal content: Home, Design & Marketing, Compliance, Contact. Emphasis on "best UI system and animation" and "best graphic designing website".

## Architecture
- **Frontend**: React 19 + React Router 7 + Tailwind CSS + Framer Motion + Lenis smooth scroll
- **Backend**: FastAPI (Python) + MongoDB (motor async driver)
- **Theme**: Dark cinematic aesthetic — obsidian `#050505` background with amber `#FFB300` accent
- **Typography**: Cabinet Grotesk (display), Outfit (body), JetBrains Mono (accent)
- **Routes**: `/`, `/design-marketing`, `/compliance`, `/contact`
- **API**: `POST /api/contact`, `GET /api/contact` (MongoDB `contact_messages` collection)

## User personas
1. **Founder / early-stage entrepreneur** — needs registration + brand + marketing under one roof.
2. **SMB owner** — wants to stay compliant (SARS, VAT, B-BBEE) without getting lost in paperwork.
3. **Scaling business** — ready for motion graphics, paid ads, conversion funnels.

## Core requirements (static)
- 4-page site with consistent Navbar + Footer + cinematic CTA strip
- Hero on every page with parallax scroll + staggered word reveals
- Contact page with working form (backend persistence)
- WhatsApp CTA (+27 63 239 3273) and mailto (info@smartcompany.co.za) reachable everywhere
- Mobile-responsive with hamburger menu

## What's been implemented (2026-01 — v1.0)
- Full Home page: cinematic hero, About, Services (3-card grid), How It Works (3-step), Why Us (4 reasons), Packages (Starter/Growth/Scale), CTA strip
- Design & Marketing page: 2 service blocks × 3 sub-cards each (Branding/Marketing Design/Motion + Social/Paid/Strategy)
- Compliance page: 4 pillar cards + "Why compliance matters" immersive section
- Contact page: contact cards + working form (full_name, email, phone, service select, message)
- Global: Lenis smooth scroll, Framer Motion reveals, grain texture, marquee footer strip
- Backend: POST/GET `/api/contact` with Pydantic validation + MongoDB persistence
- 100% pass on first testing iteration (backend + frontend)

## Prioritized backlog
- **P1**: Admin view for inbox of contact submissions (currently only reachable via direct DB/API)
- **P1**: Email notifications on form submit (Resend or SendGrid integration)
- **P2**: Package pricing details (currently features only, no prices)
- **P2**: Case studies / portfolio grid on Design & Marketing page
- **P2**: Blog or "Insights" page for SEO
- **P3**: Rate limiting on `/api/contact` (spam protection)
- **P3**: Move backend logger init above route definitions (code-review comment from testing agent)
- **P3**: Replace hardcoded home stats (150+ / 98% / 24h) with real numbers when available

## Next tasks list
1. Wait for user feedback on visual design
2. Offer admin dashboard for contact inbox if desired
3. Wire SendGrid/Resend for instant email alerts on form submit

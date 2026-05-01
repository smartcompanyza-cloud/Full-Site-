# Smart Your Company — Static HTML

A cinematic dark red marketing site in **pure HTML + CSS + vanilla JS**. No build step. No frameworks.

## Files
```
static-html/
├── index.html              # Home
├── design-marketing.html   # Design & Marketing
├── compliance.html         # Compliance
├── contact.html            # Contact (with working form)
└── assets/
    ├── styles.css          # All styles (fonts, layout, animations)
    └── script.js           # Mobile menu, slideshow, reveal-on-scroll, form
```

## How to use

### 1. Open locally
Just double-click `index.html` — it runs in your browser as-is.

### 2. Host it anywhere (free)
- **GitHub Pages**: Push the `static-html/` folder to any GitHub repo → Settings → Pages → "Deploy from branch".
- **Netlify Drop**: Drag the folder onto [app.netlify.com/drop](https://app.netlify.com/drop).
- **Vercel / Cloudflare Pages**: Connect your repo or drag-and-drop.
- **Any shared hosting / cPanel**: Upload the folder to your `public_html`.

### 3. Make the contact form save to your own backend (optional)
Open `contact.html` and set this before the `script.js` tag:

```html
<script>
  window.SMART_BACKEND_URL = "https://your-api.com";
</script>
```

The form will `POST /api/contact` with `{full_name, email, phone, service, message}`.
If **no** backend URL is set, the form opens WhatsApp pre-filled with the message instead — so it still "works" out of the box.

### 4. Update contact details
Search-and-replace across all `.html` files:
- `info@smartcompany.co.za` → your email
- `063 239 3273` → your phone
- `27632393273` (in WhatsApp/tel links) → your international number without `+`

### 5. Change the accent color
In `assets/styles.css`:
```css
:root {
  --red: #EF2B3B;        /* change this */
  --red-hover: #FF4655;  /* and this */
}
```

## What's included
- **4 pages** with full copy (hero, about, services, packages, compliance pillars, contact form)
- **Red cinematic theme** with amber-free palette
- **5 slideshows** with CSS/SVG mock portfolio tiles (logos, letterheads, business cards, social posts, compliance certificates)
- **Animated backgrounds** (grid, dots, orbs, rays) per section
- **Sticky blur navbar + mobile hamburger menu**
- **Reveal-on-scroll animations** via IntersectionObserver
- **Autoplay slideshow** (pauses on hover)
- **Custom fonts** (Cabinet Grotesk + Outfit + JetBrains Mono) via CDN

## Fonts note
Fonts load from Fontshare + Google Fonts. If you want to host them yourself, download the families and update the `@import` lines at the top of `styles.css`.

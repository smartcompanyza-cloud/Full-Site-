/* Smart Your Company — Shared JS */

// Navbar scroll state
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

// Mobile menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    menuBtn.innerHTML = open
      ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg>'
      : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>';
  });
}

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

// Slideshow
function initSlideshow(root) {
  const track = root.querySelector('.slides-track');
  const slides = Array.from(root.querySelectorAll('.slide'));
  const prev = root.querySelector('.nav-prev');
  const next = root.querySelector('.nav-next');
  const dotsWrap = root.querySelector('.dots');
  const counter = root.querySelector('.slideshow-counter');
  if (!track || !slides.length) return;

  let index = 0;

  // Build dots
  if (dotsWrap) {
    dotsWrap.innerHTML = slides.map((_, i) => `<span class="dot ${i===0?'active':''}" data-i="${i}"></span>`).join('');
    dotsWrap.addEventListener('click', (e) => {
      const i = e.target.dataset.i;
      if (i !== undefined) go(parseInt(i));
    });
  }

  function visibleCount() {
    const w = window.innerWidth;
    if (w >= 1024) return 3;
    if (w >= 768) return 2;
    if (w >= 640) return 1;
    return 1;
  }

  function go(i) {
    const max = Math.max(0, slides.length - 1);
    index = ((i % slides.length) + slides.length) % slides.length;
    const slideRect = slides[0].getBoundingClientRect();
    const gap = 20;
    const offset = index * (slideRect.width + gap);
    track.style.transform = `translateX(-${offset}px)`;
    dotsWrap?.querySelectorAll('.dot').forEach((d, di) => d.classList.toggle('active', di === index));
    if (counter) counter.textContent = `${String(index + 1).padStart(2, '0')} / ${String(slides.length).padStart(2, '0')}`;
  }

  prev?.addEventListener('click', () => go(index - 1));
  next?.addEventListener('click', () => go(index + 1));

  // Autoplay
  let timer = setInterval(() => go(index + 1), 4200);
  root.addEventListener('mouseenter', () => clearInterval(timer));
  root.addEventListener('mouseleave', () => { timer = setInterval(() => go(index + 1), 4200); });

  window.addEventListener('resize', () => go(index));
  go(0);
}
document.querySelectorAll('.slideshow').forEach(initSlideshow);

// Showcase tabs (home)
const tabs = document.querySelectorAll('.tab[data-tab]');
const panels = document.querySelectorAll('.tab-panel');
tabs.forEach((t) => t.addEventListener('click', () => {
  tabs.forEach((x) => x.classList.remove('active'));
  t.classList.add('active');
  const key = t.dataset.tab;
  panels.forEach((p) => p.style.display = p.dataset.panel === key ? 'block' : 'none');
  // Re-init the activated panel's slideshow (to recalc widths)
  const active = document.querySelector(`.tab-panel[data-panel="${key}"] .slideshow`);
  if (active) {
    const track = active.querySelector('.slides-track');
    if (track) track.style.transform = 'translateX(0)';
  }
}));

// Contact form
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    const ok = document.getElementById('msg-ok');
    const err = document.getElementById('msg-err');
    ok.classList.remove('on'); err.classList.remove('on');

    // Prefer API call if BACKEND_URL is set; else WhatsApp fallback
    const BACKEND_URL = window.SMART_BACKEND_URL || '';
    try {
      if (BACKEND_URL) {
        const res = await fetch(`${BACKEND_URL}/api/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error('Request failed');
      } else {
        // Fallback: open WhatsApp with pre-filled message
        const text = `Hi Smart Your Company!%0A%0AName: ${encodeURIComponent(data.full_name||'')}%0AEmail: ${encodeURIComponent(data.email||'')}%0APhone: ${encodeURIComponent(data.phone||'')}%0AService: ${encodeURIComponent(data.service||'')}%0A%0A${encodeURIComponent(data.message||'')}`;
        window.open(`https://wa.me/27632393273?text=${text}`, '_blank');
      }
      ok.classList.add('on');
      ok.textContent = '✓ Message received. We\u2019ll reach out within 24 hours.';
      form.reset();
    } catch (ex) {
      err.classList.add('on');
      err.textContent = '! Something went wrong. Please try WhatsApp or email us directly.';
    }
  });
}

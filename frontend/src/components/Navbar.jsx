import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { to: '/', label: 'Home' },
  { to: '/design-marketing', label: 'Design & Marketing' },
  { to: '/compliance', label: 'Compliance' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? 'backdrop-blur-xl bg-black/60 border-b border-white/5' : 'bg-transparent'
        }`}
        data-testid="main-navbar"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group" data-testid="nav-logo-link">
            <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#FFB300] text-black font-display text-lg glow-amber">
              S
            </span>
            <div className="leading-tight hidden sm:block">
              <div className="font-display text-[15px] tracking-tight text-white">Smart Your Company</div>
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-500">
                Register · Brand · Grow
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                data-testid={`nav-link-${l.label.toLowerCase().replace(/[^a-z]+/g, '-')}`}
                className={({ isActive }) =>
                  `relative font-mono text-[11px] tracking-[0.22em] uppercase transition-colors link-underline ${
                    isActive ? 'text-[#FFB300]' : 'text-zinc-400 hover:text-white'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <a
              href="https://wa.me/27632393273"
              target="_blank"
              rel="noreferrer"
              data-testid="nav-whatsapp-btn"
              className="inline-flex items-center gap-2 rounded-full bg-[#FFB300] text-black font-medium px-5 py-2.5 text-sm hover:bg-[#FFC940] transition-colors glow-amber"
            >
              <span className="h-2 w-2 rounded-full bg-black animate-pulse" />
              Chat on WhatsApp
            </a>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            data-testid="mobile-menu-btn"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl md:hidden"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col gap-6 pt-28 px-8">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/[^a-z]+/g, '-')}`}
                    className={({ isActive }) =>
                      `block font-display text-4xl tracking-tight ${
                        isActive ? 'text-[#FFB300]' : 'text-white'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
              <a
                href="https://wa.me/27632393273"
                target="_blank"
                rel="noreferrer"
                data-testid="mobile-whatsapp-btn"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#FFB300] text-black font-medium px-6 py-3 w-fit"
              >
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { Link } from 'react-router-dom';
import { Mail, Phone, MessageCircle, ArrowUpRight } from 'lucide-react';
import FadeUp from './FadeUp';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#050505] overflow-hidden" data-testid="site-footer">
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-80 w-[80%] rounded-full bg-[#EF2B3B]/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-10">
        <FadeUp>
          <div className="grid lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#EF2B3B] text-black font-display text-xl">
                  S
                </span>
                <span className="font-display text-lg text-white">Smart Your Company</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xs mb-6">
                Graphic Design · Digital Marketing · Compliance. Everything you need to start,
                brand and grow — under one roof.
              </p>
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-600">
                Proudly South African · Est. 2024
              </div>
            </div>

            <div>
              <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#EF2B3B] mb-5">
                Navigate
              </div>
              <ul className="space-y-3 text-zinc-300">
                <li><Link to="/" className="link-underline hover:text-white" data-testid="footer-link-home">Home</Link></li>
                <li><Link to="/design-marketing" className="link-underline hover:text-white" data-testid="footer-link-design">Design &amp; Marketing</Link></li>
                <li><Link to="/compliance" className="link-underline hover:text-white" data-testid="footer-link-compliance">Compliance</Link></li>
                <li><Link to="/contact" className="link-underline hover:text-white" data-testid="footer-link-contact">Contact</Link></li>
              </ul>
            </div>

            <div>
              <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#EF2B3B] mb-5">
                Contact
              </div>
              <ul className="space-y-3 text-zinc-300 text-sm">
                <li className="flex items-start gap-3">
                  <Mail size={16} className="mt-0.5 text-zinc-500" />
                  <a href="mailto:info@smartcompany.co.za" className="link-underline" data-testid="footer-email">info@smartcompany.co.za</a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={16} className="mt-0.5 text-zinc-500" />
                  <a href="tel:+27632393273" className="link-underline" data-testid="footer-phone">063 239 3273</a>
                </li>
                <li className="flex items-start gap-3">
                  <MessageCircle size={16} className="mt-0.5 text-zinc-500" />
                  <a href="https://wa.me/27632393273" target="_blank" rel="noreferrer" className="link-underline" data-testid="footer-whatsapp">WhatsApp Us</a>
                </li>
              </ul>
            </div>

            <div>
              <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[#EF2B3B] mb-5">
                Ready?
              </div>
              <Link
                to="/contact"
                data-testid="footer-cta-start"
                className="group inline-flex items-center gap-2 rounded-full border border-white/15 hover:border-[#EF2B3B] hover:bg-[#EF2B3B] hover:text-black text-white px-5 py-3 text-sm transition-all"
              >
                Start your business
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </FadeUp>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-zinc-500 font-mono tracking-wider">
          <div>© {new Date().getFullYear()} SMART YOUR COMPANY · ALL RIGHTS RESERVED</div>
          <div>DESIGNED · BUILT · COMPLIED · IN SOUTH AFRICA</div>
        </div>
      </div>

      <div className="relative overflow-hidden border-t border-white/5">
        <div className="flex whitespace-nowrap py-8 marquee">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="flex items-center gap-10 pr-10">
              {['Start Smart', 'Grow Strong', 'Stay Compliant', 'Design That Sells', 'Marketing That Converts'].map((t) => (
                <span key={t} className="font-display text-5xl md:text-7xl text-white/5 tracking-tighter">
                  {t} <span className="text-[#EF2B3B]/30">●</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

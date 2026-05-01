import { Link } from 'react-router-dom';
import { ArrowUpRight, MessageCircle, Mail, Phone } from 'lucide-react';
import FadeUp from './FadeUp';
import SplitText from './SplitText';

export default function CTAStrip({
  eyebrow = 'Let\u2019s build',
  title = 'Ready to start your business?',
  primaryLabel = 'Start Your Business',
  primaryTo = '/contact',
}) {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden" data-testid="cta-strip">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(circle at 30% 50%, rgba(239,43,59,0.12) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(239,43,59,0.06) 0%, transparent 50%)',
        }}
      />
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <FadeUp>
          <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#EF2B3B] mb-6">
            / {eyebrow}
          </div>
        </FadeUp>
        <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter text-white max-w-5xl">
          <SplitText text={title} />
        </h2>

        <FadeUp delay={0.3}>
          <div className="mt-14 flex flex-col sm:flex-row gap-4">
            <Link
              to={primaryTo}
              data-testid="cta-primary-btn"
              className="group inline-flex items-center gap-2 rounded-full bg-[#EF2B3B] text-black font-medium px-8 py-4 text-base hover:bg-[#FF4655] transition-all glow-amber-hover"
            >
              {primaryLabel}
              <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <a
              href="https://wa.me/27632393273"
              target="_blank"
              rel="noreferrer"
              data-testid="cta-whatsapp-btn"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 hover:border-[#EF2B3B] hover:text-[#EF2B3B] text-white px-8 py-4 text-base transition-all"
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.5}>
          <div className="mt-16 grid sm:grid-cols-2 gap-6 max-w-2xl">
            <a href="mailto:info@smartcompany.co.za" className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 hover:border-[#EF2B3B]/50 transition-all" data-testid="cta-email-link">
              <div className="h-10 w-10 rounded-full bg-[#EF2B3B]/10 flex items-center justify-center text-[#EF2B3B]">
                <Mail size={18} />
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-500 mb-1">Email</div>
                <div className="text-white group-hover:text-[#EF2B3B] transition-colors">info@smartcompany.co.za</div>
              </div>
            </a>
            <a href="tel:+27632393273" className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 hover:border-[#EF2B3B]/50 transition-all" data-testid="cta-phone-link">
              <div className="h-10 w-10 rounded-full bg-[#EF2B3B]/10 flex items-center justify-center text-[#EF2B3B]">
                <Phone size={18} />
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-zinc-500 mb-1">Phone</div>
                <div className="text-white group-hover:text-[#EF2B3B] transition-colors">063 239 3273</div>
              </div>
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}

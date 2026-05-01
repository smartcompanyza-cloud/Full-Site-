import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import {
  ArrowUpRight,
  MessageCircle,
  Palette,
  Megaphone,
  ShieldCheck,
  Check,
  Zap,
  Clock,
  Tag,
  LifeBuoy,
} from 'lucide-react';
import SplitText from '../components/SplitText';
import FadeUp from '../components/FadeUp';
import CTAStrip from '../components/CTAStrip';

const HERO_IMG =
  'https://static.prod-images.emergentagent.com/jobs/181460bd-50cf-4e24-8bb8-422d5fb0cfe2/images/f7323ca0bd610312f1daf7d5bdaa4a9c2970b0ad9114f3dade3fe3fa75c27870.png';
const ABOUT_IMG =
  'https://images.unsplash.com/photo-1714974528714-1eaf201fa508?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2OTV8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBidXNpbmVzcyUyMG1lZXRpbmd8ZW58MHx8fHwxNzc3NjU0NTY5fDA&ixlib=rb-4.1.0&q=85';
const DESIGN_IMG =
  'https://static.prod-images.emergentagent.com/jobs/181460bd-50cf-4e24-8bb8-422d5fb0cfe2/images/76916870c5f7be016ae2bf09238404eff8110ef053c258868c8edfeb672f5acd.png';
const COMPLIANCE_IMG =
  'https://static.prod-images.emergentagent.com/jobs/181460bd-50cf-4e24-8bb8-422d5fb0cfe2/images/c61799a909a59f0ecdc12e87482baf4411d4636c0e66da39de42e4a488790921.png';

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.1]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative h-[100vh] min-h-[760px] overflow-hidden" data-testid="home-hero">
      <motion.div style={{ y, opacity, scale }} className="absolute inset-0 -z-10">
        <img src={HERO_IMG} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/50 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 via-transparent to-transparent" />
      </motion.div>

      <div className="relative h-full flex flex-col justify-end pb-20 max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] uppercase text-[#FFB300] mb-8"
        >
          <span className="h-px w-12 bg-[#FFB300]" />
          Smart Your Company — South Africa
        </motion.div>

        <h1 className="font-display text-[14vw] sm:text-[10vw] md:text-[8.5vw] leading-[0.86] tracking-[-0.03em] text-white">
          <div className="overflow-hidden">
            <SplitText text="Start Smart." delay={0.2} />
          </div>
          <div className="overflow-hidden">
            <SplitText text="Grow Strong." delay={0.4} />
          </div>
          <div className="overflow-hidden">
            <span className="text-[#FFB300]">
              <SplitText text="Stay Compliant." delay={0.6} />
            </span>
          </div>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-10 max-w-xl text-base md:text-lg text-zinc-400 leading-relaxed"
        >
          We help you register your business, build a powerful brand, and grow your revenue
          through design and marketing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <Link
            to="/contact"
            data-testid="hero-start-btn"
            className="group inline-flex items-center gap-2 rounded-full bg-[#FFB300] text-black font-medium px-8 py-4 text-base hover:bg-[#FFC940] transition-all glow-amber-hover"
          >
            Start Your Business
            <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <a
            href="https://wa.me/27632393273"
            target="_blank"
            rel="noreferrer"
            data-testid="hero-whatsapp-btn"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 hover:border-[#FFB300] hover:text-[#FFB300] text-white px-8 py-4 text-base transition-all"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 1 }}
          className="absolute bottom-8 right-6 lg:right-12 font-mono text-[10px] tracking-[0.3em] uppercase text-zinc-500 hidden md:flex items-center gap-3"
        >
          <span className="h-px w-8 bg-zinc-600" />
          scroll
        </motion.div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="relative py-24 md:py-40 border-t border-white/5" data-testid="home-about">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[1fr_1.2fr] gap-16 items-center">
        <FadeUp>
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10">
            <img src={ABOUT_IMG} alt="Team" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#050505]/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 font-mono text-[10px] tracking-[0.3em] uppercase text-white/80">
              / 01 — Who We Are
            </div>
          </div>
        </FadeUp>

        <div>
          <FadeUp>
            <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#FFB300] mb-6">
              / About Us
            </div>
          </FadeUp>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight text-white">
            <SplitText text="One roof. Every tool your business needs." />
          </h2>
          <FadeUp delay={0.2}>
            <p className="mt-8 text-lg text-zinc-400 leading-relaxed max-w-xl">
              Smart Your Company is a full-service business solutions provider dedicated to
              helping entrepreneurs turn ideas into successful businesses. From company
              registration and compliance to branding and marketing, we provide everything you
              need under one roof.
            </p>
          </FadeUp>
          <FadeUp delay={0.35}>
            <div className="mt-10 grid grid-cols-3 gap-8 max-w-md">
              {[
                { k: '150+', l: 'Businesses launched' },
                { k: '98%', l: 'Compliance rate' },
                { k: '24h', l: 'Avg response' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl md:text-4xl text-[#FFB300]">{s.k}</div>
                  <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-zinc-500 mt-2">{s.l}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    num: '01',
    icon: Palette,
    title: 'Graphic Design',
    text: 'Build a strong and professional brand identity that earns trust and attracts customers.',
    image: DESIGN_IMG,
    to: '/design-marketing',
  },
  {
    num: '02',
    icon: Megaphone,
    title: 'Digital Marketing',
    text: 'Reach the right audience and turn attention into real sales.',
    image: DESIGN_IMG,
    to: '/design-marketing',
  },
  {
    num: '03',
    icon: ShieldCheck,
    title: 'Compliance',
    text: 'Register and manage your business the correct and legal way.',
    image: COMPLIANCE_IMG,
    to: '/compliance',
  },
];

function Services() {
  return (
    <section className="relative py-24 md:py-40 border-t border-white/5" data-testid="home-services">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-10 mb-20">
          <div>
            <FadeUp>
              <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#FFB300] mb-6">
                / What We Do
              </div>
            </FadeUp>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight text-white">
              <SplitText text="Services built to launch and scale." />
            </h2>
          </div>
          <FadeUp delay={0.2}>
            <p className="text-zinc-400 text-lg leading-relaxed lg:mt-2 self-end">
              Three disciplines. One outcome — a business that looks great, runs legally and
              actually sells.
            </p>
          </FadeUp>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <FadeUp key={s.title} delay={i * 0.1}>
              <Link
                to={s.to}
                data-testid={`service-card-${s.title.toLowerCase().replace(' ', '-')}`}
                className="group relative block rounded-2xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-[#FFB300]/60 transition-all h-full"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-[900ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0E] to-transparent" />
                  <div className="absolute top-5 left-5 font-mono text-[11px] tracking-[0.3em] text-[#FFB300]">
                    / {s.num}
                  </div>
                  <div className="absolute top-5 right-5 h-10 w-10 rounded-full bg-black/50 backdrop-blur border border-white/10 flex items-center justify-center text-[#FFB300]">
                    <s.icon size={18} />
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl md:text-3xl text-white tracking-tight mb-3 group-hover:text-[#FFB300] transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">{s.text}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-[#FFB300] font-mono text-[11px] tracking-[0.22em] uppercase">
                    Explore
                    <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  {
    n: '01',
    title: 'Register your business',
    text: 'We handle CIPC registration, name reservation and director structuring — fast and by the book.',
  },
  {
    n: '02',
    title: 'Build your brand',
    text: 'A professional logo, brand kit and guidelines so you show up like a market leader from day one.',
  },
  {
    n: '03',
    title: 'Grow your business',
    text: 'Social, paid ads and funnels that turn attention into paying customers, month after month.',
  },
];

function HowItWorks() {
  return (
    <section className="relative py-24 md:py-40 border-t border-white/5 overflow-hidden" data-testid="home-how">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#FFB300]/5 blur-[160px] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <FadeUp>
          <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#FFB300] mb-6">
            / Process
          </div>
        </FadeUp>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight text-white max-w-3xl">
          <SplitText text="How it works." />
        </h2>

        <div className="mt-20 grid md:grid-cols-3 gap-8 md:gap-4">
          {steps.map((s, i) => (
            <FadeUp key={s.n} delay={i * 0.15}>
              <div className="relative pt-8">
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#FFB300]/60 via-white/10 to-transparent" />
                <div className="flex items-baseline gap-4 mb-6">
                  <div className="font-display text-6xl md:text-7xl text-[#FFB300]/30 leading-none">
                    {s.n}
                  </div>
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-white mb-4 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm max-w-xs">{s.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { icon: Check, title: 'All-in-one business solution', text: 'Registration, branding, marketing — one team, one invoice, zero handoffs.' },
  { icon: Zap, title: 'Fast and reliable service', text: 'Clear timelines, fast turnaround and relentless follow-through. No guessing.' },
  { icon: Tag, title: 'Affordable packages', text: 'Tiered plans that match your stage — no upfront heavyweight commitment.' },
  { icon: LifeBuoy, title: 'Ongoing support', text: 'Annual returns, updates and advice — we stay in your corner after launch.' },
];

function WhyUs() {
  return (
    <section className="relative py-24 md:py-40 border-t border-white/5" data-testid="home-why">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16">
          <div>
            <FadeUp>
              <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#FFB300] mb-6">
                / Why choose us
              </div>
            </FadeUp>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight text-white">
              <SplitText text="Built for founders who refuse to play small." />
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((r, i) => (
              <FadeUp key={r.title} delay={i * 0.08}>
                <div className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 h-full hover:border-[#FFB300]/50 hover:bg-white/[0.04] transition-all">
                  <div className="h-11 w-11 rounded-full bg-[#FFB300]/10 flex items-center justify-center text-[#FFB300] mb-6 group-hover:bg-[#FFB300] group-hover:text-black transition-colors">
                    <r.icon size={18} />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-white mb-3 tracking-tight">{r.title}</h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">{r.text}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const packages = [
  {
    name: 'Starter',
    tagline: 'Perfect for new businesses',
    features: ['Company registration', 'Basic logo & brand mark', 'Social media setup', 'Launch checklist'],
    featured: false,
  },
  {
    name: 'Growth',
    tagline: 'For businesses ready to scale',
    features: ['Everything in Starter', 'Full brand identity kit', 'Paid ad campaign setup', 'Monthly support'],
    featured: true,
  },
  {
    name: 'Scale',
    tagline: 'Full business setup and expansion',
    features: ['Everything in Growth', 'Motion graphics + promo', 'Funnels & conversion audit', 'Priority compliance'],
    featured: false,
  },
];

function Packages() {
  return (
    <section className="relative py-24 md:py-40 border-t border-white/5" data-testid="home-packages">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div>
            <FadeUp>
              <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#FFB300] mb-6">
                / Packages
              </div>
            </FadeUp>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight text-white max-w-3xl">
              <SplitText text="Pick your stage. We'll handle the rest." />
            </h2>
          </div>
          <FadeUp delay={0.2}>
            <Link
              to="/contact"
              data-testid="packages-quote-btn"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 hover:border-[#FFB300] hover:text-[#FFB300] text-white px-6 py-3 text-sm transition-all"
            >
              Get a quote
              <ArrowUpRight size={16} />
            </Link>
          </FadeUp>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((p, i) => (
            <FadeUp key={p.name} delay={i * 0.1}>
              <div
                data-testid={`package-card-${p.name.toLowerCase()}`}
                className={`relative rounded-2xl p-8 h-full transition-all ${
                  p.featured
                    ? 'bg-gradient-to-b from-[#FFB300]/10 to-transparent border border-[#FFB300]/40 glow-amber'
                    : 'bg-white/[0.02] border border-white/10 hover:border-white/20'
                }`}
              >
                {p.featured && (
                  <div className="absolute -top-3 left-6 inline-flex items-center rounded-full bg-[#FFB300] text-black font-mono text-[10px] tracking-[0.22em] uppercase px-3 py-1">
                    Most popular
                  </div>
                )}
                <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-zinc-500 mb-4">
                  / 0{i + 1}
                </div>
                <h3 className="font-display text-4xl md:text-5xl text-white tracking-tight">{p.name}</h3>
                <p className="mt-3 text-zinc-400">{p.tagline}</p>
                <div className="mt-8 h-px bg-white/10" />
                <ul className="mt-8 space-y-4">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-zinc-300">
                      <Check size={16} className={p.featured ? 'text-[#FFB300] mt-1' : 'text-zinc-500 mt-1'} />
                      <span className="text-sm leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-10 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm transition-all w-full justify-center ${
                    p.featured
                      ? 'bg-[#FFB300] text-black hover:bg-[#FFC940]'
                      : 'border border-white/15 text-white hover:border-[#FFB300] hover:text-[#FFB300]'
                  }`}
                  data-testid={`package-cta-${p.name.toLowerCase()}`}
                >
                  Choose {p.name}
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <WhyUs />
      <Packages />
      <CTAStrip />
    </>
  );
}

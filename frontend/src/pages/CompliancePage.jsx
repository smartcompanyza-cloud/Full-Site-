import {
  Building2,
  Landmark,
  BadgeCheck,
  RefreshCw,
  Check,
  Scale,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import FadeUp from '../components/FadeUp';
import SplitText from '../components/SplitText';
import CTAStrip from '../components/CTAStrip';

const HERO_IMG =
  'https://static.prod-images.emergentagent.com/jobs/181460bd-50cf-4e24-8bb8-422d5fb0cfe2/images/c61799a909a59f0ecdc12e87482baf4411d4636c0e66da39de42e4a488790921.png';

const pillars = [
  {
    num: '01',
    title: 'Business Registration',
    icon: Building2,
    items: ['Company registration', 'Name reservation', 'Director structuring'],
  },
  {
    num: '02',
    title: 'Tax and Legal',
    icon: Landmark,
    items: ['SARS registration', 'VAT registration', 'Tax clearance certificates'],
  },
  {
    num: '03',
    title: 'B-BBEE Services',
    icon: BadgeCheck,
    items: ['Affidavits', 'Certification support'],
  },
  {
    num: '04',
    title: 'Ongoing Compliance',
    icon: RefreshCw,
    items: ['Annual returns', 'Tax filings', 'Business updates'],
  },
];

export default function CompliancePage() {
  return (
    <>
      <PageHero
        eyebrow="Compliance"
        title="Start and Run Your Business the Right Way."
        subtitle="Registration, tax and ongoing compliance — handled correctly, on time, and stress-free so you can focus on building."
        image={HERO_IMG}
      />

      <section className="relative py-24 md:py-36 border-t border-white/5" data-testid="compliance-pillars">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeUp>
            <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#FFB300] mb-6">
              / Our Compliance Services
            </div>
          </FadeUp>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight text-white max-w-4xl mb-20">
            <SplitText text="Four pillars. Zero grey areas." />
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {pillars.map((p, i) => (
              <FadeUp key={p.num} delay={(i % 2) * 0.1}>
                <div
                  className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-8 h-full hover:border-[#FFB300]/60 transition-all overflow-hidden"
                  data-testid={`compliance-pillar-${p.num}`}
                >
                  <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[#FFB300]/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative flex items-start justify-between mb-8">
                    <div className="h-12 w-12 rounded-full bg-[#FFB300]/10 flex items-center justify-center text-[#FFB300] group-hover:bg-[#FFB300] group-hover:text-black transition-colors">
                      <p.icon size={20} />
                    </div>
                    <div className="font-display text-5xl text-white/5 leading-none">{p.num}</div>
                  </div>
                  <h3 className="relative font-display text-3xl text-white tracking-tight mb-6">
                    {p.title}
                  </h3>
                  <ul className="relative space-y-3">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-start gap-3 text-zinc-300">
                        <Check size={14} className="mt-1.5 text-[#FFB300]/80 flex-shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-28 md:py-40 border-t border-white/5 overflow-hidden" data-testid="compliance-why">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#FFB300]/10 blur-[180px] pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <FadeUp>
            <div className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] uppercase text-[#FFB300] mb-8">
              <Scale size={14} />
              Why compliance matters
            </div>
          </FadeUp>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-tight text-white">
            <SplitText text="A compliant business builds trust, avoids penalties, and unlocks opportunities like funding and tenders." />
          </h2>
        </div>
      </section>

      <CTAStrip
        eyebrow="Register now"
        title="Register your company today."
        primaryLabel="Start Now"
        primaryTo="/contact"
      />
    </>
  );
}

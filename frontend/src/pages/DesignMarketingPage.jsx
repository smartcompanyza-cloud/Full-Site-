import { motion } from 'framer-motion';
import {
  Sparkles,
  Palette,
  Film,
  Megaphone,
  Target,
  Rocket,
  Check,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import FadeUp from '../components/FadeUp';
import SplitText from '../components/SplitText';
import CTAStrip from '../components/CTAStrip';
import Slideshow from '../components/Slideshow';
import BackgroundFX from '../components/BackgroundFX';
import {
  LogoCard, LOGO_ITEMS,
  LetterheadCard, LETTERHEAD_ITEMS,
  BusinessCardMock, BUSINESS_CARD_ITEMS,
  SocialPostMock, SOCIAL_POST_ITEMS,
  AdCreativeMock, AD_ITEMS,
} from '../components/PortfolioMocks';

const HERO_IMG =
  'https://static.prod-images.emergentagent.com/jobs/181460bd-50cf-4e24-8bb8-422d5fb0cfe2/images/76916870c5f7be016ae2bf09238404eff8110ef053c258868c8edfeb672f5acd.png';
const WORKSPACE =
  'https://images.pexels.com/photos/16284690/pexels-photo-16284690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

const blocks = [
  {
    section: 'Graphic Design',
    num: '01',
    icon: Palette,
    color: '#EF2B3B',
    groups: [
      {
        title: 'Branding',
        items: ['Logo design (full system)', 'Brand identity kits', 'Brand guidelines', 'Business naming and slogans'],
      },
      {
        title: 'Marketing Design',
        items: ['Social media graphics', 'Ad creatives', 'Flyers and posters'],
      },
      {
        title: 'Motion Graphics',
        items: ['Logo animations', 'Promo videos', 'Social media animations'],
        icon: Film,
      },
    ],
  },
  {
    section: 'Digital Marketing',
    num: '02',
    icon: Megaphone,
    color: '#EF2B3B',
    groups: [
      {
        title: 'Social Media',
        items: ['Account setup', 'Content creation', 'Posting and engagement'],
      },
      {
        title: 'Paid Advertising',
        items: ['Facebook and Instagram Ads', 'Google Ads', 'Retargeting campaigns'],
        icon: Target,
      },
      {
        title: 'Strategy and Growth',
        items: ['Sales funnels', 'Audience targeting', 'Conversion optimization'],
        icon: Rocket,
      },
    ],
  },
];

export default function DesignMarketingPage() {
  return (
    <>
      <PageHero
        eyebrow="Design & Marketing"
        title="Design That Builds Trust. Marketing That Drives Sales."
        subtitle="A premium brand attracts attention. Strategic marketing turns that attention into customers who pay, stay and refer."
        image={HERO_IMG}
      />

      {blocks.map((block, bi) => (
        <section
          key={block.section}
          className="relative py-24 md:py-36 border-t border-white/5 overflow-hidden"
          data-testid={`dm-section-${bi}`}
        >
          <BackgroundFX variant={bi === 0 ? 'orbs' : 'grid'} />
          <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
              <div>
                <FadeUp>
                  <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#EF2B3B] mb-6">
                    / {block.num} — Service
                  </div>
                </FadeUp>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight text-white">
                  <SplitText text={block.section} />
                </h2>
              </div>
              <FadeUp delay={0.2}>
                <div className="h-16 w-16 rounded-full bg-[#EF2B3B]/10 border border-[#EF2B3B]/20 flex items-center justify-center text-[#EF2B3B]">
                  <block.icon size={24} />
                </div>
              </FadeUp>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {block.groups.map((g, i) => {
                const GIcon = g.icon || Sparkles;
                return (
                  <FadeUp key={g.title} delay={i * 0.1}>
                    <div
                      className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-7 h-full hover:border-[#EF2B3B]/60 hover:bg-white/[0.04] transition-all"
                      data-testid={`dm-card-${bi}-${i}`}
                    >
                      <div className="flex items-start justify-between mb-6">
                        <div className="h-11 w-11 rounded-full bg-[#EF2B3B]/10 flex items-center justify-center text-[#EF2B3B] group-hover:bg-[#EF2B3B] group-hover:text-black transition-colors">
                          <GIcon size={18} />
                        </div>
                        <div className="font-mono text-[10px] tracking-[0.3em] text-zinc-600">
                          0{i + 1}
                        </div>
                      </div>
                      <h3 className="font-display text-2xl text-white tracking-tight mb-5">{g.title}</h3>
                      <ul className="space-y-3">
                        {g.items.map((it) => (
                          <li key={it} className="flex items-start gap-3 text-sm text-zinc-300">
                            <Check size={14} className="mt-1 text-[#EF2B3B]/80 flex-shrink-0" />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </FadeUp>
                );
              })}
            </div>

            {/* Category slideshows */}
            {bi === 0 && (
              <div className="mt-24 space-y-20">
                <FadeUp>
                  <Slideshow
                    items={LOGO_ITEMS}
                    renderItem={(b) => <LogoCard brand={b} />}
                    eyebrow="Branding · Logo systems"
                    title="Marks that earn trust at a glance."
                    testId="dm-slideshow-logos"
                  />
                </FadeUp>
                <FadeUp>
                  <Slideshow
                    items={LETTERHEAD_ITEMS}
                    renderItem={(b) => <LetterheadCard brand={b} />}
                    eyebrow="Branding · Stationery"
                    title="Letterheads that look official, never boring."
                    testId="dm-slideshow-letterheads"
                  />
                </FadeUp>
                <FadeUp>
                  <Slideshow
                    items={BUSINESS_CARD_ITEMS}
                    renderItem={(b) => <BusinessCardMock brand={b} />}
                    eyebrow="Branding · Collateral"
                    title="Business cards worth keeping."
                    testId="dm-slideshow-cards"
                  />
                </FadeUp>
              </div>
            )}

            {bi === 1 && (
              <div className="mt-24 space-y-20">
                <FadeUp>
                  <Slideshow
                    items={SOCIAL_POST_ITEMS}
                    renderItem={(p) => <SocialPostMock post={p} />}
                    eyebrow="Social Media · Content"
                    title="Scroll-stopping posts, on brand every time."
                    testId="dm-slideshow-social"
                  />
                </FadeUp>
                <FadeUp>
                  <Slideshow
                    items={AD_ITEMS}
                    renderItem={(a) => <AdCreativeMock ad={a} />}
                    eyebrow="Paid Advertising · Creatives"
                    title="Ad creatives engineered to convert."
                    testId="dm-slideshow-ads"
                  />
                </FadeUp>
              </div>
            )}
          </div>
        </section>
      ))}

      <section className="relative py-24 md:py-36 border-t border-white/5" data-testid="dm-why-matters">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-[1.1fr_1fr] gap-16 items-center">
          <FadeUp>
            <div className="relative aspect-[5/4] rounded-2xl overflow-hidden border border-white/10">
              <img src={WORKSPACE} alt="Creative workspace" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#050505]/70 to-transparent" />
              <div className="absolute bottom-6 left-6 font-mono text-[10px] tracking-[0.3em] uppercase text-white/80">
                / Why this matters
              </div>
            </div>
          </FadeUp>
          <div>
            <FadeUp>
              <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#EF2B3B] mb-6">
                / The outcome
              </div>
            </FadeUp>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[0.95] tracking-tight text-white">
              <SplitText text="A strong brand attracts attention. Marketing turns it into customers." />
            </h2>
          </div>
        </div>
      </section>

      <CTAStrip
        eyebrow="Let's build"
        title="Build your brand and grow your business today."
        primaryLabel="Get Started"
        primaryTo="/contact"
      />
    </>
  );
}

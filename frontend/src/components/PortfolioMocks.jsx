/* eslint-disable react/no-unknown-property */
// Mock visual portfolio assets — fully CSS/SVG-based so every display is crisp & original.

const RED = '#EF2B3B';

// ---------- LOGO MOCKS ----------
export function Logo({ brand, style }) {
  const styles = {
    monogram: (
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="h-20 w-20 rounded-full border-2 border-current flex items-center justify-center">
          <span className="font-display text-3xl leading-none">{brand.initials}</span>
        </div>
        <span className="font-mono text-[10px] tracking-[0.4em] uppercase">{brand.name}</span>
      </div>
    ),
    wordmark: (
      <div className="flex flex-col items-center gap-1">
        <span className="font-display text-4xl tracking-[-0.04em] leading-none">{brand.name}</span>
        <span className="font-mono text-[9px] tracking-[0.5em] uppercase opacity-60">
          {brand.tagline}
        </span>
      </div>
    ),
    combo: (
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 40 40" className="h-12 w-12">
          <circle cx="20" cy="20" r="18" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M12 24 L20 12 L28 24 Z" fill="currentColor" />
        </svg>
        <div className="flex flex-col">
          <span className="font-display text-2xl leading-none tracking-tight">{brand.name}</span>
          <span className="font-mono text-[9px] tracking-[0.3em] uppercase opacity-60">
            {brand.tagline}
          </span>
        </div>
      </div>
    ),
    symbol: (
      <div className="flex flex-col items-center gap-3">
        <svg viewBox="0 0 60 60" className="h-16 w-16">
          <rect x="8" y="8" width="44" height="44" rx="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <path d="M20 38 L30 18 L40 38 M24 32 L36 32" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>
        <span className="font-display text-lg tracking-tight">{brand.name}</span>
      </div>
    ),
    stacked: (
      <div className="flex flex-col items-center gap-2">
        <span className="font-display text-5xl leading-none tracking-[-0.05em]">
          {brand.initials}
        </span>
        <div className="h-px w-12 bg-current" />
        <span className="font-mono text-[9px] tracking-[0.4em] uppercase opacity-70">
          {brand.name}
        </span>
      </div>
    ),
  };
  return styles[style] || styles.combo;
}

const brandsA = [
  { name: 'ZANELE CO', initials: 'ZC', tagline: 'Est. 2024', bg: '#0F0F12', fg: '#F5F5F5', style: 'monogram' },
  { name: 'NORTH & PINE', initials: 'N·P', tagline: 'Cape Town', bg: '#F2EBDF', fg: '#2A1F14', style: 'wordmark' },
  { name: 'VELOCITY', initials: 'V', tagline: 'Logistics', bg: RED, fg: '#FFF', style: 'combo' },
  { name: 'AURORA', initials: 'AU', tagline: 'Beauty House', bg: '#1A1A1F', fg: RED, style: 'stacked' },
  { name: 'KASI GRIND', initials: 'KG', tagline: 'Streetwear', bg: '#0A0A0C', fg: '#FFF', style: 'symbol' },
  { name: 'IMBIZO', initials: 'IZ', tagline: 'Coffee · JHB', bg: '#3A1F18', fg: '#F5E6D3', style: 'combo' },
];

export function LogoCard({ brand }) {
  return (
    <div
      className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 flex items-center justify-center p-6"
      style={{ backgroundColor: brand.bg, color: brand.fg }}
    >
      <Logo brand={brand} style={brand.style} />
      <div className="absolute top-4 left-4 font-mono text-[9px] tracking-[0.3em] uppercase opacity-50">
        Logo / {brand.style}
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
        style={{ background: `linear-gradient(to top, ${brand.bg}, transparent)` }}
      />
    </div>
  );
}

export const LOGO_ITEMS = brandsA;

// ---------- LETTERHEAD MOCK ----------
export function LetterheadCard({ brand }) {
  return (
    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-white">
      <div className="h-full p-6 flex flex-col text-[#1A1A1F]">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full" style={{ background: brand.accent || RED }} />
            <span className="font-display text-sm tracking-tight">{brand.name}</span>
          </div>
          <div className="font-mono text-[8px] tracking-[0.3em] uppercase opacity-50">
            01 / 24
          </div>
        </div>
        <div className="mt-6 space-y-1.5">
          <div className="h-1.5 w-16 rounded-full bg-[#1A1A1F]/80" />
          <div className="h-1 w-24 rounded-full bg-[#1A1A1F]/30" />
        </div>
        <div className="mt-6 space-y-1.5 flex-1">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="h-1 rounded-full bg-[#1A1A1F]/10"
              style={{ width: `${70 + ((i * 13) % 30)}%` }}
            />
          ))}
          <div className="h-1 w-1/3 rounded-full bg-[#1A1A1F]/10 mt-3" />
          <div className="h-1 w-2/3 rounded-full bg-[#1A1A1F]/10" />
        </div>
        <div className="mt-6 flex items-end justify-between">
          <div>
            <div className="font-mono text-[8px] tracking-[0.25em] uppercase opacity-60">
              {brand.name}
            </div>
            <div className="font-mono text-[8px] opacity-40 mt-1">
              info@{brand.name.toLowerCase().replace(/\s/g, '')}.co.za
            </div>
          </div>
          <div className="h-8 w-8 rounded-full border-2" style={{ borderColor: brand.accent || RED }} />
        </div>
      </div>
      <div
        className="absolute top-0 left-0 h-1 w-full"
        style={{ background: brand.accent || RED }}
      />
      <div className="absolute top-4 right-4 font-mono text-[9px] tracking-[0.3em] uppercase text-white/60 bg-black/40 backdrop-blur px-2 py-0.5 rounded">
        Letterhead
      </div>
    </div>
  );
}

export const LETTERHEAD_ITEMS = [
  { name: 'Zanele Co', accent: '#0F0F12' },
  { name: 'North & Pine', accent: '#7A5230' },
  { name: 'Velocity', accent: RED },
  { name: 'Aurora', accent: '#C2185B' },
  { name: 'Imbizo Coffee', accent: '#5A2A1A' },
  { name: 'Kasi Grind', accent: '#222' },
];

// ---------- BUSINESS CARD MOCK ----------
export function BusinessCardMock({ brand }) {
  const { front = {}, back = {} } = brand;
  return (
    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#1A1A1F] to-[#0C0C0E] p-5 flex flex-col justify-center items-center gap-4">
      <div
        className="relative w-[85%] aspect-[1.75/1] rounded-md shadow-2xl shadow-black/60 p-4 flex flex-col justify-between rotate-[-4deg]"
        style={{ backgroundColor: front.bg || '#F2EBDF', color: front.fg || '#1A1A1F' }}
      >
        <div className="font-display text-lg leading-none tracking-tight">{brand.name}</div>
        <div>
          <div className="font-mono text-[8px] opacity-70 tracking-[0.2em] uppercase">
            {brand.tagline || 'Founder'}
          </div>
        </div>
      </div>
      <div
        className="relative w-[85%] aspect-[1.75/1] rounded-md shadow-2xl shadow-black/60 p-4 flex items-center justify-between rotate-[3deg]"
        style={{ backgroundColor: back.bg || RED, color: back.fg || '#FFF' }}
      >
        <div className="text-[10px] font-mono">
          <div className="opacity-80">info@{brand.name.toLowerCase().replace(/[^a-z]/g, '')}.co.za</div>
          <div className="opacity-80">+27 63 000 0000</div>
        </div>
        <div className="font-display text-xl">{brand.initials}</div>
      </div>
      <div className="absolute top-4 left-4 font-mono text-[9px] tracking-[0.3em] uppercase text-white/50">
        Business Card
      </div>
    </div>
  );
}

export const BUSINESS_CARD_ITEMS = [
  { name: 'Zanele Co', initials: 'ZC', tagline: 'Creative Director', front: { bg: '#F2EBDF', fg: '#1A1A1F' }, back: { bg: '#0F0F12', fg: '#EF2B3B' } },
  { name: 'Velocity', initials: 'V', tagline: 'Fleet Manager', front: { bg: RED, fg: '#FFF' }, back: { bg: '#0F0F12', fg: '#FFF' } },
  { name: 'Aurora', initials: 'AU', tagline: 'Studio Owner', front: { bg: '#1A1A1F', fg: RED }, back: { bg: '#F5E6E9', fg: '#1A1A1F' } },
  { name: 'North Pine', initials: 'NP', tagline: 'Founder', front: { bg: '#2A1F14', fg: '#F2EBDF' }, back: { bg: '#F2EBDF', fg: '#2A1F14' } },
  { name: 'Imbizo', initials: 'IZ', tagline: 'Barista Chief', front: { bg: '#3A1F18', fg: '#F5E6D3' }, back: { bg: '#F5E6D3', fg: '#3A1F18' } },
];

// ---------- SOCIAL MEDIA POST MOCK ----------
export function SocialPostMock({ post }) {
  return (
    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-[#0C0C0E]">
      <div
        className="absolute inset-0"
        style={{
          background: post.bg ||
            `radial-gradient(circle at 30% 30%, ${RED}55 0%, transparent 50%), linear-gradient(135deg, #1A1A1F 0%, #0C0C0E 100%)`,
        }}
      />
      <div className="relative h-full p-6 flex flex-col justify-between text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full border border-white/30" />
            <div className="text-xs">
              <div className="font-medium">@{post.handle}</div>
              <div className="font-mono text-[9px] opacity-60">Sponsored</div>
            </div>
          </div>
          <div className="font-mono text-[9px] opacity-60">•••</div>
        </div>
        <div>
          <div className="font-mono text-[9px] tracking-[0.3em] uppercase opacity-70 mb-3">
            {post.label}
          </div>
          <h4 className="font-display text-3xl leading-[0.95] tracking-tight mb-4 max-w-xs">
            {post.title}
          </h4>
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium"
            style={{ background: post.accent || RED, color: '#FFF' }}
          >
            {post.cta} →
          </div>
        </div>
        <div className="flex items-center gap-4 text-[10px] font-mono opacity-60">
          <span>♥ {post.likes}</span>
          <span>◌ {post.comments}</span>
          <span>→ {post.shares}</span>
        </div>
      </div>
      <div className="absolute top-3 right-3 font-mono text-[9px] tracking-[0.3em] uppercase text-white/50 bg-black/40 backdrop-blur px-2 py-0.5 rounded">
        Social · {post.platform}
      </div>
    </div>
  );
}

export const SOCIAL_POST_ITEMS = [
  { handle: 'zaneleco', label: 'New Drop', title: 'The brand that earns trust.', cta: 'Shop Now', likes: '2.1k', comments: '84', shares: '312', platform: 'IG', bg: `linear-gradient(135deg, ${RED} 0%, #7A0F1A 100%)` },
  { handle: 'velocity.sa', label: 'Launch', title: 'Fast. Reliable. Everywhere.', cta: 'Get a Quote', likes: '1.4k', comments: '52', shares: '190', platform: 'FB', bg: `radial-gradient(circle at 70% 30%, ${RED}66 0%, transparent 60%), #0A0A0E` },
  { handle: 'aurora.studio', label: 'Book Now', title: 'Beauty rituals, redefined.', cta: 'Reserve', likes: '3.8k', comments: '201', shares: '455', platform: 'IG', bg: `linear-gradient(135deg, #C2185B 0%, #1A1A1F 80%)` },
  { handle: 'imbizo.coffee', label: 'Promo', title: '2 flat whites · R45', cta: 'Find a Store', likes: '1.2k', comments: '41', shares: '98', platform: 'IG', bg: `linear-gradient(135deg, #3A1F18 0%, #1A0E08 100%)` },
  { handle: 'kasigrind', label: 'Limited Drop', title: 'Real streets. Real stories.', cta: 'Cop Now', likes: '5.2k', comments: '310', shares: '820', platform: 'TT', bg: `radial-gradient(circle at 50% 50%, #2A2A2F 0%, #0A0A0C 100%)` },
  { handle: 'northandpine', label: 'Seasonal', title: 'Wood. Stone. Craft.', cta: 'Visit Store', likes: '980', comments: '28', shares: '65', platform: 'FB', bg: `linear-gradient(135deg, #2A1F14 0%, #0A0A0C 100%)` },
];

// ---------- AD CREATIVE MOCK ----------
export function AdCreativeMock({ ad }) {
  return (
    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-[#0C0C0E]">
      <div
        className="absolute inset-0"
        style={{ background: ad.bg || `linear-gradient(135deg, ${RED} 0%, #0A0A0C 100%)` }}
      />
      <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '20px 20px' }} />
      <div className="relative h-full p-6 flex flex-col justify-end text-white">
        <div className="font-mono text-[10px] tracking-[0.35em] uppercase text-white/80 mb-3">
          {ad.eyebrow}
        </div>
        <h4 className="font-display text-4xl md:text-5xl leading-[0.88] tracking-tight mb-4">
          {ad.headline}
        </h4>
        <p className="text-sm text-white/70 mb-5 max-w-[90%]">{ad.sub}</p>
        <div className="flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-xs font-medium">
            {ad.cta} →
          </div>
          <div className="font-mono text-[10px] tracking-[0.3em] text-white/60">
            {ad.brand}
          </div>
        </div>
      </div>
      <div className="absolute top-3 left-3 font-mono text-[9px] tracking-[0.3em] uppercase text-white/60 bg-black/40 backdrop-blur px-2 py-0.5 rounded">
        {ad.platform} · Ad
      </div>
    </div>
  );
}

export const AD_ITEMS = [
  { eyebrow: '50% Off · This week', headline: 'Launch your brand in 7 days.', sub: 'Full identity kit, delivered.', cta: 'Get Started', brand: 'SMART YOUR CO', platform: 'Meta', bg: `linear-gradient(135deg, ${RED} 0%, #7A0F1A 100%)` },
  { eyebrow: 'Now Hiring', headline: 'Founders wanted.', sub: 'Register · Brand · Grow.', cta: 'Apply Now', brand: 'ZANELE CO', platform: 'Google', bg: `linear-gradient(135deg, #0A0A0C 0%, #2A1F14 100%)` },
  { eyebrow: 'Flash Promo', headline: 'R999 company setup.', sub: 'CIPC-certified. SARS-ready.', cta: 'Book Call', brand: 'VELOCITY', platform: 'Meta', bg: `linear-gradient(135deg, #1A1A1F 0%, ${RED}88 100%)` },
  { eyebrow: 'Grand Opening', headline: 'Open your doors louder.', sub: 'Full launch campaign in a week.', cta: 'See Packages', brand: 'AURORA', platform: 'TikTok', bg: `radial-gradient(circle at 30% 70%, #C2185B 0%, #1A1A1F 80%)` },
  { eyebrow: 'Retargeting', headline: 'Still thinking about it?', sub: 'Book a free 15-min strategy call.', cta: 'Claim Slot', brand: 'IMBIZO', platform: 'Google', bg: `linear-gradient(135deg, #3A1F18 0%, #0A0A0C 100%)` },
];

// ---------- CERTIFICATE / COMPLIANCE DOC MOCK ----------
export function CertificateMock({ cert }) {
  return (
    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#F5F1E8] to-[#EDE5D3]">
      <div className="h-full p-6 flex flex-col text-[#1A1A1F]">
        <div className="flex items-center justify-between border-b border-[#1A1A1F]/20 pb-3">
          <div className="flex items-center gap-2">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path d="M12 2 L3 6 V12 C3 17 7 21 12 22 C17 21 21 17 21 12 V6 L12 2 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <path d="M8 12 L11 15 L16 10" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
            <div className="font-display text-sm tracking-tight">{cert.authority}</div>
          </div>
          <div className="font-mono text-[8px] tracking-[0.25em] uppercase opacity-60">
            {cert.ref}
          </div>
        </div>

        <div className="mt-5 flex-1 flex flex-col items-center text-center justify-center">
          <div className="font-mono text-[9px] tracking-[0.35em] uppercase opacity-60 mb-3">
            {cert.type}
          </div>
          <h4 className="font-display text-2xl md:text-3xl leading-[0.95] tracking-tight mb-4">
            {cert.title}
          </h4>
          <div className="h-px w-12 bg-[#1A1A1F]/30 mb-4" />
          <p className="text-xs opacity-70 max-w-[85%]">
            This is to certify that {cert.company} has satisfied the requirements of the {cert.clause}.
          </p>
        </div>

        <div className="flex items-end justify-between pt-3 border-t border-[#1A1A1F]/20">
          <div>
            <div className="font-mono text-[8px] tracking-[0.25em] uppercase opacity-60">Issued</div>
            <div className="font-mono text-[9px] mt-1">{cert.date}</div>
          </div>
          <div className="relative">
            <div
              className="h-14 w-14 rounded-full border-2 flex items-center justify-center"
              style={{ borderColor: cert.seal || RED, color: cert.seal || RED }}
            >
              <span className="font-mono text-[8px] tracking-[0.15em] uppercase">Seal</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-3 right-3 font-mono text-[9px] tracking-[0.3em] uppercase text-[#1A1A1F]/60 bg-white/60 backdrop-blur px-2 py-0.5 rounded">
        {cert.docType}
      </div>
    </div>
  );
}

export const CERT_ITEMS = [
  { authority: 'CIPC', ref: 'K2024/12345/07', type: 'Company Registration', title: 'Certificate of Incorporation', company: 'Zanele Co (Pty) Ltd', clause: 'Companies Act, 2008', date: '12 Mar 2024', docType: 'CoR 14.3', seal: RED },
  { authority: 'SARS', ref: 'VAT 4820/2024', type: 'Tax Registration', title: 'VAT Registration', company: 'Velocity Logistics', clause: 'VAT Act, 1991', date: '28 Jan 2024', docType: 'VAT 103', seal: '#0F4C81' },
  { authority: 'SARS', ref: 'TCS 0091/2024', type: 'Tax Compliance', title: 'Tax Clearance Status', company: 'Aurora Studio', clause: 'Tax Administration Act', date: '04 Feb 2024', docType: 'TCS PIN', seal: '#0F4C81' },
  { authority: 'B-BBEE Commission', ref: 'EME 2024/055', type: 'Broad-Based BEE', title: 'BEE Affidavit — Level 1', company: 'Kasi Grind', clause: 'B-BBEE Act, 2013', date: '19 Feb 2024', docType: 'Affidavit', seal: '#2A5D3A' },
  { authority: 'CIPC', ref: 'AR 2024/991', type: 'Annual Returns', title: 'Annual Return Filed', company: 'North & Pine', clause: 'Companies Regulation 30', date: '08 Apr 2024', docType: 'CoR 30.1', seal: RED },
  { authority: 'CIPC', ref: 'NM 00234/2024', type: 'Name Reservation', title: 'Name Reservation Approved', company: 'Imbizo Coffee', clause: 'Section 12', date: '01 Feb 2024', docType: 'CoR 9.4', seal: RED },
];

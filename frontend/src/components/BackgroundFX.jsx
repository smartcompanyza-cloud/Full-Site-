import { motion } from 'framer-motion';

// Reusable decorative background for sections.
// variant: "grid" | "orbs" | "rays" | "dots" | "wave"
export default function BackgroundFX({ variant = 'grid', color = '#EF2B3B', className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`} aria-hidden>
      {variant === 'grid' && (
        <>
          <svg className="absolute inset-0 h-full w-full opacity-[0.08]">
            <defs>
              <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#ffffff" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
          <div
            className="absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full blur-[140px] opacity-25"
            style={{ background: color }}
          />
        </>
      )}
      {variant === 'orbs' && (
        <>
          <motion.div
            className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full blur-[140px]"
            style={{ background: `${color}33` }}
            animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute -bottom-40 -right-32 h-[520px] w-[520px] rounded-full blur-[160px]"
            style={{ background: `${color}22` }}
            animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent" />
        </>
      )}
      {variant === 'rays' && (
        <div className="absolute inset-0">
          <svg className="h-full w-full opacity-[0.06]" preserveAspectRatio="none">
            {Array.from({ length: 24 }).map((_, i) => (
              <line
                key={i}
                x1="50%"
                y1="50%"
                x2={`${50 + Math.cos((i * Math.PI) / 12) * 90}%`}
                y2={`${50 + Math.sin((i * Math.PI) / 12) * 90}%`}
                stroke="#ffffff"
                strokeWidth="0.5"
              />
            ))}
          </svg>
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full blur-[180px]"
            style={{ background: `${color}26` }}
          />
        </div>
      )}
      {variant === 'dots' && (
        <>
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.25) 1px, transparent 0)',
              backgroundSize: '26px 26px',
              maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `radial-gradient(circle at 20% 50%, ${color}14, transparent 45%), radial-gradient(circle at 80% 80%, ${color}0d, transparent 40%)`,
            }}
          />
        </>
      )}
      {variant === 'wave' && (
        <>
          <svg className="absolute bottom-0 left-0 w-full opacity-[0.1]" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill={color}
              d="M0,192L60,181.3C120,171,240,149,360,160C480,171,600,213,720,213.3C840,213,960,171,1080,165.3C1200,160,1320,192,1380,208L1440,224L1440,320L0,320Z"
            />
          </svg>
          <div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[400px] w-[800px] rounded-full blur-[160px] opacity-20"
            style={{ background: color }}
          />
        </>
      )}
    </div>
  );
}

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import SplitText from './SplitText';
import FadeUp from './FadeUp';

export default function PageHero({ eyebrow, title, subtitle, image }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section ref={ref} className="relative min-h-[80vh] pt-32 pb-20 overflow-hidden" data-testid="page-hero">
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <img src={image} alt="" className="w-full h-full object-cover mask-fade-b" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-[#050505]/60 to-[#050505]" />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        <FadeUp>
          <div className="flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] uppercase text-[#FFB300] mb-8">
            <span className="h-px w-10 bg-[#FFB300]" />
            {eyebrow}
          </div>
        </FadeUp>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[8vw] leading-[0.88] tracking-tighter text-white max-w-6xl">
          <SplitText text={title} />
        </h1>

        {subtitle && (
          <FadeUp delay={0.4}>
            <p className="mt-10 text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </FadeUp>
        )}
      </div>
    </section>
  );
}

import { useEffect, useCallback, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Slideshow({
  items,
  renderItem,
  eyebrow,
  title,
  autoplayMs = 3800,
  slideClass = 'basis-[80%] sm:basis-[55%] md:basis-[38%] lg:basis-[30%]',
  testId = 'slideshow',
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
    dragFree: false,
  });
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setCount(emblaApi.scrollSnapList().length);
    const onSelect = () => setIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || !autoplayMs) return;
    const id = setInterval(() => {
      if (!document.hidden) emblaApi.scrollNext();
    }, autoplayMs);
    return () => clearInterval(id);
  }, [emblaApi, autoplayMs]);

  return (
    <div className="relative" data-testid={testId}>
      {(eyebrow || title) && (
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            {eyebrow && (
              <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-[#EF2B3B] mb-4">
                / {eyebrow}
              </div>
            )}
            {title && (
              <h3 className="font-display text-3xl md:text-4xl text-white tracking-tight max-w-2xl">
                {title}
              </h3>
            )}
          </div>
          <div className="flex items-center gap-3">
            <div className="font-mono text-[10px] tracking-[0.25em] text-zinc-500">
              {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
            </div>
            <button
              onClick={scrollPrev}
              aria-label="Previous"
              data-testid={`${testId}-prev`}
              className="h-11 w-11 rounded-full border border-white/15 text-white hover:border-[#EF2B3B] hover:text-[#EF2B3B] flex items-center justify-center transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next"
              data-testid={`${testId}-next`}
              className="h-11 w-11 rounded-full border border-white/15 text-white hover:border-[#EF2B3B] hover:text-[#EF2B3B] flex items-center justify-center transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      )}

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5 pr-5">
          {items.map((item, i) => (
            <motion.div
              key={i}
              className={`shrink-0 ${slideClass}`}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            >
              {renderItem(item, i)}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center gap-1.5">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
            className={`h-0.5 transition-all ${i === index ? 'w-10 bg-[#EF2B3B]' : 'w-5 bg-white/15'}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import BotanicalDecoration from "./BotanicalDecoration";

export default function StoryChapter() {
  return (
    <section className="relative overflow-hidden bg-cream-50 py-20 sm:py-24">
      <BotanicalDecoration
        variant="vine"
        color="#9AAE8E"
        opacity={0.22}
        className="absolute -right-4 top-10 hidden h-80 w-44 lg:block"
      />

      <div className="relative mx-auto max-w-[1380px] px-[5vw]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[55%_45%] lg:gap-16">
          <ScrollReveal variant="left" durationMs={800} className="relative -mx-[5vw] lg:-ml-[5vw] lg:mr-0">
            <div
              className="relative h-[320px] w-full overflow-hidden sm:h-[420px] lg:h-[520px]"
              style={{ clipPath: "ellipse(100% 92% at 50% 8%)" }}
            >
              <Image
                src="/images/about-story-beginning.jpg"
                alt="Hands pouring dried botanicals into a ceramic bowl beside glass jars of loose herbs"
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                loading="lazy"
                className="object-cover object-[30%_center]"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal variant="right" delayMs={120} className="lg:pr-10">
            <span className="eyebrow text-gold-500">The Beginning</span>
            <span className="mt-2 block h-[2px] w-12 bg-gold-400" aria-hidden="true" />
            <p className="mt-6 max-w-md text-lg leading-relaxed text-forest-500 sm:text-xl">
              Sacra Terra began with a simple belief: that the plants growing
              quietly in fields, hedgerows, and gardens hold a kind of
              medicine that modern life has largely forgotten. We set out to
              bring that medicine back to the table, one cup at a time.
            </p>
            <div className="mt-8 flex items-center gap-3 text-gold-400" aria-hidden="true">
              <span className="h-px w-10 bg-gold-200" />
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.2}>
                <path d="M12 21s-7-4.5-7-10a7 7 0 0 1 14 0c0 5.5-7 10-7 10Z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="h-px w-10 bg-gold-200" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import BotanicalDecoration from "./BotanicalDecoration";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-cream-50 pb-16 pt-14 sm:pb-20 sm:pt-16 lg:flex lg:h-[760px] lg:items-center lg:pb-0 lg:pt-0">
      <BotanicalDecoration
        variant="sprig"
        color="#B0924C"
        opacity={0.16}
        className="absolute -left-6 top-24 hidden h-72 w-40 lg:block"
      />
      <div
        aria-hidden="true"
        className="absolute left-[6vw] top-12 hidden h-64 w-64 rounded-full bg-gold-100/40 blur-2xl lg:block"
      />

      {/* Desktop: image bleeds to the viewport edge behind the text */}
      <ScrollReveal
        variant="scale"
        delayMs={120}
        durationMs={900}
        className="absolute inset-y-0 right-0 hidden w-[56%] lg:block"
      >
        <div
          className="relative h-full w-full"
          style={{ clipPath: "ellipse(75% 100% at 100% 50%)" }}
        >
          <Image
            src="/images/about-hero.jpg"
            alt="A ceramic cup of steeped herbal tea on a saucer, surrounded by dried chamomile and lavender on a linen cloth"
            fill
            priority
            sizes="56vw"
            className="object-cover object-[68%_center]"
          />
        </div>
      </ScrollReveal>

      <div className="relative mx-auto w-full max-w-[1380px] px-[5vw]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[46%_54%] lg:gap-0">
          <div className="relative z-10 max-w-[560px] lg:pr-12">
            <ScrollReveal variant="up">
              <span className="eyebrow text-gold-500">Our Story</span>
              <span className="mt-2 block h-[2px] w-12 bg-gold-400" aria-hidden="true" />
            </ScrollReveal>

            <ScrollReveal variant="up" delayMs={90}>
              <h1 className="mt-6 font-serif text-[46px] font-semibold leading-[0.98] text-forest sm:text-6xl lg:text-[70px]">
                Rooted in the earth.
                <br />
                <span className="italic font-medium text-forest-500">Blended with intention.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal variant="up" delayMs={180}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-forest-500 sm:text-xl">
                Sacra Terra brings the wisdom of plants back to the table with
                small-batch herbal blends made from whole botanicals and
                blended with care.
              </p>
            </ScrollReveal>

            <ScrollReveal variant="up" delayMs={260}>
              <Link href="/products" className="btn-secondary group mt-8 inline-flex">
                Explore Our Teas
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                >
                  →
                </span>
              </Link>
            </ScrollReveal>
          </div>

          {/* Mobile and tablet: simple full-width image below the copy */}
          <ScrollReveal variant="scale" delayMs={120} durationMs={900} className="relative lg:hidden">
            <div className="relative h-[340px] w-full overflow-hidden sm:h-[460px]">
              <Image
                src="/images/about-hero.jpg"
                alt="A ceramic cup of steeped herbal tea on a saucer, surrounded by dried chamomile and lavender on a linen cloth"
                fill
                sizes="100vw"
                className="object-cover object-[68%_center]"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

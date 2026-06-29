import Image from "next/image";
import { Leaf } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import BotanicalDecoration from "./BotanicalDecoration";

export default function FounderSection() {
  return (
    <section className="relative overflow-hidden bg-cream-100 py-20 sm:py-24">
      <BotanicalDecoration
        variant="sprig"
        color="#9AAE8E"
        opacity={0.2}
        className="absolute -right-6 bottom-10 hidden h-72 w-40 lg:block"
      />

      <div className="relative mx-auto max-w-[1380px] px-[5vw]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[48%_52%] lg:gap-16">
          <ScrollReveal variant="left" durationMs={800} className="relative -mx-[5vw] lg:mx-0">
            <div
              className="relative h-[340px] w-full overflow-hidden sm:h-[440px] lg:h-[540px]"
              style={{ clipPath: "ellipse(100% 94% at 50% 50%)" }}
            >
              <Image
                src="/images/about-founder.jpg"
                alt="A member of the Sacra Terra family sorting dried herbs by hand at a wooden table"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                loading="lazy"
                className="object-cover"
              />
            </div>
          </ScrollReveal>

          <ScrollReveal variant="right" delayMs={120} className="lg:pl-6">
            <span className="eyebrow text-gold-500">Founded with Heart</span>
            <span className="mt-2 block h-[2px] w-12 bg-gold-400" aria-hidden="true" />
            <h2 className="mt-5 font-serif text-3xl font-semibold text-forest sm:text-4xl">
              Made by people who care.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-forest-500">
              Sacra Terra is a small, family-run tea company rooted in a love
              for plants, people, and the planet. We work directly with small
              growers who share our commitment to organic, sustainable
              cultivation, and we package every order with care, using
              compostable and recyclable materials wherever possible.
            </p>
            <ScrollReveal variant="up" delayMs={260} className="mt-8 flex items-center gap-3">
              <Leaf className="h-4 w-4 text-gold-400" strokeWidth={1.4} aria-hidden="true" />
              <p className="font-serif text-lg italic text-forest-600">
                With gratitude,
                <br />
                The Sacra Terra Family
              </p>
            </ScrollReveal>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Leaf, FlaskConical, Sprout } from "lucide-react";
import ScrollReveal from "@/components/about/ScrollReveal";
import BotanicalDecoration from "@/components/about/BotanicalDecoration";

const trustItems = [
  { icon: Leaf, label: "Whole Botanicals" },
  { icon: FlaskConical, label: "No Artificial Flavors" },
  { icon: Sprout, label: "Small-Batch Blended" },
];

export default function IngredientsHero() {
  return (
    <section className="relative overflow-hidden bg-cream-50">
      <BotanicalDecoration
        variant="vine"
        color="#B0924C"
        opacity={0.16}
        className="pointer-events-none absolute -left-10 top-10 hidden h-[420px] w-[200px] lg:block"
      />

      <div className="mx-auto grid max-w-[1380px] items-center gap-10 px-[5vw] py-16 lg:grid-cols-[44%_56%] lg:gap-0 lg:py-0 lg:min-h-[620px]">
        <div className="relative z-10 max-w-xl">
          <ScrollReveal variant="up">
            <span className="eyebrow text-gold-500">Our Ingredients</span>
          </ScrollReveal>

          <ScrollReveal variant="up" delayMs={90}>
            <h1 className="mt-4 font-serif text-5xl leading-[1.08] text-forest sm:text-6xl lg:text-[68px]">
              Whole plants.
              <br />
              <span className="italic text-forest-500">Carefully chosen.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="up" delayMs={180}>
            <span className="mt-5 block h-[2px] w-12 bg-gold-400" aria-hidden="true" />
            <p className="mt-5 text-lg leading-relaxed text-forest-500">
              Every Sacra Terra blend begins with whole herbs, flowers, roots, and
              leaves selected for their traditional uses, natural character, and
              place within a balanced tea ritual.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="up" delayMs={260}>
            <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              {trustItems.map((item) => (
                <li key={item.label} className="flex items-center gap-2 text-sm text-forest">
                  <item.icon className="h-5 w-5 text-gold-500" strokeWidth={1.3} aria-hidden="true" />
                  <span className="font-medium uppercase tracking-wide">{item.label}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>

        <ScrollReveal
          variant="scale"
          delayMs={120}
          durationMs={900}
          className="relative h-[320px] w-full overflow-hidden rounded-2xl lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[64%] lg:rounded-none"
        >
          <div
            className="absolute inset-0 lg:[mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.4)_14%,black_32%)] lg:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.4)_14%,black_32%)]"
          >
            <Image
              src="/images/ingredients-hero.jpg"
              alt="A ceramic bowl filled with dried chamomile flowers and rose petals, surrounded by loose sprigs of lavender, hibiscus, and whole roots on a linen-draped table"
              fill
              sizes="(min-width: 1024px) 64vw, 100vw"
              priority
              className="object-cover"
            />
          </div>
          {/* soft cream scrim to blend the fade into the page background */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-cream-50 to-transparent lg:block"
            aria-hidden="true"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}

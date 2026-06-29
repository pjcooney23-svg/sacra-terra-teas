import Link from "next/link";
import ScrollReveal from "./ScrollReveal";
import BotanicalDecoration from "./BotanicalDecoration";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-cream-50 py-24 sm:py-28">
      <BotanicalDecoration
        variant="corner"
        color="#B0924C"
        opacity={0.18}
        className="absolute -bottom-6 -right-6 h-44 w-44 sm:h-64 sm:w-64"
      />
      <BotanicalDecoration
        variant="sprig"
        color="#9AAE8E"
        opacity={0.16}
        className="absolute -bottom-2 left-0 hidden h-40 w-28 -scale-x-100 lg:block"
      />

      <div className="relative mx-auto max-w-[760px] px-[5vw] text-center">
        <ScrollReveal variant="up">
          <h2 className="font-serif text-3xl font-semibold text-forest sm:text-4xl">
            Find the blend that fits your ritual.
          </h2>
        </ScrollReveal>
        <ScrollReveal variant="up" delayMs={120}>
          <p className="mt-4 text-lg leading-relaxed text-forest-500">
            Thoughtfully crafted herbal teas for every moment of your day.
          </p>
        </ScrollReveal>
        <ScrollReveal variant="up" delayMs={220}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            <Link href="/products" className="btn-primary">
              Shop All Teas →
            </Link>
            <Link href="/ingredients" className="btn-secondary">
              Explore Ingredients
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

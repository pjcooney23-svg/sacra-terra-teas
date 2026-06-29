import { BookOpen, Gem, Scale3d, Minus } from "lucide-react";
import ScrollReveal from "@/components/about/ScrollReveal";
import BotanicalDecoration from "@/components/about/BotanicalDecoration";

const principles = [
  {
    icon: BookOpen,
    title: "Tradition",
    description: "We draw from generations of herbal knowledge and time-honored tea rituals.",
  },
  {
    icon: Gem,
    title: "Quality",
    description: "Whole botanicals are selected for aroma, color, and freshness.",
  },
  {
    icon: Scale3d,
    title: "Balance",
    description: "Ingredients are chosen to complement each other in flavor and purpose.",
  },
  {
    icon: Minus,
    title: "Simplicity",
    description: "No unnecessary fillers, artificial flavoring, or decorative additives.",
  },
];

export default function ChosenWithIntention() {
  return (
    <section className="relative overflow-hidden bg-cream-50 py-20 sm:py-24">
      <BotanicalDecoration
        variant="corner"
        color="#B0924C"
        opacity={0.14}
        className="pointer-events-none absolute -bottom-8 -left-8 hidden h-60 w-60 lg:block"
      />
      <BotanicalDecoration
        variant="corner"
        color="#B0924C"
        opacity={0.14}
        className="pointer-events-none absolute -right-8 -top-8 hidden h-60 w-60 rotate-180 lg:block"
      />

      <div className="relative mx-auto max-w-[1380px] px-[5vw]">
        <ScrollReveal variant="up" className="text-center">
          <h2 className="section-heading">Chosen with intention</h2>
          <span className="mx-auto mt-3 block h-[2px] w-12 bg-gold-400" aria-hidden="true" />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4 lg:gap-x-0 lg:divide-x lg:divide-forest-100">
          {principles.map((principle, index) => (
            <ScrollReveal
              key={principle.title}
              variant="up"
              delayMs={index * 110}
              className="flex flex-col items-center px-6 text-center"
            >
              <principle.icon className="h-8 w-8 text-gold-500" strokeWidth={1.2} aria-hidden="true" />
              <h3 className="mt-4 text-sm font-semibold uppercase tracking-wide text-forest">
                {principle.title}
              </h3>
              <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-forest-500">
                {principle.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

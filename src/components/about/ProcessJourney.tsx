import { Coffee, FlowerIcon, HandHeart, Sprout } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import SectionDivider from "./SectionDivider";

const steps = [
  {
    icon: Sprout,
    title: "Grown",
    description: "Organically cultivated with care for the soil and the future.",
  },
  {
    icon: FlowerIcon,
    title: "Harvested",
    description: "Picked at the right time to capture peak quality and potency.",
  },
  {
    icon: HandHeart,
    title: "Blended",
    description: "Hand-blended in small batches with intention and skill.",
  },
  {
    icon: Coffee,
    title: "Steeped",
    description: "Steeped to bring out the full flavor and herbal goodness.",
  },
];

export default function ProcessJourney() {
  return (
    <section className="relative bg-cream-100 py-20 sm:py-24">
      <SectionDivider flip fillClassName="fill-cream-50" className="absolute -top-px left-0" />

      <div className="mx-auto max-w-[1380px] px-[5vw]">
        <ScrollReveal variant="up" className="text-center">
          <h2 className="eyebrow text-forest">From Plant to Cup</h2>
          <span className="mx-auto mt-3 block h-[2px] w-12 bg-gold-400" aria-hidden="true" />
        </ScrollReveal>

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-7 hidden h-px bg-forest-200 lg:block"
          />
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-forest-200 sm:block lg:hidden"
          />

          <ol className="relative grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => (
              <ScrollReveal key={step.title} variant="up" delayMs={index * 130} as="div">
                <li className="flex flex-col items-center text-center">
                  <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-forest-200 bg-cream-50 text-forest">
                    <step.icon className="h-5 w-5" strokeWidth={1.4} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide text-forest">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-forest-500">
                    {step.description}
                  </p>
                </li>
              </ScrollReveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

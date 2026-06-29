import { Flower2, Leaf, Sprout } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import BotanicalDecoration from "./BotanicalDecoration";

const ingredients = [
  {
    icon: Flower2,
    name: "Chamomile",
    description: "A gentle flower traditionally enjoyed in quiet moments.",
    offset: "lg:-translate-y-3",
  },
  {
    icon: Sprout,
    name: "Ginger",
    description: "A warming root known for its comforting qualities.",
    offset: "lg:translate-y-2",
  },
  {
    icon: Leaf,
    name: "Lemon Balm",
    description: "A bright herb traditionally used to uplift the spirit.",
    offset: "lg:-translate-y-2",
  },
  {
    icon: Leaf,
    name: "Nettle",
    description: "A nourishing leaf used traditionally in herbal teas.",
    offset: "lg:translate-y-3",
  },
];

export default function IngredientShowcase() {
  return (
    <section className="relative overflow-hidden bg-cream-50 py-20 sm:py-24">
      <BotanicalDecoration
        variant="corner"
        color="#B0924C"
        opacity={0.15}
        className="absolute -bottom-6 -left-6 hidden h-56 w-56 lg:block"
      />
      <BotanicalDecoration
        variant="corner"
        color="#B0924C"
        opacity={0.15}
        className="absolute -right-6 -top-6 hidden h-56 w-56 rotate-180 lg:block"
      />

      <div className="relative mx-auto max-w-[1380px] px-[5vw]">
        <ScrollReveal variant="up" className="text-center">
          <h2 className="section-heading">Every ingredient has a reason.</h2>
          <span className="mx-auto mt-3 block h-[2px] w-12 bg-gold-400" aria-hidden="true" />
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4 sm:gap-x-0 sm:divide-x sm:divide-forest-100">
          {ingredients.map((ingredient, index) => (
            <ScrollReveal
              key={ingredient.name}
              variant="scale"
              delayMs={index * 110}
              className={`flex flex-col items-center px-4 text-center ${ingredient.offset}`}
            >
              <span className="flex h-20 w-20 items-center justify-center rounded-full border border-gold-200 bg-cream-100 text-forest">
                <ingredient.icon className="h-8 w-8" strokeWidth={1.2} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-sm font-semibold uppercase tracking-wide text-forest">
                {ingredient.name}
              </h3>
              <p className="mt-2 max-w-[200px] text-sm leading-relaxed text-forest-500">
                {ingredient.description}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { Flower2, Leaf, Sprout, Wheat, TreeDeciduous, Cherry } from "lucide-react";
import type { IngredientCategory } from "@/types/ingredients";
import BotanicalDecoration from "@/components/about/BotanicalDecoration";

export const categoryIcon: Record<IngredientCategory, typeof Flower2> = {
  flower: Flower2,
  leaf: Leaf,
  root: Sprout,
  seed: Wheat,
  bark: TreeDeciduous,
  fruit: Cherry,
  other: Leaf,
};

export default function IngredientVisual({
  name,
  image,
  category,
  direction,
  priority,
}: {
  name: string;
  image: string;
  category: IngredientCategory;
  direction: "forward" | "back";
  priority?: boolean;
}) {
  const Icon = categoryIcon[category];
  return (
    <div
      key={name}
      className={`relative flex h-full w-full items-center justify-center ${
        direction === "forward" ? "animate-specimen-in-forward" : "animate-specimen-in-back"
      }`}
    >
      <BotanicalDecoration
        variant="sun"
        color="#536453"
        opacity={0.1}
        className="absolute h-[88%] w-[88%]"
      />
      <BotanicalDecoration
        variant="sprig"
        color="#B0924C"
        opacity={0.18}
        className="absolute left-2 top-2 h-20 w-20 sm:h-28 sm:w-28"
      />
      <div className="relative flex h-56 w-56 items-center justify-center overflow-hidden rounded-full border border-gold-200 bg-cream-100 shadow-soft sm:h-72 sm:w-72">
        {image ? (
          <Image
            src={image}
            alt={`${name} specimen`}
            fill
            sizes="(min-width: 640px) 288px, 224px"
            priority={priority}
            className="object-cover"
          />
        ) : (
          <Icon className="h-16 w-16 text-forest-300 sm:h-20 sm:w-20" strokeWidth={1} aria-hidden="true" />
        )}
      </div>
    </div>
  );
}

export function IngredientVisualThumb({
  category,
  image,
  name,
}: {
  category: IngredientCategory;
  image: string;
  name: string;
}) {
  const Icon = categoryIcon[category];
  return (
    <span className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-gold-200 bg-cream-100 text-forest">
      {image ? (
        <Image src={image} alt={`${name} specimen`} fill sizes="56px" className="object-cover" />
      ) : (
        <Icon className="h-6 w-6" strokeWidth={1.2} aria-hidden="true" />
      )}
    </span>
  );
}

export type IngredientCategory = "flower" | "leaf" | "root" | "seed" | "bark" | "fruit" | "other";

export type Ingredient = {
  id: string;
  commonName: string;
  botanicalName: string;
  category: IngredientCategory;
  shortDescription: string;
  traditionalUses: string[];
  plantPart: string;
  origin: string;
  flavorProfile: string;
  whyWeUseIt: string;
  caffeineFree?: boolean;
  image: string;
};

export const ingredients: Ingredient[] = [
  {
    id: "chamomile",
    image: "/images/ingredients/chamomile.jpg",
    commonName: "Chamomile",
    botanicalName: "Matricaria chamomilla",
    category: "flower",
    shortDescription:
      "A delicate flowering herb with a soft, apple-like aroma, traditionally enjoyed in calming evening teas.",
    traditionalUses: ["rest", "calm", "digestive comfort"],
    plantPart: "Flower",
    origin: "Europe, North Africa",
    flavorProfile: "Floral, mellow, lightly sweet",
    whyWeUseIt:
      "Chamomile gives our blends a gentle softness and a long tradition of comfort.",
    caffeineFree: true,
  },
  {
    id: "ginger",
    image: "/images/ingredients/ginger.jpg",
    commonName: "Ginger",
    botanicalName: "Zingiber officinale",
    category: "root",
    shortDescription:
      "A warming, aromatic root long valued in herbal traditions for its bright, spicy character.",
    traditionalUses: ["warmth", "digestive comfort", "vitality"],
    plantPart: "Root",
    origin: "Southeast Asia",
    flavorProfile: "Spicy, warm, slightly sweet",
    whyWeUseIt:
      "Ginger brings a lively warmth that grounds our more energizing blends.",
    caffeineFree: true,
  },
  {
    id: "lemon-balm",
    image: "/images/ingredients/lemon-balm.jpg",
    commonName: "Lemon Balm",
    botanicalName: "Melissa officinalis",
    category: "leaf",
    shortDescription:
      "A bright, citrus-scented leaf traditionally used to uplift the spirit and ease the mind.",
    traditionalUses: ["calm", "uplift", "ease"],
    plantPart: "Leaf",
    origin: "Mediterranean, Western Asia",
    flavorProfile: "Citrusy, fresh, light",
    whyWeUseIt:
      "Lemon balm adds a fresh brightness that balances heavier botanicals.",
    caffeineFree: true,
  },
  {
    id: "nettle-leaf",
    image: "/images/ingredients/nettle-leaf.jpg",
    commonName: "Nettle Leaf",
    botanicalName: "Urtica dioica",
    category: "leaf",
    shortDescription:
      "A nourishing green leaf with a deep, earthy character, valued in traditional herbal practice.",
    traditionalUses: ["nourishment", "vitality"],
    plantPart: "Leaf",
    origin: "Europe, Asia",
    flavorProfile: "Earthy, grassy, mineral",
    whyWeUseIt:
      "Nettle leaf adds depth and a grounded, garden-like quality to our blends.",
    caffeineFree: true,
  },
  {
    id: "lavender",
    image: "/images/ingredients/lavender.jpg",
    commonName: "Lavender",
    botanicalName: "Lavandula angustifolia",
    category: "flower",
    shortDescription:
      "A fragrant purple flower traditionally associated with rest and quiet evenings.",
    traditionalUses: ["rest", "calm"],
    plantPart: "Flower",
    origin: "Mediterranean",
    flavorProfile: "Floral, sweet, slightly herbal",
    whyWeUseIt:
      "Lavender lends a fragrant softness that supports a calming tea ritual.",
    caffeineFree: true,
  },
  {
    id: "licorice-root",
    image: "/images/ingredients/licorice-root.jpg",
    commonName: "Licorice Root",
    botanicalName: "Glycyrrhiza glabra",
    category: "root",
    shortDescription:
      "A naturally sweet root traditionally used to round out and balance herbal blends.",
    traditionalUses: ["balance", "digestive comfort"],
    plantPart: "Root",
    origin: "Southern Europe, Asia",
    flavorProfile: "Sweet, woody, anise-like",
    whyWeUseIt:
      "Licorice root brings natural sweetness, often easing the need for added sugar.",
    caffeineFree: true,
  },
  {
    id: "marshmallow-root",
    image: "/images/ingredients/marshmallow-root.jpg",
    commonName: "Marshmallow Root",
    botanicalName: "Althaea officinalis",
    category: "root",
    shortDescription:
      "A soft, mucilaginous root traditionally included in blends meant to feel soothing on the palate.",
    traditionalUses: ["digestive comfort", "soothing texture"],
    plantPart: "Root",
    origin: "Europe, Western Asia",
    flavorProfile: "Mild, faintly sweet, smooth",
    whyWeUseIt:
      "Marshmallow root gives certain blends a noticeably smoother, softer mouthfeel.",
    caffeineFree: true,
  },
  {
    id: "skullcap",
    image: "/images/ingredients/skullcap.jpg",
    commonName: "Skullcap",
    botanicalName: "Scutellaria lateriflora",
    category: "leaf",
    shortDescription:
      "A traditional herb long associated with quiet, restful evenings.",
    traditionalUses: ["rest", "calm"],
    plantPart: "Leaf",
    origin: "North America",
    flavorProfile: "Earthy, mild, slightly grassy",
    whyWeUseIt:
      "Skullcap supports the restful character of our evening blends.",
    caffeineFree: true,
  },
  {
    id: "milky-oats",
    image: "/images/ingredients/milky-oats.jpg",
    commonName: "Milky Oats",
    botanicalName: "Avena sativa",
    category: "seed",
    shortDescription:
      "The tender, unripe seed of the oat plant, traditionally valued for its gentle, nourishing quality.",
    traditionalUses: ["nourishment", "calm"],
    plantPart: "Seed",
    origin: "Europe",
    flavorProfile: "Creamy, mild, oat-like",
    whyWeUseIt:
      "Milky oats add a soft, nourishing roundness to grounding blends.",
    caffeineFree: true,
  },
  {
    id: "dandelion-root",
    image: "/images/ingredients/dandelion-root.jpg",
    commonName: "Dandelion Root",
    botanicalName: "Taraxacum officinale",
    category: "root",
    shortDescription:
      "A roasted-tasting root traditionally enjoyed for its deep, coffee-like character.",
    traditionalUses: ["digestive comfort", "warmth"],
    plantPart: "Root",
    origin: "Europe, Asia",
    flavorProfile: "Roasted, earthy, slightly bitter",
    whyWeUseIt:
      "Dandelion root brings a roasted depth to blends meant to feel grounding.",
    caffeineFree: true,
  },
  {
    id: "rose-petals",
    image: "/images/ingredients/rose-petals.jpg",
    commonName: "Rose Petals",
    botanicalName: "Rosa damascena",
    category: "flower",
    shortDescription:
      "Fragrant petals traditionally included for their delicate aroma and soft floral note.",
    traditionalUses: ["uplift", "ease"],
    plantPart: "Flower",
    origin: "Middle East, South Asia",
    flavorProfile: "Floral, delicate, slightly sweet",
    whyWeUseIt:
      "Rose petals lend a graceful aroma that softens and rounds out a blend.",
    caffeineFree: true,
  },
  {
    id: "hibiscus",
    image: "/images/ingredients/hibiscus.jpg",
    commonName: "Hibiscus",
    botanicalName: "Hibiscus sabdariffa",
    category: "flower",
    shortDescription:
      "A vivid, tart flower traditionally enjoyed for its bright color and crisp, tangy character.",
    traditionalUses: ["vitality", "refreshment"],
    plantPart: "Flower",
    origin: "West Africa, South Asia",
    flavorProfile: "Tart, bright, berry-like",
    whyWeUseIt:
      "Hibiscus adds vivid color and a crisp, tangy lift to our brighter blends.",
    caffeineFree: true,
  },
];

export const categoryLabels: Record<IngredientCategory, string> = {
  flower: "Flowers",
  leaf: "Leaves",
  root: "Roots",
  seed: "Seeds",
  bark: "Bark",
  fruit: "Fruit",
  other: "Other",
};

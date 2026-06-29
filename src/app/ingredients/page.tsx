import { getProducts } from "@/lib/shopify";
import { ingredients } from "@/types/ingredients";
import IngredientsHero from "@/components/ingredients/IngredientsHero";
import IngredientExplorer from "@/components/ingredients/IngredientExplorer";
import ChosenWithIntention from "@/components/ingredients/ChosenWithIntention";
import SourcingSection from "@/components/ingredients/SourcingSection";
import ClosingStatement from "@/components/ingredients/ClosingStatement";

export const metadata = {
  title: "Ingredients | Sacra Terra Teas",
  description:
    "Explore the whole herbs, flowers, roots, and leaves used in Sacra Terra's small-batch herbal tea blends.",
};

export default async function IngredientsPage() {
  const products = await getProducts().catch(() => []);

  const productsByIngredient: Record<string, { handle: string; title: string }[]> = {};
  for (const ingredient of ingredients) {
    const matches = products.filter((product) => {
      const haystack = `${product.title} ${product.tags.join(" ")} ${product.description}`.toLowerCase();
      return haystack.includes(ingredient.commonName.toLowerCase());
    });
    if (matches.length > 0) {
      productsByIngredient[ingredient.id] = matches.map((p) => ({ handle: p.handle, title: p.title }));
    }
  }

  const featuredProducts = products.slice(0, 3);

  return (
    <>
      <IngredientsHero />
      <IngredientExplorer productsByIngredient={productsByIngredient} />
      <ChosenWithIntention />
      <SourcingSection featuredProducts={featuredProducts} />
      <ClosingStatement />
    </>
  );
}

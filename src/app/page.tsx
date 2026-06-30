import Link from "next/link";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ProductCard from "@/components/ProductCard";
import { getProducts } from "@/lib/shopify";

export default async function HomePage() {
  const products = await getProducts().catch(() => []);
  const sacredPaws = products.find((product) => product.title.includes("Sacred Paws"));
  const rest = products.filter((product) => product !== sacredPaws);
  const featured = (sacredPaws ? [sacredPaws, ...rest] : rest).slice(0, 4);

  return (
    <>
      <Hero />
      <TrustStrip />

      <section className="bg-cream-100 px-[5vw] py-20">
        <div className="mx-auto max-w-[1380px]">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="section-heading">Featured Teas</h2>
            <Link href="/products" className="text-sm font-medium text-gold-500 hover:text-gold-600">
              View all &rarr;
            </Link>
          </div>

          {featured.length === 0 ? (
            <p className="text-forest-500">
              No products yet. Connect your Shopify store to see featured teas here.
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {featured.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

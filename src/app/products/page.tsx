import ProductCard from "@/components/ProductCard";
import { getCollectionByHandle, getProducts } from "@/lib/shopify";

export const metadata = {
  title: "Shop All Teas | Sacra Terra Teas",
};

type ProductsPageProps = {
  searchParams: Promise<{ q?: string; collection?: string }>;
};

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const { q, collection } = await searchParams;

  let products;
  let heading = "Shop All Teas";
  if (collection) {
    const result = await getCollectionByHandle(collection).catch(() => null);
    products = result?.products ?? [];
    heading = result?.collection.title ?? heading;
  } else {
    products = await getProducts(q).catch(() => []);
  }

  return (
    <section className="mx-auto max-w-[1380px] px-[5vw] py-16">
      <header className="mb-10 max-w-xl">
        <h1 className="section-heading">{q ? `Results for “${q}”` : heading}</h1>
        <p className="mt-3 text-forest-500">
          Herbal blends hand-crafted from organically grown botanicals, steeped
          in old-world apothecary tradition.
        </p>
      </header>

      {products.length === 0 ? (
        <p className="text-forest-500">
          {q
            ? `No teas matched “${q}”. Try a different search.`
            : "No products found. Check your Shopify Storefront API credentials."}
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}

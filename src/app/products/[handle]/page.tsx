import { notFound } from "next/navigation";
import AddToCartForm from "@/components/AddToCartForm";
import ProductGallery from "@/components/ProductGallery";
import { getProductByHandle } from "@/lib/shopify";

export async function generateMetadata({ params }: { params: { handle: string } }) {
  const product = await getProductByHandle(params.handle).catch(() => null);

  if (!product) return {};

  return {
    title: `${product.title} | Sacra Terra Teas`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: { handle: string } }) {
  const product = await getProductByHandle(params.handle).catch(() => null);

  if (!product) {
    notFound();
  }

  const images = product.images.length > 0 ? product.images : product.featuredImage ? [product.featuredImage] : [];

  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="grid gap-10 sm:grid-cols-2">
        <ProductGallery images={images} productTitle={product.title} />

        <div>
          <h1 className="font-serif text-3xl text-forest-700 sm:text-4xl">
            {product.title}
            {product.title.includes("Sacred Paws") && (
              <span aria-label="Dog-friendly tea" title="Dog-friendly tea" className="ml-2">
                🐾
              </span>
            )}
          </h1>

          {product.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-forest-50 px-3 py-1 text-xs uppercase tracking-wide text-forest-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-6">
            <AddToCartForm product={product} />
          </div>

          {product.descriptionHtml && (
            <div
              className="mt-10 max-w-none space-y-4 text-sm leading-relaxed text-forest-600 [&_a]:text-gold-500 [&_h2]:font-serif [&_h2]:text-xl [&_h2]:text-forest-700 [&_h3]:font-serif [&_h3]:text-lg [&_h3]:text-forest-700 [&_li]:ml-4 [&_li]:list-disc [&_strong]:font-semibold"
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
          )}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { Collection, Product } from "@/types/shopify";

type CollectionGridProps = {
  collections: Collection[];
  fallbackProducts: Product[];
};

export default function CollectionGrid({ collections, fallbackProducts }: CollectionGridProps) {
  const cards = collections.length > 0
    ? collections.slice(0, 4).map((collection) => ({
        key: collection.id,
        href: `/products?collection=${collection.handle}`,
        title: collection.title,
        description: collection.description,
        image: collection.image,
      }))
    : fallbackProducts.slice(0, 4).map((product) => ({
        key: product.id,
        href: `/products/${product.handle}`,
        title: product.title,
        description: null,
        image: product.featuredImage,
      }));

  if (cards.length === 0) return null;

  return (
    <section className="bg-cream-50">
      <div className="mx-auto max-w-[1380px] px-[5vw] py-20">
        <div className="text-center">
          <h2 className="eyebrow">Explore Our Collections</h2>
          <span className="mx-auto mt-2 block h-[2px] w-12 bg-gold-400" aria-hidden="true" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <Link
              key={card.key}
              href={card.href}
              className="group block overflow-hidden rounded-xl"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-forest-50">
                {card.image ? (
                  <Image
                    src={card.image.url}
                    alt={card.image.altText ?? card.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    loading="lazy"
                    className="object-cover transition-transform duration-500 motion-reduce:transition-none group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-forest-300">No image</div>
                )}
              </div>
              <div className="mt-3">
                <h3 className="font-serif text-lg font-semibold text-forest">{card.title}</h3>
                {card.description && (
                  <p className="mt-1 text-sm text-forest-500 line-clamp-1">{card.description}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

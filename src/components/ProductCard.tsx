import Image from "next/image";
import Link from "next/link";
import { formatMoney } from "@/lib/utils";
import type { Product } from "@/types/shopify";

export default function ProductCard({ product }: { product: Product }) {
  const secondImage = product.images.find((image) => image.url !== product.featuredImage?.url);

  return (
    <Link
      href={`/products/${product.handle}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-forest-100 bg-cream-50 transition-colors hover:border-forest-200"
    >
      <div className="relative aspect-square w-full overflow-hidden rounded-t-xl bg-forest-50">
        {product.featuredImage ? (
          <>
            <Image
              src={product.featuredImage.url}
              alt={product.featuredImage.altText ?? product.title}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className={`object-cover transition-opacity duration-500 ${
                secondImage ? "group-hover:opacity-0" : ""
              }`}
            />
            {secondImage && (
              <Image
                src={secondImage.url}
                alt={secondImage.altText ?? product.title}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
            )}
          </>
        ) : (
          <div className="flex h-full items-center justify-center text-forest-300">No image</div>
        )}
        {!product.availableForSale && (
          <span className="absolute left-3 top-3 rounded-full bg-clay px-3 py-1 text-xs font-medium text-cream-50">
            Sold Out
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="font-serif text-lg font-semibold text-forest">{product.title}</h3>
        <p className="text-sm font-medium text-gold-500">
          {formatMoney(product.priceRange.minVariantPrice)}
        </p>
      </div>
    </Link>
  );
}

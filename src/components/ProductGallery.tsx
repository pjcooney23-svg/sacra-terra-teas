"use client";

import { useState } from "react";
import Image from "next/image";
import type { Image as ProductImage } from "@/types/shopify";

export default function ProductGallery({
  images,
  productTitle,
}: {
  images: ProductImage[];
  productTitle: string;
}) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = images[selectedIndex];

  return (
    <div className="space-y-4">
      <div className="group relative aspect-square overflow-hidden rounded-2xl bg-forest-50">
        {selected ? (
          <Image
            src={selected.url}
            alt={selected.altText ?? productTitle}
            fill
            priority
            sizes="(min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-forest-300">No image</div>
        )}
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={image.url}
              type="button"
              onClick={() => setSelectedIndex(index)}
              aria-label={`View image ${index + 1}`}
              aria-current={index === selectedIndex}
              className={`relative aspect-square overflow-hidden rounded-xl bg-forest-50 transition-opacity ${
                index === selectedIndex ? "ring-2 ring-gold-400" : "opacity-70 hover:opacity-100"
              }`}
            >
              <Image src={image.url} alt={image.altText ?? productTitle} fill sizes="120px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

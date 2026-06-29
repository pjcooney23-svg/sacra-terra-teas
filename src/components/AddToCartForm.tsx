"use client";

import { useMemo, useState } from "react";
import { formatMoney } from "@/lib/utils";
import { useCart } from "./CartContext";
import type { Product, ProductVariant } from "@/types/shopify";

function findVariant(product: Product, selectedOptions: Record<string, string>): ProductVariant | undefined {
  return product.variants.find((variant) =>
    variant.selectedOptions.every((option) => selectedOptions[option.name] === option.value)
  );
}

export default function AddToCartForm({ product }: { product: Product }) {
  const { addItem, isLoading } = useCart();
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    const initial: Record<string, string> = {};
    for (const option of product.options) {
      initial[option.name] = option.values[0];
    }
    return initial;
  });
  const [justAdded, setJustAdded] = useState(false);

  const selectedVariant = useMemo(
    () => findVariant(product, selectedOptions),
    [product, selectedOptions]
  );

  const hasOnlyDefaultOption = product.options.length === 1 && product.options[0].name === "Title";

  async function handleAddToCart() {
    if (!selectedVariant) return;
    await addItem(selectedVariant.id, 1);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  }

  return (
    <div className="space-y-6">
      <p className="font-serif text-3xl text-gold-500">
        {formatMoney(selectedVariant?.price ?? product.priceRange.minVariantPrice)}
      </p>

      {!hasOnlyDefaultOption &&
        product.options.map((option) => (
          <div key={option.id}>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-forest-600">
              {option.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {option.values.map((value) => {
                const isSelected = selectedOptions[option.name] === value;
                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() =>
                      setSelectedOptions((prev) => ({ ...prev, [option.name]: value }))
                    }
                    className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                      isSelected
                        ? "border-forest bg-forest text-cream-50"
                        : "border-forest-200 text-forest-600 hover:border-forest"
                    }`}
                  >
                    {value}
                  </button>
                );
              })}
            </div>
          </div>
        ))}

      <button
        type="button"
        onClick={handleAddToCart}
        disabled={!selectedVariant || !selectedVariant.availableForSale || isLoading}
        className="btn-primary w-full sm:w-auto sm:px-12"
      >
        {!selectedVariant || !selectedVariant.availableForSale
          ? "Sold Out"
          : justAdded
            ? "Added to Cart"
            : isLoading
              ? "Adding..."
              : "Add to Cart"}
      </button>
    </div>
  );
}

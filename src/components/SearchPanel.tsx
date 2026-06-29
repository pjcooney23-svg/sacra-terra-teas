"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { formatMoney } from "@/lib/utils";
import type { Product } from "@/types/shopify";

const TRANSITION_MS = 300;

export default function SearchPanel({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setIsVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, TRANSITION_MS);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);

    const timeout = setTimeout(() => {
      const params = new URLSearchParams();
      if (value.trim()) params.set("q", value.trim());

      fetch(`/api/search?${params.toString()}`, { signal: controller.signal })
        .then((res) => res.json())
        .then((data) => setProducts(data.products ?? []))
        .catch(() => {})
        .finally(() => setIsLoading(false));
    }, 200);

    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [value]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (value.trim()) params.set("q", value.trim());
    router.push(`/products${params.toString() ? `?${params.toString()}` : ""}`);
    handleClose();
  };

  return createPortal(
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Close search"
        onClick={handleClose}
        className={`absolute inset-0 bg-forest-900/40 transition-opacity duration-300 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-cream-50 shadow-xl transition-transform duration-300 ease-out ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center gap-3 border-b border-forest-100 px-6 py-5">
          <form role="search" onSubmit={handleSubmit} className="flex flex-1 items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="h-5 w-5 flex-shrink-0 text-forest-400"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <label htmlFor="search-panel-input" className="sr-only">
              Search teas and ingredients
            </label>
            <input
              id="search-panel-input"
              ref={inputRef}
              type="search"
              name="q"
              value={value}
              onChange={(event) => setValue(event.target.value)}
              placeholder="Search for anything"
              className="w-full bg-transparent text-base text-forest placeholder:text-forest-400 focus:outline-none"
            />
          </form>
          <button type="button" onClick={handleClose} aria-label="Close search" className="text-forest-400 hover:text-forest">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-forest-500">
            {value.trim() ? "Results" : "Trending Now"}
          </h2>

          {isLoading ? (
            <p className="text-sm text-forest-400">Loading…</p>
          ) : products.length === 0 ? (
            <p className="text-sm text-forest-400">
              {value.trim() ? `No teas matched "${value.trim()}".` : "No teas found."}
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-4">
              {products.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.handle}`}
                  onClick={handleClose}
                  className="group flex flex-col gap-2"
                >
                  <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-forest-50">
                    {product.featuredImage ? (
                      <Image
                        src={product.featuredImage.url}
                        alt={product.featuredImage.altText ?? product.title}
                        fill
                        sizes="200px"
                        className="object-cover"
                      />
                    ) : null}
                  </div>
                  <p className="text-sm font-medium text-forest">{product.title}</p>
                  <p className="text-sm text-gold-500">
                    From {formatMoney(product.priceRange.minVariantPrice)}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

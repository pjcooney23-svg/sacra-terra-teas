"use client";

import Image from "next/image";
import Link from "next/link";
import { formatMoney } from "@/lib/utils";
import { useCart } from "./CartContext";

export default function CartDrawer() {
  const { cart, isDrawerOpen, closeDrawer, updateItem, removeItem, isLoading } = useCart();

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-forest-900/40 transition-opacity ${
          isDrawerOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col bg-cream-50 shadow-soft transition-transform duration-300 ${
          isDrawerOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-forest-100 px-6 py-5">
          <h2 className="font-serif text-2xl text-forest-700">Your Cart</h2>
          <button
            type="button"
            onClick={closeDrawer}
            aria-label="Close cart"
            className="text-forest-600 hover:text-gold-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {!cart || cart.lines.length === 0 ? (
            <p className="mt-10 text-center text-forest-500">Your cart is empty.</p>
          ) : (
            <ul className="space-y-6">
              {cart.lines.map((line) => (
                <li key={line.id} className="flex gap-4">
                  <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-forest-50">
                    {line.merchandise.product.featuredImage && (
                      <Image
                        src={line.merchandise.product.featuredImage.url}
                        alt={line.merchandise.product.featuredImage.altText ?? line.merchandise.product.title}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    )}
                  </div>

                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-medium text-forest-700">{line.merchandise.product.title}</p>
                        {line.merchandise.selectedOptions
                          .filter((o) => o.name !== "Title")
                          .map((option) => (
                            <p key={option.name} className="text-xs text-forest-400">
                              {option.name}: {option.value}
                            </p>
                          ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(line.id)}
                        disabled={isLoading}
                        className="text-xs text-forest-400 hover:text-clay"
                      >
                        Remove
                      </button>
                    </div>

                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-forest-200">
                        <button
                          type="button"
                          disabled={isLoading}
                          onClick={() => updateItem(line.id, Math.max(0, line.quantity - 1))}
                          className="px-3 py-1 text-forest-600 hover:text-gold-500"
                          aria-label="Decrease quantity"
                        >
                          –
                        </button>
                        <span className="px-2 text-sm">{line.quantity}</span>
                        <button
                          type="button"
                          disabled={isLoading}
                          onClick={() => updateItem(line.id, line.quantity + 1)}
                          className="px-3 py-1 text-forest-600 hover:text-gold-500"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <span className="text-sm font-medium text-forest-700">
                        {formatMoney(line.cost.totalAmount)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {cart && cart.lines.length > 0 && (
          <div className="border-t border-forest-100 px-6 py-6">
            <div className="mb-4 flex items-center justify-between text-forest-700">
              <span className="font-medium">Subtotal</span>
              <span className="font-serif text-lg">{formatMoney(cart.cost.subtotalAmount)}</span>
            </div>
            <a href={cart.checkoutUrl} className="btn-primary w-full">
              Checkout
            </a>
            <Link
              href="/products"
              onClick={closeDrawer}
              className="mt-3 block text-center text-sm text-forest-500 hover:text-gold-500"
            >
              Continue shopping
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}

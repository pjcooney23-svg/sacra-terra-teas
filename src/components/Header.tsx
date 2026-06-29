"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useCart } from "./CartContext";
import SearchPanel from "./SearchPanel";

const navLinks = [
  { href: "/products", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/ingredients", label: "Ingredients" },
];

export default function Header() {
  const { cart, openDrawer } = useCart();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-forest-100 bg-cream-50/95 backdrop-blur">
      <div className="mx-auto grid h-[88px] max-w-[1380px] grid-cols-2 items-center px-5 md:h-24 md:grid-cols-[1fr_auto_1fr] md:px-[5vw]">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Sacra Terra Teas"
            width={1200}
            height={441}
            priority
            className="h-auto w-[160px] md:h-[52px] md:w-auto"
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center justify-center gap-10 text-sm font-medium uppercase tracking-wide text-forest md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`transition-colors hover:text-gold-500 ${
                  isActive ? "text-gold-500" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center justify-end gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() => setIsSearchOpen(true)}
            aria-label="Open search"
            className="flex h-11 w-11 items-center justify-center text-forest transition-colors hover:text-gold-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>

          <button
            type="button"
            onClick={openDrawer}
            aria-label="Open cart"
            className="relative flex h-11 w-11 items-center justify-center text-forest transition-colors hover:text-gold-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 1.994-4.693 2.602-7.151.108-.44-.246-.851-.697-.851H5.106M7.5 14.25 5.106 5.272M6 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm9.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            {cart && cart.totalQuantity > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold-400 text-xs font-semibold text-cream-50">
                {cart.totalQuantity}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            className="flex h-11 w-11 items-center justify-center text-forest md:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-5 w-5">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isSearchOpen && <SearchPanel onClose={() => setIsSearchOpen(false)} />}

      {isMenuOpen && (
        <nav aria-label="Mobile navigation" className="border-t border-forest-100 bg-cream-50 px-5 py-4 md:hidden">
          <ul className="flex flex-col gap-4 text-sm font-medium uppercase tracking-wide text-forest">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setIsMenuOpen(false)} className="hover:text-gold-500">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

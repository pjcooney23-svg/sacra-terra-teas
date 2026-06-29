import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-forest-100 bg-forest text-cream-100">
      <div className="mx-auto grid max-w-[1380px] gap-10 px-[5vw] py-14 sm:grid-cols-3">
        <div>
          <h3 className="font-serif text-xl font-semibold text-cream-50">Sacra Terra Teas</h3>
          <p className="mt-3 max-w-xs text-sm text-forest-200">
            Small-batch herbal teas, rooted in old-world apothecary tradition.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gold-200">
            Shop
          </h4>
          <ul className="mt-3 space-y-2 text-sm text-forest-200">
            <li>
              <Link href="/products" className="hover:text-cream-50">
                All Teas
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-cream-50">
                Our Story
              </Link>
            </li>
            <li>
              <Link href="/ingredients" className="hover:text-cream-50">
                Ingredients
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gold-200">
            Connect
          </h4>
          <p className="mt-3 text-sm text-forest-200">hello@sacraterrateas.com</p>
        </div>
      </div>

      <div className="border-t border-forest-500/40 px-[5vw] py-4 text-center text-xs text-forest-300">
        &copy; {new Date().getFullYear()} Sacra Terra Teas. All rights reserved.
      </div>
    </footer>
  );
}

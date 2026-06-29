import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Sprout, Thermometer, Recycle } from "lucide-react";
import ScrollReveal from "@/components/about/ScrollReveal";
import BotanicalDecoration from "@/components/about/BotanicalDecoration";
import { formatMoney } from "@/lib/utils";
import type { Product } from "@/types/shopify";

const sourcingPrinciples = [
  { icon: ShieldCheck, label: "Responsible sourcing" },
  { icon: Sprout, label: "Organic cultivation" },
  { icon: Thermometer, label: "Low & slow dried" },
  { icon: Recycle, label: "Compostable packaging" },
];

export default function SourcingSection({ featuredProducts }: { featuredProducts: Product[] }) {
  return (
    <section className="relative grid grid-cols-1 lg:grid-cols-2">
      <div className="relative overflow-hidden bg-forest-700 px-[5vw] py-16 text-cream-50 sm:py-20 lg:py-24">
        <BotanicalDecoration
          variant="vine"
          color="#F7F4EC"
          opacity={0.08}
          className="pointer-events-none absolute -right-10 top-0 h-full w-64"
        />
        <div className="relative mx-auto max-w-lg lg:ml-auto lg:mr-0 lg:max-w-md">
          <ScrollReveal variant="up">
            <h2 className="font-serif text-3xl sm:text-4xl">From growers to your cup.</h2>
            <span className="mt-3 block h-[2px] w-12 bg-gold-400" aria-hidden="true" />
          </ScrollReveal>
          <ScrollReveal variant="up" delayMs={100}>
            <p className="mt-5 text-[15px] leading-relaxed text-cream-100/90">
              We partner with small growers who share our commitment to organic,
              sustainable cultivation. Our herbs are carefully dried at low
              temperatures to preserve their natural character, then stored in
              small batches for peak freshness.
            </p>
          </ScrollReveal>

          <ScrollReveal variant="up" delayMs={180}>
            <div className="mt-10 grid grid-cols-2 gap-6">
              {sourcingPrinciples.map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream-50/30">
                    <item.icon className="h-5 w-5 text-gold-300" strokeWidth={1.3} aria-hidden="true" />
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wide text-cream-100">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>

      <div className="bg-cream-50 px-[5vw] py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-lg lg:mr-auto lg:ml-0 lg:max-w-md">
          <ScrollReveal variant="up">
            <h2 className="font-serif text-3xl text-forest sm:text-4xl">
              See what these ingredients become.
            </h2>
            <span className="mt-3 block h-[2px] w-12 bg-gold-400" aria-hidden="true" />
          </ScrollReveal>

          {featuredProducts.length === 0 ? (
            <p className="mt-8 text-sm text-forest-500">
              Connect your Shopify store to feature teas here.
            </p>
          ) : (
            <div className="mt-8 flex flex-col gap-4 sm:max-h-none sm:flex-col lg:gap-5">
              {featuredProducts.map((product, index) => (
                <ScrollReveal
                  key={product.id}
                  variant="up"
                  delayMs={index * 100}
                  className="flex gap-4 rounded-xl border border-forest-100 bg-cream-100 p-3"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg bg-forest-50">
                    {product.featuredImage ? (
                      <Image
                        src={product.featuredImage.url}
                        alt={product.featuredImage.altText ?? product.title}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    ) : null}
                  </div>
                  <div className="flex flex-1 flex-col justify-center">
                    <h3 className="font-serif text-lg text-forest">{product.title}</h3>
                    <p className="mt-0.5 line-clamp-2 text-sm text-forest-500">
                      {product.description || formatMoney(product.priceRange.minVariantPrice)}
                    </p>
                    <Link
                      href={`/products/${product.handle}`}
                      className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-gold-500 hover:text-gold-600"
                    >
                      View tea &rarr;
                    </Link>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import BotanicalDecoration from "@/components/about/BotanicalDecoration";

const heroAlt =
  "A steaming cup of herbal tea on a ceramic saucer beside dried chamomile flowers in a speckled vase";

function HeroEyebrow() {
  return (
    <>
      <span className="eyebrow whitespace-nowrap text-[11px] min-[360px]:text-xs">
        Small-batch herbal apothecary
      </span>
      <span className="mt-2 block h-[2px] w-12 bg-gold-400" aria-hidden="true" />
    </>
  );
}

function HeroActions() {
  return (
    <div className="mt-5 flex flex-col items-start gap-3 min-[350px]:flex-row min-[350px]:items-center min-[350px]:gap-x-6 min-[350px]:gap-y-3">
      <Link
        href="/products"
        className="btn-primary w-full px-7 py-4 text-sm min-[350px]:w-auto sm:px-7 sm:py-3 sm:text-sm"
      >
        Shop Teas
      </Link>
      <Link href="/about" className="btn-secondary group py-3 sm:py-0">
        Our Story
        <span
          aria-hidden="true"
          className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
        >
          →
        </span>
      </Link>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-50">
      {/* Mobile: image framed up top, copy below with decorative accents */}
      <div className="relative px-[5vw] pb-10 pt-4 sm:hidden">
        <svg width="0" height="0" className="absolute" aria-hidden="true">
          <defs>
            <clipPath id="heroWaveMobile" clipPathUnits="objectBoundingBox">
              <path d="M0,0 H1 V0.87 C0.83,0.99 0.66,1 0.5,0.965 C0.34,0.93 0.17,0.99 0,0.87 Z" />
            </clipPath>
          </defs>
        </svg>
        <div
          className="relative h-[clamp(200px,30vh,300px)] w-full shadow-soft"
          style={{ clipPath: "url(#heroWaveMobile)" }}
        >
          <Image
            src="/images/sacra-terra-hero-tea.png"
            alt={heroAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_right]"
          />
        </div>

        <div className="relative mt-6">
          <BotanicalDecoration
            variant="sprig"
            color="#B0924C"
            opacity={0.24}
            className="pointer-events-none absolute -left-6 -top-2 h-14 w-14"
          />
          <BotanicalDecoration
            variant="vine"
            color="#B0924C"
            opacity={0.18}
            className="pointer-events-none absolute -right-4 bottom-2 h-20 w-20"
          />
          <div className="relative">
            <HeroEyebrow />
            <h1 className="mt-4 font-serif text-[clamp(36px,9.5vw,44px)] font-semibold leading-[1.05] text-forest">
              Herbal tea,
              <br />
              thoughtfully grown
              <br />
              and blended.
            </h1>
            <p className="mt-4 max-w-[34ch] text-base leading-relaxed text-forest-500">
              Organic botanicals, carefully sourced and blended by hand in small
              batches. Rooted in tradition. Made for today.
            </p>
            <HeroActions />
          </div>
        </div>
      </div>

      {/* Tablet and up: full-bleed photo with content overlay */}
      <div className="relative hidden sm:block sm:h-[640px] lg:h-[680px]">
        <Image
          src="/images/sacra-terra-hero-tea.png"
          alt={heroAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_right]"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-cream-50 via-cream-50/55 to-transparent"
          aria-hidden="true"
        />

        <div className="relative mx-auto flex h-full max-w-[1380px] items-center px-[5vw]">
          <div className="max-w-[560px]">
            <HeroEyebrow />
            <h1 className="mt-6 font-serif text-6xl font-semibold leading-[0.98] text-forest lg:text-[70px]">
              Herbal tea,
              <br />
              thoughtfully grown
              <br />
              and blended.
            </h1>
            <p className="mt-6 max-w-md text-xl leading-relaxed text-forest-500">
              Organic botanicals, carefully sourced and blended by hand in
              small batches. Rooted in tradition. Made for today.
            </p>
            <HeroActions />
          </div>
        </div>
      </div>
    </section>
  );
}

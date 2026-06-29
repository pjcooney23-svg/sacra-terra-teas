"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Compass, Grid2x2, MapPin, Leaf, Sparkles, X } from "lucide-react";
import { categoryLabels, ingredients, type IngredientCategory } from "@/types/ingredients";
import IngredientVisual, { IngredientVisualThumb } from "./IngredientVisual";

type FoundInProduct = { handle: string; title: string };

export default function IngredientExplorer({
  productsByIngredient,
}: {
  productsByIngredient: Record<string, FoundInProduct[]>;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [viewAllOpen, setViewAllOpen] = useState(false);
  const [filter, setFilter] = useState<IngredientCategory | "all">("all");
  const touchStartX = useRef<number | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const total = ingredients.length;
  const active = ingredients[activeIndex];

  const goTo = useCallback(
    (index: number) => {
      setDirection(index > activeIndex ? "forward" : "back");
      setActiveIndex(((index % total) + total) % total);
    },
    [activeIndex, total]
  );

  const goNext = useCallback(() => {
    setDirection("forward");
    setActiveIndex((i) => (i + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setDirection("back");
    setActiveIndex((i) => (i - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || viewAllOpen) return;
      if (e.key === "ArrowRight") goNext();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "Home") goTo(0);
      else if (e.key === "End") goTo(total - 1);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [goNext, goPrev, goTo, total, viewAllOpen]);

  useEffect(() => {
    if (!viewAllOpen) return;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setViewAllOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    dialogRef.current?.focus();
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [viewAllOpen]);

  const filteredIngredients = useMemo(
    () => (filter === "all" ? ingredients : ingredients.filter((i) => i.category === filter)),
    [filter]
  );

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta < 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  }

  const foundIn = productsByIngredient[active.id] ?? [];

  return (
    <section className="relative overflow-hidden bg-cream-100 px-[5vw] py-16 sm:py-20" aria-label="Ingredient explorer">
      <div className="relative mx-auto max-w-[1380px]">
        <div
          className="relative rounded-[28px] border border-forest-100 bg-cream-50 px-4 py-8 sm:px-8 sm:py-10 lg:px-10"
          role="region"
          aria-roledescription="carousel"
          aria-label={`Ingredient explorer, ${total} ingredients`}
        >
          {/* progress */}
          <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-wide text-forest-500">
            <span aria-live="polite">
              {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <div className="flex gap-1.5" aria-hidden="true">
              {ingredients.map((ing, i) => (
                <span
                  key={ing.id}
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    i === activeIndex ? "bg-gold-500" : "bg-forest-100"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[220px_1fr_360px] lg:gap-10">
            {/* Index — desktop */}
            <nav aria-label="Ingredient index" className="hidden lg:block">
              <ul className="space-y-1 border-r border-forest-100 pr-6">
                {ingredients.map((ing, i) => (
                  <li key={ing.id}>
                    <button
                      type="button"
                      onClick={() => goTo(i)}
                      aria-current={i === activeIndex ? "true" : undefined}
                      className={`flex w-full items-center gap-3 rounded-md px-2 py-1.5 text-left text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-400 ${
                        i === activeIndex
                          ? "bg-gold-50 font-semibold text-forest"
                          : "text-forest-500 hover:bg-cream-100 hover:text-forest"
                      }`}
                    >
                      <span className="text-xs tabular-nums text-forest-300">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="uppercase tracking-wide">{ing.commonName}</span>
                    </button>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => setViewAllOpen(true)}
                className="mt-4 flex items-center gap-2 px-2 text-xs font-semibold uppercase tracking-wide text-gold-500 hover:text-gold-600"
              >
                <Grid2x2 className="h-4 w-4" aria-hidden="true" />
                View all ingredients
              </button>
            </nav>

            {/* Index — mobile/tablet */}
            <div className="lg:hidden">
              <div className="-mx-1 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Ingredient index">
                {ingredients.map((ing, i) => (
                  <button
                    key={ing.id}
                    type="button"
                    role="tab"
                    aria-selected={i === activeIndex}
                    onClick={() => goTo(i)}
                    className={`shrink-0 rounded-full border px-3.5 py-1.5 text-xs font-medium uppercase tracking-wide transition-colors ${
                      i === activeIndex
                        ? "border-gold-400 bg-gold-50 text-forest"
                        : "border-forest-100 text-forest-500"
                    }`}
                  >
                    {ing.commonName}
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setViewAllOpen(true)}
                className="mt-2 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gold-500"
              >
                <Grid2x2 className="h-3.5 w-3.5" aria-hidden="true" />
                View all
              </button>
            </div>

            {/* Visual */}
            <div
              className="relative flex min-h-[260px] items-center justify-center overflow-hidden sm:min-h-[340px]"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              style={{ touchAction: "pan-y" }}
            >
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous ingredient"
                className="absolute left-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-forest-100 bg-cream-50 text-forest transition-colors hover:border-gold-300 hover:text-gold-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-400"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>

              <IngredientVisual
                name={active.commonName}
                image={active.image}
                direction={direction}
                priority={activeIndex === 0}
              />

              <button
                type="button"
                onClick={goNext}
                aria-label="Next ingredient"
                className="absolute right-0 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-forest-100 bg-cream-50 text-forest transition-colors hover:border-gold-300 hover:text-gold-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-400"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            {/* Details */}
            <div key={active.id} className="animate-[fadeUp_0.4s_ease-out]">
              <span className="text-xs uppercase tracking-wide text-forest-300">
                {String(activeIndex + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-serif text-4xl text-forest sm:text-5xl">{active.commonName}</h3>
              <p className="mt-1 font-serif italic text-forest-500">{active.botanicalName}</p>
              <p className="mt-4 text-[15px] leading-relaxed text-forest-500">{active.shortDescription}</p>

              <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 text-sm">
                <div className="flex items-start gap-2">
                  <Compass className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" strokeWidth={1.3} aria-hidden="true" />
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-forest-300">Traditionally enjoyed for</dt>
                    <dd className="text-forest">{active.traditionalUses.join(", ")}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Leaf className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" strokeWidth={1.3} aria-hidden="true" />
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-forest-300">Plant part</dt>
                    <dd className="text-forest">{active.plantPart}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" strokeWidth={1.3} aria-hidden="true" />
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-forest-300">Origin</dt>
                    <dd className="text-forest">{active.origin}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-gold-500" strokeWidth={1.3} aria-hidden="true" />
                  <div>
                    <dt className="text-xs uppercase tracking-wide text-forest-300">Flavor profile</dt>
                    <dd className="text-forest">{active.flavorProfile}</dd>
                  </div>
                </div>
              </dl>

              <div className="mt-6">
                <span className="text-xs uppercase tracking-wide text-forest-300">Why we use it</span>
                <p className="mt-1 text-[15px] leading-relaxed text-forest-500">{active.whyWeUseIt}</p>
              </div>

              {foundIn.length > 0 && (
                <div className="mt-6 rounded-lg border border-forest-100 bg-cream-100 p-4">
                  <span className="text-xs uppercase tracking-wide text-forest-300">Found in</span>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {foundIn.map((p) => (
                      <Link
                        key={p.handle}
                        href={`/products/${p.handle}`}
                        className="rounded-full border border-forest-200 bg-cream-50 px-3 py-1 text-xs font-medium text-forest transition-colors hover:border-gold-300 hover:text-gold-600"
                      >
                        {p.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {viewAllOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-forest-900/40 px-4 py-10">
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label="All ingredients"
            tabIndex={-1}
            className="relative flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-forest-100 bg-cream-50 shadow-soft"
          >
            <div className="flex items-center justify-between border-b border-forest-100 px-6 py-4">
              <h2 className="font-serif text-2xl text-forest">All Ingredients</h2>
              <button
                type="button"
                onClick={() => setViewAllOpen(false)}
                aria-label="Close"
                className="flex h-9 w-9 items-center justify-center rounded-full text-forest hover:text-gold-500"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <div className="flex flex-wrap gap-2 border-b border-forest-100 px-6 py-3">
              {(["all", "flower", "leaf", "root", "seed"] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  className={`rounded-full border px-3.5 py-1 text-xs font-medium uppercase tracking-wide transition-colors ${
                    filter === cat
                      ? "border-gold-400 bg-gold-50 text-forest"
                      : "border-forest-100 text-forest-500 hover:text-forest"
                  }`}
                >
                  {cat === "all" ? "All" : categoryLabels[cat]}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 overflow-y-auto p-6 sm:grid-cols-3">
              {filteredIngredients.map((ing) => {
                const i = ingredients.findIndex((x) => x.id === ing.id);
                return (
                  <button
                    key={ing.id}
                    type="button"
                    onClick={() => {
                      goTo(i);
                      setViewAllOpen(false);
                    }}
                    className="flex flex-col items-center gap-2 rounded-lg border border-forest-100 p-4 text-center transition-colors hover:border-gold-300"
                  >
                    <IngredientVisualThumb category={ing.category} image={ing.image} name={ing.commonName} />
                    <span className="text-sm font-semibold text-forest">{ing.commonName}</span>
                    <span className="font-serif text-xs italic text-forest-300">{ing.botanicalName}</span>
                    <span className="text-[11px] uppercase tracking-wide text-gold-500">
                      {categoryLabels[ing.category]}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

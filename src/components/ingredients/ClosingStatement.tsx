import { Leaf } from "lucide-react";
import ScrollReveal from "@/components/about/ScrollReveal";

export default function ClosingStatement() {
  return (
    <section className="border-t border-forest-100 bg-cream-50 py-12">
      <ScrollReveal variant="up" className="mx-auto flex max-w-2xl items-center justify-center gap-4 px-[5vw] text-center">
        <Leaf className="h-4 w-4 shrink-0 text-gold-400" strokeWidth={1.3} aria-hidden="true" />
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-500">
          Real plants. Real purpose. Real tea.
        </p>
        <Leaf className="h-4 w-4 shrink-0 -scale-x-100 text-gold-400" strokeWidth={1.3} aria-hidden="true" />
      </ScrollReveal>
    </section>
  );
}

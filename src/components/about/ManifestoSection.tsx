import ScrollReveal from "./ScrollReveal";
import BotanicalDecoration from "./BotanicalDecoration";
import SectionDivider from "./SectionDivider";

export default function ManifestoSection() {
  return (
    <section className="relative overflow-hidden bg-forest py-24 sm:py-28">
      <SectionDivider flip fillClassName="fill-cream-50" className="absolute -top-px left-0" />

      <BotanicalDecoration
        variant="corner"
        color="#B0924C"
        opacity={0.25}
        className="absolute -left-4 -top-4 h-40 w-40 sm:h-56 sm:w-56"
      />
      <BotanicalDecoration
        variant="corner"
        color="#B0924C"
        opacity={0.25}
        className="absolute -right-4 -bottom-4 h-40 w-40 rotate-180 sm:h-56 sm:w-56"
      />

      <div className="relative mx-auto max-w-[760px] px-[5vw] text-center">
        <ScrollReveal variant="up">
          <h2 className="font-serif text-4xl font-semibold leading-tight text-cream-50 sm:text-5xl">
            Wellness begins with simple rituals.
          </h2>
        </ScrollReveal>
        <ScrollReveal variant="up" delayMs={150}>
          <p className="mx-auto mt-6 max-w-[640px] text-lg leading-relaxed text-cream-100/90 sm:text-xl">
            We believe in whole plants, honest ingredients, and a slower way
            of living. Our teas are an invitation to pause, inhale, and come
            back to yourself. One quiet cup can change the way you move
            through your day.
          </p>
        </ScrollReveal>
      </div>

      <SectionDivider fillClassName="fill-cream-50" className="absolute -bottom-px left-0" />
    </section>
  );
}

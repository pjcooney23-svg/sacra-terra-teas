import { Flower2, HandHeart, Leaf, Mountain } from "lucide-react";

const items = [
  {
    icon: Leaf,
    title: "Organically Grown",
    description: "No pesticides or synthetic additives.",
  },
  {
    icon: HandHeart,
    title: "Hand Blended",
    description: "Thoughtfully crafted in small batches.",
  },
  {
    icon: Flower2,
    title: "Caffeine-Free Options",
    description: "Herbal blends for balance, rest, and everyday wellness.",
  },
  {
    icon: Mountain,
    title: "Rooted in Tradition",
    description: "Inspired by old-world herbal wisdom.",
  },
];

export default function TrustStrip() {
  return (
    <section className="relative z-10 -mt-7 rounded-t-[28px] border-b border-forest-100 bg-cream-100 sm:mt-0 sm:rounded-none">
      <div className="mx-auto max-w-[1380px] px-[5vw] py-9 sm:py-11">
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {items.map((item, index) => (
            <li
              key={item.title}
              className={`flex items-start gap-4 px-0 lg:px-6 ${
                index > 0 ? "lg:border-l lg:border-forest-200" : ""
              }`}
            >
              <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-cream-50 text-forest">
                <item.icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-forest">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-forest-500">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

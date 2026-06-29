type DecorationVariant = "sprig" | "vine" | "sun" | "corner";

const variants: Record<DecorationVariant, string> = {
  sprig: "M10 90 Q 20 50 10 10 M10 30 Q 25 25 30 10 M10 50 Q -5 45 -10 30 M10 70 Q 28 68 35 55",
  vine: "M5 5 Q 40 20 20 50 Q 0 80 35 95 M20 25 Q 30 18 38 22 M15 55 Q 5 50 -2 58 M22 75 Q 33 70 40 76",
  sun: "M50 50 m-30 0 a30 30 0 1 0 60 0 a30 30 0 1 0 -60 0 M50 5 V15 M50 85 V95 M5 50 H15 M85 50 H95 M16 16 L23 23 M77 77 L84 84 M84 16 L77 23 M23 77 L16 84",
  corner: "M5 95 Q 10 40 60 30 Q 90 25 95 5 M30 60 Q 38 52 48 55 M55 35 Q 62 28 70 31",
};

export default function BotanicalDecoration({
  variant = "sprig",
  className = "",
  color = "currentColor",
  opacity = 0.18,
}: {
  variant?: DecorationVariant;
  className?: string;
  color?: string;
  opacity?: number;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={`pointer-events-none select-none ${className}`}
      style={{ color }}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={variants[variant]}
        fill="none"
        stroke="currentColor"
        strokeWidth={1}
        strokeLinecap="round"
        opacity={opacity}
      />
    </svg>
  );
}

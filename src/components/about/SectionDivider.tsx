export default function SectionDivider({
  flip = false,
  fillClassName = "fill-cream-50",
  className = "",
}: {
  flip?: boolean;
  fillClassName?: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none w-full overflow-hidden leading-[0] ${flip ? "rotate-180" : ""} ${className}`}
    >
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="h-[48px] w-full sm:h-[64px]">
        <path
          d="M0,0 C 240,70 480,75 720,40 C 960,5 1200,15 1440,55 L1440,80 L0,80 Z"
          className={fillClassName}
        />
      </svg>
    </div>
  );
}

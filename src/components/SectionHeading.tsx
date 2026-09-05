import Reveal from "./Reveal";

interface SectionHeadingProps {
  code: string;
  label: string;
  title: string;
  description?: string;
  dark?: boolean;
  className?: string;
}

/** Industrial section header: mono code, orange tick, rule, and heavy display title. */
export default function SectionHeading({
  code,
  label,
  title,
  description,
  dark = false,
  className = "",
}: SectionHeadingProps) {
  return (
    <Reveal className={className}>
      <div className="flex items-center gap-4">
        <span className="h-2.5 w-2.5 shrink-0 bg-safety" />
        <span className="kicker">
          {code} / {label}
        </span>
        <span
          className={`h-px flex-1 ${dark ? "bg-white/15" : "bg-concrete/15"}`}
          aria-hidden="true"
        />
      </div>
      <h2
        className={`mt-5 max-w-3xl font-display text-[clamp(1.9rem,4.5vw,3.1rem)] leading-[1.04] font-extrabold tracking-tight uppercase ${
          dark ? "text-white" : "text-concrete"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 max-w-2xl text-[15px] leading-relaxed sm:text-base ${
            dark ? "text-white/60" : "text-concrete/65"
          }`}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}

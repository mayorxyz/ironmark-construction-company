import type { ReactNode } from "react";
import Reveal from "./Reveal";

interface PageHeaderProps {
  code: string;
  label: string;
  title: string;
  description?: string;
  children?: ReactNode;
}

/** Dark industrial page opener used by every subpage. */
export default function PageHeader({ code, label, title, description, children }: PageHeaderProps) {
  return (
    <section className="noise relative overflow-hidden bg-concrete-deep pt-32 pb-14 sm:pt-44 sm:pb-16">
      <div className="grid-lines-dark absolute inset-0" aria-hidden="true" />
      <div
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-safety/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-x relative">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="h-2.5 w-2.5 bg-safety" aria-hidden="true" />
            <span className="kicker">
              {code} / {label}
            </span>
            <span className="h-px w-24 bg-white/15 sm:w-40" aria-hidden="true" />
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-[clamp(2.6rem,7vw,4.6rem)] leading-[0.98] font-extrabold tracking-tight text-white uppercase">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-white/60 sm:text-base">
              {description}
            </p>
          )}
        </Reveal>
        {children && <div className="mt-10">{children}</div>}
      </div>
      <div className="hazard absolute inset-x-0 bottom-0 h-1.5" aria-hidden="true" />
    </section>
  );
}

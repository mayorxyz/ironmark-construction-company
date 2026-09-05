import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Icon } from "./Icons";

interface StatCounterProps {
  icon: string;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  delay?: number;
}

function useCountUp(target: number, active: boolean, reduce: boolean, duration = 1700) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!active) return;
    if (reduce) {
      setVal(target);
      return;
    }
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 4);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration, reduce]);

  return val;
}

/** Counts up once when scrolled into view. Respects reduced motion. */
export default function StatCounter({
  icon,
  value,
  prefix = "",
  suffix = "",
  label,
  delay = 0,
}: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const reduce = useReducedMotion() ?? false;
  const count = useCountUp(value, inView, reduce);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group relative px-2 py-8 text-center transition-opacity duration-700 sm:py-10"
      style={{
        opacity: inView || reduce ? 1 : 0,
        transitionDelay: `${delay}ms`,
      }}
    >
      <Icon
        name={icon}
        className="mx-auto h-7 w-7 text-safety transition-transform duration-300 group-hover:-translate-y-1"
      />
      <p className="mt-4 font-display text-5xl font-extrabold tracking-tight text-white tabular-nums sm:text-6xl">
        {prefix}
        {count.toLocaleString("en-US")}
        <span className="text-safety">{suffix}</span>
      </p>
      <p className="mt-3 font-mono text-[11px] font-medium tracking-[0.22em] text-white/50 uppercase">
        {label}
      </p>
    </div>
  );
}

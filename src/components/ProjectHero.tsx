import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Icon } from "./Icons";
import { PROJECT_IMAGES } from "../data/projects";

interface HeroSlide {
  image: string;
  word: string;
  project: string;
  meta: string;
}

const HERO_SLIDES: HeroSlide[] = [
  { image: PROJECT_IMAGES.skyline, word: "TOMORROW", project: "Skyline Tower", meta: "Denver, CO · Commercial" },
  { image: PROJECT_IMAGES.heritage, word: "LEGACIES", project: "Heritage Exchange", meta: "Chicago, IL · Renovation" },
  { image: PROJECT_IMAGES.medical, word: "COMMUNITIES", project: "Metro Medical Center", meta: "Columbus, OH · Healthcare" },
  { image: PROJECT_IMAGES.tech, word: "THE FUTURE", project: "Tech Innovation Hub", meta: "Austin, TX · Campus" },
  { image: PROJECT_IMAGES.distribution, word: "EXCELLENCE", project: "Summit Distribution Center", meta: "Indianapolis, IN · Industrial" },
];

const INTERVAL = 5000;

/**
 * Full-viewport hero. A single `activeIndex` drives BOTH the background
 * image crossfade and the rotating word — they can never drift apart.
 */
export default function ProjectHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const hiddenRef = useRef(false);
  const reduce = useReducedMotion();
  const slide = HERO_SLIDES[activeIndex];

  useEffect(() => {
    const onVisibility = () => {
      hiddenRef.current = document.hidden;
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      if (!hiddenRef.current) {
        setActiveIndex((i) => (i + 1) % HERO_SLIDES.length);
      }
    }, INTERVAL);
    return () => clearInterval(id);
  }, [paused, activeIndex]);

  // Preload the next image so crossfades never hit a blank frame.
  useEffect(() => {
    const next = HERO_SLIDES[(activeIndex + 1) % HERO_SLIDES.length];
    const img = new Image();
    img.src = next.image;
  }, [activeIndex]);

  const goTo = (i: number) => setActiveIndex((i + HERO_SLIDES.length) % HERO_SLIDES.length);

  return (
    <section
      className="noise relative flex h-[100svh] min-h-[620px] flex-col overflow-hidden bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Featured projects"
    >
      {/* --- synchronized image layer --- */}
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.img
            key={activeIndex}
            src={slide.image}
            alt={`${slide.project} — ${slide.meta}`}
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, scale: reduce ? 1 : 1.07 }}
            animate={{ opacity: 1, scale: reduce ? 1 : 1.0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 1.15, ease: "easeOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/55 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-transparent to-ink/50" />
        <div className="grid-lines-dark absolute inset-0 opacity-60" aria-hidden="true" />
      </div>

      {/* --- copy --- */}
      <div className="container-x relative z-10 flex flex-1 flex-col justify-center pt-24 pb-28">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.6, delay: 0.15 }}
        >
          <p className="flex items-center gap-3 font-mono text-[11px] tracking-[0.3em] text-white/65 uppercase">
            <span className="h-2 w-2 bg-safety" aria-hidden="true" />
            Ironmark Construction Group — Est. 1998
          </p>
        </motion.div>

        <h1 className="mt-7 font-display font-extrabold tracking-tight text-white uppercase">
  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
    <motion.span
      className="text-[clamp(1.9rem,10vw,7.2rem)] leading-[0.95]"
      initial={reduce ? false : { opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduce ? 0 : 0.7, delay: 0.25 }}
    >
      Building
    </motion.span>

    <span className="inline-block overflow-hidden text-[clamp(1.9rem,10vw,7.2rem)] leading-[1.06]">
      <AnimatePresence mode="wait">
        <motion.span
          key={activeIndex}
          className="block whitespace-nowrap text-safety"
          initial={{ opacity: 0, y: reduce ? 0 : 0.55, filter: reduce ? "none" : "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: reduce ? 0 : -0.4, filter: reduce ? "none" : "blur(4px)" }}
          transition={{ duration: reduce ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {slide.word}
        </motion.span>
      </AnimatePresence>
    </span>
  </div>
</h1>

        <motion.p
          className="mt-6 font-mono text-[11px] tracking-[0.32em] text-white/60 uppercase sm:text-[12px]"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: reduce ? 0 : 0.6, delay: 0.55 }}
        >
          Commercial · Residential · Industrial Construction
        </motion.p>

        <motion.div
          className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:items-center"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduce ? 0 : 0.6, delay: 0.7 }}
        >
          <Link to="/projects" className="btn-primary">
            View Our Projects
            <Icon name="arrow-right" className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="btn-outline-light">
            Request a Quote
          </Link>
        </motion.div>
      </div>

      {/* --- bottom bar: caption · scroll cue · slide controls --- */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/12">
        <div className="container-x flex items-center justify-center gap-6 py-4 sm:justify-between">
          <div className="hidden min-w-0 items-center gap-3 sm:flex">
            <span className="h-1.5 w-1.5 shrink-0 bg-safety" aria-hidden="true" />
            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                className="truncate font-mono text-[10px] tracking-[0.22em] text-white/55 uppercase"
                initial={{ opacity: 0, y: reduce ? 0 : 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: reduce ? 0 : 0.35 }}
              >
                Now showing — {slide.project} · {slide.meta}
              </motion.p>
            </AnimatePresence>
          </div>

          <div className="relative mx-auto hidden h-12 w-px overflow-hidden bg-white/20 scroll-line md:block" aria-hidden="true" />

          <div className="flex items-center gap-1.5" role="group" aria-label="Hero slide controls">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Previous project"
              className="flex h-9 w-9 cursor-pointer items-center justify-center border border-white/20 text-white/70 transition-colors hover:border-safety hover:text-safety"
            >
              <Icon name="chevron-left" className="h-4 w-4" />
            </button>
            {HERO_SLIDES.map((s, i) => (
              <button
                key={s.project}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Show ${s.project}`}
                aria-current={i === activeIndex}
                className={`h-9 cursor-pointer px-1.5 font-mono text-[11px] tracking-widest transition-colors duration-200 ${
                  i === activeIndex ? "bg-safety font-bold text-white" : "text-white/50 hover:text-white"
                }`}
              >
                {String(i + 1).padStart(2, "0")}
              </button>
            ))}
            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Next project"
              className="flex h-9 w-9 cursor-pointer items-center justify-center border border-white/20 text-white/70 transition-colors hover:border-safety hover:text-safety"
            >
              <Icon name="chevron-right" className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="hazard h-1.5" aria-hidden="true" />
      </div>
    </section>
  );
}

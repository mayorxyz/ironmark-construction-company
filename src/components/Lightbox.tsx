import { useCallback, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Icon } from "./Icons";
import { useBodyLock } from "../lib/utils";

interface LightboxProps {
  images: string[];
  alts: string[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

/** Fullscreen gallery viewer with keyboard + arrow navigation. */
export default function Lightbox({ images, alts, index, onClose, onNavigate }: LightboxProps) {
  const reduce = useReducedMotion();
  useBodyLock(true);

  const prev = useCallback(
    () => onNavigate((index - 1 + images.length) % images.length),
    [index, images.length, onNavigate]
  );
  const next = useCallback(
    () => onNavigate((index + 1) % images.length),
    [index, images.length, onNavigate]
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, prev, next]);

  return (
    <motion.div
      className="fixed inset-0 z-[70] flex flex-col bg-ink/95"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduce ? 0 : 0.25 }}
      role="dialog"
      aria-modal="true"
      aria-label="Project image gallery"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-5 py-4 sm:px-8">
        <p className="font-mono text-[12px] tracking-[0.2em] text-white/60">
          {String(index + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="flex h-11 w-11 cursor-pointer items-center justify-center border border-white/25 text-white transition-colors hover:border-safety hover:text-safety"
        >
          <Icon name="close" className="h-5 w-5" />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-14 pb-6 sm:px-20" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-3 z-10 flex h-12 w-12 cursor-pointer items-center justify-center border border-white/25 bg-ink/60 text-white transition-colors hover:border-safety hover:text-safety sm:left-6"
        >
          <Icon name="chevron-left" className="h-5 w-5" />
        </button>

        <AnimatePresence mode="wait">
          <motion.img
            key={index}
            src={images[index]}
            alt={alts[index] ?? "Project photograph"}
            initial={{ opacity: 0, scale: reduce ? 1 : 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
            className="max-h-full max-w-full object-contain shadow-2xl"
          />
        </AnimatePresence>

        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="absolute right-3 z-10 flex h-12 w-12 cursor-pointer items-center justify-center border border-white/25 bg-ink/60 text-white transition-colors hover:border-safety hover:text-safety sm:right-6"
        >
          <Icon name="chevron-right" className="h-5 w-5" />
        </button>
      </div>

      <p className="pb-6 text-center font-mono text-[11px] tracking-[0.2em] text-white/40 uppercase">
        {alts[index] ?? ""}
      </p>
    </motion.div>
  );
}

import { useEffect } from "react";

/** Days elapsed since a fixed ISO date — used for the live incident-free counter. */
export function daysSince(iso: string): number {
  const then = new Date(`${iso}T00:00:00`);
  const now = new Date();
  return Math.max(0, Math.floor((now.getTime() - then.getTime()) / 86_400_000));
}

export function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}

/** Sets document.title per route. */
export function usePageTitle(title: string): void {
  useEffect(() => {
    document.title = `${title} — Ironmark Construction Group`;
  }, [title]);
}

/** Locks body scroll while `locked` is true (mobile menu / lightbox). */
export function useBodyLock(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}

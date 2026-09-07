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

/**
 * Locks body scroll while `locked` is true (mobile menu / lightbox).
 *
 * - Locks overflow on both html and body (iOS Safari requires both)
 * - Plain overflow:hidden — no position:fixed scheme, so the layout never
 *   shifts while the menu is open
 * - Restores previous inline styles on cleanup
 */
export function useBodyLock(locked: boolean): void {
  useEffect(() => {
    if (!locked) return;

    const html = document.documentElement;
    const body = document.body;

    const prevHtmlOverflow = html.style.overflow;
    const prevBodyOverflow = body.style.overflow;

    // Simple, reliable lock: overflow hidden on both html and body (iOS Safari
    // needs both). No position:fixed / top offset — that scheme shifts the
    // layout on mobile and can push the menu's content out of the viewport.
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    return () => {
      html.style.overflow = prevHtmlOverflow;
      body.style.overflow = prevBodyOverflow;
    };
  }, [locked]);
}
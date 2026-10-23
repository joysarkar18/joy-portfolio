import { useEffect } from 'react';
import Lenis from 'lenis';

/** Shared so nav links can call scrollTo on the same instance. */
export const lenisRef: { current: Lenis | null } = { current: null };

export function scrollToId(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  if (lenisRef.current) {
    lenisRef.current.scrollTo(target, { offset: -72, duration: 1.1 });
  } else {
    target.scrollIntoView({ behavior: 'smooth' });
  }
}

export function useLenis() {
  useEffect(() => {
    // Respect the OS "reduce motion" setting: plain native scrolling.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenisRef.current = lenis;

    let frame = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);
}

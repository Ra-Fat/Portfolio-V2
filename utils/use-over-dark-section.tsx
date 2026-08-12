"use client";

import { useEffect, useRef, useState, type RefObject } from "react";

const BLEND_RANGE = 60;

const easeInOutCubic = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

export const useDarkSectionProgress = (
  navRef: RefObject<HTMLElement | null>,
  sectionId: string
) => {
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const section = document.getElementById(sectionId);
    const nav = navRef.current;
    if (!section || !nav) return;

    const update = () => {
      const navRect = nav.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();

      const navCenter = navRect.top + navRect.height / 2;
      const distance = sectionRect.top - navCenter;

      let raw = 0;
      if (distance <= 0) {
        raw = Math.min(1, -distance / BLEND_RANGE);
      }

      setProgress(easeInOutCubic(raw));
      rafRef.current = null;
    };

    const onScroll = () => {
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [navRef, sectionId]);

  return progress;
};
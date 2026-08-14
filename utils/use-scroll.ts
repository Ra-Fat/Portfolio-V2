"use client";

import { useEffect, useRef, useState } from "react";

interface Position {
  x: number;
  y: number;
}

/**
 * Smoothly interpolates a rendered position toward a target position every frame.
 * factor: 0-1, lower = lazier/slower trailing, higher = snappier
 */
export function useLazyFollow(
  target: Position,
  active: boolean,
  factor = 0.15,
) {
  const [smoothPos, setSmoothPos] = useState(target);
  const targetRef = useRef(target);
  const smoothRef = useRef(target);
  const rafRef = useRef<number | null>(null);

  targetRef.current = target;

  useEffect(() => {
    if (!active) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      return;
    }

    const tick = () => {
      const dx = targetRef.current.x - smoothRef.current.x;
      const dy = targetRef.current.y - smoothRef.current.y;

      smoothRef.current = {
        x: smoothRef.current.x + dx * factor,
        y: smoothRef.current.y + dy * factor,
      };

      setSmoothPos({ ...smoothRef.current });
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [active, factor]);

  // snap instantly to the first position when hover starts, so it doesn't fly in from (0,0)
  useEffect(() => {
    if (active) {
      smoothRef.current = targetRef.current;
      setSmoothPos(targetRef.current);
    }
  }, [active]);

  return smoothPos;
}

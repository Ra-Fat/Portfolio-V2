"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import HoverLinks from "@/components/atoms/hover-link";
import { NavbarLinks } from "@/data";
// import { useDarkSectionProgress } from "@/hooks/use-dark-section-progress";
import { useDarkSectionProgress } from "@/utils/use-over-dark-section";

interface DesktopNavProps {
  active: string;
  handleLinkClick: (id: string) => void;
}

const mix = (from: [number, number, number], to: [number, number, number], t: number) =>
  from.map((c, i) => Math.round(c + (to[i] - c) * t)) as [number, number, number];

export const DesktopNav = ({ active, handleLinkClick }: DesktopNavProps) => {
  const navRef = useRef<HTMLElement>(null);
  const progress = useDarkSectionProgress(navRef, "dark-section");
  const isDark = progress > 0.5;

  const bg = mix([255, 255, 255], [0, 0, 0], progress);
  const bgAlpha = 0.7 - progress * 0.1;
  const border = mix([0, 0, 0], [255, 255, 255], progress);

  const linkRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0, ready: false });

  useLayoutEffect(() => {
    const el = linkRefs.current[active];
    if (!el) return;
    setIndicator({ left: el.offsetLeft, width: el.offsetWidth, ready: true });
  }, [active]);

  useEffect(() => {
    const onResize = () => {
      const el = linkRefs.current[active];
      if (!el) return;
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth, ready: true });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [active]);

  return (
    <div className="hidden sm:flex items-center justify-center w-full">
      <div className="flex justify-center">
        <nav
          ref={navRef}
          className="relative flex gap-3 rounded-full backdrop-blur-md shadow-sm px-3 py-2"
          style={{
            backgroundColor: `rgba(${bg.join(",")}, ${bgAlpha})`,
            border: `1px solid rgba(${border.join(",")}, 0.1)`,
          }}
        >
          <div
            className="absolute top-2 bottom-2 rounded-2xl transition-all duration-400 ease-out"
            style={{
              left: indicator.left,
              width: indicator.width,
              backgroundColor: isDark ? "#fff" : "#000",
              opacity: indicator.ready ? 1 : 0,
              transitionProperty: "left, width, background-color, opacity",
            }}
          />
          {NavbarLinks.map(({ id, label }) => (
            <button
              key={id}
              ref={(el) => {
                linkRefs.current[id] = el;
              }}
              onClick={() => handleLinkClick(id)}
              className={`relative z-10 rounded-2xl px-4 py-2 cursor-pointer text-sm transition-colors duration-300 ${
                active === id
                  ? isDark
                    ? "text-black font-semibold"
                    : "text-white font-semibold"
                  : isDark
                    ? "text-white/70 hover:text-white"
                    : "hover:text-black"
              }`}
            >
              <HoverLinks text={label} />
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};
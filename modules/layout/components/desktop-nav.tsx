"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import HoverLinks from "@/components/atoms/hover-link";
import { NavbarLinks } from "@/config";
import { useNavColors } from "@/utils/use-nav-color";

interface DesktopNavProps {
  active: string;
  handleLinkClick: (id: string) => void;
}

export const DesktopNav = ({ active, handleLinkClick }: DesktopNavProps) => {
  const navRef = useRef<HTMLElement>(null);
  const { isDark, style } = useNavColors(navRef, "dark-section");

  return (
    <div className="hidden sm:flex items-center justify-center w-full">
      <div className="flex justify-center">
        <nav
          ref={navRef}
          className="relative flex gap-3 rounded-full backdrop-blur-md shadow-sm px-3 py-2"
          style={style}
        >
          {NavbarLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => handleLinkClick(id)}
              className="relative z-10 rounded-2xl px-4 py-2 cursor-pointer text-sm"
            >
              {active === id && (
                <motion.div
                  layoutId="nav-active-pill"
                  className="absolute inset-0 rounded-2xl"
                  style={{ backgroundColor: isDark ? "#fff" : "#000" }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 32,
                  }}
                />
              )}
              <span
                className={`relative z-10 transition-colors duration-300 ${
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
              </span>
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

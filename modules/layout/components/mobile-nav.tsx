"use client";

import { useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { NavbarLinks } from "@/config";
import { useNavColors } from "@/utils/use-nav-color";

export interface NavbarLink {
  id: string;
  label: string;
}

interface MobileNavProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  active: string;
  handleLinkClick: (id: string) => void;
}

export const MobileNav = ({
  menuOpen,
  setMenuOpen,
  active,
  handleLinkClick,
}: MobileNavProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isDark, style } = useNavColors(containerRef, "dark-section");

  // close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuOpen &&
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen, setMenuOpen]);

  const handleClick = (id: string) => {
    handleLinkClick(id);
    setMenuOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className="fixed top-4 left-0 right-0 z-50 sm:hidden flex flex-col items-center w-full px-4"
    >
      {/* Top bar */}
      <div
        onClick={() => setMenuOpen((prev) => !prev)}
        className="flex items-center justify-between py-4 rounded-full
                   backdrop-blur-md w-full cursor-pointer select-none
                   transition-colors duration-300"
        style={style}
      >
        <h2
          className={`font-bold px-5 text-lg uppercase transition-colors duration-300 ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          ARAFAT
        </h2>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen((prev) => !prev);
          }}
          className={`px-5 cursor-pointer transition-colors duration-300 ${
            isDark ? "text-white" : "text-black"
          }`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Dropdown */}
      <div
        className={`mt-3 w-full grid transition-[grid-template-rows] duration-300 ease-in-out
             ${menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div
          className="overflow-hidden rounded-2xl backdrop-blur-md"
          style={{
            backgroundColor: style.backgroundColor,
          }}
        >
          <ul className="flex flex-col p-2 gap-2 m-2">
            {NavbarLinks.map(({ id, label }) => (
              <li
                key={id}
                onClick={() => handleClick(id)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-pointer transition-colors duration-300
            ${
              active === id
                ? isDark
                  ? "bg-white text-black font-semibold"
                  : "bg-black text-white font-semibold"
                : isDark
                  ? "text-white/70 hover:text-white"
                  : "text-black/60 hover:text-black"
            }`}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

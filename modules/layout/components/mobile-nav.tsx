'use client'

import { useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export interface NavbarLink {
  id: string;
  label: string;
  icon: string;
}

export const NavbarLinks: NavbarLink[] = [
  { id: "home", label: "Home", icon: "Home" },
  { id: "about", label: "About", icon: "User" },
  { id: "skills", label: "Skills", icon: "Code" },
  { id: "experiences", label: "Experiences", icon: "Briefcase" },
  { id: "projects", label: "Projects", icon: "FolderKanban" },
  { id: "contact", label: "Contact", icon: "Mail" },
];

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
  const containerRef = useRef(null);

  // close when clicking outside
  //   useEffect(() => {
  //     const handleClickOutside = (e) => {
  //       if (
  //         menuOpen &&
  //         containerRef.current &&
  //         !containerRef.current.contains(e.target as Node)
  //       ) {
  //         setMenuOpen(false);
  //       }
  //     };

  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => document.removeEventListener("mousedown", handleClickOutside);
  //   }, [menuOpen]);

  const handleClick = (id: string) => {
    handleLinkClick(id);
    setMenuOpen(false);
  };

  return (
    <div
      ref={containerRef}
      className="sm:hidden flex flex-col items-center w-full"
    >
      {/* Top bar */}
      <div
        onClick={() => setMenuOpen((prev) => !prev)}
        className="flex items-center justify-between rounded-full
                   bg-black/40 px-5 py-2 border border-white/20
                   backdrop-blur-md cursor-pointer select-none"
      >
        <h2>Jack</h2>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setMenuOpen((prev) => !prev);
          }}
          className="p-2 text-white cursor-pointer"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Dropdown */}
      <div
        className={`mt-3 w-full rounded-2xl bg-black/40 border border-white/20 backdrop-blur-md
                   overflow-hidden transition-all duration-300 ease-in-out
                   ${menuOpen ? "max-h-96 opacity-100 px-2 py-2" : "max-h-0 opacity-0 px-2 py-0"}`}
      >
        <ul className="flex flex-col p-2 gap-2">
          {NavbarLinks.map(({ id, label }) => (
            <li
              key={id}
              onClick={() => handleClick(id)}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl cursor-pointer transition
                    ${
                      active === id
                        ? "bg-[#212121] text-white"
                        : "text-gray-400 hover:bg-[#212121] hover:text-white"
                    }`}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

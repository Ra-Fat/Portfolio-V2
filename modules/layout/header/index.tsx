"use client";

import { useState, useEffect, useRef } from "react";
import { DesktopNav } from "../components/desktop-nav";
import { MobileNav } from "../components/mobile-nav";


export const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const userClickedRef = useRef(false);

  const handleLinkClick = (id: string) => {
    userClickedRef.current = true;
    setActive(id);
    setMenuOpen(false);
  };

  return (
    <div className="sticky top-5 z-50 w-full container">
      <DesktopNav active={active} handleLinkClick={handleLinkClick} />

      <MobileNav
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        active={active}
        handleLinkClick={handleLinkClick}
      />
    </div>
  );
};

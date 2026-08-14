"use client";

import { useState, useEffect, useRef } from "react";
import { DesktopNav } from "../components/desktop-nav";
import { MobileNav } from "../components/mobile-nav";
import { NavbarLinks } from "@/config";
import { useLenis } from "lenis/react";

export const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const userClickedRef = useRef(false);
  const clickTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const lenis = useLenis();

  const handleLinkClick = (id: string) => {
    userClickedRef.current = true;
    setActive(id);
    setMenuOpen(false);

    const section = document.getElementById(id);

    if (lenis && section) {
      lenis.scrollTo(section, {
        duration: 2.2,
        easing: (t: number) => 1 - Math.pow(1 - t, 4), // easeOutQuart, nice slow settle
      });
    } else {
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current);
    clickTimeoutRef.current = setTimeout(() => {
      userClickedRef.current = false;
    }, 2500); // should be >= duration above (in ms)
  };

  useEffect(() => {
    const sections = NavbarLinks.map(({ id }) =>
      document.getElementById(id),
    ).filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (userClickedRef.current) return;

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

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

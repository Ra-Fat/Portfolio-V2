"use client";

import { useEffect, useRef } from "react";
import HoverLinks from "@/components/atoms/hover-link";
import { gsap } from "gsap";
import Lenis from "lenis";
import Link from "next/link";

export let lenis: Lenis | null = null;

const NAV_LINKS = [
  { href: "#about", label: "ABOUT" },
  { href: "#work", label: "WORK" },
];

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    lenis = new Lenis({
      duration: 1.7,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.7,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis?.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    const links = navRef.current?.querySelectorAll("a[data-href]") ?? [];
    const handleClick = (e: Event) => {
      if (window.innerWidth <= 1024) return;
      e.preventDefault();
      const el = e.currentTarget as HTMLAnchorElement;
      const section = el.getAttribute("data-href");
      if (!section || !lenis) return;
      const target = document.querySelector(section) as HTMLElement | null;
      if (target) lenis.scrollTo(target, { offset: 0, duration: 1.5 });
    };
    links.forEach((el) => el.addEventListener("click", handleClick));

    const handleResize = () => lenis?.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(rafId);
      links.forEach((el) => el.removeEventListener("click", handleClick));
      window.removeEventListener("resize", handleResize);
      lenis?.destroy();
      lenis = null;
    };
  }, []);

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-5 md:px-12"
      >
        <Link
          href="/#"
          data-cursor="disable"
          className="text-md font-semibold tracking-wide"
        >
          RAFAT.
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a href={href} data-href={href}>
                <HoverLinks text={label} />
              </a>
            </li>
          ))}

          <li>
              <a className="rounded-xl bg-[#FF6A00] text-sm text-white px-4 py-2.5 font-medium" href='#contact' data-href='#contact'>
                Contact
              </a>
            </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
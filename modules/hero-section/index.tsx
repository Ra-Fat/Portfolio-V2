import React from "react";
import { IconType } from "react-icons";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { HeroMarquee } from "@/components/atoms/hero-marquee";

import Squares from "@/components/canvas/squres";

interface SocialLink {
  href: string;
  icon: IconType;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    href: "https://web.facebook.com/ra.fat.626421/",
    icon: FaFacebook,
    label: "Facebook",
  },
  {
    href: "https://www.instagram.com/urj4zz_/",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/arafat-man/",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  { href: "https://github.com/Ra-Fat", icon: FaGithub, label: "GitHub" },
];

export const HeroSection = () => {
  return (
    <div className="fixed inset-0 h-screen w-full flex items-center justify-center overflow-hidden z-0">
      <div className="relative container z-10 flex flex-col items-center text-center">
        <h1
          style={{ fontSize: "clamp(52px, 12vw, 96px)" }}
          className="font-moderniz uppercase leading-[0.9] tracking-tight"
        >
          <span className="text-primary">ARA</span>
          <span
            style={{
              WebkitTextStroke: "1.5px rgba(0,0,0,0.35)",
              color: "transparent",
            }}
          >
            FAT
          </span>
        </h1>
        <p
          className="mt-8 font-sans text-lg text-black"
        >
          Software Engineer & Full-Stack Developer
        </p>
      </div>
      <HeroMarquee />
    </div>
  );
};

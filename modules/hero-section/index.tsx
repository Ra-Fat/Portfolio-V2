import React from "react";
import { IconType } from "react-icons";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

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
    <div className="fixed inset-0 h-screen container flex items-center justify-center overflow-hidden z-0">
      <div className="relative z-10 flex flex-col items-center text-center">
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
      </div>
      <div>
        <div className="flex flex-col gap-5 absolute bottom-10 left-0">
          {socialLinks.map((s) => {
            const Icon = s.icon;
            return (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
              >
                <Icon className="w-8 h-8" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

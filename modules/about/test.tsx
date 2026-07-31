"use client";

import React from "react";
import { ImageCarousel } from "@/utils/image-animation";
import { SectionTitle } from "@/components/atoms/section-title";

const images = [
  { id: 1, img: "/profiles/freestyle1.jpg" },
  { id: 2, img: "/profiles/freestyle2.jpg" },
  { id: 3, img: "/profiles/freestyle3.jpg" },
];

export const About = () => {
  return (
    <div className="w-full h-screen">
      <div className="overflow-x-hidden py-20 container">
        <div className="flex flex-col w-full text-white">
          <SectionTitle title="About" subtitle="Profile" />

          <div className="w-full mt-4 flex items-start">
            <section className="flex-1 flex flex-col items-start gap-6">
              <div className=" font-(family-name:--font-inter) text-white/60 text-base md:text-lg leading-relaxed flex flex-col gap-5">
                <p>
                  I'm Aayush Bharti, a proactive full-stack developer passionate
                  about creating dynamic web experiences. From frontend to
                  backend, I thrive on solving complex problems with clean,
                  efficient code. My expertise spans React, Next.js, and
                  Node.js, and I'm always eager to learn more.
                </p>
                <p>
                  When I'm not immersed in work, I'm exploring new ideas and
                  staying curious. Life's about balance, and I love embracing
                  every part of it.
                </p>
              </div>
            </section>

            <section className="flex-1 h-58">
              <ImageCarousel images={images} />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

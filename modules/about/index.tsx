"use client";

import React, { useState, useEffect, useRef } from "react";
import { SectionTitle } from "@/components/atoms/section-title";
import { Card } from "@/components/ui/card";
import { Overview } from "@/components/molecules/overview";
import { ImageCarousel } from "@/utils/image-animation";
import { Feature } from "@/components/molecules/features";
import { Education } from "@/components/molecules/education";

const images = [
  { id: 1, img: "/profiles/freestyle1.jpg" },
  { id: 2, img: "/profiles/freestyle2.jpg" },
  { id: 3, img: "/profiles/freestyle3.jpg" },
];

export const About = () => {
  return (
    <div className="w-full mt-10">
      <div className="overflow-x-hidden py-20 container">
        <div className="flex flex-col w-full text-white">
          <SectionTitle title="About" subtitle="Profile" />

          <div className="w-full mt-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
              <Card className="flex flex-col h-75 text-white">
                <Overview />
              </Card>

              <Card className="flex flex-col gap-4 h-75">
                <ImageCarousel images={images} />
              </Card>

              <Card className="relative overflow-hidden h-75">
                <Feature />
              </Card>

              <Card className="md:col-span-3 flex flex-col gap-4 h-45">
                <Education/>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

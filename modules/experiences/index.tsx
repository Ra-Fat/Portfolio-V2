'use client'

import { SectionTitle } from "@/components/atoms/section-title";
import { DesktopTimeline } from "@/components/templates/desktop-timeline";
import { useEffect, useState, useRef } from "react";
import { MobileTimeline } from "@/components/templates/mobile-timeline";
import { ExperienceData } from "@/data";


export const Experience = () => {

  return (
    <div className="w-full py-15 select-none">
      <div className="flex flex-col container">
        <SectionTitle title="Experience" subtitle="Volunteer" />
        <div className="mt-4"></div>
        <MobileTimeline
          experiences={ExperienceData}
        />
        <DesktopTimeline
          experiences={ExperienceData}
        />
      </div>
    </div>
  );
};

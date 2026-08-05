import React from "react";
import { ExperienceCard } from "@/components/molecules/experience-card";
import { ProgressBar } from "@/components/atoms/progress-bar";

type Props = {
  experiences: any[];
  scrollProgress: number;
};

export const MobileTimeline = ({ experiences, scrollProgress }: Props) => (
  <div className="flex md:hidden w-full">
    {/* Left bar */}
    <div className="flex flex-col items-center pr-3 pt-2">
      <ProgressBar scrollProgress={scrollProgress} vertical />
    </div>

    {/* Cards */}
    <div className="flex-1 space-y-5">
      {experiences.map((exp, index) => (
        <ExperienceCard exp={exp} />
      ))}
    </div>
  </div>
);

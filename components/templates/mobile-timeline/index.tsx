import React from "react";
import { ExperienceCard } from "@/components/molecules/experience-card";
import { ProgressBar } from "@/components/atoms/progress-bar";

type Props = {
  experiences: any[];
};

export const MobileTimeline = ({ experiences }: Props) => {
  const points = experiences.map(
    (_, index) => (index / Math.max(experiences.length - 1, 1)) * 100,
  );
  return (
    <div className="flex md:hidden w-full">
      <div className="flex flex-col items-center pr-3 pt-2">
        <ProgressBar vertical points={points}/>
      </div>
      <div className="flex-1 space-y-5">
        {experiences.map((exp, index) => (
          <ExperienceCard exp={exp} />
        ))}
      </div>
    </div>
  );
};

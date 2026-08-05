import React from 'react';
import { ProgressBar } from '@/components/atoms/progress-bar';
import { ExperienceCard } from '@/components/molecules/experience-card';

type Props = {
  experiences: any[];
  scrollProgress: number;
};

export const DesktopTimeline = ({ experiences, scrollProgress }: Props) => {
  const points = experiences.map(
    (_, index) => (index / Math.max(experiences.length - 1, 1)) * 100
  );

  return (
    <div className="hidden md:block">
      <div className="relative">
        <ProgressBar scrollProgress={scrollProgress} vertical={false} points={points} />

        {/* Cards */}
        <div className="relative space-y-12">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={index} className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
                <div className="w-full md:w-[calc(50%-3rem)]">
                  <ExperienceCard exp={exp} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
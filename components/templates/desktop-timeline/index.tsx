"use client";

import { motion, type Variants } from "framer-motion";
import { ProgressBar } from "@/components/atoms/progress-bar";
import { ExperienceCard } from "@/components/molecules/experience-card";

type Props = {
  experiences: any[];
};

const cardVariants: Variants = {
  hidden: (isLeft: boolean) => ({
    opacity: 0,
    x: isLeft ? -60 : 60,
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const DesktopTimeline = ({ experiences }: Props) => {
  const points = experiences.map(
    (_, index) => (index / Math.max(experiences.length - 1, 1)) * 100,
  );

  return (
    <div className="hidden md:block">
      <div className="relative">
        <ProgressBar vertical={false} points={points} />
        <div className="relative space-y-12">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={index}
                className={`flex ${isLeft ? "justify-start" : "justify-end"}`}
              >
                <motion.div
                  className="w-full md:w-[calc(50%-3rem)]"
                  custom={isLeft}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <ExperienceCard exp={exp} />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
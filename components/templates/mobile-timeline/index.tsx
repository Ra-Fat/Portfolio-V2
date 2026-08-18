"use client";

import { motion, type Variants } from "framer-motion";
import { ExperienceCard } from "@/components/molecules/experience-card";
import { ProgressBar } from "@/components/atoms/progress-bar";

type Props = {
  experiences: any[];
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const MobileTimeline = ({ experiences }: Props) => {
  const points = experiences.map(
    (_, index) => (index / Math.max(experiences.length - 1, 1)) * 100,
  );
  return (
    <div className="flex md:hidden w-full">
      <div className="flex flex-col items-center pr-3 pt-2">
        <ProgressBar vertical points={points} />
      </div>
      <div className="flex-1 space-y-5">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <ExperienceCard exp={exp} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

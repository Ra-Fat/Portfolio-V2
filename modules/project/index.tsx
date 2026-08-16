"use client";

import { motion, type Variants } from "framer-motion";
import { SectionTitle } from "@/components/atoms/section-title";
import { ProjectCard } from "@/components/molecules/project-card";
import { ProjectsData } from "@/data";

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

export const Project = () => {
  return (
    <section className="select-none">
      <div className="flex flex-col container text-white">
        <SectionTitle title="Projects" subtitle="Showcase" />
        <div className="flex flex-col gap-5">
          {ProjectsData.map((project, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                custom={isLeft}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
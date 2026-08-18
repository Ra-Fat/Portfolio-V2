"use client";

import { motion, type Variants } from "framer-motion";
import { SectionTitle } from "@/components/atoms/section-title";
import { ProjectCard } from "@/components/molecules/project-card";
import { ProjectDetails } from "@/components/molecules/project-detail";
import { ProjectsData } from "@/data";
import { useEffect, useState } from "react";
import { useLenisInstance } from "@/components/canvas/smooth-scroll";

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
  const [selectedProject, setSelectedProject] = useState<
    (typeof ProjectsData)[number] | null
  >(null);

  const lenis = useLenisInstance();

  useEffect(() => {
    if (!lenis) return;

    if (selectedProject) {
      lenis.stop();
      document.body.style.overflow = "hidden"; // also lock in case user scrolls via touch/keyboard
    } else {
      lenis.start();
      document.body.style.overflow = "";
    }

    return () => {
      lenis.start();
      document.body.style.overflow = "";
    };
  }, [selectedProject, lenis]);

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
                <ProjectCard
                  project={project}
                  index={index}
                  onSelect={() => setSelectedProject(project)}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
      {selectedProject && (
        <ProjectDetails
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

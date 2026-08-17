"use client";

import { motion, type Variants } from "framer-motion";
import { SectionTitle } from "@/components/atoms/section-title";
import { Overview } from "@/components/molecules/overview";
import { ImageCarousel } from "@/utils/image-animation";
import { Feature } from "@/components/molecules/features";
import { AboutProfile, AboutFeature } from "@/data";
import { AboutCard } from "@/components/molecules/about-card";
import { Education } from "@/components/molecules/education";
import { OverviewProfile } from "@/data";

// Stagger the grid children in one after another as the section scrolls
// into view, instead of all four popping in at once.
const gridContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Direction-specific entrance variants. Each card slides in from off its
// resting position and fades in, using an ease-in-out curve so the motion
// feels smooth rather than snapping into place.
const fromLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] },
  },
};

const fromRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] },
  },
};

const fromBottom: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] },
  },
};

export const About = () => {
  return (
    <section>
      <div className="overflow-x-hidden container select-none">
        <div className="flex flex-col w-full">
          <SectionTitle title="About" subtitle="Profile" />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 overflow-hidden"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="md:col-span-2 lg:col-span-1"
              variants={fromLeft}
            >
              <AboutCard>
                <Overview data={OverviewProfile} />
              </AboutCard>
            </motion.div>

            <motion.div className="h-75 md:h-auto" variants={fromBottom}>
              <AboutCard className="h-full">
                <ImageCarousel images={AboutProfile} />
              </AboutCard>
            </motion.div>

            <motion.div variants={fromRight}>
              <AboutCard>
                <Feature images={AboutFeature} />
              </AboutCard>
            </motion.div>

            <motion.div
              className="md:col-span-2 md:h-auto h-62 lg:col-span-3"
              variants={fromBottom}
            >
              <AboutCard>
                <Education />
              </AboutCard>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

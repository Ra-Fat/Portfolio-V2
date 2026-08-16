"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { SectionTitle } from "@/components/atoms/section-title";
import { TechStackData } from "@/data";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0, // all icons animate together
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export const Skills = () => {
  return (
    <section>
      <div className="flex flex-col container text-white">
        <SectionTitle title="PROFICIENCIES" subtitle="stack" />

        <motion.div
          className="flex flex-wrap justify-center gap-8 lg:gap-12 py-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {TechStackData.map(({ name, icon }) => (
            <motion.div
              key={name}
              variants={itemVariants}
              className="flex flex-col items-center gap-4 w-24"
            >
              <div className="relative w-12 h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden flex items-center justify-center">
                <Image src={icon} alt={name} fill className="object-cover" />
              </div>
              <span className="text-sm font-semibold text-secondary text-center">
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
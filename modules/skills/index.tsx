"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { SectionTitle } from "@/components/atoms/section-title";
import { TechStackData } from "@/data";

// Icons are laid out with flex-wrap (original design). This constant is
// used purely to bucket icons into "rows" for staggering the pop-in —
// it's an approximation of how many icons fit per line at typical
// desktop widths. Since flex-wrap doesn't expose real row boundaries to
// JS, this won't perfectly match every screen size/icon count, but it
// reliably produces a row-by-row wave effect rather than a strict
// pixel-accurate row split.
const ITEMS_PER_ROW = 6;
const ROW_DELAY = 0.15; // seconds between each row's pop-in

const containerVariants: Variants = {
  hidden: {},
  visible: {},
};

// "Pop out" entrance: starts from nothing (scale 0, slightly rotated,
// invisible) and springs up past 1 before settling. The `delay` is driven
// by the `custom` row index passed at render time, so every icon in the
// same row fires together, and each row pops in slightly after the last.
const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    rotate: -12,
  },
  visible: (rowIndex: number) => ({
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 15,
      mass: 0.6,
      delay: rowIndex * ROW_DELAY,
    },
  }),
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
          {TechStackData.map(({ name, icon }, index) => (
            <motion.div
              key={name}
              custom={Math.floor(index / ITEMS_PER_ROW)}
              variants={itemVariants}
              whileHover={{
                scale: 1.15,
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              whileTap={{ scale: 0.95 }}
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

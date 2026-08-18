"use client";

import { motion, type Variants } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
  },
};

const slashVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.65, 0, 0.35, 1] },
  },
};

const subtitleVariants: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.65, 0, 0.35, 1] },
  },
};

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <motion.div
      className="flex items-center gap-3 w-full justify-start mb-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.span
        variants={titleVariants}
        className="text-xl md:text-2xl font-bold uppercase text-muted"
      >
        {title}
      </motion.span>
      {subtitle && (
        <>
          <motion.span
            variants={slashVariants}
            className="text-lg md:text-3xl font-black text-gray-300"
          >
            /
          </motion.span>
          <motion.span
            variants={subtitleVariants}
            className="text-xl md:text-2xl font-bold uppercase text-muted-foreground"
          >
            {subtitle}
          </motion.span>
        </>
      )}
    </motion.div>
  );
};

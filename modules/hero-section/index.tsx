"use client";

import { motion, type Variants } from "framer-motion";
import { HeroMarquee } from "@/components/atoms/hero-marquee";
import { HeroWireframeDecor } from "@/components/canvas/hero-frame";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export const HeroSection = () => {
  return (
    <div className="fixed inset-0 h-screen w-full flex items-center justify-center overflow-hidden z-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <HeroWireframeDecor
          className="absolute inset-0 z-0"
          showGround
          scrollZoom
          sideOffset={10}
          size={2.6}
          topOffset={6}
        />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative container z-10 flex flex-col items-center text-center"
      >
        <motion.h1
          variants={itemVariants}
          style={{ fontSize: "clamp(52px, 12vw, 96px)" }}
          className="font-moderniz uppercase leading-[0.9] tracking-tight"
        >
          <span className="">ARA</span>
          <span
            style={{
              WebkitTextStroke: "1.5px rgba(0,0,0,0.35)",
              color: "transparent",
            }}
          >
            FAT
          </span>
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-8 text-sm md:text-lg font-semibold text-neutral-600"
        >
          Software Engineer & Full-Stack Developer
        </motion.p>
      </motion.div>

      <HeroMarquee />
    </div>
  );
};
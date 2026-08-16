"use client";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const overview = [
  "Full Stack Developer",
  "Software Engineer",
  "API Developer",
  "Problem Solver",
  "Team Collaborator",
  "Continuous Learner",
];

export const HeroMarquee = () => {
  return (
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.9,
        delay: 0.6,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      }}
      className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none"
    >
      <div className="w-full bg-primary">
        <Marquee direction="left" speed={50} gradient={false} autoFill>
          {overview.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-10 px-4 py-4 text-sm text-white md:text-base font-semibold tracking-wide uppercase whitespace-nowrap"
            >
              {item}
              <motion.span
                className="text-white/20"
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                |
              </motion.span>
            </span>
          ))}
        </Marquee>
      </div>
    </motion.div>
  );
};

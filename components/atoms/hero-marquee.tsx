"use client";
import Marquee from "react-fast-marquee";
import { Dot } from "lucide-react";

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
    <div className="absolute bottom-0   left-0 w-full overflow-hidden pointer-events-none">
      <div className="w-full bg-primary">
        <Marquee direction="left" speed={50} gradient={false} autoFill>
          {overview.map((item, i) => (
            <span
              key={i}
              className={`flex items-center gap-10 px-4 py-4 text-sm text-white md:text-base font-semibold tracking-wide uppercase whitespace-nowrap `}
            >
              {item}
              <span className="text-white/20">|</span>
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

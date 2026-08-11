"use client";

import React from "react";
import { Eye } from "lucide-react";

type Props = {
  id: string | number;
  isHovering: boolean;
  pos: { x: number; y: number };
  text?: string;
  icon?: React.ReactNode;
  size?: number;
  spinDuration?: string;
};

export const CircularHoverBadge = ({
  id,
  isHovering,
  pos,
  text = "OPEN TO EXPLORE",
  icon = <Eye className="w-4 h-4 text-white" />,
  size = 100,
  spinDuration = "9s",
}: Props) => {
  const pathId = `circlePath-${id}`;

  return (
    <div
      className="pointer-events-none absolute z-20 transition-opacity duration-300"
      style={{
        left: pos.x,
        top: pos.y,
        transform: "translate(-50%, -50%)",
        opacity: isHovering ? 1 : 0,
      }}
    >
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <svg
          viewBox="0 0 200 200"
          className="absolute inset-0 w-full h-full animate-spin"
          style={{ animationDuration: spinDuration }}
        >
          <defs>
            <path
              id={pathId}
              d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
            />
          </defs>
          <text fill="white" fontSize="20" fontWeight="600" letterSpacing="2">
            <textPath href={`#${pathId}`} startOffset="0%">
              {text} &nbsp;•&nbsp; {text} &nbsp;•&nbsp;
            </textPath>
          </text>
        </svg>

        <div className="relative z-10 w-9 h-9 rounded-full bg-white/10 border border-white/30 backdrop-blur-sm flex items-center justify-center">
          {icon}
        </div>
      </div>
    </div>
  );
};
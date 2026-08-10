"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Props = {
  project: {
    name: string;
    description: string;
    image_banner: string;
    techstack: string[];
    date: string;
    image_gallery: string[];
    video_demo: string;
    github_link: string;
    hosting_link: string;
  };
  index: number;
};

export const ProjectCard = ({ project, index }: Props) => {
  const isEven = index % 2 === 0;
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Card
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={cn(
        "relative grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 items-center group overflow-hidden",
        "transform transition-all duration-700 ease-out",
      )}
    >
      {/* Image */}
      <Link
        href={project.hosting_link}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "relative overflow-hidden flex justify-center items-center cursor-pointer",
          isEven ? "md:order-1" : "md:order-2",
        )}
      >
        <Image
          src={project.image_banner}
          alt={project.name}
          width={400}
          height={400}
          className="object-contain transition-all duration-500 group-hover:scale-105 group-hover:brightness-50 group-hover:blur-[1px]"
        />
      </Link>

      <CardContent
        className={cn(
          "flex flex-col gap-4 p-0",
          isEven ? "md:order-2" : "md:order-1 pl-4",
        )}
      >
        <h2 className="text-xl font-bold text-white uppercase">{project.name}</h2>
        <p className="text-secondary leading-relaxed text-base">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3">
          {project.techstack.map((tech, i) => (
            <div
              key={i}
              className="px-3 py-1.5 rounded-md text-xs font-medium bg-white/3 border border-white/20 hover:bg-white/10 transition-colors text-secondary"
            >
              {tech}
            </div>
          ))}
        </div>

        <div className="w-full mt-3 h-px bg-linear-to-r from-transparent via-gray-700 to-transparent" />

        <div className="flex items-center justify-between">
          <p className="text-muted text-sm leading-relaxed flex-1 line-clamp-3">
            {project.date}
          </p>
        </div>
      </CardContent>

      {/* Cursor-following badge — spans the whole card, positioned wherever the mouse is */}
      <div
        className="pointer-events-none absolute z-20 transition-opacity duration-300"
        style={{
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          opacity: isHovering ? 1 : 0,
        }}
      >
        <div className="relative w-32 h-32 flex items-center justify-center">
          {/* rotating circular text */}
          <svg
            viewBox="0 0 200 200"
            className="absolute inset-0 w-full h-full animate-spin [animation-duration:9s]"
          >
            <defs>
              <path
                id={`circlePath-${index}`}
                d="M 100,100 m -80,0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
              />
            </defs>
            <text fill="white" fontSize="12" fontWeight="600" letterSpacing="3">
              <textPath href={`#circlePath-${index}`} startOffset="0%">
                OPEN TO EXPLORE &nbsp;•&nbsp; OPEN TO EXPLORE &nbsp;•&nbsp;
              </textPath>
            </text>
          </svg>

          {/* static center icon */}
          <div className="relative z-10 w-14 h-14 rounded-full bg-white/10 border border-white/30 backdrop-blur-sm flex items-center justify-center">
            <Eye className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </Card>
  );
};
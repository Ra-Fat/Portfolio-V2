"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CircularHoverBadge } from "@/components/atoms/circular-hover";
import { useLazyFollow } from "@/utils/use-scroll";

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
  const [rawPos, setRawPos] = useState({ x: 0, y: 0 });

  // badge position lazily trails the raw mouse position
  const pos = useLazyFollow(rawPos, isHovering, 0.12); // lower factor = lazier

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setRawPos({
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
      <div
        className={cn(
          "relative overflow-hidden flex justify-center items-center",
          isEven ? "md:order-1" : "md:order-2",
        )}
      >
        <Image
          src={project.image_banner}
          alt={project.name}
          width={400}
          height={400}
          className="object-contain"
        />
      </div>

      <CardContent
        className={cn(
          "flex flex-col gap-4 p-0",
          isEven ? "md:order-2" : "md:order-1 pl-4",
        )}
      >
        <h2 className="text-xl font-bold text-white uppercase">
          {project.name}
        </h2>
        <p className="text-secondary leading-relaxed text-base">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3">
          {project.techstack.map((tech, i) => (
            <div
              key={i}
              className="px-2 py-1 rounded-md text-[10px] font-medium bg-white/3 border border-white/20 hover:bg-white/10 transition-colors text-secondary"
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

      <CircularHoverBadge id={index} isHovering={isHovering} pos={pos} />
    </Card>
  );
};

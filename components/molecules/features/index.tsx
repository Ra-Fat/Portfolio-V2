"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface CarouselImage {
  id: string | number;
  src: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
}

export const Feature: React.FC<ImageCarouselProps> = ({images}) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const project = images[current];

  return (
    <section className="flex flex-col">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-md leading-tight uppercase">Features</h3>
        <div className="flex gap-1.5">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-4 bg-background" : "bg-background/20 w-1.5"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="h-60  w-full relative overflow-hidden rounded-xl mt-4">
        <Image
          key={project.id}
          src={project.src}
          alt=""
          fill
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-end pointer-events-none z-20">
          <span className="text-[10px] tracking-wider text-muted border border-white/10 rounded-md px-2 py-0.5">
            certificate
          </span>
        </div>
      </div>
    </section>
  );
};

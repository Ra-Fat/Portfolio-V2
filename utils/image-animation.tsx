'use client'

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface CarouselImage {
  id: string | number;
  img: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
}

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(() => {
    if (hovered || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [hovered, images.length]);

  const getPosition = (
    index: number
  ): "left" | "center" | "right" => {
    const total = images.length;
    const diff = (index - currentIndex + total) % total;

    if (diff === 0) return "center";
    if (diff === 1) return "right";
    return "left";
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <div
      className="relative flex h-full w-full items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {images.map((image, index) => {
        const position = getPosition(index);

        return (
          <div
            key={image.id}
            className={`absolute transition-all duration-700 ease-in-out ${
              position === "center"
                ? "z-30 scale-100 cursor-grab opacity-100"
                : position === "left"
                ? "z-10 -translate-x-20 scale-75 -rotate-12 opacity-40"
                : "z-20 translate-x-20 scale-90 rotate-6 opacity-60"
            }`}
          >
            <div className="h-45 w-30 overflow-hidden md:h-50 md:w-40 xl:w-45 xl:h-60">
              <Image
                src={image.img}
                alt={`Carousel image ${index + 1}`}
                fill
                className="h-full w-full object-cover rounded-3xl"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
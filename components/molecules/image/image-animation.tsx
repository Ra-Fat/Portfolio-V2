import Image from 'next/image';
import React, { useState, useEffect } from 'react';

export interface CarouselImage {
  id: string | number;
  img: string;
  alt?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
  intervalMs?: number;
}

type Position = 'center' | 'left' | 'right';

export const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, intervalMs = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [hovered, setHovered] = useState<boolean>(false);

  useEffect(() => {
    if (hovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [hovered, images.length, intervalMs]);

  const getPosition = (index: number): Position => {
    const total = images.length;
    const diff = (index - currentIndex + total) % total;

    if (diff === 0) return 'center';
    if (diff === 1) return 'right';
    return 'left';
  };

  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {images.map((image, index) => {
        const position = getPosition(index);

        return (
          <div
            key={image.id}
            className={`absolute transition-all duration-700 ease-in-out ${
              position === 'center'
                ? 'z-30 opacity-100 scale-100 cursor-grab'
                : position === 'left'
                ? 'z-10 opacity-40 scale-75 -translate-x-20 -rotate-12'
                : 'z-20 opacity-60 scale-85 translate-x-20 rotate-6'
            }`}
          >
            <div className="w-40 h-60 md:w-40 md:h-50 rounded-3xl shadow-2xl overflow-hidden">
              <Image
                src={image.img}
                alt={image.alt ?? ''}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
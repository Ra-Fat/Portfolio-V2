import React, { useRef, useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

type Props = {
  exp: {
    title: string;
    position: string;
    description: string;
    date: string;
  };
  index: number;
  expandedIndex: number | null;
  setExpandedIndex: (i: number | null) => void;
  scrollProgress: number;
  totalCount: number;
};

export const ExperienceCard = ({
  exp,
  index,
  expandedIndex,
  setExpandedIndex,
  scrollProgress,
  totalCount,
}: Props) => {
  const hasAnimatedRef = useRef(false);
  const [isVisible, setIsVisible] = useState(false);

  const triggerPoint = (index / Math.max(totalCount - 1, 1)) * 100;
  const distance = scrollProgress - triggerPoint + 20;
  const shouldBeVisible = distance >= 0;

  useEffect(() => {
    if (shouldBeVisible && !hasAnimatedRef.current) {
      hasAnimatedRef.current = true;
      setIsVisible(true);
    }
  }, [shouldBeVisible]);

  return (
    <Card
      className="p-5 rounded-2xl cursor-pointer"
      onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
    >
      <CardHeader className="p-0 mb-4">
        <CardTitle className="truncate text-[16px] md:text-xl font-semibold text-primary">
          {exp.title}
        </CardTitle>
        <h2 className="text-[13px] md:text-base font-semibold text-secondary mt-2">
          {exp.position}
        </h2>
      </CardHeader>

      <CardContent className="p-0">
        <p className="text-muted leading-relaxed mb-4 text-[14px]">
          {exp.description}
        </p>
        <div className="w-full h-px bg-linear-to-r from-transparent via-gray-700 to-transparent" />
      </CardContent>

      <CardFooter className="p-0 mt-3">
        <div className="text-[10px] md:text-[12px] text-muted">{exp.date}</div>
      </CardFooter>
    </Card>
  );
};

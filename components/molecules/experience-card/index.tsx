import React from "react";
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
};

export const ExperienceCard = ({ exp }: Props) => (
  <Card className="rounded-2xl">
    <CardHeader className="p-0 mb-4">
      <CardTitle className="text-xl uppercase text-white font-bold">
        {exp.title}
      </CardTitle>
      <h2 className="text-md font-semibold text-secondary mt-2">
        {exp.position}
      </h2>
    </CardHeader>

    <CardContent className="p-0">
      <p className="text-muted leading-relaxed mb-4 text-sm">
        {exp.description}
      </p>
      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-700 to-transparent" />
      <div className="text-[10px] md:text-[12px] text-muted mt-4">{exp.date}</div>
    </CardContent>

    {/* <CardFooter className="p-0 mt-3">
      <div className="text-[10px] md:text-[12px] text-muted">{exp.date}</div>
    </CardFooter> */}
  </Card>
);

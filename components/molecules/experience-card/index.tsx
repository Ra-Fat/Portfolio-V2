import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type Props = {
  exp: {
    title: string;
    position: string;
    description: string;
    date: string;
  };
};

export const ExperienceCard = ({ exp }: Props) => (
  <Card>
    <CardHeader className="p-0">
      <CardTitle className="text-lg uppercase font-bold">
        {exp.title}
      </CardTitle>
      <h2 className="text-md font-semibold text-secondary mt-2">
        {exp.position}
      </h2>
    </CardHeader>

    <CardContent className="p-0">
      <p className="text-secondary leading-relaxed mb-4 text-sm">
        {exp.description}
      </p>
      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-700 to-transparent" />
      <div className="text-[10px] font-semibold text-muted mt-4">
        {exp.date}
      </div>
    </CardContent>
  </Card>
);

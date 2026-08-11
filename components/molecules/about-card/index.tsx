import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AboutCardProps {
  children: React.ReactNode;
  className?: string;
}

export const AboutCard = ({ children, className }: AboutCardProps) => {
  return (
    <Card className={cn("h-80 flex flex-col", className)}>
      {children}
    </Card>
  );
};
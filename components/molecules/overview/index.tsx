import { OverviewData } from "@/data/interface";

interface OverviewProps {
  data: OverviewData;
}

export const Overview = ({ data }: OverviewProps) => {
  return (
    <section>
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full border-2 flex items-center justify-center shrink-0">
          <span className="font-bold text-lg">{data.initials}</span>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-lg leading-tight uppercase">
            {data.name}
          </h3>
          <p className="text-sm leading-snug">{data.role}</p>
        </div>
      </div>
      <p className="text-base leading-relaxed mt-6">{data.description}</p>
    </section>
  );
};

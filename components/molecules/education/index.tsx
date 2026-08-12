import { EducationData } from "@/data";

export const Education = () => {
  return (
    <section className="flex flex-col gap-3">
      <h3 className="font-bold text-lg leading-tight uppercase text-center">Education</h3>
      <div className="flex flex-col gap-3">
        {EducationData.map((item, i) => (
          <div key={i} className="flex items-start justify-between gap-3">
            <div className="flex flex-col gap-0.5 flex-1 min-w-0">
              <p className="font-medium text-base leading-snug truncate">
                {item.title}
              </p>
              {item.sub && (
                <p className="text-muted-foreground text-xs font-medium leading-relaxed line-clamp-2">
                  {item.sub}
                </p>
              )}
            </div>
            <span className="shrink-0 text-[10px] font-semibold tracking-wider text-muted border border-white/8 rounded-md px-2 py-1 whitespace-nowrap">
              {item.badge}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

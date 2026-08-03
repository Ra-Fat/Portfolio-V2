export const OverviewData = [
  {
    title: "Cambodia Academy of Digital Technology",
    sub: "Computer Science - Software Engineering",
    badge: "2024 – 2027",
  },
  {
    title: "Preah Bat Norodom Sihamoni High School",
    sub: "Completed High School Education",
    badge: "2018 – 2023",
  },
];

export const Education = () => {
  return (
    <section className="flex flex-col gap-3 text-white">
      <h3 className=" font-bold text-md leading-tight uppercase text-center">Education</h3>
      <div className="flex flex-col gap-3">
        {OverviewData.map((item, i) => (
          <div key={i} className="flex items-start justify-between gap-3">
            <div className="flex flex-col gap-0.5 flex-1 min-w-0">
              <p className="text-[14px] font-medium leading-snug truncate">
                {item.title}
              </p>
              {item.sub && (
                <p className="text-[10px] text-muted leading-relaxed line-clamp-2">
                  {item.sub}
                </p>
              )}
            </div>
            <span className="shrink-0 text-[10px] tracking-wider text-muted border border-white/8 rounded-md px-2 py-1 whitespace-nowrap mt-0.5">
              {item.badge}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

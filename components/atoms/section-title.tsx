interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="flex items-center gap-3 w-full justify-start mb-6">
      <span className="text-xl md:text-2xl font-bold uppercase">{title}</span>
      {subtitle && (
        <>
          <span className="text-lg md:text-3xl font-black text-gray-300">
            /
          </span>
          <span className="text-xl md:text-2xl font-bold uppercase text-gray-500">
            {subtitle}
          </span>
        </>
      )}
    </div>
  );
};

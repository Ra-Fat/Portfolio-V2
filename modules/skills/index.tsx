import Image from "next/image";
import { SectionTitle } from "@/components/atoms/section-title";
import { TechStackData } from "@/data";

export const Skills = () => {
  return (
    <section>
      <div className="flex flex-col container text-white">
        <SectionTitle title="PROFICIENCIES" subtitle="stack" />

        <div className="flex flex-wrap justify-center gap-8 lg:gap-12 py-10">
          {TechStackData.map(({ name, icon }) => (
            <div key={name} className="flex flex-col items-center gap-4 w-24">
              <div className="relative w-12 h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden flex items-center justify-center">
                <Image src={icon} alt={name} fill className="object-cover" />
              </div>
              <span className="text-sm font-semibold text-secondary text-center">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

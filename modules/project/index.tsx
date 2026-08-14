import { SectionTitle } from "@/components/atoms/section-title";
import { ProjectCard } from "@/components/molecules/project-card";
import { ProjectsData } from "@/data";

export const Project = () => {
  return (
    <section className="select-none">
      <div className="flex flex-col container text-white">
        <SectionTitle title="Projects" subtitle="Showcase" />
        <div className="flex flex-col gap-5">
          {ProjectsData.map((project, index) => (
            <div key={index} className="">
              <ProjectCard
                project={project}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

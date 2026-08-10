import { SectionTitle } from "@/components/atoms/section-title";
import { ProjectCard } from "@/components/molecules/project-card";

export interface Project {
  name: string;
  description: string;
  techstack: string[];
  date: string;
  github_link: string;
  hosting_link: string;
  image_banner: string;
  video_demo: string;
  image_gallery: string[];
}

export const ProjectsData: Project[] = [
  {
    name: "KOMPLEX",
    description:
      "KOMPLEX is a free, interactive STEM learning platform for Cambodian high school students, offering curriculum-aligned lessons to improve understanding through engaging visuals and self-paced study.",
    techstack: [
      "PostgreSQL",
      "Next.js",
      "Express.js",
      "Tailwind CSS",
      "TypeScript",
      "Docker",
      "Firebase",
    ],
    github_link: "https://github.com/KOMPLEX-KH/KOMPLEX.git",
    hosting_link: "https://komplex.app/",
    video_demo: "https://youtu.be/7lELfMt81No",
    date: "Sep 2025",
    image_banner: "/projects/komplex/komplexF.png",
    image_gallery: [],
  },
  {
    name: "Grand Cineplex",
    description:
      "A comprehensive full-stack cinema management system for Cambodia's cinema. It features multi-role interfaces for customers, cashiers, and managers, enabling online bookings, and administrative management.",
    techstack: [
      "Express.js",
      "PostgreSQL",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    github_link: "https://github.com/RaksaOC/Grand-Cineplex.git",
    hosting_link: "",
    video_demo: "https://youtu.be/ENPb3mJ1BhM",
    date: "July 2025",
    image_banner: "/projects/grand-cineplex/grandcineplexF.png",
    image_gallery: [],
  },
  {
    name: "UniFinder",
    description:
      "An offline Flutter app helping Cambodian students, find suitable university majors using local JSON. Users answer questions to match majors, create personalized plans, and explore Phnom Penh universities and careers.",
    techstack: [
      "Flutter",
      "Dart",
      "JSON",
      "Shared Preferences",
      "Local Storage",
    ],
    github_link: "https://github.com/Ra-Fat/UniFinder.git",
    hosting_link: "",
    video_demo: "https://youtu.be/luuqpryOJ3g",
    date: "Jan 2026",
    image_banner: "/projects/unifinder/unifinderF.png",
    image_gallery: [],
  },
  {
    name: "Frost-Guard",
    description:
      "The Winter Siege is a tower defense strategy game where players defend their castle from waves of enemies in a magical, endless winter world. Players place and upgrade towers, manage resources, and plan strategically to survive increasingly difficult enemy waves.",
    techstack: ["unity", "csharp", "animation"],
    github_link: "https://github.com/Ra-Fat/Frost-Guard.git",
    hosting_link: "",
    video_demo: "https://youtu.be/mIUvftuUees?si=o4scTwVXMq5XJlVO",
    date: "Dec 2025",
    image_banner: "/projects/game/game-mac-frame.png",
    image_gallery: [],
  },
];

export const Project = () => {
  return (
    <div className="w-full py-15 ">
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
    </div>
  );
};

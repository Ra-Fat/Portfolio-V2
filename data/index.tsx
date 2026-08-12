import { OverviewData } from "./interface";

export const Profiles = [
  { id: 1, img: "/profiles/freestyle1.jpg" },
  { id: 2, img: "/profiles/freestyle2.jpg" },
  { id: 3, img: "/profiles/freestyle3.jpg" },
];

export const feature_item = [
  { id: 1, src: "/features/aspire-certificate.png" },
  { id: 2, src: "/features/komplex-certificate.jpg" },
  { id: 3, src: "/features/teaching-certificate.jpg" },
];

export const OverviewProfile: OverviewData = {
  initials: "RF",
  name: "ARafat Man",
  role: "Software Engineer & Full-Stack Developer",
  description:
    "I am a fourth-year Computer Science student with a strong interest in software development, specializing in web and mobile application development. I enjoy building practical applications, learning new technologies, and turning ideas into functional solutions.",
};

export const EducationData = [
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

export const ExperienceData = [
  {
    title: "Internship - ione Cambodia",
    position: "Backend Developer",
    date: "July 2026 - Sep 2026",
    description:
      "Worked as a Backend Developer for 3 months, building and maintaining backend services with FastAPI and PostgreSQL. Gained hands-on experience designing APIs within a microservice architecture and collaborating closely with the development team.",
  },
  {
    title: "Internship - OneWorld Technology Co, Ltd",
    position: "Web Developer",
    date: "April 2026 - June 2026",
    description:
      "Worked as a Web Developer for 3 months, building the frontend for a corporate website serving both B2B and B2C, using Strapi, Next.js, and MySQL. Gained experience integrating internationalization and redesigning the admin portal for non-technical users.",
  },
  {
    title: "Next-Gen Engagement Program",
    position: "Web design trainer",
    date: "June 2025 - Aug 2025",
    description:
      "A peer-mentoring program at school where third-year students like myself teach web design to sophomore students, covering HTML, CSS, JavaScript, and UX/UI principles through hands-on practice, to help prepare them for their second year.",
  },
  {
    title: "Next-Gen Engagement Program",
    position: "Competition Participant",
    date: "Aug 2025 - Sep 2025",
    description:
"A project-based competition under the Next-Gen program where my team built Komplex, a free, open-source STEM learning platform for Cambodian high school students. The project earned First Runner-Up.",  },
];


export interface NavbarLink {
  id: string;
  label: string;
}

export const NavbarLinks: NavbarLink[] = [
  { id: "home", label: "Home",  },
  { id: "about", label: "About" },
  { id: "experiences", label: "Experiences" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact"},
];

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
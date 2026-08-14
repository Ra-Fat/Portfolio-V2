import { Mail, MapPin } from "lucide-react";

export const AboutProfile = [
  { id: 1, img: "/profiles/freestyle1.jpg" },
  { id: 2, img: "/profiles/freestyle2.jpg" },
  { id: 3, img: "/profiles/freestyle3.jpg" },
];

export const AboutFeature = [
  { id: 1, src: "/features/oneworld-certificate.jpg" },
  { id: 2, src: "/features/aspire-certificate.png" },
  { id: 3, src: "/features/komplex-certificate.jpg" },
  { id: 4, src: "/features/teaching-certificate.jpg" },
];

export const OverviewProfile = {
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
      "A project-based competition under the Next-Gen program where my team built Komplex, a free, open-source STEM learning platform for Cambodian high school students. The project earned First Runner-Up.",
  },
];

export const ProjectsData = [
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
    name: "Uni-Finder",
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

export type TechStackItem = {
  name: string;
  icon: string;
};

export const TechStackData: TechStackItem[] = [
  { name: "Next.js", icon: "/tech-stack/nextjs.png" },
  { name: "React", icon: "/tech-stack/reactjs.png" },
  { name: "Node.js", icon: "/tech-stack/nodejs.png" },
  { name: "Express.js", icon: "/tech-stack/express.png" },
  { name: "FastAPI", icon: "/tech-stack/fastapi.svg" },
  { name: "HTML", icon: "/tech-stack/html.png" },
  { name: "CSS", icon: "/tech-stack/css.png" },
  { name: "Flutter", icon: "/tech-stack/flutter.png" },
  { name: "C#", icon: "/tech-stack/csharp.png" },
  { name: "Java", icon: "/tech-stack/java.webp" },
  { name: "JavaScript", icon: "/tech-stack/javascript.png" },
  { name: "TypeScript", icon: "/tech-stack/typescript.png" },
  { name: "Unity", icon: "/tech-stack/unity.png" },
  { name: "MySQL", icon: "/tech-stack/mysql.png" },
  { name: "PostgreSQL", icon: "/tech-stack/postgres.png" },
  { name: "Docker", icon: "/tech-stack/docker.png" },
  { name: "Strapi", icon: "/tech-stack/strapi.jpg" },
  { name: "Tailwind CSS", icon: "/tech-stack/tailwind.png" },
  { name: "Shadcn", icon: "/tech-stack/shadcn.png" },
  { name: "Figma", icon: "/tech-stack/figma.png" },
  { name: "Git", icon: "/tech-stack/git.png" },
  { name: "GitHub", icon: "/tech-stack/github.webp" },
  { name: "GitLab", icon: "/tech-stack/gitlab.svg" },
  { name: "Notion", icon: "/tech-stack/notion.png" },
  { name: "Postman", icon: "/tech-stack/postman.png" },
  { name: "Apidog", icon: "/tech-stack/apidog.jpg" },
  { name: "Traefik", icon: "/tech-stack/traefik.webp" },
];

export const ContactData = [
  {
    src: "/social/linkedin.png",
    label: "LinkedIn",
    username: "@arafat-man",
    href: "https://www.linkedin.com/in/arafat-man/",
  },
  {
    src: "/social/github.png",
    label: "GitHub",
    username: "@Ra-Fat",
    href: "https://github.com/Ra-Fat",
  },
  {
    src: "/social/facebook.png",
    label: "Facebook",
    username: "@Arafat Man",
    href: "https://web.facebook.com/urj4zz/",
  },
  {
    src: "/social/telegram.png",
    label: "Telegram",
    username: "@arafat_man",
    href: "https://t.me/arafat_man",
  },
];
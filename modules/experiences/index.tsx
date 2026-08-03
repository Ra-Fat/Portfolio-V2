import { SectionTitle } from "@/components/atoms/section-title";
import { DesktopTimeline } from "@/components/templates/desktop-timeline";
import { MobileTimeline } from "@/components/templates/mobile-timeline";

export const ExperienceData = [
  {
    title: "Internship - ione Co, Ltd",
    position: "Backend Develop",
    date: "April 2026 - June 2026",
    description:
      "A 3-month internship focused on web development, where I contributed to building and maintaining web applications, gaining hands-on experience in real-world projects and collaborating with a team of developers.",
    tags: ["Teaching", "Web Design"],
    pdf_link: "/Certi.pdf",
  },
  {
    title: "Internship - OneWorld Technology",
    position: "Web Developer",
    date: "April 2026 - June 2026",
    description:
      "A 3-month internship focused on web development, where I contributed to building and maintaining web applications, gaining hands-on experience in real-world projects and collaborating with a team of developers.",
    tags: ["Teaching", "Web Design"],
    pdf_link: "/Certi.pdf",
  },
  {
    title: "Next-Gen Engagement",
    position: "Web design trainer",
    date: "June 2025 - Aug 2025",
    description:
      "A community-driven program focused on sharing knowledge, mentoring junior students, building leadership skills, and applying theory through real-world projects and competitions.",
    tags: ["Teaching", "Web Design"],
    pdf_link: "/Certi.pdf",
  },
  {
    title: "Next-Gen Engagement",
    position: "Competition Participant",
    date: "Aug 2025 - Sep 2025",
    description:
      "A project-based competition under the Next-Gen program where I contributed to team development and achieved second place.",
    tags: ["Komplex", "Competition"],
    pdf_link: "/Komplex.pdf",
  },
  {
    title: "Innovative Tech Challenge",
    position: "Competition Participant",
    date: "Oct 2025 - Jan 2026",
    description:
      "A national innovation competition organized by CamTech University, encouraging students to develop practical tech solutions aligned with Sustainable Development Goals (SDGs). Our team was selected among the Top 10 finalists, promoting innovation and entrepreneurial thinking.",
    tags: ["Komplex", "Competition"],
    pdf_link: "/Komplex.pdf",
  },
  {
    title: "Aspire Leadership  Program",
    position: "Learner Participant",
    date: "June 2025 - Aug 2025",
    description:
      "A leadership and soft-skills program focused on communication, teamwork, confidence building, and personal growth.",
    tags: ["Soft Skill", "Leadership"],
    pdf_link: "/cfaspireprogram.pdf",
  },
];

export const Experience = () => {
  return (
    <div className="w-full mt-15 h-screen">
      <div className="flex flex-col container text-white">
        <SectionTitle title="Experience" subtitle="Volunteer" />
        {/* <MobileTimeline
          experiences={experiences}
          scrollProgress={scrollProgress}
          expandedIndex={expandedIndex}
          setExpandedIndex={setExpandedIndex}
        />
        <DesktopTimeline
          experiences={experiences}
          scrollProgress={scrollProgress}
          expandedIndex={expandedIndex}
          setExpandedIndex={setExpandedIndex}
        /> */}
      </div>
    </div>
  );
};

'use client'

import { SectionTitle } from "@/components/atoms/section-title";
import { DesktopTimeline } from "@/components/templates/desktop-timeline";
import { useEffect, useState, useRef } from "react";
import { MobileTimeline } from "@/components/templates/mobile-timeline";

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
      "Worked as a Web Developer for 3 months, building a company website and client project with Strapi as CMS, Next.js, and MySQL."  
  },
  {
    title: "Next-Gen Engagement",
    position: "Web design trainer",
    date: "June 2025 - Aug 2025",
    description:
      "A school program where I taught web design to junior students, covering HTML, CSS, JavaScript, and UX/UI principles, to help prepare them for their second year."  },
  {
    title: "Next-Gen Engagement",
    position: "Competition Participant",
    date: "Aug 2025 - Sep 2025",
    description:
      "A project-based competition under the Next-Gen program where my team developed the project Komplex and achieved First Runner-Up.",
  },
];

export const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const timelineRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | null>(null);
  const targetProgressRef = useRef(0);

  const experiences = ExperienceData || [];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const distanceFromTop = window.innerHeight / 2 - rect.top;
      targetProgressRef.current = Math.min(
        100,
        Math.max(0, (distanceFromTop / rect.height) * 100),
      );
    };

    const animate = () => {
      setScrollProgress((prev) => {
        const eased = prev + (targetProgressRef.current - prev) * 0.1;
        return Math.abs(eased - prev) < 0.1 ? targetProgressRef.current : eased;
      });
      requestRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    animate();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <div className="w-full py-15 ">
      <div className="flex flex-col container text-white">
        <SectionTitle title="Experience" subtitle="Volunteer" />
        <div className="mt-5"></div>
        <MobileTimeline
          experiences={ExperienceData}
          scrollProgress={scrollProgress}
        />
        <DesktopTimeline
          experiences={ExperienceData}
          scrollProgress={scrollProgress}
        />
      </div>
    </div>
  );
};

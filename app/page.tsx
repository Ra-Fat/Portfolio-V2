import { HeroSection } from "@/modules/hero-section";
import { About } from "@/modules/about";
import { Experience } from "@/modules/experiences";
import { Contact } from "@/modules/contact";
import { Skills } from "@/modules/skills";
import { Project } from "@/modules/project";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="relative z-10 h-screen" aria-hidden />
      <section className="relative z-10 flex bg-foreground flex-col gap-12 py-25">
        <About />
        <Experience />
        <Project />
        <Skills />
        <Contact />
      </section>
    </div>
  );
}
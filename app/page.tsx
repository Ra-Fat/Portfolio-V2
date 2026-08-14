import { HeroSection } from "@/modules/hero-section";
import { About } from "@/modules/about";
import { Experience } from "@/modules/experiences";
import { Contact } from "@/modules/contact";
import { Skills } from "@/modules/skills";
import { Project } from "@/modules/project";
import Squares from "@/components/canvas/squres";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div id="home" className="relative z-10 h-screen" aria-hidden />

      <div
        id="dark-section"
        className="relative z-10 flex bg-foreground flex-col gap-10 md:gap-15 lg:gap-20  xl:gap-25 py-25"
      >
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Squares borderColor="rgba(255, 255, 255, 0.06)" squareSize={48} />
        </div>
        <section id="about" aria-labelledby="about-heading">
          <About />
        </section>
        <section id="experience" aria-labelledby="experiences-heading">
          <Experience />
        </section>
        <section id="project" aria-labelledby="project-heading">
          <Project />
        </section>
        <section id="skill" aria-labelledby="skills-heading">
          <Skills />
        </section>
        <section id="contact" aria-labelledby="contact-heading">
          <Contact />
        </section>
      </div>
    </main>
  );
}

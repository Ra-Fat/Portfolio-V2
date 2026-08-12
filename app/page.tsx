import { HeroSection } from "@/modules/hero-section";
import { About } from "@/modules/about";
import { Experience } from "@/modules/experiences";
import { Contact } from "@/modules/contact";
import { Skills } from "@/modules/skills";
import { Project } from "@/modules/project";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div id="home" className="relative z-10 h-screen" aria-hidden />

      <div
        id="dark-section"
        className="relative z-10 flex bg-foreground flex-col gap-15 py-25"
      >
        <section id="about" aria-labelledby="about-heading">
          <About />
        </section>
        <section id="experiences" aria-labelledby="experiences-heading">
          <Experience />
        </section>
        <section id="project" aria-labelledby="project-heading">
          <Project />
        </section>
        <section id="skills" aria-labelledby="skills-heading">
          <Skills />
        </section>
        <section id="contact" aria-labelledby="contact-heading">
          <Contact />
        </section>
      </div>
    </main>
  );
}

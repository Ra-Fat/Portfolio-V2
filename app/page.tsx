import { HeroSection } from "@/modules/hero-section";
import { About } from "@/modules/about";
import { Experience } from "@/modules/experiences";
import { Contact } from "@/modules/contact";
import { Skills } from "@/modules/skills";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <div className="relative z-10">
        <div className="h-screen" aria-hidden />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

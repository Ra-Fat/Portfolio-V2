import { HeroSection } from "@/modules/hero-section";
import { About } from "@/modules/about";
import { Experience } from "@/modules/experiences";
import { Contact } from "@/modules/contact";
import { Skills } from "@/modules/skills";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <div className="relative z-10 h-screen" aria-hidden />
      <div className="relative z-10 bg-black">
        <About />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}
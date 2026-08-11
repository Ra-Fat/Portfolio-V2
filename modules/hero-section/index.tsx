import { HeroMarquee } from "@/components/atoms/hero-marquee";
import { HeroWireframeDecor } from "@/components/atoms/hero-frame";

export const HeroSection = () => {
  return (
    <div className="fixed inset-0 h-screen w-full flex items-center justify-center overflow-hidden z-0">
      <HeroWireframeDecor
        className="absolute inset-0 z-0"
        showGround
        scrollZoom
        sideOffset={10}
        size={2.6}
        topOffset={6}
      />
      <div className="relative container z-10 flex flex-col items-center text-center">
        <h1
          style={{ fontSize: "clamp(52px, 12vw, 96px)" }}
          className="font-moderniz uppercase leading-[0.9] tracking-tight"
        >
          <span className="">ARA</span>
          <span
            style={{
              WebkitTextStroke: "1.5px rgba(0,0,0,0.35)",
              color: "transparent",
            }}
          >
            FAT
          </span>
        </h1>

        <p className="mt-8 text-lg font-semibold text-neutral-600">
          Software Engineer & Full-Stack Developer
        </p>
      </div>
      <HeroMarquee />
    </div>
  );
};

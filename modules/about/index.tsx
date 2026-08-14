import { SectionTitle } from "@/components/atoms/section-title";
import { Overview } from "@/components/molecules/overview";
import { ImageCarousel } from "@/utils/image-animation";
import { Feature } from "@/components/molecules/features";
import { AboutProfile, AboutFeature } from "@/data";
import { AboutCard } from "@/components/molecules/about-card";
import { Education } from "@/components/molecules/education";
import { OverviewProfile } from "@/data";

export const About = () => {
  return (
    <section>
      <div className="overflow-x-hidden container select-none">
        <div className="flex flex-col w-full">
          <SectionTitle title="About" subtitle="Profile" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <AboutCard className="md:col-span-2 lg:col-span-1">
              <Overview data={OverviewProfile} />
            </AboutCard>

            <AboutCard className="h-75 md:h-auto">
              <ImageCarousel images={AboutProfile} />
            </AboutCard>

            <AboutCard>
              <Feature images={AboutFeature} />
            </AboutCard>

            <AboutCard className="md:col-span-2 md:h-auto h-62 lg:col-span-3">
              <Education />
            </AboutCard>
          </div>
        </div>
      </div>
    </section>
  );
};

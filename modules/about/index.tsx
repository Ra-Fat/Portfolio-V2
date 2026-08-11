import { SectionTitle } from "@/components/atoms/section-title";
import { Card } from "@/components/ui/card";
import { Overview } from "@/components/molecules/overview";
import { ImageCarousel } from "@/utils/image-animation";
import { Feature } from "@/components/molecules/features";
import { Profiles } from "@/data";
import { AboutCard } from "@/components/molecules/about-card";
import { Education } from "@/components/molecules/education";
import { OverviewProfile } from "@/data";

export const About = () => {
  return (
    <section>
      <div className="overflow-x-hidden container">
        <div className="flex flex-col w-full">
          <SectionTitle title="About" subtitle="Profile" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <AboutCard>
              <Overview data={OverviewProfile} />
            </AboutCard>

            <AboutCard>
              <ImageCarousel images={Profiles} />
            </AboutCard>

            <AboutCard>
              <Feature />
            </AboutCard>

            <AboutCard className="md:col-span-3 h-45">
              <Education />
            </AboutCard>
          </div>
        </div>
      </div>
    </section>
  );
};

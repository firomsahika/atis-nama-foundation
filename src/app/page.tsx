import { HeroSlider } from "@/features/Home/components/HeroSlider";
import { CoreServices } from "@/features/Home/components/CoreServices";
import { ImpactStats } from "@/features/Home/components/ImpactStats";
import { Projects } from "@/features/Home/components/Projects";
import { Partners } from "@/features/Home/components/Partners";
import { CallToAction } from "@/features/Home/components/CallToAction";
import { Achievements } from "@/features/Home/components/Achievements";

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSlider />
        <ImpactStats />
        <CoreServices />
        <Partners />
        <Projects />
        <Achievements />
        <CallToAction />
      </main>
    </>
  );
}

import LandingComponentHero from "./components/landing-components/landing-hero";
import LandingComponentFour from "./components/landing-components/landing-section-four";
import LandingComponentThree from "./components/landing-components/landing-section-three";
import LandingComponentTwo from "./components/landing-components/landing-section-two";

export default function LandingPage() {
  return (
    <main className="w-full h-full pt-20 pb-32 bg-white">
      <LandingComponentHero />
      <LandingComponentTwo />
      <LandingComponentThree />
      <LandingComponentFour />
    </main>
  );
}

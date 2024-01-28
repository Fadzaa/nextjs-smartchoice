import Footer from "./components/footer";
import LandingComponentHero from "./components/landing-components/landing-hero";
import LandingComponentTwo from "./components/landing-components/landing-section-two";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="w-full h-full bg-white">
      <Navbar />
      <LandingComponentHero/>
      <LandingComponentTwo/>
      <Footer/>
    </main>
  );
}

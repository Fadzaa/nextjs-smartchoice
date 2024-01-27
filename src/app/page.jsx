import Footer from "./components/footer";
import LandingComponentHero from "./components/landing-components/landing-hero";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="w-full h-full bg-white">
      <Navbar />
      <LandingComponentHero/>
      <Footer/>
    </main>
  );
}

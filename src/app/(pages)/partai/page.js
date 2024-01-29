import HeroComponent from "./components/hero-component";
import MainComponent from "./components/main-component";

export default function PartaiPage() {
  return (
    <main className="w-full h-full pt-32 pb-32 bg-white">
      <HeroComponent />
      <MainComponent/>
    </main>
  );
}

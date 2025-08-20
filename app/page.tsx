
import { BenefitsSection } from "./_components/landing-sections/BenefitsSection";
import { HeaderSection } from "./_components/landing-sections/HeaderSection";
import { HeroSection } from "./_components/landing-sections/HeroSection";

export default function Home() {
  return (
    <main className="h-screen flex items-center justify-center flex-col space-y-3">
      <HeaderSection />
      <HeroSection />
      <BenefitsSection />
    </main>
  );
}

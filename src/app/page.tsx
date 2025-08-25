
import Header from "../components/Header";
import { HeroBlock } from "../components/HeroBlock";
import { AboutSection } from "../components/AboutSection";
import { FeaturesSection } from "../components/FeaturesSection";
import { PricingSection } from "../components/PricingSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Header />
      <HeroBlock />
      <AboutSection />
      <FeaturesSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  );
}


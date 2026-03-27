import ScrollMorphHero from "@/components/ui/scroll-morph-hero";
import { LandingHero } from "@/components/ui/landing-hero";
import MasonryShowcase from "@/components/ui/masonry-showcase";
import BrandMarquee from "@/components/ui/brand-marquee";
import WarpShaderSection from "@/components/ui/wrap-shader";

export default function Home() {
  return (
    <div className="w-full">
      {/* Section 1: Scroll-morph hero — circle/arc animation with project images */}
      <div className="w-full h-screen">
        <ScrollMorphHero />
      </div>

      {/* Section 2: Floating parallax images + rotating text headline */}
      <LandingHero />

      {/* Section 3: Masonry showcase — magazine, brochure, director notes, services */}
      <MasonryShowcase />

      {/* Section 4: Trusted brand partners marquee */}
      <BrandMarquee />

      {/* Section 5: Services with animated navy/gold background */}
      <WarpShaderSection />
    </div>
  );
}

import AboutHero from "@/components/about/AboutHero";
import StoryChapter from "@/components/about/StoryChapter";
import ProcessJourney from "@/components/about/ProcessJourney";
import IngredientShowcase from "@/components/about/IngredientShowcase";
import ManifestoSection from "@/components/about/ManifestoSection";
import FounderSection from "@/components/about/FounderSection";
import FinalCTA from "@/components/about/FinalCTA";

export const metadata = {
  title: "About | Sacra Terra Teas",
  description:
    "Sacra Terra brings the wisdom of plants back to the table with small-batch herbal blends made from whole botanicals, blended with intention.",
};

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <StoryChapter />
      <ProcessJourney />
      <IngredientShowcase />
      <ManifestoSection />
      <FounderSection />
      <FinalCTA />
    </main>
  );
}

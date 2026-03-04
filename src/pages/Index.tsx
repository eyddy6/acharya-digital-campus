import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import VCMessage from "@/components/VCMessage";
import NewsSection from "@/components/NewsSection";
import StatsSection from "@/components/StatsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroCarousel />
      <VCMessage />
      <StatsSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;

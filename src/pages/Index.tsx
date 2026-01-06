import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SetupGuide from "@/components/SetupGuide";
import Troubleshooting from "@/components/Troubleshooting";
import FAQ from "@/components/FAQ";
import Support from "@/components/Support";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SetupGuide />
      <Troubleshooting />
      <FAQ />
      <Support />
      <Footer />
    </div>
  );
};

export default Index;

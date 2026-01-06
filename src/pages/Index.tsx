import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SetupGuide from "@/components/SetupGuide";
import CommonSolutions from "@/components/CommonSolutions";
import FAQ from "@/components/FAQ";
import Resources from "@/components/Resources";
import Disclaimer from "@/components/Disclaimer";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SetupGuide />
        <CommonSolutions />
        <FAQ />
        <Resources />
        <Disclaimer />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

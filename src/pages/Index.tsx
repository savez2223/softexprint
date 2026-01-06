import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SetupGuide from "@/components/SetupGuide";
import CommonSolutions from "@/components/CommonSolutions";
import FAQ from "@/components/FAQ";
import Resources from "@/components/Resources";
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
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import CeoMessage from "@/components/CeoMessage";
import AboutBanner from "@/components/AboutBanner";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSlider />
      <CeoMessage />
      <AboutBanner />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

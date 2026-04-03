import Navbar from "@/components/Navbar";
import HeroSlider from "@/components/HeroSlider";
import CeoMessage from "@/components/CeoMessage";
import AboutBanner from "@/components/AboutBanner";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";

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
      <WhatsAppButton />
      <ScrollToTop />
    </div>
  );
};

export default Index;

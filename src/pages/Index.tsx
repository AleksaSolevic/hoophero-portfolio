import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import MethodSection from "@/components/MethodSection";
import ServicesSection from "@/components/ServicesSection";
import ProgramsSection from "@/components/ProgramsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="method">
        <MethodSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <ProgramsSection />
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </main>
  );
};

export default Index;

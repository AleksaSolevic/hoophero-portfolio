import { Button } from "@/components/ui/button";
import { ArrowRight, Dumbbell, Users, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-basketball.jpg";
import { useLanguage } from "@/contexts/LanguageContext";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Basketball training session" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="inline-block mb-6 px-6 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-primary-foreground font-semibold animate-in fade-in slide-in-from-bottom-4 duration-700">
          Basketball & Performance Training
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black mb-6 text-primary-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 tracking-tight">
          {t('heroTitle')}
        </h1>
        
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-3xl mx-auto font-medium animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150 leading-relaxed">
          {t('heroSubtitle')}
        </p>

        {/* Key Features */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          <div className="flex items-center gap-2 bg-card/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-foreground/20">
            <Trophy className="w-5 h-5 text-primary" />
            <span className="text-primary-foreground font-medium">Ex-Professional Player</span>
          </div>
          <div className="flex items-center gap-2 bg-card/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-foreground/20">
            <Dumbbell className="w-5 h-5 text-primary" />
            <span className="text-primary-foreground font-medium">Performance Training</span>
          </div>
          <div className="flex items-center gap-2 bg-card/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-foreground/20">
            <Users className="w-5 h-5 text-primary" />
            <span className="text-primary-foreground font-medium">Individual & Group</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <a href="#contact">
            <Button variant="hero" size="xl" className="group text-lg">
              {t('startJourney')}
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <a href="#services">
            <Button variant="accent" size="xl" className="text-lg">
              {t('viewPrograms')}
            </Button>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

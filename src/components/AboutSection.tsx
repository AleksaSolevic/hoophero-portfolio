import { Award, Target, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import heroBasketball from "@/assets/hero-basketball.jpg";

const AboutSection = () => {
  const { t } = useLanguage();
  
  const stats = [
    { icon: Award, value: "10+", label: t('yearsExp') },
    { icon: Target, value: "500+", label: t('athletesTrained') },
    { icon: TrendingUp, value: "95%", label: t('successRate') },
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-foreground text-center">
            {t('aboutTitle')}
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
            {/* Profile Image */}
            <div className="lg:col-span-2">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant border-4 border-primary/20">
                <img 
                  src={heroBasketball}
                  alt="Professional basketball player"
                  className="w-full h-full object-cover aspect-[3/4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
            </div>
            
            {/* Bio Text */}
            <div className="lg:col-span-3 space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>{t('aboutP1')}</p>
              <p>{t('aboutP2')}</p>
              <p>{t('aboutP3')}</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow border border-border"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" strokeWidth={2} />
              <div className="text-4xl font-black text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

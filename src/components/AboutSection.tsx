import { useLanguage } from "@/contexts/LanguageContext";
import heroBasketball from "@/assets/hero-basketball.jpg";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-foreground text-center">
            {t("aboutTitle")}
          </h2>

          <div className="flex flex-col items-center gap-8">
            {/* Profile Image - Smaller icon style */}
            <div className="relative rounded-full overflow-hidden shadow-elegant border-4 border-primary/20 w-48 h-48">
              <img
                src={heroBasketball}
                alt="Professional basketball player"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Bio Text */}
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed text-center max-w-3xl">
              <p>{t("aboutP1")}</p>
              <p>{t("aboutP2")}</p>
              <p>{t("aboutP3")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

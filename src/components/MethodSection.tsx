import { useLanguage } from "@/contexts/LanguageContext";
import { Target, Brain, Dumbbell, Users } from "lucide-react";

const MethodSection = () => {
  const { t } = useLanguage();

  const pillars = [
    {
      icon: Target,
      title: t("methodPillar1"),
      description: t("methodPillar1Desc"),
    },
    {
      icon: Brain,
      title: t("methodPillar2"),
      description: t("methodPillar2Desc"),
    },
    {
      icon: Dumbbell,
      title: t("methodPillar3"),
      description: t("methodPillar3Desc"),
    },
    {
      icon: Users,
      title: t("methodPillar4"),
      description: t("methodPillar4Desc"),
    },
  ];

  return (
    <section id="method" className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground text-center">
            {t("methodTitle")}
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            {t("methodSubtitle")}
          </p>

          {/* Main Method Description */}
          <div className="mb-16 space-y-6 text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto text-center">
            <p>{t("methodIntro")}</p>
          </div>

          {/* Four Pillars */}
          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-elegant hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <pillar.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default MethodSection;

import { Link } from "react-router-dom";
import { ArrowLeft, Target, Eye, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const IndividualTraining = () => {
  const { t } = useLanguage();

  const benefits = [
    { icon: Target, title: t('individualBenefit1'), description: t('individualBenefit1Desc') },
    { icon: Eye, title: t('individualBenefit2'), description: t('individualBenefit2Desc') },
    { icon: TrendingUp, title: t('individualBenefit3'), description: t('individualBenefit3Desc') },
    { icon: Award, title: t('individualBenefit4'), description: t('individualBenefit4Desc') },
  ];

  return (
    <main className="min-h-screen bg-background">
      <LanguageSwitcher />
      
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('backHome')}
            </Button>
          </Link>

          <h1 className="text-5xl md:text-6xl font-black mb-6 text-foreground">
            {t('individual')}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            {t('individualIntro')}
          </p>

          <div className="grid gap-6 md:grid-cols-2 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-border">
                <CardContent className="pt-6">
                  <benefit.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-primary border-0 text-primary-foreground">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">{t('customizedApproach')}</h3>
              <p className="mb-6 leading-relaxed">
                {t('customizedApproachDesc')}
              </p>
              <Link to="/#contact">
                <Button variant="secondary" size="lg">
                  {t('contactMe')}
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default IndividualTraining;

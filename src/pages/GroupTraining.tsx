import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Users, Brain, Trophy, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

const GroupTraining = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const benefits = [
    { icon: Users, title: t('groupBenefit1'), description: t('groupBenefit1Desc') },
    { icon: Brain, title: t('groupBenefit2'), description: t('groupBenefit2Desc') },
    { icon: Trophy, title: t('groupBenefit3'), description: t('groupBenefit3Desc') },
    { icon: Zap, title: t('groupBenefit4'), description: t('groupBenefit4Desc') },
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
            {t('groupTraining')}
          </h1>
          
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            {t('groupIntro')}
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
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
              >
                {t('contactMe')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default GroupTraining;

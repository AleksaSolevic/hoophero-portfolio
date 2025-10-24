import { Dumbbell, Users, Video, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const ServicesSection = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: Dumbbell,
      title: t('individual'),
      description: t('individualDesc'),
      link: "/individual-training",
    },
    {
      icon: Users,
      title: t('groupTraining'),
      description: t('groupDesc'),
      link: "/group-training",
    },
    {
      icon: Video,
      title: t('performance'),
      description: t('performanceDesc'),
      link: "/performance-training",
    },
    {
      icon: MessageSquare,
      title: t('onlineMeetings'),
      description: t('onlineDesc'),
      link: "/online-meetings",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
      <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground">
            {t('servicesTitle')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('servicesSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border flex flex-col group"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary" strokeWidth={2.5} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Link to={service.link}>
                  <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300">
                    {t('learnMore')}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

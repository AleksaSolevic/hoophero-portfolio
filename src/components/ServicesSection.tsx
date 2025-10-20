import { Dumbbell, Users, Video, ClipboardCheck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Dumbbell,
      title: "Individual Training",
      description: "One-on-one personalized coaching sessions focused on your specific needs and goals.",
      features: ["Skill Development", "Performance Analysis", "Custom Workout Plans"],
    },
    {
      icon: Users,
      title: "Group Sessions",
      description: "Dynamic group training that builds teamwork while developing individual skills.",
      features: ["Team Building", "Competitive Drills", "Game Strategy"],
    },
    {
      icon: Video,
      title: "Video Analysis",
      description: "Advanced film breakdown to identify strengths and areas for improvement.",
      features: ["Form Correction", "Movement Analysis", "Progress Tracking"],
    },
    {
      icon: ClipboardCheck,
      title: "Performance Testing",
      description: "Comprehensive assessments to measure progress and set new benchmarks.",
      features: ["Skill Evaluation", "Fitness Testing", "Goal Setting"],
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground">
            Elite Coaching Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive training programs designed to elevate every aspect of your game
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border-border"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <service.icon className="w-7 h-7 text-primary-foreground" strokeWidth={2.5} />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

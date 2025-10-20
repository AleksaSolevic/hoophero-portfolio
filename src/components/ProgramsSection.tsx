import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import trainingEquipment from "@/assets/training-equipment.jpg";

const ProgramsSection = () => {
  const programs = [
    {
      name: "Youth Development",
      description: "Ages 8-14",
      features: [
        "Fundamental skills training",
        "Age-appropriate conditioning",
        "Character development",
        "Parent progress reports",
      ],
      popular: false,
    },
    {
      name: "Elite Skills",
      description: "High School & College",
      features: [
        "Advanced skill development",
        "Strength & conditioning",
        "Video analysis included",
        "College prep support",
        "Tournament preparation",
      ],
      popular: true,
    },
    {
      name: "Professional",
      description: "Pro & Semi-Pro",
      features: [
        "Personalized training plan",
        "Nutrition guidance",
        "Mental performance coaching",
        "Contract negotiation prep",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={trainingEquipment} 
          alt="Training equipment" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground">
            Training Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the program that fits your goals and commitment level
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <Card 
              key={index} 
              className={`relative hover:shadow-elegant transition-all duration-300 ${
                program.popular ? 'border-primary border-2 shadow-glow' : 'border-border'
              }`}
            >
              {program.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}
               <CardHeader className="text-center pb-8 pt-10">
                <CardTitle className="text-2xl mb-2">{program.name}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" strokeWidth={3} />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-6 flex-col gap-3">
                <p className="text-sm text-muted-foreground text-center">
                  Email for pricing and schedule details
                </p>
                <Button 
                  variant={program.popular ? "hero" : "default"} 
                  className="w-full"
                  size="lg"
                  onClick={() => window.location.href = 'mailto:contact@soleworkouts.com'}
                >
                  Contact Me
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;

import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marcus Johnson",
      role: "D1 College Player",
      text: "The personalized training completely transformed my game. I went from bench player to starting point guard in one season. The video analysis sessions were game-changers.",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      role: "High School All-Star",
      text: "Best coaching I've ever received. Not only did my skills improve dramatically, but I also gained the confidence to compete at the highest level. Highly recommend!",
      rating: 5,
    },
    {
      name: "David Martinez",
      role: "Parent of Youth Player",
      text: "My son has grown so much, both as a player and as a person. The coach's dedication to character development alongside skill training is truly exceptional.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-foreground">
            Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from athletes who have elevated their game
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-elegant transition-shadow">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4">
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

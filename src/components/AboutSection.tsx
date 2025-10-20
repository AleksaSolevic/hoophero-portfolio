import { Award, Target, TrendingUp } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Award, value: "10+", label: "Years Experience" },
    { icon: Target, value: "500+", label: "Athletes Trained" },
    { icon: TrendingUp, value: "95%", label: "Success Rate" },
  ];

  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">
            Transform Performance Through Excellence
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            With over a decade of experience coaching athletes at all levels, I specialize in developing 
            comprehensive training programs that enhance skills, boost performance, and build confidence. 
            My proven methodology combines technical expertise with personalized attention to help you reach your goals.
          </p>
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

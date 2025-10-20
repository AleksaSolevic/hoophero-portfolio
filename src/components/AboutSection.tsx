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
            About Me
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground leading-relaxed text-left">
            <p>
              Originally from Serbia, I've dedicated my life to basketball. My professional career took me across 
              Sweden and internationally, where I competed at various levels and learned what it truly takes to 
              succeed in this demanding sport.
            </p>
            <p>
              Through years of high-level competition, I developed a deep understanding of the mental and physical 
              requirements needed to excel. I've experienced the pressure of crucial games, the discipline of 
              professional training, and the strategic thinking required to outperform opponents.
            </p>
            <p>
              Now, I channel all that experience into helping athletes reach their full potential. Whether you're 
              just starting out or aiming for professional levels, I bring real-world insights and proven training 
              methods to help you elevate your game. My approach combines technical skill development, conditioning, 
              mental preparation, and the competitive mindset needed to succeed.
            </p>
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

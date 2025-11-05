import { Trophy, Users, Target } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Trophy,
      title: "Elite Competition",
      description: "Experience top-tier basketball with the best teams and players in the region."
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Building a strong basketball community that empowers youth through sports."
    },
    {
      icon: Target,
      title: "Skill Development",
      description: "Focus on developing basketball skills and character both on and off the court."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-primary drop-shadow-[0_0_20px_rgba(244,207,107,0.4)]">SIEL</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            The Sports Innovation and Entertainment League (SIEL) is revolutionizing basketball in Kenya. 
            We combine elite competition with community empowerment, creating opportunities for athletes to excel.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all hover:shadow-glow-primary group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

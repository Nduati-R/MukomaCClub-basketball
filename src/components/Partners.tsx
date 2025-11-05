export const Partners = () => {
  const partners = [
    { name: "SportGear Pro", category: "Equipment Partner" },
    { name: "EnergyBoost", category: "Nutrition Partner" },
    { name: "MediaMax", category: "Broadcasting Partner" },
    { name: "TechSports", category: "Technology Partner" },
    { name: "FitLife", category: "Wellness Partner" },
    { name: "LocalBank", category: "Banking Partner" }
  ];

  return (
    <section id="partners" className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-primary">Partners</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Supported by leading brands who believe in the power of basketball.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-card border border-border rounded-lg p-8 text-center hover:border-primary transition-all hover:shadow-glow-primary group"
            >
              <div className="w-20 h-20 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <span className="text-2xl font-bold text-primary">
                  {partner.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-bold text-lg mb-2">{partner.name}</h3>
              <p className="text-sm text-muted-foreground">{partner.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

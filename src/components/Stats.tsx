export const Stats = () => {
  const stats = [
    { value: "20+", label: "Teams Ready" },
    { value: "500+", label: "Players Registered" },
    { value: "10K+", label: "Expected Fans" },
    { value: "15+", label: "Partner Brands" }
  ];

  return (
    <section className="py-20 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-6xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm md:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

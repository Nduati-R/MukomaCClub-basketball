import { Building2, Users, Trophy, Calendar } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const stats = [
  { icon: Building2, value: "12+", label: "World-Class Facilities" },
  { icon: Users, value: "500+", label: "Academy Players" },
  { icon: Trophy, value: "20+", label: "Years of Excellence" },
  { icon: Calendar, value: "100+", label: "Annual Events" },
];

export const Stats = () => {
  const { ref, className } = useReveal<HTMLDivElement>();
  return (
    <section id="stats" className="bg-forest py-16">
      <div ref={ref} className={`container mx-auto px-6 ${className}`}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="text-center">
                <Icon className="w-8 h-8 text-gold mx-auto mb-4" strokeWidth={1.5} />
                <div className="font-display text-4xl md:text-5xl font-semibold text-background mb-2">{s.value}</div>
                <div className="text-sm uppercase tracking-widest text-background/60">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

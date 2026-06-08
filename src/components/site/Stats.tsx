import { Dribbble, Users, Trophy, CalendarDays } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const stats = [
  { icon: Dribbble, value: "3", label: "Full-Size Basketball Courts" },
  { icon: Users, value: "300+", label: "Academy Players" },
  { icon: Trophy, value: "15+", label: "Championship Titles" },
  { icon: CalendarDays, value: "7 Days", label: "Open Every Week" },
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

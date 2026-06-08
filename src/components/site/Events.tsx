import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "@/hooks/use-reveal";

const events = [
  { date: "Jul 20", year: "2026", name: "Inter-School Basketball Tournament", desc: "Top schools battle it out on our flagship courts." },
  { date: "Aug 10", year: "2026", name: "3x3 Street Ball Challenge", desc: "Fast, raw and electric — half-court hoops at its finest." },
  { date: "Aug 28", year: "2026", name: "Gym Open Day & Free Trial", desc: "Tour the facility, try the equipment, meet our trainers." },
];

export const Events = () => {
  const { ref, className } = useReveal<HTMLDivElement>();
  return (
    <section id="events" className="py-24 bg-forest">
      <div ref={ref} className={`container mx-auto px-6 ${className}`}>
        <SectionHeading tag="Calendar" title="Upcoming Events" subtitle="Mark your calendar — competition awaits." invert />
        <div className="grid md:grid-cols-3 gap-6">
          {events.map((e) => (
            <article
              key={e.name}
              className="bg-background/5 border border-gold/20 rounded-lg p-6 hover:border-gold transition-colors group"
            >
              <div className="inline-flex flex-col items-center justify-center bg-gold text-gold-foreground rounded-md px-4 py-2 mb-5 min-w-[80px]">
                <span className="font-display text-2xl font-bold leading-none">{e.date}</span>
                <span className="text-xs font-medium">{e.year}</span>
              </div>
              <h3 className="font-display text-2xl font-semibold text-background mb-2">{e.name}</h3>
              <p className="text-background/70 mb-5">{e.desc}</p>
              <a href="#contact" className="inline-flex items-center gap-1 text-gold font-medium group-hover:gap-2 transition-all">
                Register <ArrowRight className="w-4 h-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "@/hooks/use-reveal";

const events = [
  { date: "Jul 15", year: "2026", name: "Annual Junior Tennis Championship", desc: "A flagship tournament showcasing East Africa's rising tennis stars." },
  { date: "Aug 03", year: "2026", name: "Open Swimming Gala", desc: "Compete across age groups in our Olympic-grade pool facility." },
  { date: "Aug 20", year: "2026", name: "Football 5-a-side Tournament", desc: "Fast-paced 5-a-side action with teams from across the region." },
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

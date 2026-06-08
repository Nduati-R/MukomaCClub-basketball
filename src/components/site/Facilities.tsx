import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "@/hooks/use-reveal";

const facilities = [
  {
    name: "Swimming Pool",
    desc: "Olympic-grade lanes for training, leisure, and competitive galas.",
    img: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&q=80",
  },
  {
    name: "Tennis Courts",
    desc: "Pristine clay and hard courts with floodlit evening play.",
    img: "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&q=80",
  },
  {
    name: "Football Pitch",
    desc: "Full-size, FIFA-standard turf for matches and academy training.",
    img: "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=800&q=80",
  },
];

export const Facilities = () => {
  const { ref, className } = useReveal<HTMLDivElement>();
  return (
    <section id="facilities" className="py-24 bg-background">
      <div ref={ref} className={`container mx-auto px-6 ${className}`}>
        <SectionHeading tag="Facilities" title="Our Facilities" subtitle="Book. Play. Excel." />
        <div className="grid md:grid-cols-3 gap-8">
          {facilities.map((f) => (
            <article
              key={f.name}
              className="group bg-card rounded-lg overflow-hidden border border-border hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
            >
              <div className="overflow-hidden aspect-[4/3]">
                <img src={f.img} alt={f.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-semibold text-forest mb-2">{f.name}</h3>
                <p className="text-muted-foreground mb-4">{f.desc}</p>
                <a href="#contact" className="inline-flex items-center gap-1 text-gold font-medium hover:gap-2 transition-all">
                  Book Now <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="#facilities" className="inline-flex items-center gap-1 text-forest font-medium hover:text-gold transition-colors">
            View All Facilities <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

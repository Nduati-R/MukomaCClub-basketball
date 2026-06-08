import { Card } from "@/components/ui/card";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "@/hooks/use-reveal";

const testimonials = [
  {
    name: "Wanjiru Kimani",
    role: "Parent of Academy Player",
    quote: "The coaching is exceptional. My son has grown not only as a player but as a person — discipline, focus, teamwork.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
  },
  {
    name: "David Mwangi",
    role: "Club Member",
    quote: "The facilities are world-class and the community is warm. It's where I unwind after the week and where my kids thrive.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Aisha Otieno",
    role: "Tennis Coach",
    quote: "CCSA invests in players for the long term. The pathway from junior academy to competitive tennis is the best I've seen.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];

export const Testimonials = () => {
  const { ref, className } = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 bg-background">
      <div ref={ref} className={`container mx-auto px-6 ${className}`}>
        <SectionHeading tag="Voices" title="What Our Members Say" />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.name} className="p-8 border-l-4 border-l-gold border-y-border border-r-border rounded-sm shadow-sm hover:shadow-lg transition-shadow">
              <p className="font-display text-xl italic text-forest leading-snug mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold text-forest">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

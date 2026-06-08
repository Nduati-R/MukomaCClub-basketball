import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/use-reveal";

const features = [
  "Professional Coaching Staff",
  "Age-Group Training Programs",
  "Player Registration & Profiles",
  "Tournaments & Leagues",
];

export const Academy = () => {
  const { ref, className } = useReveal<HTMLDivElement>();
  return (
    <section id="academy" className="py-24 bg-muted/40">
      <div ref={ref} className={`container mx-auto px-6 ${className}`}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="overflow-hidden rounded-lg aspect-[4/5] order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&q=80"
              alt="Basketball academy training"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-4">
              Basketball Academy
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-forest leading-tight mb-6">
              Developing Kenya's Next Basketball Stars
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              From grassroots to elite — our structured programs develop skills, discipline, and competitive edge. Coached by seasoned professionals with national and international experience.
            </p>
            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <Button asChild className="bg-gold text-gold-foreground hover:bg-gold/90 rounded-full px-6 h-11">
              <a href="#contact">
                Register a Player <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

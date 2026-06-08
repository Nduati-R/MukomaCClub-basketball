import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1920&q=80"
          alt="Basketball court under dramatic lighting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/60 to-forest/90" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-background">
        <span className="inline-block text-xs md:text-sm font-semibold uppercase tracking-[0.4em] text-gold mb-6 animate-fade-up">
          Train Hard. Play Hard. Live Well.
        </span>
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] mb-6 animate-fade-up"
          style={{ animationDelay: "0.15s", opacity: 0 }}
        >
          Where Ballers Are <span className="text-gold italic">Built</span>
        </h1>
        <p
          className="max-w-2xl mx-auto text-lg md:text-xl text-background/85 mb-10 animate-fade-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          Kenya's premier basketball academy — elite coaching, world-class courts, and a community that pushes you to your peak.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: "0.45s", opacity: 0 }}
        >
          <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 rounded-full px-8 h-12 text-base">
            <a href="#academy">Join the Academy</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-8 h-12 text-base bg-transparent border-background text-background hover:bg-background hover:text-forest"
          >
            <a href="#facilities">Explore Facilities</a>
          </Button>
        </div>
      </div>

      <a href="#stats" aria-label="Scroll down" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gold" />
      </a>
    </section>
  );
};

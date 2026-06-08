import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?w=1920&q=80"
          alt="Country club grounds"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/60 to-forest/90" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-background">
        <span className="inline-block text-xs md:text-sm font-semibold uppercase tracking-[0.4em] text-gold mb-6 animate-fade-up">
          Welcome to Excellence
        </span>
        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.05] mb-6 animate-fade-up"
          style={{ animationDelay: "0.15s", opacity: 0 }}
        >
          Where Sport Meets <span className="text-gold italic">Prestige</span>
        </h1>
        <p
          className="max-w-2xl mx-auto text-lg md:text-xl text-background/85 mb-10 animate-fade-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          Kenya's premier country club and sports academy — world-class facilities, elite training programs, and a community built for champions.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
          style={{ animationDelay: "0.45s", opacity: 0 }}
        >
          <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 rounded-full px-8 h-12 text-base">
            <a href="#facilities">Explore Facilities</a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-8 h-12 text-base bg-transparent border-background text-background hover:bg-background hover:text-forest"
          >
            <a href="#academy">Join the Academy</a>
          </Button>
        </div>
      </div>

      <a href="#stats" aria-label="Scroll down" className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gold" />
      </a>
    </section>
  );
};

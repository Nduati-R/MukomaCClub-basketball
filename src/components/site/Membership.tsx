import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

export const Membership = () => {
  const { ref, className } = useReveal<HTMLDivElement>();
  return (
    <section
      id="membership"
      className="relative py-28 overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(135deg, hsl(140 51% 11%) 0%, hsl(140 51% 8%) 60%, hsl(140 51% 14%) 100%)",
      }}
    >
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "repeating-linear-gradient(45deg, hsl(var(--gold)) 0 1px, transparent 1px 24px)" }} />
      <div ref={ref} className={`container mx-auto px-6 text-center relative ${className}`}>
        <span className="inline-block text-xs font-semibold uppercase tracking-[0.4em] text-gold mb-4">Membership</span>
        <h2 className="font-display text-4xl md:text-6xl font-semibold text-background mb-6 leading-tight">
          Become a Member
        </h2>
        <p className="max-w-2xl mx-auto text-background/75 text-lg mb-8">
          Unlock exclusive access to all facilities, priority bookings, member-only events, and premium perks. Join a community that values excellence.
        </p>
        <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 rounded-full px-8 h-12 text-base">
          <a href="#contact">
            Explore Membership <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </Button>
      </div>
    </section>
  );
};

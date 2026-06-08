import { CheckCircle, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Basic",
    price: "KES 2,500",
    desc: "Monthly access, gym floor only.",
    perks: ["Gym floor access", "Locker room use", "Open 7 days a week"],
    popular: false,
  },
  {
    name: "Standard",
    price: "KES 4,500",
    desc: "Gym + group classes + locker.",
    perks: ["Everything in Basic", "Group fitness classes", "Personal locker"],
    popular: true,
  },
  {
    name: "Premium",
    price: "KES 8,000",
    desc: "Full access including courts + personal trainer sessions.",
    perks: ["Everything in Standard", "Court bookings included", "4 PT sessions / month"],
    popular: false,
  },
];

export const GymMembership = () => {
  const { ref, className } = useReveal<HTMLDivElement>();
  return (
    <section id="gym" className="py-24 bg-[hsl(var(--cream,40_36%_94%))] bg-muted/40">
      <div ref={ref} className={`container mx-auto px-6 ${className}`}>
        <SectionHeading
          tag="Gym Membership"
          title="Your Fitness Journey Starts Here"
          subtitle="Whether you're an athlete in training or simply building a healthier lifestyle, our fully-equipped gym offers flexible membership plans to suit your goals."
        />
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((t) => (
            <Card
              key={t.name}
              className={cn(
                "relative p-8 rounded-lg border transition-all duration-300 hover:border-gold hover:shadow-xl",
                t.popular ? "border-gold shadow-lg" : "border-border"
              )}
            >
              {t.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-gold-foreground text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <div className="text-gold font-display text-2xl font-semibold mb-2">{t.name}</div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-display text-4xl font-semibold text-forest">{t.price}</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <p className="text-muted-foreground mb-6">{t.desc}</p>
              <ul className="space-y-3 mb-8">
                {t.perks.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{p}</span>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className={cn(
                  "w-full rounded-full",
                  t.popular
                    ? "bg-gold text-gold-foreground hover:bg-gold/90"
                    : "bg-forest text-background hover:bg-forest/90"
                )}
              >
                <a href="#contact">
                  Get Started <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

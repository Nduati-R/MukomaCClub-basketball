import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

export const Newsletter = () => {
  return (
    <section id="contact" className="py-20 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Stay in the <span className="text-primary drop-shadow-[0_0_20px_rgba(244,207,107,0.4)]">Loop</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Be the first to know about league updates, ticket sales, and exclusive events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 bg-background border-border"
            />
            <Button size="lg" className="sm:w-auto">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Join 5,000+ basketball fans already subscribed
          </p>
        </div>
      </div>
    </section>
  );
};

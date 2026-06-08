import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Shield } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Facilities", href: "/#facilities" },
  { name: "Academy", href: "/#academy" },
  { name: "Events", href: "/#events" },
  { name: "Membership", href: "/#membership" },
  { name: "Contact", href: "/#contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled ? "bg-forest/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          <Shield className="w-7 h-7 text-gold" strokeWidth={1.8} />
          <span className="font-display text-3xl font-bold text-gold tracking-wide">CCSA</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="text-sm font-medium text-background/90 hover:text-gold transition-colors"
            >
              {l.name}
            </a>
          ))}
          <Button asChild className="bg-gold text-gold-foreground hover:bg-gold/90 rounded-full px-6">
            <a href="/#contact">Book a Facility</a>
          </Button>
        </nav>

        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <button className="text-background p-2" aria-label="Open menu">
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-forest border-l border-gold/20 text-background">
            <div className="flex flex-col gap-6 mt-12">
              {links.map((l) => (
                <a key={l.name} href={l.href} className="text-lg font-medium hover:text-gold transition-colors">
                  {l.name}
                </a>
              ))}
              <Button asChild className="bg-gold text-gold-foreground hover:bg-gold/90 rounded-full mt-4">
                <a href="/#contact">Book a Facility</a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

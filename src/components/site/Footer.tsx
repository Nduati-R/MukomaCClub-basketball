import { Shield, Instagram, Facebook, Twitter, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const whatsappUrl = "https://wa.me/254700000000?text=Hello%2C%20I%20am%20interested%20in%20CCSA";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-forest text-background pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Shield className="w-7 h-7 text-gold" strokeWidth={1.8} />
              <span className="font-display text-3xl font-bold text-gold">CCSA</span>
            </Link>
            <p className="text-background/70 mb-5 text-sm leading-relaxed">
              Train Hard. Play Hard. Live Well. Kenya's premier basketball academy, gym, and multi-sport facility.
            </p>
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center hover:bg-gold hover:text-gold-foreground transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-background/80 text-sm">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
              <li><a href="/#facilities" className="hover:text-gold transition-colors">Facilities</a></li>
              <li><a href="/#academy" className="hover:text-gold transition-colors">Academy</a></li>
              <li><a href="/#gym" className="hover:text-gold transition-colors">Gym</a></li>
              <li><a href="/#events" className="hover:text-gold transition-colors">Events</a></li>
              <li><a href="/#membership" className="hover:text-gold transition-colors">Membership</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl font-semibold text-gold mb-4">Contact</h4>
            <ul className="space-y-3 text-background/80 text-sm">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-gold" /> +254 700 000 000</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-gold" /> hello@ccsa.co.ke</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-gold" /> Nairobi, Kenya</li>
              <li>
                <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-gold hover:underline">
                  <MessageCircle className="w-4 h-4" /> WhatsApp Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl font-semibold text-gold mb-4">Newsletter</h4>
            <p className="text-background/70 text-sm mb-4">Get event updates and member news.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <Input type="email" placeholder="your@email.com" className="bg-background/5 border-gold/30 text-background placeholder:text-background/40" />
              <Button className="bg-gold text-gold-foreground hover:bg-gold/90 rounded-full">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="gold-divider mb-6" />
        <p className="text-center text-background/60 text-sm">
          © {new Date().getFullYear()} Country Club & Sports Academy. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

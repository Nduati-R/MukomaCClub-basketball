import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Events } from "@/components/Events";
import { Partners } from "@/components/Partners";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Stats />
      <About />
      <Events />
      <Partners />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;

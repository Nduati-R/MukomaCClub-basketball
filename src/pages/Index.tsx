import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { Facilities } from "@/components/site/Facilities";
import { Academy } from "@/components/site/Academy";
import { GymMembership } from "@/components/site/GymMembership";
import { Events } from "@/components/site/Events";
import { Membership } from "@/components/site/Membership";
import { Testimonials } from "@/components/site/Testimonials";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Stats />
      <Facilities />
      <Academy />
      <GymMembership />
      <Events />
      <Membership />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;

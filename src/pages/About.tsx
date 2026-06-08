import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Membership } from "@/components/site/Membership";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Card } from "@/components/ui/card";
import { Target, Eye, Trophy, Users, Zap, Heart } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

const values = [
  { icon: Trophy, title: "Excellence", desc: "We pursue the highest standards in everything we do." },
  { icon: Zap, title: "Discipline", desc: "Basketball demands focus and consistency. We build those habits every day." },
  { icon: Users, title: "Community", desc: "Sport brings people together — we nurture that bond." },
  { icon: Heart, title: "Inclusion", desc: "Everyone deserves access to great sport and great facilities." },
];

const team = [
  { name: "Brian Kiptoo", role: "Head Coach", img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&q=80", bio: "Decades of elite basketball coaching experience." },
  { name: "Grace Wambui", role: "Academy Director", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80", bio: "Architect of our player development pathway." },
  { name: "James Otieno", role: "Gym Manager", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80", bio: "Certified strength & conditioning specialist." },
  { name: "Linet Achieng", role: "Facilities Coordinator", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80", bio: "Ensures every facility runs at world-class standards." },
];

const Story = () => {
  const { ref, className } = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 bg-background">
      <div ref={ref} className={`container mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${className}`}>
        <div>
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold mb-4">Our Story</span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-forest leading-tight mb-6">
            A Legacy Two Decades in the Making
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg">
            <p>What started as a single basketball court and a dream to grow the sport in Kenya has evolved into a full-service sports campus.</p>
            <p>CCSA today is home to one of the country's most respected basketball academies, a fully-equipped gym, and a range of facilities open to the public.</p>
            <p>We believe basketball teaches more than sport — it builds confidence, teamwork, and relentless drive. That belief is at the core of everything we do.</p>
          </div>
        </div>
        <div className="overflow-hidden rounded-lg aspect-[4/5]">
          <img src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80" alt="Our story" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

const MissionVision = () => {
  const { ref, className } = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 bg-muted/40">
      <div ref={ref} className={`container mx-auto px-6 ${className}`}>
        <SectionHeading tag="Purpose" title="Mission & Vision" />
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-10 border-t-4 border-t-gold rounded-sm">
            <Target className="w-10 h-10 text-gold mb-5" strokeWidth={1.5} />
            <h3 className="font-display text-3xl font-semibold text-forest mb-3">Mission</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To develop elite basketball talent and promote an active lifestyle in Kenya through world-class coaching, facilities, and community programming.
            </p>
          </Card>
          <Card className="p-10 border-t-4 border-t-gold rounded-sm">
            <Eye className="w-10 h-10 text-gold mb-5" strokeWidth={1.5} />
            <h3 className="font-display text-3xl font-semibold text-forest mb-3">Vision</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              To be East Africa's leading basketball academy — producing champions on the court and leaders in life.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

const Values = () => {
  const { ref, className } = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 bg-background">
      <div ref={ref} className={`container mx-auto px-6 ${className}`}>
        <SectionHeading tag="What We Stand For" title="Our Values" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="text-center px-4">
                <div className="w-16 h-16 rounded-full bg-gold/10 mx-auto flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl font-semibold text-forest mb-2">{v.title}</h3>
                <p className="text-muted-foreground">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Team = () => {
  const { ref, className } = useReveal<HTMLDivElement>();
  return (
    <section className="py-24 bg-muted/40">
      <div ref={ref} className={`container mx-auto px-6 ${className}`}>
        <SectionHeading tag="Leadership" title="Meet Our Team" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m) => (
            <article key={m.name} className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-xl transition-all">
              <div className="aspect-[3/4] overflow-hidden">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold text-forest">{m.name}</h3>
                <div className="text-gold text-sm font-medium uppercase tracking-wide mb-2">{m.role}</div>
                <p className="text-muted-foreground text-sm">{m.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <img src="https://images.unsplash.com/photo-1575329004688-9ebe1c5d0c33?w=1920&q=80" alt="Club grounds" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/60 to-forest/40" />
        <div className="container mx-auto px-6 pb-16 relative text-background">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.4em] text-gold mb-4">About</span>
          <h1 className="font-display text-5xl md:text-7xl font-semibold leading-tight max-w-3xl">About CCSA</h1>
          <p className="mt-4 text-lg md:text-xl text-background/85 max-w-2xl">
            Built for ballers. Open to all. Rooted in Nairobi since 2004.
          </p>
        </div>
      </section>
      <Story />
      <MissionVision />
      <Values />
      <Team />
      <Membership />
      <Footer />
    </div>
  );
};

export default About;

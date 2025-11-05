import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";

export const Events = () => {
  const events = [
    {
      title: "Season Launch Event",
      date: "Coming Soon",
      time: "TBA",
      location: "Main Arena",
      description: "Join us for the grand opening of the inaugural season with special performances and team introductions."
    },
    {
      title: "All-Star Weekend",
      date: "Coming Soon",
      time: "TBA",
      location: "Central Stadium",
      description: "Experience the best players compete in skills challenges, three-point contests, and the main all-star game."
    },
    {
      title: "Championship Finals",
      date: "Coming Soon",
      time: "TBA",
      location: "National Arena",
      description: "The ultimate showdown to crown the first ever HoopNation champions."
    }
  ];

  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Upcoming <span className="text-primary drop-shadow-[0_0_20px_rgba(244,207,107,0.4)]">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Be part of history as we launch the most exciting basketball league in the region.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary transition-all hover:shadow-glow-primary">
              <CardHeader>
                <CardTitle className="text-2xl">{event.title}</CardTitle>
                <CardDescription className="text-base">{event.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>{event.location}</span>
                </div>
                <Button className="w-full mt-4" variant="outline">
                  Get Notified
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

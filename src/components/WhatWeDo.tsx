import { Heart, Users, Lightbulb, Rocket } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Women Empowerment",
    description: "Supporting women through education, skills training, and confidence-building programs.",
    color: "bg-coral/10 text-coral",
    borderColor: "border-coral/20",
  },
  {
    icon: Users,
    title: "Children Care",
    description: "Creating safe, happy spaces where children can learn, grow, and feel protected.",
    color: "bg-primary/10 text-primary",
    borderColor: "border-primary/20",
  },
  {
    icon: Lightbulb,
    title: "Youth Development",
    description: "Helping young people discover their talents and build confidence through mentorship.",
    color: "bg-accent text-accent-foreground",
    borderColor: "border-accent",
  },
  {
    icon: Rocket,
    title: "Youth Empowerment",
    description: "Turning passion into purpose with tools, guidance, and opportunities to succeed.",
    color: "bg-lavender text-lavender-foreground",
    borderColor: "border-lavender",
  },
];

const WhatWeDo = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-secondary rounded-full text-secondary-foreground text-sm font-semibold mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            We Focus on <span className="text-gradient">People</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            And the beautiful possibilities inside each of them. Every person deserves 
            support, opportunity, and hope.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-3xl p-8 shadow-soft hover:shadow-warm transition-all duration-500 hover:-translate-y-2 border-2 border-transparent hover:border-primary/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;

import { Target, Eye, Sparkles } from "lucide-react";

const Mission = () => {
  return (
    <section className="py-24 gradient-peach relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-coral/10 rounded-full blur-2xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full text-foreground text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4 inline mr-2" />
              Our Heart & Purpose
            </span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-10 shadow-warm group hover:shadow-glow transition-all duration-500">
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To <span className="text-primary font-semibold">empower and transform lives</span> through 
                care, opportunity, and community love. We believe that small acts of kindness 
                can grow into big, beautiful changes.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-card/90 backdrop-blur-sm rounded-3xl p-10 shadow-warm group hover:shadow-glow transition-all duration-500">
              <div className="w-14 h-14 bg-coral/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Eye className="w-7 h-7 text-coral" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A warm world where <span className="text-coral font-semibold">women feel supported</span>, 
                children feel safe, and youth feel inspired to chase their dreams 
                with confidence and joy.
              </p>
            </div>
          </div>

          {/* Promise */}
          <div className="mt-12 bg-card/90 backdrop-blur-sm rounded-3xl p-10 text-center shadow-soft">
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">
              Our Promise
            </h3>
            <div className="flex flex-wrap justify-center gap-8 text-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-primary rounded-full" />
                <span className="text-muted-foreground">We listen</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-coral rounded-full" />
                <span className="text-muted-foreground">We care</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-accent-foreground rounded-full" />
                <span className="text-muted-foreground">We show up</span>
              </div>
            </div>
            <p className="mt-6 text-xl text-foreground font-display font-semibold">
              Because change begins with being <span className="text-gradient">willing</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;

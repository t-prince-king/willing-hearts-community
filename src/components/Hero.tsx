import { Heart, Sparkles, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-sunrise">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-2xl animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-coral/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-accent/30 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-lavender/40 rounded-full blur-xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-soft mb-8 animate-fade-in">
            <Sun className="w-6 h-6 text-primary" />
            <span className="font-display font-bold text-xl text-foreground">Willing</span>
            <Heart className="w-5 h-5 text-coral fill-coral" />
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Empowering &{" "}
            <span className="text-gradient">Transforming</span>
            <br />
            Lives
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 font-body leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            A community impact initiative built with love and care.
            Supporting <span className="text-coral font-semibold">women</span>, protecting{" "}
            <span className="text-primary font-semibold">children</span>, and empowering{" "}
            <span className="text-accent-foreground font-semibold">youth</span> to grow, lead, and thrive.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              <Sparkles className="w-5 h-5" />
              Join Our Movement
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Lives Touched</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-coral">50+</div>
              <div className="text-sm text-muted-foreground">Communities</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-accent-foreground">100%</div>
              <div className="text-sm text-muted-foreground">Heart & Love</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;

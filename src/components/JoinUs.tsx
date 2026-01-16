import { Heart, HandHeart, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const JoinUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6">
            <Heart className="w-4 h-4 inline mr-2 fill-primary" />
            Be Part of Something Beautiful
          </span>

          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Join the <span className="text-gradient">Movement</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Whether you volunteer, support, or simply share kindness — 
            you are part of something meaningful. Together, we grow. Together, we rise.
          </p>

          {/* Action Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-secondary rounded-3xl p-8 group hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-coral/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <HandHeart className="w-7 h-7 text-coral" />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground mb-2">Volunteer</h3>
              <p className="text-muted-foreground text-sm">Give your time and make a real difference in someone's life.</p>
            </div>

            <div className="bg-secondary rounded-3xl p-8 group hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground mb-2">Support</h3>
              <p className="text-muted-foreground text-sm">Your support helps us reach more people and create lasting impact.</p>
            </div>

            <div className="bg-secondary rounded-3xl p-8 group hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Share2 className="w-7 h-7 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground mb-2">Spread Love</h3>
              <p className="text-muted-foreground text-sm">Share our mission and help us grow our community of caring hearts.</p>
            </div>
          </div>

          {/* CTA Button */}
          <Button variant="hero" size="xl">
            Get Involved Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;

import { Sun, Heart, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Brand */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sun className="w-8 h-8 text-primary" />
            <span className="font-display font-bold text-3xl">Willing</span>
            <Heart className="w-6 h-6 text-coral fill-coral" />
          </div>

          {/* Tagline */}
          <p className="text-center text-xl font-display mb-8 opacity-90">
            Empowering and Transforming Lives
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm opacity-80">
            <a href="mailto:hello@willing.org" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
              hello@willing.org
            </a>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Your Community
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-background/20 pt-8">
            <p className="text-center text-sm opacity-60">
              © {new Date().getFullYear()} Willing Community Initiative. Made with{" "}
              <Heart className="w-4 h-4 inline text-coral fill-coral" /> for a brighter tomorrow.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

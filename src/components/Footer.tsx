import { motion } from "framer-motion";
import { Sun, Heart, Mail, MapPin, Phone, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "What We Do", href: "#what-we-do" },
    { name: "Our Mission", href: "#mission" },
    { name: "Gallery", href: "#gallery" },
    { name: "Join Us", href: "#join-us" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="bg-foreground text-background py-16 relative overflow-hidden">
      {/* Animated background decoration */}
      <motion.div
        className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Sun className="w-8 h-8 text-primary" />
              <span className="font-display font-bold text-2xl">Willing</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-5 h-5 text-coral fill-coral" />
              </motion.div>
            </motion.div>
            <p className="text-background/70 text-sm leading-relaxed mb-4">
              Empowering and transforming lives through care, support, and community love.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <motion.a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-background/70 hover:text-primary transition-colors text-sm cursor-pointer inline-block"
                    whileHover={{ x: 5 }}
                  >
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Programs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-display font-bold text-lg mb-4">Our Programs</h4>
            <ul className="space-y-2">
              {["Women Empowerment", "Children Care", "Youth Development", "Community Support"].map((program) => (
                <li key={program}>
                  <motion.span
                    className="text-background/70 text-sm"
                    whileHover={{ x: 5, color: "hsl(var(--primary))" }}
                  >
                    {program}
                  </motion.span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-display font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <motion.a
                  href="mailto:hello@willing.org"
                  className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-4 h-4" />
                  hello@willing.org
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-4 h-4" />
                  +1 (234) 567-890
                </motion.a>
              </li>
              <li>
                <motion.div
                  className="flex items-center gap-2 text-background/70 text-sm"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-4 h-4" />
                  Your Community
                </motion.div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-background/20 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/60">
              © {new Date().getFullYear()} Willing Community Initiative. Made with{" "}
              <motion.span
                className="inline-block"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 inline text-coral fill-coral" />
              </motion.span>{" "}
              for a brighter tomorrow.
            </p>
            <div className="flex gap-6 text-sm text-background/60">
              <motion.a href="#" className="hover:text-primary transition-colors" whileHover={{ y: -2 }}>
                Privacy Policy
              </motion.a>
              <motion.a href="#" className="hover:text-primary transition-colors" whileHover={{ y: -2 }}>
                Terms of Service
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

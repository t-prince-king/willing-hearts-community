import { motion, type Easing } from "framer-motion";
import { Heart, HandHeart, Share2, Users, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const JoinUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const actionCards = [
    {
      icon: HandHeart,
      title: "Volunteer",
      description: "Give your time and make a real difference in someone's life.",
      color: "bg-coral/20",
      iconColor: "text-coral",
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=300&h=200&fit=crop",
    },
    {
      icon: Heart,
      title: "Support",
      description: "Your support helps us reach more people and create lasting impact.",
      color: "bg-primary/20",
      iconColor: "text-primary",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=300&h=200&fit=crop",
    },
    {
      icon: Share2,
      title: "Spread Love",
      description: "Share our mission and help us grow our community of caring hearts.",
      color: "bg-accent",
      iconColor: "text-accent-foreground",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&h=200&fit=crop",
    },
  ];

  return (
    <section id="join-us" className="py-24 bg-background relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
        animate={{
          x: [-20, 20, -20],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-60 h-60 bg-coral/10 rounded-full blur-3xl"
        animate={{
          x: [20, -20, 20],
          scale: [1.1, 1, 1.1],
        }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 fill-primary" />
              </motion.div>
              Be Part of Something Beautiful
              <Sparkles className="w-4 h-4" />
            </motion.span>

            <motion.h2
              className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Join the <span className="text-gradient">Movement</span>
            </motion.h2>

            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Whether you volunteer, support, or simply share kindness — 
              you are part of something meaningful. Together, we grow. Together, we rise.
            </motion.p>
          </motion.div>

          {/* Action Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {actionCards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={cardVariants}
                className="bg-secondary rounded-3xl overflow-hidden group hover:shadow-warm transition-all duration-500"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Card Image */}
                <div className="h-36 overflow-hidden">
                  <motion.img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                <div className="p-6">
                  <motion.div
                    className={`w-12 h-12 ${card.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                  </motion.div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">{card.title}</h3>
                  <p className="text-muted-foreground text-sm">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Impact Stats */}
          <motion.div
            className="bg-card rounded-3xl p-8 mb-12 shadow-soft"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Users, value: "2,000+", label: "Volunteers", color: "text-primary" },
                { icon: Heart, value: "10,000+", label: "Lives Changed", color: "text-coral" },
                { icon: HandHeart, value: "500+", label: "Programs", color: "text-accent-foreground" },
                { icon: Sparkles, value: "100+", label: "Communities", color: "text-lavender-foreground" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.2 }}
                  >
                    <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-2`} />
                  </motion.div>
                  <motion.div
                    className={`text-2xl md:text-3xl font-display font-bold ${stat.color}`}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button variant="hero" size="xl">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="w-5 h-5" />
                </motion.div>
                Get Involved Today
              </Button>
            </motion.div>
            <motion.p
              className="mt-4 text-muted-foreground text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Join over 2,000 volunteers making a difference every day
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default JoinUs;

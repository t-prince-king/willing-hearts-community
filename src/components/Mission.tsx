import { motion } from "framer-motion";
import { Target, Eye, Sparkles, Heart } from "lucide-react";

const Mission = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="mission" className="py-24 gradient-peach relative overflow-hidden">
      {/* Animated decorative elements */}
      <motion.div
        className="absolute top-10 right-10 w-48 h-48 bg-primary/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-40 h-40 bg-coral/15 rounded-full blur-2xl"
        animate={{
          scale: [1.2, 1, 1.2],
          y: [0, -20, 0],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      {/* Floating hearts */}
      <motion.div
        className="absolute top-1/4 left-[10%]"
        animate={{ y: [-10, 10, -10], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <Heart className="w-8 h-8 text-coral/30 fill-coral/20" />
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 right-[15%]"
        animate={{ y: [10, -10, 10], rotate: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Sparkles className="w-10 h-10 text-primary/30" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full text-foreground text-sm font-semibold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              Our Heart & Purpose
              <Heart className="w-4 h-4 text-coral fill-coral" />
            </motion.span>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Mission */}
            <motion.div
              variants={cardVariants}
              className="bg-card/90 backdrop-blur-sm rounded-3xl p-10 shadow-warm group hover:shadow-glow transition-all duration-500"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div
                className="w-14 h-14 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                whileHover={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Target className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                to <span className="text-primary font-semibold">Our mission is to uplift and empower </span> vulnerable communities by providing practical support ,sustainable solution on life changing opportunities. We are committed to supporting women, children, single mothers, and low income families through access to food supports initiatives, skills development, education and community empowerment programs. Through partnerships, innovation and compassion, we work to improve lives, restore dignity, and create 
                lasting social and economic impact starting in
                 Kigali and expanding across Rwanda.
              </p>

              {/* Mission image */}
              <motion.div
                className="mt-6 rounded-2xl overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=500&h=250&fit=crop"
                  alt="People helping community"
                  className="w-full h-40 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={cardVariants}
              className="bg-card/90 backdrop-blur-sm rounded-3xl p-10 shadow-warm group hover:shadow-glow transition-all duration-500"
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div
                className="w-14 h-14 bg-coral/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                whileHover={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
              >
                <Eye className="w-7 h-7 text-coral" />
              </motion.div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                <span className="text-coral font-semibold">Our vision is to build a compassionate community </span>, 
               that rise together through support opportunity and sustainable development. We envision a society where every woman child and vulnerable person leaves you dignity hope and equal opportunities . We dream of a strong self-reliant community where poverty  is reduced, families are empowered and no one is Left behind especially single mothers disadvantages children and the elderly.  A society that cherishes and advocates 
               for the well-being diversity and 
               inclusion of marginalized women and girls.
              </p>

              {/* Vision image */}
              <motion.div
                className="mt-6 rounded-2xl overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <motion.img
                  src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=500&h=250&fit=crop"
                  alt="Happy community celebration"
                  className="w-full h-40 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Promise */}
          <motion.div
            className="mt-12 bg-card/90 backdrop-blur-sm rounded-3xl p-10 text-center shadow-soft"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-2xl font-display font-bold text-foreground mb-6">
              Our Promise
            </h3>
            <motion.div
              className="flex flex-wrap justify-center gap-8 text-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: { staggerChildren: 0.15 },
                },
              }}
            >
              {[
                { color: "bg-primary", text: "We listen" },
                { color: "bg-coral", text: "We care" },
                { color: "bg-accent-foreground", text: "We show up" },
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  className="flex items-center gap-2"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  whileHover={{ scale: 1.1, x: 5 }}
                >
                  <motion.div
                    className={`w-3 h-3 ${item.color} rounded-full`}
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                  <span className="text-muted-foreground">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
            <motion.p
              className="mt-6 text-xl text-foreground font-display font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Because change begins with being <span className="text-gradient">willing</span>.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Mission;

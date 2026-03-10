import { motion, type Easing } from "framer-motion";
import { Heart, Users, Lightbulb, Rocket } from "lucide-react";
import womenImg from "@/assets/women-empowerment.jpg";
import childrenImg from "@/assets/children-care.jpg";
import youthDevImg from "@/assets/youth-development.jpg";
import youthEmpImg from "@/assets/youth-empowerment.jpg";

const services = [
  {
    icon: Heart,
    title: "Women Empowerment",
    description: "Supporting women through education, skills training, and confidence-building programs.",
    color: "bg-coral/10 text-coral",
    borderColor: "hover:border-coral/40",
    image: youthEmpImg,
  },
  {
    icon: Users,
    title: "Children Care",
    description: "Creating safe, happy spaces where children can learn, grow, and feel protected.",
    color: "bg-primary/10 text-primary",
    borderColor: "hover:border-primary/40",
    image: childrenImg,
  },
  {
    icon: Lightbulb,
    title: "Youth Development",
    description: "Helping young people discover their talents and build confidence through mentorship.",
    color: "bg-accent text-accent-foreground",
    borderColor: "hover:border-accent",
    image: youthDevImg,
  },
  {
    icon: Rocket,
    title: "Youth Empowerment",
    description: "Turning passion into purpose with tools, guidance, and opportunities to succeed.",
    color: "bg-lavender text-lavender-foreground",
    borderColor: "hover:border-lavender",
    image: youthEmpImg,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1] as Easing,
    },
  },
};

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-secondary rounded-full text-secondary-foreground text-sm font-semibold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            What We Do
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            We Focus on <span className="text-gradient">People</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            And the beautiful possibilities inside each of them. Every person deserves 
            support, opportunity, and hope.
          </p>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-warm transition-all duration-500 border-2 border-transparent ${service.borderColor}`}
              whileHover={{ y: -10 }}
            >
              {/* Image */}
              <div className="h-40 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              <div className="p-6">
                <motion.div
                  className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <service.icon className="w-7 h-7" />
                </motion.div>
                <h3 className="text-xl font-display font-bold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature image section */}
        <motion.div
          className="mt-20 relative rounded-3xl overflow-hidden shadow-warm"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="aspect-[21/9] relative">
            <img
              src="https://t4.ftcdn.net/jpg/06/50/67/83/360_F_650678374_fioqInkUlRgFLs2NGWODZNLMvmw4p9ku.jpg"
              alt="Community helping each other"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent flex items-center">
              <motion.div
                className="max-w-xl p-8 md:p-12"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                  Together, We Make a Difference
                </h3>
                <p className="text-white/80 text-lg mb-6">
                  Every helping hand creates ripples of change that transform entire communities.
                </p>
                <motion.div
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-white/60 text-sm">Volunteers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-coral">20+</div>
                    <div className="text-white/60 text-sm">Programs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">1+</div>
                    <div className="text-white/60 text-sm">Cities</div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;

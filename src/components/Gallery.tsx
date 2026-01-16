import { motion } from "framer-motion";
import { Camera, Heart, Sparkles } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop",
    title: "Children Learning Together",
    category: "Children",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&h=400&fit=crop",
    title: "Women Empowerment Workshop",
    category: "Women",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
    title: "Youth Leadership Program",
    category: "Youth",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&h=400&fit=crop",
    title: "Community Gathering",
    category: "Community",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
    title: "Mentorship Session",
    category: "Youth",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=600&h=400&fit=crop",
    title: "Helping Hands",
    category: "Community",
  },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 gradient-sky relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-60 h-60 bg-coral/15 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm rounded-full text-foreground text-sm font-semibold mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Camera className="w-4 h-4 text-primary" />
            Moments of Impact
            <Sparkles className="w-4 h-4 text-coral" />
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Our <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real moments of love, growth, and transformation in our community.
            Every smile tells a story of hope.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden shadow-soft hover:shadow-warm transition-shadow duration-500"
              whileHover={{ y: -8 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <motion.img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              >
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.span
                    className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {image.category}
                  </motion.span>
                  <h3 className="text-white font-display font-bold text-lg">
                    {image.title}
                  </h3>
                </div>
              </motion.div>

              {/* Floating heart on hover */}
              <motion.div
                className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              >
                <motion.div
                  className="w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Heart className="w-5 h-5 text-coral fill-coral" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            className="inline-flex items-center gap-2 px-8 py-4 bg-card/90 backdrop-blur-sm rounded-full font-semibold text-foreground shadow-soft hover:shadow-warm transition-all"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <Camera className="w-5 h-5 text-primary" />
            View More Photos
            <Sparkles className="w-4 h-4 text-coral" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;

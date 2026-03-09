import { motion } from "framer-motion";
import { Camera, Heart, Sparkles } from "lucide-react";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpg";

const galleryImages = [
  { id: 1, url: gallery1, title: "Children Learning Together", category: "Children" },
  { id: 2, url: gallery2, title: "Youth Leadership Program", category: "Youth" },
  { id: 3, url: gallery3, title: "Community Mentorship", category: "Community" },
  { id: 4, url: gallery4, title: "Classroom Moments", category: "Children" },
  { id: 5, url: gallery5, title: "Learning in Action", category: "Children" },
  { id: 6, url: gallery6, title: "School Visit", category: "Community" },
  { id: 7, url: gallery7, title: "Caring for Children", category: "Children" },
  { id: 8, url: gallery8, title: "Snack Time Together", category: "Children" },
  { id: 9, url: gallery9, title: "Outdoor Fun", category: "Youth" },
  { id: 10, url: gallery10, title: "Helping Hands", category: "Community" },
  { id: 11, url: gallery11, title: "Feeding the Little Ones", category: "Children" },
  { id: 12, url: gallery12, title: "Mealtime with Love", category: "Community" },
  { id: 13, url: gallery13, title: "Sharing a Meal Together", category: "Children" },
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 gradient-sky relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-20 left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-60 h-60 bg-coral/15 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />

      <div className="container mx-auto px-6 relative z-10">
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => {
            const isLarge = index === 0 || index === 5 || index === 10;
            return (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                className={`group relative rounded-3xl overflow-hidden shadow-soft hover:shadow-warm transition-shadow duration-500 ${
                  isLarge ? "col-span-2 row-span-2" : ""
                }`}
                whileHover={{ y: -8 }}
              >
                <div className={`${isLarge ? "aspect-square" : "aspect-[4/3]"} overflow-hidden`}>
                  <motion.img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    loading="lazy"
                  />
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-primary/90 text-primary-foreground text-xs font-semibold rounded-full mb-2">
                      {image.category}
                    </span>
                    <h3 className="text-white font-display font-bold text-lg">
                      {image.title}
                    </h3>
                  </div>
                </motion.div>

                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

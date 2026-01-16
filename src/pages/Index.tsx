import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Mission from "@/components/Mission";
import Gallery from "@/components/Gallery";
import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Mission />
      <Gallery />
      <JoinUs />
      <Footer />
    </main>
  );
};

export default Index;

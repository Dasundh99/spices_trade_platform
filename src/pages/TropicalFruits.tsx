import React, { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import SideNavigator from "../components/exportNav/exportNav";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { 
    src: "https://plus.unsplash.com/premium_photo-1675731118342-1544e274b633?q=80&w=2127&auto=format&fit=crop", 
    caption: "Organic Mangoes", 
    describe: "Fresh and organic mangoes from Sri Lanka's fertile soil. Known for their unique sweetness and rich flavor, Sri Lankan mangoes are a staple in tropical fruit markets. Mangoes are often used in chutneys, juices, and traditional Sri Lankan sweets like 'Mango Kiri Toffee'."
  },
  { 
    src: "https://images.unsplash.com/photo-1624843994317-541c71718272?w=600&auto=format&fit=crop", 
    caption: "Juicy Coconuts", 
    describe: "Juicy coconuts packed with flavor, grown along the pristine beaches of Sri Lanka. Coconuts are not only delicious to drink but also a key ingredient in Sri Lankan cuisine, used in curries, desserts, and traditional beverages like 'King Coconut Water'."
  },
  { 
    src: "https://images.unsplash.com/photo-1649960861739-113b8588eaf8?w=600&auto=format&fit=crop", 
    caption: "Fresh Pineapples", 
    describe: "Delicious and sweet pineapples, often referred to as the 'King of Fruits'. Grown in the sunny climes of Sri Lanka, pineapples are used in both sweet and savory dishes. Sri Lanka's pineapples are known for their exceptional sweetness and juiciness."
  },
  { 
    src: "https://plus.unsplash.com/premium_photo-1675639895212-696149c275f9?w=600&auto=format&fit=crop", 
    caption: "Exotic Papayas", 
    describe: "Exotic papayas from Sri Lanka's tropical farms, known for their vibrant color and smooth, sweet taste. Papayas are used in Sri Lankan salads, desserts, and juices, and they are often enjoyed as a healthy breakfast option."
  },
  { 
    src: "https://images.unsplash.com/photo-1620036924477-c3d6e9ce36fc?w=600&auto=format&fit=crop", 
    caption: "Sweet Bananas", 
    describe: "Naturally sweet bananas, an everyday snack in Sri Lanka. Sri Lankan bananas come in various varieties, with some being uniquely small, sweet, and perfect for desserts. Bananas are a vital part of Sri Lankan culture, often used in traditional dishes."
  },
  { 
    src: "https://plus.unsplash.com/premium_photo-1675731118342-1544e274b633?q=80&w=2127&auto=format&fit=crop", 
    caption: "Organic Mangoes", 
    describe: "Fresh and organic mangoes from Sri Lanka's fertile soil. Known for their unique sweetness and rich flavor, Sri Lankan mangoes are a staple in tropical fruit markets. Mangoes are often used in chutneys, juices, and traditional Sri Lankan sweets like 'Mango Kiri Toffee'."
  },
];


const TropicalFruits: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(1 - t, 2)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach((item) => {
      gsap.fromTo(
        item,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
          },
        }
      );
    });
  }, []);

  const handleClick = (image: { src: string, caption: string, describe: string }) => {
    // Navigate to a new route with the selected fruit data
    navigate(`/fruit/${image.caption.toLowerCase().replace(/\s+/g, '-')}`, {
      state: { image }
    });
  };

  return (
    <section
      id="tropical"
      className="bg-white min-h-screen pt-16 pb-16 overflow-hidden"
    >
      <div className="container mt-[100px] mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <SideNavigator />
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-black mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          TROPICAL FRUITS
        </motion.h2>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="gallery-item break-inside-avoid relative group overflow-hidden rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => handleClick(image)} // Navigate on click
            >
              <img
                src={image.src}
                alt={image.caption}
                loading="lazy"
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-green-400 bg-opacity-20 text-black p-2 text-center">
                <p className="text-lg">{image.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TropicalFruits;

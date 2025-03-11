import React, { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import SideNavigator from "../components/exportNav/exportNav";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  { src: "https://plus.unsplash.com/premium_photo-1675731118342-1544e274b633?q=80&w=2127&auto=format&fit=crop", caption: "Organic Mangoes", height: "h-80" },
  { src: "https://images.unsplash.com/photo-1624843994317-541c71718272?w=600&auto=format&fit=crop", caption: "Juicy Coconuts", height: "h-96" },
  { src: "https://images.unsplash.com/photo-1649960861739-113b8588eaf8?w=600&auto=format&fit=crop", caption: "Fresh Pineapples", height: "h-72" },
  { src: "https://plus.unsplash.com/premium_photo-1675639895212-696149c275f9?w=600&auto=format&fit=crop", caption: "Exotic Papayas", height: "h-88" },
  { src: "https://images.unsplash.com/photo-1620036924477-c3d6e9ce36fc?w=600&auto=format&fit=crop", caption: "Sweet Bananas", height: "h-80" },
  { src: "https://plus.unsplash.com/premium_photo-1675731118342-1544e274b633?q=80&w=2127&auto=format&fit=crop", caption: "Organic Mangoes", height: "h-96" },
  { src: "https://images.unsplash.com/photo-1649960861739-113b8588eaf8?w=600&auto=format&fit=crop", caption: "Fresh Pineapples", height: "h-72" },
  { src: "https://plus.unsplash.com/premium_photo-1675639895212-696149c275f9?w=600&auto=format&fit=crop", caption: "Exotic Papayas", height: "h-88" },
  { src: "https://images.unsplash.com/photo-1624843994317-541c71718272?w=600&auto=format&fit=crop", caption: "Juicy Coconuts", height: "h-80" },
];

const Spices: React.FC = () => {
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
          SPICES AND OILS
        </motion.h2>
        
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="gallery-item break-inside-avoid relative group overflow-hidden rounded-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={image.src}
                alt={image.caption}
                loading="lazy"
                className={`w-full ${image.height} object-cover transition-transform duration-500 group-hover:scale-110`}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                initial={false}
              >
                <div className="text-white">
                  <p className="text-lg font-semibold">{image.caption}</p>
                  <p className="text-sm opacity-75">Premium Quality</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Spices;
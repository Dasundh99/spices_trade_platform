import React, { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import SideNavigator from "../components/exportNav/exportNav";

gsap.registerPlugin(ScrollTrigger);

// Sample image data (expanded for three columns)
const galleryImages = [
  [
    { src: "https://plus.unsplash.com/premium_photo-1675731118342-1544e274b633?q=80&w=2127&auto=format&fit=crop", caption: "Organic Mangoes" },
    { src: "https://images.unsplash.com/photo-1624843994317-541c71718272?w=600&auto=format&fit=crop", caption: "Juicy Coconuts" },
    { src: "https://images.unsplash.com/photo-1649960861739-113b8588eaf8?w=600&auto=format&fit=crop", caption: "Fresh Pineapples" },
  ],
  [
    { src: "https://plus.unsplash.com/premium_photo-1675639895212-696149c275f9?w=600&auto=format&fit=crop", caption: "Exotic Papayas" },
    { src: "https://images.unsplash.com/photo-1620036924477-c3d6e9ce36fc?w=600&auto=format&fit=crop", caption: "Sweet Bananas" },
    { src: "https://plus.unsplash.com/premium_photo-1675731118342-1544e274b633?q=80&w=2127&auto=format&fit=crop", caption: "Organic Mangoes" },
  ],
  [
    { src: "https://images.unsplash.com/photo-1649960861739-113b8588eaf8?w=600&auto=format&fit=crop", caption: "Fresh Pineapples" },
    { src: "https://plus.unsplash.com/premium_photo-1675639895212-696149c275f9?w=600&auto=format&fit=crop", caption: "Exotic Papayas" },
    { src: "https://images.unsplash.com/photo-1624843994317-541c71718272?w=600&auto=format&fit=crop", caption: "Juicy Coconuts" },
  ],
];

const Tea: React.FC = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Initialize Lenis for smooth scrolling
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

    return () => {
      lenis.destroy();
    };
  }, []);

  // Parallax effect with GSAP
  useEffect(() => {
    const galleryContainer = document.querySelector('.gallery-container');
    if (!galleryContainer) return;
    const height = (galleryContainer as HTMLElement).offsetHeight;
    const columns = document.querySelectorAll('.gallery-column');

    columns.forEach((column, index) => {
      const speedPercent = [0.2, 0.1, 0.3];
      const speed = -speedPercent[index] * height;
      gsap.fromTo(
        column,
        { y: 0 },
        {
          y: speed,
          ease: "none",
          scrollTrigger: {
            trigger: galleryContainer,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    });
  }, []);

  return (
    <>
      <section
        id="tropical"
        className="bg-black min-h-screen pt-16 pb-16 overflow-hidden"
      >
        <div className="container mt-[100px] mx-auto px-6 md:px-12 lg:px-20">
        <SideNavigator />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-[100px] text-center">
            Tea
          </h2>
          <div className="gallery-container grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {galleryImages.map((columnImages, colIndex) => (
              <div
                key={colIndex}
                className="gallery-column flex flex-col gap-4 md:gap-8"
              >
                {columnImages.map((image, index) => (
                  <motion.div
                    key={index}
                    className="relative w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: (colIndex * 3 + index) * 0.1 }}
                  >
                    <img
                      src={image.src}
                      alt={image.caption}
                      loading="lazy"
                      className="w-full h-48 md:h-64 lg:h-80 object-cover rounded-lg shadow-lg"
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-white text-lg font-semibold">
                        {image.caption}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Tea
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import ExportNavigator from "../components/exportNav/exportNav";

// Refined Greenish Color Palette
const colors = {
  deepGreen: "#355E3B",    // Deep, elegant green for text and accents
  sageGreen: "#A9BDA8",    // Soft sage green for backgrounds and highlights
  mutedGreen: "#E8F0E8",   // Very light green for section background
  accentGreen: "#6B8E6B",  // Subtle accent green for hover states
};

// Gallery data
const galleryImages = [
  {
    src: "https://plus.unsplash.com/premium_photo-1675731118342-1544e274b633?q=80&w=2127&auto=format&fit=crop",
    caption: "Organic Mangoes",
    describe: "Fresh and organic mangoes from Sri Lanka's fertile soil.",
  },
  {
    src: "https://images.unsplash.com/photo-1624843994317-541c71718272?w=600&auto=format&fit=crop",
    caption: "Juicy Coconuts",
    describe: "Juicy coconuts grown along Sri Lanka's pristine beaches.",
  },
  {
    src: "https://images.unsplash.com/photo-1649960861739-113b8588eaf8?w=600&auto=format&fit=crop",
    caption: "Fresh Pineapples",
    describe: "Sweet pineapples from Sri Lanka's sunny climes.",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1675639895212-696149c275f9?w=600&auto=format&fit=crop",
    caption: "Exotic Papayas",
    describe: "Vibrant papayas from Sri Lanka's tropical farms.",
  },
  {
    src: "https://images.unsplash.com/photo-1620036924477-c3d6e9ce36fc?w=600&auto=format&fit=crop",
    caption: "Sweet Bananas",
    describe: "Naturally sweet bananas, a Sri Lankan staple.",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1675731118342-1544e274b633?q=80&w=2127&auto=format&fit=crop",
    caption: "Organic Mangoes",
    describe: "Fresh and organic mangoes from Sri Lanka's fertile soil.",
  },
];

/**
 * TropicalFruits Component
 * A professional gallery of tropical fruits with smooth scrolling
 * @returns {JSX.Element} Tropical fruits section
 */
const TropicalVegetables: React.FC = () => {
  const navigate = useNavigate();

  // Scroll to top on mount
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
    return () => lenis.destroy();
  }, []);

  // Handle navigation to fruit detail page
  const handleClick = (image: { src: string; caption: string; describe: string }) => {
    navigate(`/fruit/${image.caption.toLowerCase().replace(/\s+/g, "-")}`, {
      state: { image },
    });
  };

  return (
    <section
      id="tropical"
      className="min-h-screen pt-20 pb-16 overflow-hidden"
      style={{ backgroundColor: colors.mutedGreen }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 mt-[40px]">
        <ExportNavigator />

        {/* Section Title */}
        <h2
          className="
            text-3xl 
            md:text-4xl 
            font-semibold 
            mb-12 
            text-center 
            tracking-tight 
            font-sans 
            antialiased
          "
          style={{ color: colors.deepGreen }}
        >
          Tropical Vegetables
        </h2>

        {/* Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="
                break-inside-avoid 
                relative 
                overflow-hidden 
                rounded-lg 
                shadow-sm 
                cursor-pointer
                bg-white
              "
              onClick={() => handleClick(image)}
            >
              <img
                src={image.src}
                alt={image.caption}
                loading="lazy"
                className="
                  w-full 
                  h-72 
                  object-cover
                "
              />
              <div
                className="
                  absolute 
                  bottom-0 
                  left-0 
                  right-0 
                  p-4 
                  text-center
                "
                style={{
                  backgroundColor: colors.sageGreen,
                  color: colors.deepGreen,
                }}
              >
                <p
                  className="
                    text-base 
                    font-medium 
                    font-sans 
                    tracking-wide 
                    antialiased
                  "
                >
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TropicalVegetables;
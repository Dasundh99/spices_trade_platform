import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import ExportNavigator from "../components/exportNav/exportNav";

// Refined Greenish Color Palette
const colors = {
  deepGreen: "#22C55E",    // A lively, lighter deep green for text and accents
  sageGreen: "#DCFCE7",    // A bright, cheerful sage green for backgrounds and highlights
  mutedGreen: "#F5FBF5",   // An ultra-light, almost glowing green for section backgrounds
  accentGreen: "#8CC089",  // A vivid yet soft green for hover states and accents
};

// Gallery data
const galleryImages = [
  {
    src: "https://farmfreshorganics.com.bd/wp-content/uploads/1723890954068-570x931.jpg",
    caption: "Snake Gourd",
    describe: "Snake gourd is a tropical or subtropical vine that climbs by tendrils. It is a popular vegetable in Sri Lanka, and other Asian countries.",
  },
  {
    src: "https://images.unsplash.com/photo-1509622905150-fa66d3906e09?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Pumpkin",
    describe: "Pumpkin is a popular vegetable in Sri Lanka, and other Asian countries.",
  },
  {
    src: "https://images.unsplash.com/photo-1635013973792-2d1595bfa0b2?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ash Plantain",
    describe: "Ash plantain is a popular vegetable in Sri Lanka, and other Asian countries.",
  },
  {
    src: "https://grosgo.co.uk/cdn/shop/files/PinkStripeBrinjal_27e4b1dc-52bb-42c8-83c1-cbe33c3261bf.jpg?v=1734632650",
    caption: "Brinjal",
    describe: "Brinjal is a popular vegetable in Sri Lanka, and other Asian countries.",
  },
  {
    src: "https://images.unsplash.com/photo-1676994174279-102e0abff98f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Bitter Gourd",
    describe: "Bitter Gourd is a popular vegetable in Sri Lanka, and other Asian countries.",
  },
  {
    src: "https://images.unsplash.com/photo-1668120082831-e83f387e3461?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "cabbage",
    describe: "Cabbage is a popular vegetable in Sri Lanka, and other Asian countries.",
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
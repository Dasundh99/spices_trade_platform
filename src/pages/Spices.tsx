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
    src: "https://images.unsplash.com/photo-1587131782738-de30ea91a542?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Cinnamon",
    describe: "Cinnamon sticks and powder, a staple in Sri Lankan cuisine.",
  },
  {
    src: "https://images.unsplash.com/photo-1636488771211-9c635f5002e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Black pepper",
    describe: "Black pepper, known as the King of Spices, is a pungent and aromatic spice derived from the dried fruit of the *Piper nigrum* plant. It is widely used in Sri Lankan cuisine to add heat and flavor to dishes.",
  },
  {
    src: "https://images.unsplash.com/photo-1615485500834-bc10199bc727?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Turmeric",
    describe: "Turmeric, a vibrant yellow spice, is derived from the root of the *Curcuma longa* plant. It is commonly used in Sri Lankan cuisine for its earthy flavor and numerous health benefits, including anti-inflammatory properties.",
  },
  {
    src: "https://images.unsplash.com/photo-1615477550927-6ec8445fcfe6?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Garlic",
    describe: "Garlic, a pungent and flavorful bulb, is commonly used in Sri Lankan cooking to add depth and aroma to dishes. It is known for its strong, distinctive taste and is also valued for its health benefits, such as boosting immunity and promoting heart health.",
  },
  {
    src: "https://images.unsplash.com/photo-1603431777782-912e3b76f60d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ginger",
    describe: "Ginger, a fragrant and spicy root, is widely used in Sri Lankan cuisine for its zesty flavor and medicinal properties. It adds warmth and depth to dishes and is known for its ability to aid digestion and reduce inflammation.",
  },
  {
    src: "https://images.unsplash.com/photo-1588413333412-82148535db53?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Coconut oil",
    describe: "Coconut oil, extracted from the flesh of mature coconuts, is a staple in Sri Lankan cooking and skincare. It has a rich, slightly sweet flavor and is known for its health benefits, including promoting heart health and providing antimicrobial properties.",
  },
];

/**
 * TropicalFruits Component
 * A professional gallery of tropical fruits with smooth scrolling
 * @returns {JSX.Element} Tropical fruits section
 */
const Spices: React.FC = () => {
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
      className="min-h-screen pt-20 pb-16 overflow-hidden font-lato"
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
          Spices and Oils
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

export default Spices;
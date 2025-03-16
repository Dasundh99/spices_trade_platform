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
    src: "https://th.bing.com/th/id/OIP.idI9tA8BPoMDS0KQl-sGVgHaHa?rs=1&pid=ImgDetMain",
    caption: "Snake Gourd",
    describe: "Snake gourd is a tropical or subtropical vine that climbs by tendrils. It is a popular vegetable in Sri Lanka, and other Asian countries.",
  },
  {
    src: "https://th.bing.com/th/id/OIP.ALoBN_l46Cp_6062xtq-1gHaHa?rs=1&pid=ImgDetMain",
    caption: "Pumpkin",
    describe: "Pumpkin is a popular vegetable in Sri Lanka, and other Asian countries.",
  },
  {
    src: "https://th.bing.com/th/id/OIP.p7yWDaLd0NizIA1OhETqIQHaHa?rs=1&pid=ImgDetMain",
    caption: "Ash Plantain",
    describe: "Ash plantain is a popular vegetable in Sri Lanka, and other Asian countries.",
  },
  {
    src: "https://th.bing.com/th/id/OIP.Dn71JX0hAl91J6x7U53uPwHaHa?rs=1&pid=ImgDetMain",
    caption: "Brinjal",
    describe: "Brinjal is a popular vegetable in Sri Lanka, and other Asian countries.",
  },
  {
    src: "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/310057--01--1555692319.jpeg",
    caption: "Bitter Gourd",
    describe: "Bitter Gourd is a popular vegetable in Sri Lanka, and other Asian countries.",
  },
  {
    src: "https://th.bing.com/th/id/OIP.lgvsHCd01EhuP_0cA_WlLwHaFj?rs=1&pid=ImgDetMain",
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
          Tropical vegetables
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
              {/* Updated caption container - now flows under image */}
              <div
                className="
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
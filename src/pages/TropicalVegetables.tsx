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
    describe: "Snake gourd is a long, slender vegetable that thrives in tropical climates. It has a mild flavor and is commonly used in curries, stir-fries, and soups. Rich in fiber and nutrients, it supports digestion and overall health. In Sri Lanka, it's a staple in many traditional dishes.",
  },
  {
    src: "https://th.bing.com/th/id/OIP.ALoBN_l46Cp_6062xtq-1gHaHa?rs=1&pid=ImgDetMain",
    caption: "Pumpkin",
    describe: "Pumpkin is a nutrient-rich vegetable with a sweet, earthy taste. Used in both savory and sweet dishes, it is packed with vitamins A and C. Popular in Sri Lanka, it's often added to curries, soups, and even desserts for its soft texture and natural sweetness.",
  },
  {
    src: "https://th.bing.com/th/id/OIP.p7yWDaLd0NizIA1OhETqIQHaHa?rs=1&pid=ImgDetMain",
    caption: "Ash Plantain",
    describe: "Ash plantain is a starchy vegetable similar to bananas but less sweet. It is widely used in Sri Lankan cuisine, often boiled, fried, or added to curries. High in fiber and potassium, it supports digestion and provides energy, making it a favorite in traditional dishes.",
  },
  {
    src: "https://th.bing.com/th/id/OIP.Dn71JX0hAl91J6x7U53uPwHaHa?rs=1&pid=ImgDetMain",
    caption: "Brinjal",
    describe: "Brinjal, also known as eggplant, is a versatile vegetable used in a variety of dishes. It absorbs flavors well, making it ideal for curries, stir-fries, and even grilled preparations. Rich in antioxidants and fiber, it is beneficial for heart health and digestion, making it a staple in Sri Lankan cooking.",
  },
  {
    src: "https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/products/310057--01--1555692319.jpeg",
    caption: "Bitter Gourd",
    describe: "Bitter gourd has a distinct bitter taste but is highly valued for its medicinal properties. Used in curries, stir-fries, and even juices, it helps regulate blood sugar levels and boosts immunity. In Sri Lanka, it is a common ingredient in traditional Ayurvedic recipes for its numerous health benefits.",
  },
  {
    src: "https://th.bing.com/th/id/OIP.lgvsHCd01EhuP_0cA_WlLwHaFj?rs=1&pid=ImgDetMain",
    caption: "Cabbage",
    describe: "Cabbage is a leafy vegetable that is widely used in Sri Lankan and global cuisine. It can be eaten raw in salads, stir-fried, or added to soups and curries. Packed with vitamins C and K, it promotes overall health and digestion while adding a crisp texture to dishes.",
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
      className="min-h-screen lg:pt-20 md:pt-15 pt-10 pb-16 overflow-hidden font-lato"
      style={{ backgroundColor: colors.mutedGreen }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 mt-[40px]">
        <ExportNavigator />

        {/* Section Title */}
        {/* <h2
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
        </h2> */}

        {/* Gallery Grid */}
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="
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
                className="w-full h-56 object-cover aspect-[4/3]"
              />
              <div
                className="p-4 text-center"
                style={{
                  backgroundColor: colors.sageGreen,
                  color: colors.deepGreen,
                }}
              >
                <p className="text-base font-medium font-sans tracking-wide antialiased">
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
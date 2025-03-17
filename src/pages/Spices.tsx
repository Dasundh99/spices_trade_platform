import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import ExportNavigator from "../components/exportNav/exportNav";
import Clove from "../assets/Spices/Clove.png"
import Mace from "../assets/Spices/Mace.png"
import Cardamom from "../assets/Spices/Cardamon.png"
import CurryLeaves from "../assets/Spices/CurryLeaves.png"
import Turmeric from "../assets/Spices/Turmeric.png"
import Garlic from "../assets/Spices/Garlic.png"
import Ginger from '../assets/Spices/Ginger.png'
import Cinnamon from '../assets/Spices/Cinnamon.png'
import BlackPepper from '../assets/Spices/BlackPepper.png'
import CoconutOil from '../assets/Spices/CoconutOil.jpg'

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
    src: Cinnamon,
    caption: "Cinnamon",
    describe: "Cinnamon, derived from the inner bark of Cinnamomum trees, is a fragrant spice widely used in Sri Lankan cuisine. Its warm, sweet aroma enhances both savory and dessert dishes. Known for its anti-inflammatory properties, it is also used in traditional medicine and herbal remedies for various health benefits.",
  },
  {
    src: BlackPepper,
    caption: "Black Pepper",
    describe: "Black pepper, often called the 'King of Spices,' comes from the dried berries of the Piper nigrum plant. It adds pungency and depth to Sri Lankan dishes. Rich in antioxidants, it boosts digestion and metabolism, making it both a flavorful and medicinally significant spice in South Asian cooking.",
  },
  {
    src: Turmeric,
    caption: "Turmeric",
    describe: "Turmeric, a bright yellow spice, is derived from the root of 'Curcuma longa'. It is a key ingredient in Sri Lankan cooking, known for its earthy taste and vibrant color. Packed with curcumin, it has powerful anti-inflammatory and antioxidant properties, making it both a culinary and medicinal staple.",
  },
  {
    src: Garlic,
    caption: "Garlic",
    describe: "Garlic, a pungent bulb, is essential in Sri Lankan cuisine. Its bold flavor enhances curries, stir-fries, and meat dishes. Beyond its culinary uses, garlic is renowned for its medicinal properties, including boosting immunity, improving heart health, and reducing blood pressure, making it a vital ingredient in traditional remedies.",
  },
  {
    src: Ginger,
    caption: "Ginger",
    describe: "Ginger, a spicy and aromatic root, is a common ingredient in Sri Lankan cooking. It adds warmth and zest to dishes, teas, and herbal infusions. Known for its digestive benefits, anti-inflammatory properties, and ability to relieve nausea, it is both a flavorful and medicinally significant spice.",
  },
  {
    src: Clove,
    caption: "Clove",
    describe: ""
  },
  {
    src: Mace,
    caption: "Mace",
    describe: ""
  },
  {
    src: Cardamom,
    caption: "Cardamom",
    describe: ""
  },
  {
    src: CurryLeaves,
    caption: "Curry Leaves ",
    describe: ""
  },
  {
    src: CoconutOil,
    caption: "Coconut Oil",
    describe: "Coconut oil, extracted from mature coconut flesh, is a cornerstone of Sri Lankan cuisine. It enhances the richness of curries and fried dishes. Known for its antimicrobial properties and healthy fats, it supports heart health, nourishes skin and hair, and serves as a natural remedy in Ayurvedic practices.",
  },
];

/**
 * TropicalFruits Component
 * A professional gallery of tropical fruits with smooth scrolling
 * @returns {JSX.Element} Tropical fruits section
 */
const Spices: React.FC = () => {
  const navigate = useNavigate();

  // // Scroll to top on mount
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

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
    navigate(`/spices/${image.caption.toLowerCase().replace(/\s+/g, "-")}`, {
      state: { image },
    });
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500);
  }, []);

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
          Spices and Oils
        </h2> */}

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
        className="
          w-full 
          h-auto 
          aspect-[4/4]  /* Changed from 4/3 to 4/4 for slightly taller cards */
          sm:aspect-[4/4] 
          lg:aspect-[4/4]
          object-cover  /* Ensures the image fills the space nicely */
        "
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

export default Spices;
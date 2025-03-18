import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExportNavigator from "../components/exportNav/exportNav";
import KingCoconut from "../assets/Coconut/KingCoconut.png"

// Refined Greenish Color Palette
const colors = {
  deepGreen: "#22C55E",    // A lively, lighter deep green for text and accents
  sageGreen: "#DCFCE7",    // A bright, cheerful sage green for backgrounds and highlights
  mutedGreen: "#F5FBF5",   // An ultra-light, almost glowing green for section backgrounds
  accentGreen: "#8CC089",  // A vivid yet soft green for hover states and accents
};

// Gallery data - Reduced to 3 items for one row
const galleryImages = [
  {
    src: KingCoconut,
    caption: "King Coconut",
    describe: "",
  },
  
  // {
  //   src: "https://images.unsplash.com/photo-1620036924477-c3d6e9ce36fc?w=600&auto=format&fit=crop",
  //   caption: "Sweet Bananas",
  //   describe: "Naturally sweet bananas, a Sri Lankan staple.",
  // },
];

/**
 * TropicalFruits Component
 * A professional gallery of tropical fruits with smooth scrolling
 * @returns {JSX.Element} Tropical fruits section
 */
const Coconut: React.FC = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  const handleClick = (image: { src: string; caption: string; describe: string }) => {
    navigate(`/coconut/${image.caption.toLowerCase().replace(/\s+/g, "-")}`, {
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
      id="coconut"
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
          Tea
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
          color: "black",
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

export default Coconut;
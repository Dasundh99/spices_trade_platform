import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExportNavigator from "../components/exportNav/exportNav";
import Lenis from "@studio-freight/lenis";

import KingCoconut from "../assets/Coconut/KingCoconut.png"
import CoconutOil from '../assets/Spices/CoconutOil.jpg'

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
    describe: "King coconut, known as 'Thambili' in Sri Lanka, is a refreshing tropical drink cherished for its sweet, nutrient-rich water. Widely consumed as a natural hydration source, it’s commonly sold by street vendors across the island. Rich in electrolytes and vitamins, king coconut is also used in traditional Sri Lankan desserts and remedies.",
  },
  {
    src: CoconutOil,
    caption: "Coconut Oil",
    describe: "Coconut oil, extracted from mature coconut flesh, is a cornerstone of Sri Lankan cuisine. It enhances the richness of curries and fried dishes. Known for its antimicrobial properties and healthy fats, it supports heart health, nourishes skin and hair, and serves as a natural remedy in Ayurvedic practices.",
  },
];

const Coconut: React.FC = () => {
  const navigate = useNavigate();

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
                transition-all 
                duration-300 
                hover:shadow-lg 
                group
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
                  aspect-[4/4]
                  sm:aspect-[4/4] 
                  lg:aspect-[4/4]
                  object-cover
                  transition-all 
                  duration-300 
                  group-hover:scale-101 
                  group-hover:brightness-110
                "
              />
              <div
                className="
                  p-4 
                  text-center 
                  transition-colors 
                  duration-300
                  group-hover:bg-opacity-90
                "
                style={{
                  backgroundColor: "white",
                  color: "black",
                }}
              >
                <p className="
                  text-base 
                  font-medium 
                  font-sans 
                  tracking-wide 
                  antialiased
                  group-hover:text-[colors.accentGreen]
                ">
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
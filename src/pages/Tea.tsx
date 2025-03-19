import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import ExportNavigator from "../components/exportNav/exportNav";

import BlackTea from "../assets/Tea/BlackTea.png"
import GreenTea from "../assets/Tea/GreenTea.png"

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
    src: BlackTea,
    caption: "Black Tea",
    describe: "Black tea, a popular beverage in Sri Lanka, is made from fully oxidized tea leaves, giving it a robust flavor and dark color. It is often enjoyed with milk and sugar and is known for its rich aroma, antioxidant properties, and energizing effects.",
  },
  {
    src: GreenTea,
    caption: "Green Tea",
    describe: "Green tea, made from unoxidized tea leaves, has a light, refreshing taste and is known for its health benefits, including antioxidants and improved metabolism. In Sri Lanka, it is often enjoyed as a soothing beverage, promoting relaxation and wellness.",
  },
];

const Tea: React.FC = () => {
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
    navigate(`/tea/${image.caption.toLowerCase().replace(/\s+/g, "-")}`, {
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
      id="tea"
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

export default Tea;
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import ExportNavigator from "../components/exportNav/exportNav";
import SweetPotato from "../assets/Vegetables/SweetPotato.png"
import GreenChili from "../assets/Vegetables/GreenChili.png"
import SnakeGoard from "../assets/Vegetables/SnakeGourd.png"
import Pumpkin from "../assets/Vegetables/Pumpkin.png"
import Ash from "../assets/Vegetables/Ash.png"
import Brinjol from "../assets/Vegetables/Brinjol.png"
import Bitter from "../assets/Vegetables/Bitter.png"

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
    src: SnakeGoard,
    caption: "Snake Gourd",
    describe: "Snake gourd is a long, slender vegetable that thrives in tropical climates. It has a mild flavor and is commonly used in curries, stir-fries, and soups. Rich in fiber and nutrients, it supports digestion and overall health. In Sri Lanka, it's a staple in many traditional dishes.",
  },
  {
    src: Pumpkin,
    caption: "Pumpkin",
    describe: "Pumpkin is a nutrient-rich vegetable with a sweet, earthy taste. Used in both savory and sweet dishes, it is packed with vitamins A and C. Popular in Sri Lanka, it's often added to curries, soups, and even desserts for its soft texture and natural sweetness.",
  },
  {
    src: Ash,
    caption: "Ash Plantain",
    describe: "Ash plantain is a starchy vegetable similar to bananas but less sweet. It is widely used in Sri Lankan cuisine, often boiled, fried, or added to curries. High in fiber and potassium, it supports digestion and provides energy, making it a favorite in traditional dishes.",
  },
  {
    src: Brinjol,
    caption: "Brinjal",
    describe: "Brinjal, also known as eggplant, is a versatile vegetable used in a variety of dishes. It absorbs flavors well, making it ideal for curries, stir-fries, and even grilled preparations. Rich in antioxidants and fiber, it is beneficial for heart health and digestion, making it a staple in Sri Lankan cooking.",
  },
  {
    src: Bitter,
    caption: "Bitter Gourd",
    describe: "Bitter gourd has a distinct bitter taste but is highly valued for its medicinal properties. Used in curries, stir-fries, and even juices, it helps regulate blood sugar levels and boosts immunity. In Sri Lanka, it is a common ingredient in traditional Ayurvedic recipes for its numerous health benefits.",
  },  
  {
    src: SweetPotato,
    caption: "Sweet Potato",
    describe:""
  },  
  {
    src: GreenChili,
    caption: "Green Chili",
    describe:""
  },
];

const TropicalVegetable: React.FC = () => {
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
    navigate(`/vegetable/${image.caption.toLowerCase().replace(/\s+/g, "-")}`, {
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

export default TropicalVegetable;
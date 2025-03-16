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
    describe: "Cinnamon, derived from the inner bark of Cinnamomum trees, is a fragrant spice widely used in Sri Lankan cuisine. Its warm, sweet aroma enhances both savory and dessert dishes. Known for its anti-inflammatory properties, it is also used in traditional medicine and herbal remedies for various health benefits.",
  },
  {
    src: "https://img.freepik.com/premium-photo/black-pepper-white-background-generative-ai_186938-6068.jpg",
    caption: "Black Pepper",
    describe: "Black pepper, often called the 'King of Spices,' comes from the dried berries of the Piper nigrum plant. It adds pungency and depth to Sri Lankan dishes. Rich in antioxidants, it boosts digestion and metabolism, making it both a flavorful and medicinally significant spice in South Asian cooking.",
  },
  {
    src: "https://images.unsplash.com/photo-1615485500834-bc10199bc727?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Turmeric",
    describe: "Turmeric, a bright yellow spice, is derived from the root of 'Curcuma longa'. It is a key ingredient in Sri Lankan cooking, known for its earthy taste and vibrant color. Packed with curcumin, it has powerful anti-inflammatory and antioxidant properties, making it both a culinary and medicinal staple.",
  },
  {
    src: "https://th.bing.com/th/id/R.750ee80645d877fc8b79a1d5d663744b?rik=8uXbmwxw1Hiu4A&pid=ImgRaw&r=0",
    caption: "Garlic",
    describe: "Garlic, a pungent bulb, is essential in Sri Lankan cuisine. Its bold flavor enhances curries, stir-fries, and meat dishes. Beyond its culinary uses, garlic is renowned for its medicinal properties, including boosting immunity, improving heart health, and reducing blood pressure, making it a vital ingredient in traditional remedies.",
  },
  {
    src: "https://th.bing.com/th/id/R.bd4e32bdff9b40b81fcc5fd83a00643b?rik=S%2bOkRu1aU5rLzg&riu=http%3a%2f%2fphotos.demandstudios.com%2fgetty%2farticle%2f197%2f220%2f502011542.jpg&ehk=XDm4Fwddt35MDMvAUKSIFnjb2XOI6trbU%2fbIUVa%2fOgg%3d&risl=&pid=ImgRaw&r=0",
    caption: "Ginger",
    describe: "Ginger, a spicy and aromatic root, is a common ingredient in Sri Lankan cooking. It adds warmth and zest to dishes, teas, and herbal infusions. Known for its digestive benefits, anti-inflammatory properties, and ability to relieve nausea, it is both a flavorful and medicinally significant spice.",
  },
  {
    src: "https://www.shutterstock.com/image-photo/coconut-oil-fruits-cut-half-600nw-1910657323.jpg",
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
          Spices and Oils
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

export default Spices;
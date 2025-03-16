import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExportNavigator from "../components/exportNav/exportNav";

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
    src: "https://th.bing.com/th/id/R.cbed108695d917265dbea07bc609dde8?rik=B9IMhWwrl8q44A&riu=http%3a%2f%2fdetoxdiy.com%2fwp-content%2fuploads%2f2017%2f03%2foolong-tea.jpg&ehk=tECHXfnFTUYBa4afQtu3n9bO0gNPqg1OXxUaQWvGDzY%3d&risl=&pid=ImgRaw&r=0",
    caption: "Black Tea",
    describe: "Black tea, a popular beverage in Sri Lanka, is made from fully oxidized tea leaves, giving it a robust flavor and dark color. It is often enjoyed with milk and sugar and is known for its rich aroma, antioxidant properties, and energizing effects.",
  },
  {
    src: "https://st2.depositphotos.com/2309415/5354/i/450/depositphotos_53541807-stock-photo-green-tea-with-lemon-isolated.jpg",
    caption: "Green Tea",
    describe: "Green tea, made from unoxidized tea leaves, has a light, refreshing taste and is known for its health benefits, including antioxidants and improved metabolism. In Sri Lanka, it is often enjoyed as a soothing beverage, promoting relaxation and wellness.",
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
const Tea: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          Tea
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
        className="
          w-full 
          h-auto 
          aspect-[4/3]  /* Maintains aspect ratio */
          sm:aspect-[4/3] 
          lg:aspect-[4/3]
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

export default Tea;
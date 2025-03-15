import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ExportNavigator from "../components/exportNav/exportNav";

// Refined Greenish Color Palette
const colors = {
  deepGreen: "#3B8C5E",
  sageGreen: "#C8E0C5",
  mutedGreen: "#F5FBF5",
  accentGreen: "#8CC089",
};

// Gallery data - Reduced to 3 items for one row
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1617191880520-c6a69e04fa75?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Black Tea",
    describe: "Black tea, a popular beverage in Sri Lanka, is made from fully oxidized tea leaves, giving it a robust flavor and dark color. It is often enjoyed with milk and sugar and is known for its rich aroma, antioxidant properties, and energizing effects.",
  },
  {
    src: "https://manorhousedental.com/wp-content/uploads/2023/04/leaf-plate-wood-object-healthy-eating.jpg",
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
      className="min-h-screen pt-20 pb-16 overflow-hidden"
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
          Tea
        </h2>

        {/* Gallery Grid - Changed to single row with 3 elements */}
        <div className="grid grid-cols-3 gap-6">
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

export default Tea;
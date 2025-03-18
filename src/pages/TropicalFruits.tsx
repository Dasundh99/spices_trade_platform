import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import ExportNavigator from "../components/exportNav/exportNav";
import Papaya from "../assets/Fruits/Papaya.png";
import Avacado from "../assets/Fruits/Avacado.png"
import Watermelon from "../assets/Fruits/Watermelon.png"
import Lime from "../assets/Fruits/Lime.png"
import Soursop from "../assets/Fruits/Soursop.png"
import Mango from "../assets/Fruits/Mango.png"
import Pineapple from "../assets/Fruits/Pineapple.png"
import Rambutan from "../assets/Fruits/Rambutan.png"
import Banana from "../assets/Fruits/Banana.png"
import JackFruit from "../assets/Fruits/JackFruit.png"

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
    src: Mango,
    caption: "Mango",
    describe: "A tropical delight, mangoes from Sri Lanka are rich in flavor, offering a perfect balance of sweetness and tanginess. Enjoyed fresh or in smoothies, desserts, and savory dishes, Sri Lankan mangoes are known for their juicy and tender texture, making them a favorite among fruit lovers."
  },
  {
    src: Pineapple,
    caption: "Pineapple",
    describe: "Known for its vibrant yellow flesh and sweet-tart flavor, Sri Lankan pineapples are prized for their intense sweetness and juiciness. These tropical fruits are perfect for refreshing fruit salads, desserts, and tropical beverages, and they also add a delightful zing to savory dishes and grilled recipes."
  },
  {
    src: Rambutan,
    caption: "Rambutan",
    describe: "Rambutan is an exotic fruit native to Sri Lanka, with a hairy exterior and a juicy, sweet interior. Its unique texture and taste make it a fun and delicious snack. The fruit is packed with vitamins and antioxidants, making it a healthy and refreshing treat for any occasion."
  },
  {
    src: Banana,
    caption: "Banana",
    describe: "Bananas from Sri Lanka are creamy and naturally sweet, making them a versatile fruit. Whether eaten raw, added to smoothies, or used in baking, Sri Lankan bananas offer a rich flavor and nutritional benefits. Their perfect ripeness makes them a convenient snack for any time of the day."
  },
  {
    src: JackFruit,
    caption: "Jackfruit",
    describe: "Jackfruit, a large tropical fruit from Sri Lanka, offers a unique blend of sweet and savory flavors. Its versatile nature makes it ideal for both sweet dishes like desserts and savory meals such as curries. Rich in fiber, vitamins, and antioxidants, it’s a nutritious and flavorful fruit choice."
  },
  {
    src: Papaya,
    caption: "Papaya",
    describe: ""
  },
  {
    src: Avacado,
    caption: "Avacado",
    describe: ""
  },
  {
    src: Watermelon,
    caption: "Watermelon",
    describe: ""
  },
  {
    src: Lime,
    caption: "Lime",
    describe: ""
  },
  {
    src: Soursop,
    caption: "Soursop",
    describe: ""
  },

];
/**
 * TropicalFruits Component
 * A professional gallery of tropical fruits with smooth scrolling
 * @returns {JSX.Element} Tropical fruits section
 */
const TropicalFruits: React.FC = () => {
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
    navigate(`/fruit/${image.caption.toLowerCase().replace(/\s+/g, "-")}`, {
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
          Tropical Fruits
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

export default TropicalFruits;
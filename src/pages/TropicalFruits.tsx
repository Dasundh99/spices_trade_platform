import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import ExportNavigator from "../components/exportNav/exportNav";

import Papaya from "../assets/Fruits/Papaya.png";
import Avacado from "../assets/Fruits/Avocado.png"
import Watermelon from "../assets/Fruits/Watermelon.png"
import Lime from "../assets/Fruits/Lime.png"
import Soursop from "../assets/Fruits/Soursop.png"
import Mango from "../assets/Fruits/Mango.png"
import Pineapple from "../assets/Fruits/Pineapple.png"
import Rambutan from "../assets/Fruits/Rambutan.png"
import Banana from "../assets/Fruits/Banana.png"
import JackFruit from "../assets/Fruits/JackFruit.png"

// Brand Color Palette
const colors = {
  spiceRed: "#8B2626",
  cream: "#FFF8F0",
  ceylonGreen: "#2B5B2E",
  charcoal: "#1A1A1A",
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
    describe: "Papaya, known as 'Gas Labu' in Sri Lanka, is a tropical fruit loved for its sweet, juicy flesh and rich nutritional benefits. Often enjoyed fresh, in fruit salads, or as a juice, it aids digestion and boosts immunity. Unripe papaya is also used in Sri Lankan curries and pickles."
  },
  {
    src: Avacado,
    caption: "Avocado",
    describe: "Avocado, known as 'Aligeta Peara' in Sri Lanka, is a creamy, nutrient-rich fruit enjoyed in both sweet and savory dishes. Commonly blended into smoothies with sugar and milk or eaten fresh, it’s packed with healthy fats and vitamins. Avocado trees thrive in Sri Lanka’s tropical climate, especially in upcountry regions."
  },
  {
    src: Watermelon,
    caption: "Watermelon",
    describe: "Watermelon, known as 'Komadu' in Sri Lanka, is a refreshing tropical fruit enjoyed for its sweet, hydrating flesh. Popular in juices, fruit salads, and as a cooling snack, it thrives in Sri Lanka’s warm climate. Rich in vitamins and antioxidants, it’s a favorite during hot weather and festive gatherings."
  },
  {
    src: Lime,
    caption: "Lime",
    describe: "Lime, known as 'Dehi' in Sri Lanka, is a citrus fruit widely used in cooking, beverages, and traditional remedies. Its tangy juice enhances curries, sambols, and seafood dishes, while also being a key ingredient in refreshing drinks. Packed with vitamin C, lime is valued for its health benefits and zesty flavor."
  },
  {
    src: Soursop,
    caption: "Soursop",
    describe: "Soursop, known as 'Katu Anoda' in Sri Lanka, is a tropical fruit with a creamy texture and a sweet-tangy flavor. Often enjoyed fresh, in juices, or as a dessert, it’s believed to have medicinal properties. Rich in antioxidants and vitamins, soursop is a popular choice for refreshing drinks and herbal remedies."
  },

];

const TropicalFruits: React.FC = () => {
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
      id="fruit"
      className="min-h-screen pt-20 md:pt-24 lg:pt-28 pb-16 overflow-hidden font-lato"
      style={{ backgroundColor: colors.cream }}
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

export default TropicalFruits;
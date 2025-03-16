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
      src: "https://th.bing.com/th/id/OIP.75mnHF5lab6Y0iCVfQN0hwHaHa?rs=1&pid=ImgDetMain",
      caption: "Mango",
      describe: "Premium mango varieties from Sri Lanka's tropical regions.",
    },
    {
      src: "https://getfreshswansea.co.uk/wp-content/uploads/2020/07/pineapple.jpg",
      caption: "Pineapple",
      describe: "Sweet and juicy pineapples from Sri Lanka's plantations.",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/029/228/582/large_2x/rambutan-transparent-background-free-png.png",
      caption: "Rambutan",
      describe: "Exotic rambutan with sweet, juicy flesh from Sri Lanka.",
    },
    {
      src: "https://th.bing.com/th/id/OIP.AtddZh1gwIOxJ1gdMkis_QHaHa?rs=1&pid=ImgDetMain",
      caption: "Banana",
      describe: "Unique wood apples with a distinctive tangy flavor.",
    },
    {
      src: "https://www.luluhypermarket.com/cdn-cgi/image/f=auto/medias/1187972-01.jpg-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxOTAzNjV8aW1hZ2UvanBlZ3xhVzFoWjJWekwyaGtNUzlvWXpJdk9URTJNVGt3TURjMU1qa3lOaTVxY0djfGQxN2I1OGE2YzA5NTI4MTI4NGVmZDNlMzMwMDlmYTc5NzNiN2U2MjRmZGRhMWE3OTZiOWJkMmFmNGU2YmFkZjE",
      caption: "Mangosteen",
      describe: "Delicious mangosteen, the queen of tropical fruits.",
    },
    {
      src: "https://th.bing.com/th/id/OIP.A3itxGJ9fFwkmplVS_2X0gHaHa?rs=1&pid=ImgDetMain",
      caption: "Jackfruit",
      describe: "Versatile jackfruit varieties from Sri Lanka's tropics.",
    }
];
/**
 * TropicalFruits Component
 * A professional gallery of tropical fruits with smooth scrolling
 * @returns {JSX.Element} Tropical fruits section
 */
const TropicalFruits: React.FC = () => {
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
      className="min-h-screen pt-20 pb-16 overflow-hidden font-lato"
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
          Tropical Fruits
        </h2>

        {/* Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="
                break-inside-avoid 
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
              {/* Updated caption container - now flows under image */}
              <div
                className="
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

export default TropicalFruits;
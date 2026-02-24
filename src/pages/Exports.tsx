// import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Image Imports (Consider converting to WebP for performance)
import img1 from "../assets/products/cinnamon.jpg";
import img2 from "../assets/products/BlackPepper.png";
import img3 from "../assets/products/goraka.jpg";

// Define TypeScript interface for image items
interface ExportItem {
  id: number;
  src: string;
  text: string;
  path: string;
  describe: string;
}

// Move to a separate constants file (e.g., `exportData.ts`)
const exportItems: ExportItem[] = [
  { id: 1, src: img1, text: "Cinnamon", path: "/spices/cinnamon", describe: "Cinnamon, derived from the inner bark of Cinnamomum trees, is a fragrant spice widely used in Sri Lankan cuisine. Its warm, sweet aroma enhances both savory and dessert dishes. Known for its anti-inflammatory properties, it is also used in traditional medicine." },
  { id: 2, src: img2, text: "Black Pepper", path: "/spices/black-pepper", describe: "Black pepper, often called the 'King of Spices,' comes from the dried berries of the Piper nigrum plant. It adds pungency and depth to Sri Lankan dishes. Rich in antioxidants, it boosts digestion and metabolism." },
  { id: 3, src: img3, text: "Goraka", path: "/spices/goraka", describe: "Garcinia cambogia, commonly known as Goraka, is a tropical fruit native to South Asia. It is a vital souring agent in Sri Lankan curries, especially seafood. It's highly valued for its health benefits, including supporting weight management and digestion." },
];

// Reusable Card Component
const ExportCard: React.FC<ExportItem> = ({ src, text }) => {
  const navigate = useNavigate();

  // Map product names to IDs used in SpicesToggle
  const getSpiceId = (name: string) => {
    if (name === "Cinnamon") return "cinnamon";
    if (name === "Black Pepper") return "black-pepper";
    if (name === "Goraka") return "goraka";
    return "cinnamon";
  };

  const handleNavigation = () => navigate("/spices", { state: { activeTab: getSpiceId(text) } });
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") handleNavigation();
  };

  return (
    <article
      className="group relative overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-white font-lato"
      onClick={handleNavigation}
      onKeyDown={handleKeyPress}
      role="button"
      tabIndex={0}
      aria-label={`Navigate to ${text} page`}
    >
      <div className="relative w-full h-64 md:h-45 lg:h-64 overflow-hidden"> {/* Customizable height */}
        <img
          src={src}
          alt={text}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-ceylon-green text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            View More
          </span>
        </div>
      </div>

      <div className="p-2 text-black bg-gray-100 text-center">
        <h3 className="text-lg mb-1 tracking-tight">{text}</h3>
      </div>
    </article>
  );
};

// Main Component
const Exports: React.FC = () => {
  return (
    <section
      id="exports"
      className="min-h-[60vh] py-8 bg-cream overflow-hidden font-lato"
      aria-label="Product Exports Section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl text-charcoal font-Semibold tracking-wide font-lato">
            Products
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
          {/* Customize width with max-w-* or w-* */}
          {exportItems.map((item) => (
            <ExportCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exports;
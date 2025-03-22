// import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Image Imports (Consider converting to WebP for performance)
import img1 from "../assets/fruit.png";
import img2 from "../assets/vegetable.png";
import img3 from "../assets/spice.png";
import img4 from "../assets/coconut.png";

// Define TypeScript interface for image items
interface ExportItem {
  id: number;
  src: string;
  text: string;
  path: string;
}

// Move to a separate constants file (e.g., `exportData.ts`)
const exportItems: ExportItem[] = [
  { id: 1, src: img1, text: "Tropical Fruits", path: "/fruits" },
  { id: 2, src: img2, text: "Tropical Vegetables", path: "/vegetables" },
  { id: 3, src: img3, text: "Spices and Essential Oils", path: "/spices" },
  { id: 4, src: img4, text: "Coconut Products", path: "/coconut" },
];

// Reusable Card Component
const ExportCard: React.FC<ExportItem> = ({ src, text, path }) => {
  const navigate = useNavigate();

  const handleNavigation = () => navigate(path);
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") navigate(path);
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
      <div className="relative w-full h-64 md:h-45 lg:h-50"> {/* Customizable height */}
        <img
          src={src}
          alt={text}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
          loading="lazy"
        />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-2 text-gray-900 text-center">
    <h3 className="text-md mb-1 tracking-tight">{text}</h3>
</div>

      <div className="absolute inset-0 border-2 border-green-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
    </article>
  );
};

// Main Component
const Exports: React.FC = () => {
  return (
    <section
      id="exports"
      className="min-h-[60vh] py-8 bg-white overflow-hidden font-lato"
      aria-label="Product Exports Section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl text-black font-Semibold tracking-wide">
            Exports
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl mx-auto">
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
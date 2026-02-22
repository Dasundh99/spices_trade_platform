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
}

// Move to a separate constants file (e.g., `exportData.ts`)
const exportItems: ExportItem[] = [
  { id: 1, src: img1, text: "Cinnamon", path: "/spices" },
  { id: 2, src: img2, text: "Black Pepper", path: "/spices" },
  { id: 3, src: img3, text: "Goraka", path: "/spices" },
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

      <div className="p-2 text-black bg-gray-100 text-center">
    <h3 className="text-lg mb-1 tracking-tight">{text}</h3>
</div>

      <div className="absolute inset-0 border-2 border-spice-red opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
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
          <h2 className="text-4xl md:text-6xl text-charcoal font-Semibold tracking-wide">
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
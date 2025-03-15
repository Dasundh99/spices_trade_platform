import React from "react";
import { useNavigate } from "react-router-dom";

// Image Imports (Consider converting to WebP for performance)
import img1 from "../assets/debora-cardenas-BIj5FAFQ_rk-unsplash.jpg";
import img2 from "../assets/ibuki-tsubo-OUTKKo3lHuM-unsplash (1).jpg";
import img3 from "../assets/andy-holmes-mTqGgeYkfaY-unsplash (1).jpg";
import img4 from "../assets/ramakrishnan-nataraj-ptMFONhgVho-unsplash.jpg";

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
  {
    id: 1,
    src: img1,
    text: "Tropical Fruits",
    path: "/fruits",
    describe: "Explore our fresh and juicy tropical fruits, packed with vitamins and flavor.",
  },
  {
    id: 2,
    src: img2,
    text: "Tropical Vegetables",
    path: "/vegetables",
    describe: "Explore our fresh tropical vegetables, packed with nutrients and flavor.",
  },
  {
    id: 3,
    src: img3,
    text: "Spices and Oils",
    path: "/spices",
    describe: "Explore our rich and aromatic spices and oils, packed with flavor and nutrients.",
  },
  {
    id: 4,
    src: img4,
    text: "Tea",
    path: "/tea",
    describe: "Explore our finest tea collection, packed with flavor and aroma.",
  },
];

// Reusable Card Component
const ExportCard: React.FC<ExportItem> = ({ src, text, path, describe }) => {
  const navigate = useNavigate();

  const handleNavigation = () => navigate(path);
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      navigate(path);
    }
  };

  return (
    <article
      className="group relative overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer bg-white"
      onClick={handleNavigation}
      onKeyDown={handleKeyPress}
      role="button"
      tabIndex={0}
      aria-label={`Navigate to ${text} page`}
    >
      <div className="relative w-full h-72">
        <img
          src={src}
          alt={text}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 "
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
        <h3 className="text-xl font-semibold mb-1 tracking-tight">{text}</h3>
        <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {describe}
        </p>
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
      className="min-h-[70vh] py-8 bg-gray-50 overflow-hidden"
      aria-label="Product Exports Section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl text-green-700 tracking-wide font-light opacity-40">
            Exports
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {exportItems.map((item) => (
            <ExportCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exports;
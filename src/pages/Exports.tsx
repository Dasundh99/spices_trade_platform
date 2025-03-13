import React from "react";
import { useNavigate } from "react-router-dom";

// Image Imports
import img1 from "../assets/debora-cardenas-BIj5FAFQ_rk-unsplash.jpg";
import img2 from "../assets/ibuki-tsubo-OUTKKo3lHuM-unsplash (1).jpg";
import img3 from "../assets/andy-holmes-mTqGgeYkfaY-unsplash (1).jpg";
import img4 from "../assets/ramakrishnan-nataraj-ptMFONhgVho-unsplash.jpg";

const MyPage: React.FC = () => {
  const navigate = useNavigate();

  // Image Data
  const images = [
    {
      id: 1,
      src: img1,
      text: "Tropical Fruits",
      path: "/fruits",
      describe: "EXPLORE OUR FRESH AND JUICY TROPICAL FRUITS, PACKED WITH VITAMINS AND FLAVOR."
    },
    {
      id: 2,
      src: img2,
      text: "Tropical Vegetables",
      path: "/vegetables",
      describe: "EXPLORE OUR FRESH AND CRISP TROPICAL VEGETABLES, PACKED WITH NUTRIENTS AND FLAVOR."
    },
    {
      id: 3,
      src: img3,
      text: "Spices and Oils",
      path: "/spices",
      describe: " EXPLORE OUR RICH AND AROMATIC SPICES AND OILS, PACKED WITH FLAVOR AND NUTRIENTS."
    },
    {
      id: 4,
      src: img4,
      text: "Tea",
      path: "/tea",
      describe: "EXPLORE OUR FINEST TEA COLLECTION, PACKED WITH FLAVOR AND AROMA."
    },
  ];

  return (
    <section id="exports" className="min-h-screen flex flex-col py-12 bg-white">
      {/* Title */}
      {/* Horizontal Line Divider
      <div className="w-full flex justify-center my-20">
        <hr className="w-3/4 border-t-1 border-gray-300" />
      </div> */}

      <div className="text-center py-5">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[7rem] font-bold text-green-600 uppercase tracking-wider text-center opacity-20 pb-10">
          EXPORTS
        </h2>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-8 items-center">
      {images.map((image) => (
  <div
    key={image.id}
    className="relative overflow-hidden shadow-lg group cursor-pointer transition-all duration-500"
    onClick={() => navigate(image.path)}
  >
    {/* Image with Click Effect */}
    <img
      src={image.src}
      alt={image.text}
      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110 active:scale-95 cursor-pointer"
    />
    
    {/* Always Visible Image Name */}
    <div className="absolute bottom-0 left-0 right-0 bg-green-100 bg-opacity-20 text-green-500 text-lg font-semibold text-center py-2">
      {image.text}
    </div>

    {/* Click Indicator */}
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <p className="text-white text-lg font-semibold">Click to Explore</p>
    </div>

    {/* Description Tooltip */}
    {image.describe && (
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-green-600 bg-opacity-60 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <p className="text-xl sm:text-xl md:text-2xl text-center">{image.describe}</p>
      </div>
    )}
  </div>
))}
      </div>

    </section>
  );
};

export default MyPage;

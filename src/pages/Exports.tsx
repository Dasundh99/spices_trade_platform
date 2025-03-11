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
    { id: 1, src: img1, text: "Tropical Fruits", path: "/fruits" },
    { id: 2, src: img2, text: "Tropical Vegetables", path: "/vegetables" },
    { id: 3, src: img3, text: "Spices and Oils", path: "/spices" },
    { id: 4, src: img4, text: "Tea", path: "/tea" },
  ];

  return (
    <section id="exports" className="min-h-screen flex flex-col py-12 bg-white">
      {/* Title */}
      {/* Horizontal Line Divider */}
      <div className="w-full flex justify-center mt-10 mb-5">
          <hr className="w-3/4 border-t-2 border-gray-300" />
        </div>

      <div className="text-center py-5">
        <h2 className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold text-green-600 uppercase tracking-wider opacity-20">
          EXPORTS
        </h2>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-8 items-center"> 
        {images.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer transition-all duration-500"
            onClick={() => navigate(image.path)}
          >
            <img
              src={image.src}
              alt={image.text}
              className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Always Visible Image Name */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-lg font-semibold text-center py-2">
              {image.text}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyPage;

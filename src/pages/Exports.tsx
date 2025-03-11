import React from "react";
import { useNavigate } from "react-router-dom";

// Image Imports
import img1 from "../assets/debora-cardenas-BIj5FAFQ_rk-unsplash.jpg";
import img2 from "../assets/ibuki-tsubo-OUTKKo3lHuM-unsplash (1).jpg";
import img3 from "../assets/andy-holmes-mTqGgeYkfaY-unsplash (1).jpg";
import img4 from "../assets/ramakrishnan-nataraj-ptMFONhgVho-unsplash.jpg";
import { FaArrowRight } from "react-icons/fa";

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
    <section
      id="exports"
      className="min-h-screen flex flex-col py-1 sm:py-1 bg-white"
    >
      {/* Row 1: Title */}
      <div className="flex justify-center items-center flex-1 text-center sm:py-5 md">
        <h2
          className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold text-black uppercase tracking-wider text-center opacity-30 p-5 sm:p-10 md:p-12 lg:p-16"
          style={{ lineHeight: "0", marginTop: "0rem", marginLeft: "0rem" }}
        >
          EXPORTS
        </h2>

      </div>

      {/* Row 2: Image Grid */}
      <div className="flex flex-wrap justify-center gap-6 pt-4 sm:pt-1 md:pt-1 max-w-[1400px] mx-auto pb-20">
        {images.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-lg shadow-lg group w-1/3 sm:w-1/4 md:w-1/5 max-h-[300px] transition-transform duration-500 ease-in-out"
          >
            <img
              src={image.src}
              alt={`Export product ${image.text}`}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-300 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black-100 to-transparent flex flex-col items-center justify-end p-4 transition-opacity duration-300">
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold text-center px-2 break-words opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {image.text}
              </p>
            </div>
            {/* Navigation Icon */}
            <div
              className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
              onClick={() => navigate(image.path)}
            >
              <div className="bg-white p-3 rounded-full shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 ease-out">
                <FaArrowRight className="text-black text-xl" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyPage;

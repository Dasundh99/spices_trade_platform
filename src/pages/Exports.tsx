import React from "react";
import { useNavigate } from "react-router-dom"; 
import img1 from '../assets/bon-vivant-Ooj1c6fhdFM-unsplash.jpg';
import img2 from '../assets/sri-lanka-KSa66AYiqnk-unsplash.jpg';
import img3 from '../assets/zahrin-lukman-VSNoQdimlQQ-unsplash.jpg';
import img4 from '../assets/pritindra-das-hIY-acW8e3w-unsplash.jpg';

const Exports: React.FC = () => {
  const navigate = useNavigate(); 

  const images = [
    { id: 1, src: img1, text: "Tropical Foods", path: "/foods" },
    { id: 2, src: img2, text: "Tropical vegetables", path: "/vegetables" },
    { id: 3, src: img3, text: "Spices", path: "/spices" },
    { id: 4, src: img4, text: "Tea", path: "/tea" },
  ];

  return (
    <section id="exports" className="bg-green-50 min-h-screen flex items-center py-16 z-0">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-green-700 mb-6 text-center">
          Exports
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image) => (
            <div 
              key={image.id}
              className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-500 group cursor-pointer"
              onClick={() => navigate(image.path)}
            >
              <img
                src={image.src}
                alt={`Export product ${image.id}`}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-800/50 to-transparent flex items-center justify-center">
                <p className="text-white text-xl font-bold">{image.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Exports;

import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import img1 from "../assets/products/cinnamon.jpg";
import img2 from "../assets/products/BlackPepper.png";
import img3 from "../assets/products/goraka.jpg";

interface SpiceData {
  id: string;
  name: string;
  src: string;
  description: string;
}

const spicesData: SpiceData[] = [
  {
    id: "cinnamon",
    name: "Cinnamon",
    src: img1,
    description: "Cinnamon, derived from the inner bark of Cinnamomum trees, is a fragrant spice widely used in Sri Lankan cuisine. Its warm, sweet aroma enhances both savory and dessert dishes. Known for its anti-inflammatory properties, it is also used in traditional medicine.",
  },
  {
    id: "black-pepper",
    name: "Black Pepper",
    src: img2,
    description: "Black pepper, often called the 'King of Spices,' comes from the dried berries of the Piper nigrum plant. It adds pungency and depth to Sri Lankan dishes. Rich in antioxidants, it boosts digestion and metabolism.",
  },
  {
    id: "goraka",
    name: "Goraka",
    src: img3,
    description: "Garcinia cambogia, commonly known as Goraka, is a tropical fruit native to South Asia. It is a vital souring agent in Sri Lankan curries, especially seafood. It's highly valued for its health benefits, including supporting weight management and digestion.",
  }
];

const SpicesToggle: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Default to cinnamon if no state is provided
  const initialState = (location.state as any)?.activeTab || "cinnamon";
  const [activeSpiceId, setActiveSpiceId] = useState<string>(initialState);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeSpiceId]);

  const activeSpice = spicesData.find(s => s.id === activeSpiceId) || spicesData[0];

  return (
    <div className="min-h-screen pt-32 md:pt-40 pb-20 font-lato bg-cream">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Toggle / Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {spicesData.map((spice) => (
            <button
              key={spice.id}
              onClick={() => setActiveSpiceId(spice.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-md cursor-pointer ${
                activeSpiceId === spice.id 
                  ? "bg-ceylon-green text-white scale-105" 
                  : "bg-white text-charcoal hover:bg-ceylon-green-light"
              }`}
            >
              {spice.name}
            </button>
          ))}
        </div>

        {/* Spice Detail Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden w-full transition-all duration-500 min-h-[400px]">
          <div className="flex flex-col lg:flex-row h-full">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 p-8 flex items-center justify-center bg-gray-50">
              <img
                src={activeSpice.src}
                alt={activeSpice.name}
                className="max-w-full h-auto max-h-[400px] object-contain rounded-lg shadow-sm"
              />
            </div>

            {/* Details Section */}
            <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-spice-red">
                {activeSpice.name}
              </h2>
              <div className="w-16 h-1 bg-ceylon-green rounded-full"></div>
              <p className="text-lg leading-relaxed text-charcoal font-light">
                {activeSpice.description}
              </p>
            </div>
          </div>
        </div>
        
        {/* Back Navigation */}
        <div className="mt-8 flex justify-center lg:justify-end">
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 border border-ceylon-green text-ceylon-green font-medium rounded-lg hover:bg-ceylon-green hover:text-white transition-colors duration-300 cursor-pointer"
          >
            Back to Home
          </button>
        </div>

      </div>
    </div>
  );
};

export default SpicesToggle;

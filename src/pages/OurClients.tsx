import React, { useState } from "react";
import World from "@react-map/world";

const OurClients: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  const countryNameToCode: Record<string, string> = {
    "Germany": "DE",
    "United Kingdom": "GB",
    "India": "IN",
    "Maldives": "MV",
    "United Arab Emirates": "AE",
    "Bangladesh": "BD",
    "Malaysia": "MY",
  };

  const countryCodes = Object.values(countryNameToCode);

  const handleCountrySelect = (countryCode: string | null) => {
    const countryName = Object.keys(countryNameToCode).find(
      (key) => countryNameToCode[key] === countryCode
    );
    setSelectedCountry(countryName || countryCode);
  };

  return (
    <section
      id="clients"
      className="min-h-screen flex flex-col items-center justify-center pt-2 bg-white"
    >
      <div className="w-full flex justify-center mb-6">
        <hr className="w-3/4 border-t-2 border-gray-300" />
      </div>

      <div className="flex flex-col items-center justify-center w-full max-w-7xl mx-auto text-center px-4">
        <div className="w-full mb-8 flex flex-col items-center">
          <h2
            className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold text-green-600 uppercase tracking-wider opacity-20"
            style={{ lineHeight: "1" }}
          >
            CLIENTS
          </h2>
        </div>

        <div
          className="flex justify-center items-center w-full max-w-full mt-4"
          style={{ height: "clamp(400px, 60vh, 800px)" }}
        >
          <div className="w-full max-w-8xl flex justify-center items-center">
            <World
              {...({ 
                selected: countryCodes,
                color: '#000000' // Add this to make selected countries black
              } as any)}
              onSelect={handleCountrySelect}
              type="select-single"
              className="world-map"
            />
          </div>
        </div>

        {selectedCountry && (
          <div className="mt-4 text-lg font-semibold text-gray-800 text-center">
            Selected: {selectedCountry}
          </div>
        )}
      </div>
    </section>
  );
};

export default OurClients;
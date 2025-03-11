import React from "react";

const OurClients: React.FC = () => {
  return (
    <section id="clients" className="min-h-screen flex flex-col items-center pt-2 bg-white">
      {/* Horizontal Line Divider - Above Title */}
      <div className="w-full flex justify-center mb-6">
        <hr className="w-3/4 border-t-2 border-gray-300" />
      </div>

      {/* Title Section */}
      <div className="flex max-w-4xl mx-auto text-center">
        <h2
          className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold text-green-600 uppercase tracking-wider text-center opacity-20"
          style={{ lineHeight: "1", marginTop: "0rem", marginLeft: "0rem" }}
        >
          CLIENTS
        </h2>
      </div>
    </section>
  );
};

export default OurClients;

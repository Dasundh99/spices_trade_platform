import React from "react";

const OurClients: React.FC = () => {
  return (
    <section id="clients" className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-white via-green-white to-black">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] font-bold text-black uppercase tracking-wider text-center opacity-30"
            style={{ lineHeight: "1", marginTop: "2rem", marginLeft: "4rem" }}
          >
          CLIENTS
        </h2>
      </div>
    </section>
  );
};

export default OurClients;

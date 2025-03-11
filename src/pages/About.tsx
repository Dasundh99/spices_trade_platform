import React from "react";
import img4 from "/image_fx_ (2).jpg";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative flex min-h-screen w-full items-center justify-center py-16"
      style={{
        backgroundImage: 'url("/image_fx_ (2).jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minWidth: "100vw",
        minHeight: "100vh",
      }}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-12">
        

          {/* Title and Content (Right Side) */}
          <div className="w-full text-center lg:w-1/2 lg:text-right">
            {/* Title */}
            <h2 className="mb-4 mt-12 text-4xl font-extrabold tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:mt-0 lg:text-[80px]">
              About Us
            </h2>

            {/* Briefer Content */}
            <div className="space-y-6 text-gray-200">
              <p className="text-lg font-light leading-relaxed md:text-xl">
                <span className="font-semibold text-white">GSGreen</span>, a truly Sri Lankan company from a deep-rooted farmer family, works to bring agricultural products from the hard-earned efforts of rural farmers to the international market.
              </p>
              <p className="text-lg font-light leading-relaxed md:text-xl">
                All these products come from small farmer lands practicing domestic-level agriculture, alongside a few commercial projects.
              </p>
              <p className="text-lg font-light leading-relaxed md:text-xl">
                We value the trust shared with our farmer community and clients.{" "}
                <span className="font-semibold text-white">"GSGreen"</span> strives to bring the quality and sustainability of rural agricultural products to the export market.
              </p>
              <p className="text-lg font-light leading-relaxed md:text-xl">
                Sri Lanka, or Ceylon, spans <span className="font-semibold text-white">65,000 km²</span>, with a variety of soils from North to South and East to West. Its diverse climatic conditions throughout the year enable a wide range of products to grow in every part of the country.
              </p>
              <p className="text-lg font-light leading-relaxed md:text-xl">
                This variety creates a competitive advantage for us to cater to international markets. We value the quality of all our products, maintaining reliability and integrity in every aspect of our work.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </section>
  );
};

export default About;
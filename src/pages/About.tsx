import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-black relative min-h-screen flex">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-[80px] text-center font-bold text-white mb-2 mt-12">
            About Us
          </h2>
          <div className="w-40 h-1 bg-white mx-auto mb-6"></div>
          {/* Content */}
          <p className="text-lg text-gray-200 leading-relaxed">
            <span className="font-semibold text-gray-200">GSGreen</span>, a truly Sri Lankan company from a deep-rooted farmer family, works to bring agricultural products from the hard-earned efforts of rural farmers to the international market.
          </p>

          <p className="text-lg text-gray-200 leading-relaxed mt-4">
            All these products come from small farmer lands practicing domestic-level agriculture, alongside a few commercial projects.
          </p>

          <p className="text-lg text-gray-200 leading-relaxed mt-4">
            We value the trust shared with our farmer community and clients. <span className="font-semibold">"GSGreen"</span> strives to bring the quality and sustainability of rural agricultural products to the export market.
          </p>

          <p className="text-lg text-gray-200 leading-relaxed mt-4">
            Sri Lanka, or Ceylon, spans <span className="font-semibold">65,000 km²</span>, with a variety of soils from North to South and East to West. Its diverse climatic conditions throughout the year enable a wide range of products to grow in every part of the country.
          </p>

          <p className="text-lg text-gray-200 leading-relaxed mt-4">
            This variety creates a competitive advantage for us to cater to international markets. We value the quality of all our products, maintaining reliability and integrity in every aspect of our work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="bg-green-50 min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-4xl font-bold text-green-700 mb-6">
            About Us
          </h2>
          {/* Content */}
          <p className="text-lg text-gray-700 leading-relaxed">
            <span className="font-semibold text-gray-700">GSGreen</span>, a truly Sri Lankan company from a deep-rooted farmer family, works to bring agricultural products from the hard-earned efforts of rural farmers to the international market.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            All these products come from small farmer lands practicing domestic-level agriculture, alongside a few commercial projects.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            We value the trust shared with our farmer community and clients. <span className="font-semibold">"GSGreen"</span> strives to bring the quality and sustainability of rural agricultural products to the export market.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Sri Lanka, or Ceylon, spans <span className="font-semibold">65,000 km²</span>, with a variety of soils from North to South and East to West. Its diverse climatic conditions throughout the year enable a wide range of products to grow in every part of the country. 
          </p>

          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            This variety creates a competitive advantage for us to cater to international markets. We value the quality of all our products, maintaining reliability and integrity in every aspect of our work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

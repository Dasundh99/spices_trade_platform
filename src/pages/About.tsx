import React, { useEffect } from "react";
import { FaCheckCircle, FaHandshake, FaShieldAlt } from "react-icons/fa"; // Importing Icons
// import aboutImage from "../assets/irene-kredenets-AWMWcR3hQUg-unsplash.jpg";

const About: React.FC = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 500);
  }, []);

  return (
    <section id="about" className="w-full bg-cream font-lato pt-20 md:pt-24 lg:pt-28">
      {/* Main Content Wrapper */}
      <div className="container mx-auto px-6 p-10 md:px-6 lg:px-8 flex flex-col items-center gap-14">
        {/* Left Side: Text Content */}
        <div className="w-full max-w-3xl space-y-5 flex flex-col items-center">
          {/* Separate Title Section */}
          <div className="w-full text-center pb-4">
            <h2 className="text-4xl md:text-6xl text-charcoal tracking-wide font-Semibold">
              About Us
            </h2>
          </div>
          <div className="w-full text-center space-y-4">
            <p className="text-md sm:text-md text-black leading-relaxed">
              <span className="font-semibold text-spice-red">Artigala Spices</span> is a Sri Lankan enterprise dedicated to bridging the gap between the rich harvests of rural farmers and the demands of the global market. With deep-rooted generations of farming heritage, we have evolved into a dynamic force in the processing and exporting of authentic Ceylon-origin products.
            </p>
            <p className="text-md sm:text-md text-black leading-relaxed">
              While our expertise spans a diverse range of tropical produce, our core specialties lie in the finest Cinnamon, Black Pepper, and Garcinia (Goraka). We operate through both physical and online business channels, ensuring that our premium spices are accessible to local kitchens and international clients alike.
            </p>
            
            <div className="pt-4 text-left">
              <h3 className="text-xl font-semibold text-charcoal mb-4 text-center">Our Approach</h3>
              <ul className="text-md sm:text-md text-black leading-relaxed space-y-2 list-none">
                <li><span className="font-medium text-spice-red">Empowering Farmers:</span> We sell a curated selection of our own crops alongside high-quality produce sourced directly from our network of small-scale farmers.</li>
                <li><span className="font-medium text-spice-red">Traditional Preservation:</span> Our mission is to preserve traditional Sri Lankan agricultural methods while bringing them into the modern, organized export sector.</li>
                <li><span className="font-medium text-spice-red">Global Competitive Edge:</span> By leveraging Sri Lanka’s unique landscape and year-round cultivation capabilities, we provide consistent, high-value products to the world.</li>
              </ul>
            </div>

            <div className="pt-4">
              <h3 className="text-xl font-semibold text-charcoal mb-2">Our Promise</h3>
              <p className="text-md sm:text-md text-black leading-relaxed">
                At the heart of Artigala Spices is a profound respect for the "sweat and tears" of the small-scale farmer community. We strive to generate maximum value for their hard work by upholding three core pillars in every transaction: <span className="font-medium">Quality, Reliability, and Integrity.</span> We ensure absolute trust in everything we do, from the soil to the final shipment.
              </p>
            </div>
          </div>

          {/* Divider Line */}
          <hr className="border-t border-gray-300 my-6 w-1/2" />

          {/* Icons Section */}
          <div className="flex justify-center gap-12 pt-10">
            {/* Quality Icon */}
            <div className="flex flex-col items-center">
              <FaCheckCircle className="text-spice-red text-3xl" />
              <span className="text-spice-red text-xs pt-2">Quality</span>
            </div>

            {/* Reliability Icon */}
            <div className="flex flex-col items-center">
              <FaHandshake className="text-spice-red text-3xl" />
              <span className="text-spice-red text-xs pt-2">Reliability</span>
            </div>

            {/* Integrity Icon */}
            <div className="flex flex-col items-center">
              <FaShieldAlt className="text-spice-red text-3xl" />
              <span className="text-spice-red text-xs pt-2">Integrity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 
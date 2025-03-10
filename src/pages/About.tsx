import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  // Animation variants for the title
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Animation variants for paragraphs
  const paragraphVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
        ease: "easeOut"
      }
    })
  };

  // Container variants for the whole content
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section
      id="about"
      className="relative flex min-h-screen w-full items-center justify-center py-16"
      style={{
        backgroundImage: 'url("/image_fx_ (2).jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minWidth: '100vw',
        minHeight: '100vh',
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      
      <motion.div 
        className="relative z-10 flex w-full max-w-7xl flex-col items-center px-4 lg:flex-row"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }} // Removed 'once: true'
      >
        <div className="w-full text-center lg:w-1/2 lg:text-left">
          <motion.h2
            className="mb-4 mt-12 text-4xl font-extrabold tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:mt-0 lg:text-[80px]"
            variants={titleVariants}
          >
            About Us
          </motion.h2>

          <div className="space-y-6 text-gray-200">
            {[
              "GSGreen, a truly Sri Lankan company from a deep-rooted farmer family, works to bring agricultural products from the hard-earned efforts of rural farmers to the international market.",
              "All these products come from small farmer lands practicing domestic-level agriculture, alongside a few commercial projects.",
              "We value the trust shared with our farmer community and clients. \"GSGreen\" strives to bring the quality and sustainability of rural agricultural products to the export market.",
              "Sri Lanka, or Ceylon, spans 65,000 km², with a variety of soils from North to South and East to West. Its diverse climatic conditions throughout the year enable a wide range of products to grow in every part of the country.",
              "This variety creates a competitive advantage for us to cater to international markets. We value the quality of all our products, maintaining reliability and integrity in every aspect of our work."
            ].map((text, index) => (
              <motion.p
                key={index}
                className="text-lg font-light leading-relaxed md:text-xl"
                variants={paragraphVariants}
                custom={index}
              >
                {text.split('GSGreen').map((part, i) => (
                  i % 2 === 1 ? (
                    <span key={i} className="font-semibold text-white">GSGreen</span>
                  ) : (
                    part
                  )
                ))}
                {index === 3 && (
                  <span className="font-semibold text-white">65,000 km²</span>
                )}
              </motion.p>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2"></div>
      </motion.div>
    </section>
  );
};

export default About;
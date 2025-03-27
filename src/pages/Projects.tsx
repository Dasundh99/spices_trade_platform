import React from "react";

const colors = {
  deepGreen: "#22C55E",    // A lively, lighter deep green for text and accents
  sageGreen: "#DCFCE7",    // A bright, cheerful sage green for backgrounds and highlights
  mutedGreen: "#F5FBF5",   // An ultra-light, almost glowing green for section backgrounds
  accentGreen: "#8CC089",  // A vivid yet soft green for hover states and accents
};

const Projects: React.FC = () => {
  return (
    <section
      id="projects"
      className="min-h-screen lg:pt-20 md:pt-15 pt-10 pb-16 overflow-hidden font-lato flex justify-center items-center flex-col"
      style={{ backgroundColor: colors.mutedGreen }}
    >
      <div className="container mx-auto px-4">
        <div className="mt-8 text-center max-w-2xl mx-auto">
          <p 
            className="text-xl md:text-2xl font-medium uppercase tracking-wider"
            style={{ color: colors.accentGreen }}
          >
            Coming Soon
          </p>
          <p className="text-base md:text-lg text-gray-600 mt-4 leading-relaxed">
            We are working on innovative agricultural export projects to bring premium, sustainably sourced products to global markets. 
            Stay tuned for updates on our upcoming initiatives or contact us to learn more about our vision.
          </p>
          <div className="mt-6">
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
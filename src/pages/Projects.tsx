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
      className="min-h-screen lg:pt-20 md:pt-15 pt-10 pb-16 overflow-hidden font-lato flex justify-center"
      style={{ backgroundColor: colors.mutedGreen }}
    >
      <h2 className="text-4xl md:text-6xl text-black tracking-wide font-semibold lg:pt-9 pt-5 w-full text-center">
        Projects
      </h2>
    </section>
  );
};

export default Projects;

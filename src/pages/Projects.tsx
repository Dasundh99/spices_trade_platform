import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import mangoImage1 from "../assets/Projects/Mango/image.png";
import mangoImage2 from "../assets/Projects/Mango/image copy.png";
import mangoImage3 from "../assets/Projects/Mango/image copy 2.png";


import ManiocImage1 from "../assets/Projects/Manioc/image.png";
import ManiocImage2 from "../assets/Projects/Manioc/image copy.png";
import ManiocImage3 from "../assets/Projects/Manioc/image copy 3.png";
import ManiocImage4 from "../assets/Projects/Manioc/image copy 2.png";

import PapayaImage2 from "../assets/Projects/Papaya/image copy 3.png";
import PapayaImage3 from "../assets/Projects/Papaya/image copy 4.png";
import PapayaImage4 from "../assets/Projects/Papaya/image copy 5.png";
import PapayaImage5 from "../assets/Projects/Papaya/image copy 6.png";
import PapayaImage6 from "../assets/Projects/Papaya/image copy.png";
import PapayaImage7 from "../assets/Projects/Papaya/image.png";

import Soursoap1 from "../assets/Projects/Soursoap/image copy 2.png";
import Soursoap2 from "../assets/Projects/Soursoap/image copy 3.png";
import Soursoap3 from "../assets/Projects/Soursoap/image copy.png";
import Soursoap4 from "../assets/Projects/Soursoap/image.png";

import Watermelon1 from "../assets/Projects/Watermelon/image copy.png";
import Watermelon2 from "../assets/Projects/Watermelon/image.png";

const colors = {
  deepGreen: "#22C55E",
  sageGreen: "#DCFCE7",
  mutedGreen: "#F5FBF5",
  accentGreen: "#8CC089",
};

const projectList = [
  {
    images: [mangoImage1, mangoImage2, mangoImage3],
    title: "Mango",
    video: "",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, mauris nec dictum cursus, nisl elit vehicula lorem, sed volutpat orci nunc id purus. Curabitur ut augue vel nulla laoreet tincidunt. Morbi maximus, eros sit amet pharetra feugiat, leo felis tincidunt velit, non tincidunt odio mi eget leo. Quisque in venenatis turpis. Sed malesuada urna et nisi mollis, nec convallis neque feugiat. Sed nec suscipit orci. Etiam vehicula dui id arcu maximus, at maximus mi viverra. Nulla facilisi.",
  },
  {
    images: [ManiocImage1, ManiocImage2, ManiocImage3, ManiocImage4],
    title: "Manioc",
    video: "https://drive.google.com/uc?export=download&id=YOUR_VIDEO_ID",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, mauris nec dictum cursus, nisl elit vehicula lorem, sed volutpat orci nunc id purus. Curabitur ut augue vel nulla laoreet tincidunt. Morbi maximus, eros sit amet pharetra feugiat, leo felis tincidunt velit, non tincidunt odio mi eget leo. Quisque in venenatis turpis. Sed malesuada urna et nisi mollis, nec convallis neque feugiat. Sed nec suscipit orci. Etiam vehicula dui id arcu maximus, at maximus mi viverra. Nulla facilisi.",
  },
  {
    images: [PapayaImage2, PapayaImage3, PapayaImage4, PapayaImage5, PapayaImage6, PapayaImage7],
    title: "Papaya",
    video: "",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, mauris nec dictum cursus, nisl elit vehicula lorem, sed volutpat orci nunc id purus. Curabitur ut augue vel nulla laoreet tincidunt. Morbi maximus, eros sit amet pharetra feugiat, leo felis tincidunt velit, non tincidunt odio mi eget leo. Quisque in venenatis turpis. Sed malesuada urna et nisi mollis, nec convallis neque feugiat. Sed nec suscipit orci. Etiam vehicula dui id arcu maximus, at maximus mi viverra. Nulla facilisi.",
  },
  {
    images: [Soursoap1, Soursoap2, Soursoap3, Soursoap4],
    title: "Soursoap",
    video: "https://drive.google.com/uc?export=download&id=YOUR_VIDEO_ID",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, mauris nec dictum cursus, nisl elit vehicula lorem, sed volutpat orci nunc id purus. Curabitur ut augue vel nulla laoreet tincidunt. Morbi maximus, eros sit amet pharetra feugiat, leo felis tincidunt velit, non tincidunt odio mi eget leo. Quisque in venenatis turpis. Sed malesuada urna et nisi mollis, nec convallis neque feugiat. Sed nec suscipit orci. Etiam vehicula dui id arcu maximus, at maximus mi viverra. Nulla facilisi.",
  },
  {
    images: [Watermelon1, Watermelon2],
    title: "Watermelon",
    video: "https://drive.google.com/uc?export=download&id=YOUR_VIDEO_ID",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vehicula, mauris nec dictum cursus, nisl elit vehicula lorem, sed volutpat orci nunc id purus. Curabitur ut augue vel nulla laoreet tincidunt. Morbi maximus, eros sit amet pharetra feugiat, leo felis tincidunt velit, non tincidunt odio mi eget leo. Quisque in venenatis turpis. Sed malesuada urna et nisi mollis, nec convallis neque feugiat. Sed nec suscipit orci. Etiam vehicula dui id arcu maximus, at maximus mi viverra. Nulla facilisi.",
  },
  
];

const Projects: React.FC = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(1 - t, 2)),
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <style>{`
        .learn-more-btn {
          background-color: ${colors.deepGreen};
          transition: background-color 0.2s ease-in-out;
        }
        .learn-more-btn:hover {
          background-color: ${colors.accentGreen};
        }
        .image-container {
          position: relative;
          width: 100%;
          padding-bottom: 100%; /* This creates the 1:1 aspect ratio */
        }
        .image-container img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
      `}</style>
      <section
        id="projects"
        className="min-h-screen py-8 lg:py-24 bg-green-100"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight lg:pt-5 md:pt-15 pt-15 "
              style={{ color: "black" }}
            >
              Our Projects
            </h1>
            <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Promoting sustainable farming and expanding global food exports.
            </p>
          </div>

          <div className="grid gap-12">
            {projectList.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300"
              >
                {/* Top Div: Description and Video (if provided) */}
                <div
                  className={`p-6 border-b border-gray-100 ${
                    project.video ? "grid md:grid-cols-2 gap-6" : ""
                  }`}
                >
                  <div className="p-6">
                    <h2
                      className="text-2xl md:text-3xl font-semibold tracking-tight"
                      style={{ color: colors.deepGreen }}
                    >
                      {project.title}
                    </h2>
                    <p className="mt-2 text-gray-600">{project.content}</p>
                  </div>
                  {project.video && (
                    <div className="relative">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover rounded-lg"
                      >
                        <source src={project.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
                    </div>
                  )}
                </div>

                {/* Bottom Div: All Images */}
                <div className="p-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    {project.images.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="image-container overflow-hidden rounded-lg"
                      >
                        <img
                          src={image}
                          alt={`${project.title} Image ${imgIndex + 1}`}
                          loading="lazy"
                          className="object-cover transition-all duration-300"
                          onError={(e) => {
                            console.error(`Failed to load image: ${image}`);
                            e.currentTarget.src =
                              "https://via.placeholder.com/400x400?text=Image+Not+Found";
                          }}
                          onLoad={() =>
                            console.log(`Successfully loaded image: ${image}`)
                          }
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import mangoImage1 from "../assets/Projects/Mango/image.png";
import mangoImage2 from "../assets/Projects/Mango/image copy.png";
import mangoImage3 from "../assets/Projects/Mango/image copy 2.png";

import ManiocImage1 from "../assets/Projects/Manioc/image.png";
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
import Soursoap4 from "../assets/Projects/Soursoap/image.png";
import SoursoapVideo from "../assets/Projects/Soursoap/WhatsApp Video 2025-03-15 at 16.27.55.mp4";

import Watermelon1 from "../assets/Projects/Watermelon/image copy.png";
import Watermelon2 from "../assets/Projects/Watermelon/image.png";
import WatermelonVideo from "../assets/Projects/Watermelon/WhatsApp Video 2025-03-15 at 16.35.38.mp4";

const colors = {
  spiceRed: "#8B2626",
  spiceRedLight: "#F6EBEB",
  ceylonGreen: "#2B5B2E",
  cream: "#FFF8F0",
};

const projectList = [
  {
    images: [mangoImage1, mangoImage2, mangoImage3],
    title: "Mango",
    video: "",
    content: "Mango trees in Sri Lanka are naturally grown in warm, tropical environments, typically in areas with plenty of sunlight and well-drained soil. They are drought-tolerant and can thrive in various soil types. Mangoes grow best when the trees are spaced apart to ensure ample sunlight and airflow. They often require a dry period for flowering, followed by a rainy season for fruit development. The trees are usually propagated through seeds or grafting, and once mature, they start producing fruit seasonally. Natural pollination is facilitated by insects, especially bees, which transfer pollen between flowers.",
  },
  {
    images: [Soursoap1, Soursoap2, Soursoap4],
    title: "Soursoap",
    video: [SoursoapVideo],
    content: "Soursop, also known as Graviola, thrives naturally in Sri Lanka's tropical climate, where it grows best in warm, humid conditions. The tree prefers well-drained, fertile soil and partial shade. Soursop trees are relatively low-maintenance and can be propagated from seeds or through grafting. The fruit develops after the rainy season, requiring consistent moisture to reach its distinctive, spiky green exterior. It’s naturally pollinated by insects, especially bees, which help in fertilizing the flowers. Soursop trees are valued for their deliciously tangy, creamy pulp, often used in beverages, desserts, and traditional remedies.",
  },
  {
    images: [ManiocImage1, ManiocImage3, ManiocImage4],
    title: "Manioc",
    video: "",
    content: "Manioc, or cassava, is a hardy root crop commonly grown in Sri Lanka’s tropical climate. It thrives in well-drained, sandy or loamy soils and requires minimal rainfall, making it ideal for regions with inconsistent weather patterns. The plant is typically propagated through stem cuttings, which are planted in the soil to grow into tall, bushy plants. After a few months, the roots mature underground, ready for harvest. Manioc is a crucial crop in Sri Lanka, providing a starchy staple used in various dishes and traditional foods. It is often grown in small-scale farming systems, contributing to food security in rural areas.",
  },
  {
    images: [PapayaImage2, PapayaImage3, PapayaImage4, PapayaImage5, PapayaImage6, PapayaImage7],
    title: "Papaya",
    video: "",
    content: "Papaya grows naturally in Sri Lanka's tropical climate, thriving in warm, sunny conditions with well-drained, fertile soil. The plant is usually propagated from seeds, and once planted, it grows quickly, often bearing fruit within a year. Papaya trees prefer a steady supply of moisture but can tolerate dry spells. These trees typically need a lot of space for optimal growth, as their broad leaves and large fruits require plenty of sunlight and airflow. The fruit, with its sweet, orange flesh, is widely consumed fresh, used in salads, or processed into juices, making it a key tropical crop in Sri Lanka.",
  },
  {
    images: [Watermelon1, Watermelon2],
    title: "Watermelon",
    video: [WatermelonVideo],
    content: "Watermelon grows naturally in Sri Lanka's tropical climate, thriving in warm temperatures and well-drained, sandy soils. The plant requires plenty of sunlight and moderate rainfall for optimal growth. It is typically propagated from seeds and prefers a sunny, open area with enough space for the vines to spread. Watermelon plants need consistent moisture, especially during the fruit's development, but they are drought-tolerant once established. The large, round fruits, with their sweet, juicy, red flesh, are popular during the hot season and are commonly enjoyed fresh or in refreshing beverages, making them a favorite tropical fruit in Sri Lanka.",
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

  const getVideoSource = (video: string | string[]) => {
    if (Array.isArray(video)) {
      return video[0]; // Take the first video if it's an array
    }
    return video;
  };

  return (
    <>
      <style>{`
        .learn-more-btn {
          background-color: ${colors.spiceRed};
          transition: background-color 0.2s ease-in-out;
        }
        .learn-more-btn:hover {
          background-color: ${colors.ceylonGreen};
        }
        .image-container {
          position: relative;
          width: 100%;
          padding-bottom: 100%;
        }
        .image-container img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .video-container {
          position: relative;
          width: 100%;
          height: 100%;
        }
      `}</style>
      <section
        id="projects"
        className="min-h-screen pt-20 md:pt-24 lg:pt-28 pb-8 lg:pb-24 bg-cream"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight lg:pt-5 md:pt-15 pt-15"
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
                <div
                  className={`p-6 border-b border-gray-100 ${
                    project.video ? "grid md:grid-cols-2 gap-6" : ""
                  }`}
                >
                  <div className="p-6">
                    <h2
                      className="text-2xl md:text-3xl font-semibold tracking-tight"
                      style={{ color: "black" }}
                    >
                      {project.title}
                    </h2>
                    <p className="mt-2 text-gray-600">{project.content}</p>
                  </div>
                  {project.video && (
                    <div className="video-container">
                      <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-64 object-cover rounded-lg"
                        onError={() => {
                          console.error(
                            `Failed to load video: ${getVideoSource(project.video)}`
                          );
                        }}
                      >
                        <source
                          src={getVideoSource(project.video)}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg" />
                    </div>
                  )}
                </div>

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
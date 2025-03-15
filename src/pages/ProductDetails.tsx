import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Define interface for image data
interface ImageData {
  src: string;
  caption: string;
  describe: string;
}

// Refined Greenish Color Palette
const colors = {
  deepGreen: "#3B8C5E",    // A lively, lighter deep green for text and accents
  sageGreen: "#C8E0C5",    // A bright, cheerful sage green for backgrounds and highlights
  mutedGreen: "#F5FBF5",   // An ultra-light, almost glowing green for section backgrounds
  accentGreen: "#8CC089",  // A vivid yet soft green for hover states and accents
};

/**
 * ProductDetails Component
 * Displays detailed information about a selected product with a professional green theme
 * @returns {JSX.Element} Product details page
 */
const ProductDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { image } = (location.state as { image?: ImageData }) || {};

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Debug image data (optional, can be removed in production)
  useEffect(() => {
    console.log("Location State:", location.state);
    console.log("Image Data:", image);
  }, [image, location.state]);

  // Handle missing or invalid image data
  if (!image || !image.src) {
    return (
      <div
        className="min-h-screen flex items-center justify-center p-4"
        style={{ backgroundColor: colors.mutedGreen }}
      >
        <div className="bg-white p-8 rounded-lg shadow-sm max-w-md w-full text-center space-y-6">
          <h2
            className="text-2xl font-semibold tracking-tight antialiased"
            style={{ color: colors.deepGreen }}
          >
            Product Not Found
          </h2>
          <p
            className="text-sm leading-relaxed antialiased"
            style={{ color: colors.deepGreen }}
          >
            It seems like the product details are unavailable. Please try again later.
          </p>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center px-4 py-2 rounded-md text-white font-medium transition-colors duration-200 antialiased"
            style={{ backgroundColor: colors.accentGreen }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.deepGreen}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = colors.accentGreen}
            aria-label="Return to previous page"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen py-12"
      style={{ backgroundColor: colors.mutedGreen }}
    >
      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 pt-20">
        {/* Product Card */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Image Section */}
            <div className="p-6 flex items-center justify-center">
              {image.src ? (
                <div className="w-full max-w-sm aspect-[3/4] relative">
                  <img
                    src={image.src}
                    alt={image.caption || "Product Image"}
                    className="w-full h-full object-cover rounded-md transition-opacity duration-300"
                    onError={(e) => {
                      console.error("Image failed to load:", image.src);
                      e.currentTarget.src = "https://via.placeholder.com/300?text=Image+Not+Found";
                    }}
                    loading="lazy"
                  />
                </div>
              ) : (
                <div className="w-full max-w-sm aspect-[3/4] bg-gray-200 animate-pulse rounded-md" />
              )}
            </div>

            {/* Details Section */}
            <div className="p-6 flex flex-col justify-center space-y-4">
              <h2
                className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight antialiased"
                style={{ color: colors.deepGreen }}
              >
                {image.caption || "Unnamed Product"}
              </h2>
              <p
                className="text-sm md:text-base leading-relaxed font-light antialiased"
                style={{ color: colors.deepGreen }}
              >
                {image.describe || "No description available."}
              </p>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center px-5 py-2 rounded-md text-white font-medium transition-colors duration-200 antialiased"
            style={{ backgroundColor: colors.accentGreen }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = colors.deepGreen)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = colors.accentGreen)
            }
            aria-label="Return to previous page"
          >
            <span className="mr-2">Back</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
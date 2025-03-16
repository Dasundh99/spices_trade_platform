import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Define interface for image data
interface ImageData {
  src: string;
  caption: string;
  describe: string;
}

// Refined Greenish Color Palette
const colors = {
  deepGreen: "#4ADE80",
  sageGreen: "#DCFCE7",
  mutedGreen: "#F5FBF5",
  accentGreen: "#22C55E",
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

  // State to store original image dimensions (optional, for display purposes)
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number } | null>(null);

  // Scroll to top on component mount
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);

  // Debug image data (optional, can be removed in production)
  useEffect(() => {
    console.log("Location State:", location.state);
    console.log("Image Data:", image);
  }, [image, location.state]);

  // Handle missing or invalid image data
  if (!image || !image.src) {
    return (
      <div
        className="min-h-screen flex items-center justify-center p-4 font-lato"
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
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.deepGreen)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.accentGreen)}
            aria-label="Return to previous page"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Function to handle image load and capture dimensions (optional)
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    setImageDimensions({
      width: img.naturalWidth,
      height: img.naturalHeight,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 500); 
  }, []);

  return (
    <div
      className="min-h-screen py-12 font-lato"
      style={{ backgroundColor: colors.mutedGreen }}
    >
      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 lg:pt-20 md:pt-15 pt-10">
        {/* Product Card with fixed size */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden w-full h-[600px] lg:h-[400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
            {/* Image Section with fixed dimensions */}
            <div className="p-6 flex items-center justify-center h-full">
              {image.src ? (
                <div className="w-full h-full max-w-sm max-h-[300px] relative flex items-center justify-center">
                  <img
                    src={image.src}
                    alt={image.caption || "Product Image"}
                    className="max-w-full max-h-full object-contain rounded-md transition-opacity duration-300" // Preserve original ratio
                    onLoad={handleImageLoad} // Optional: Capture dimensions
                    onError={(e) => {
                      console.error("Image failed to load:", image.src);
                      e.currentTarget.src = "https://via.placeholder.com/300?text=Image+Not+Found";
                    }}
                    loading="lazy"
                  />
                  {/* Optional: Display original image size */}
                  {imageDimensions && (
                    <p
                      className="text-sm mt-2 absolute bottom-0 antialiased"
                      style={{ color: colors.deepGreen }}
                    >
                      {/* Original Size: {imageDimensions.width} x {imageDimensions.height} pixels */}
                    </p>
                  )}
                </div>
              ) : (
                <div className="w-full h-full max-w-sm max-h-[300px] bg-gray-200 animate-pulse rounded-md" />
              )}
            </div>

            {/* Details Section */}
            <div className="px-6 flex flex-col justify-center space-y-4 h-full">
              <h2
                className="text-2xl md:text-3xl font-semibold leading-tight tracking-tight antialiased"
                style={{ color: "black" }}
              >
                {image.caption || "Unnamed Product"}
              </h2>
              <p
                className="text-sm md:text-base leading-relaxed font-light antialiased"
                style={{ color: "black" }}
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
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = colors.deepGreen)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = colors.accentGreen)}
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
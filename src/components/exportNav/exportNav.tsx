import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/fruits", label: "Tropical Fruits" },
  { path: "/vegetables", label: "Tropical Vegetables" },
  { path: "/spices", label: "Spices and Oil" },
  { path: "/tea", label: "Tea" },
];

const colors = {
  deepGreen: "#355E3B",    // Deep, elegant green for text and accents
  sageGreen: "#A9BDA8",    // Soft sage green for backgrounds and highlights
  mutedGreen: "#E8F0E8",   // Very light green for section background
  accentGreen: "#6B8E6B",  // Subtle accent green for hover states
};

const ExportNavigator = () => {
  const location = useLocation();

  return (
    <div className="flex justify-center w-full">
      <nav
        className="backdrop-blur-lg shadow-xxl p-2 rounded-xl mb-10"
        style={{ backgroundColor: colors.mutedGreen }}
      >
        <ul className="flex flex-row gap-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path} className="flex justify-center">
                <Link to={item.path} className="group relative block">
                  <div
                    className={`w-32 lg:w-42 h-16 flex items-center justify-center rounded-lg shadow-xl transition-colors duration-200`}
                    style={{
                      backgroundColor: isActive ? colors.deepGreen : "white",
                      color: isActive ? "white" : colors.deepGreen,
                      border: `2px solid ${colors.accentGreen}`,
                    }}
                  >
                    <span className="text-m font-medium">{item.label}</span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default ExportNavigator;

import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/fruits", label: "Fruits" },
  { path: "/vegetables", label: "Vegetables" },
  { path: "/spices", label: "Spices and Oil" },
  { path: "/tea", label: "Tea" },
];

const colors = {
  deepGreen: "#3B8C5E",    // A lively, lighter deep green for text and accents
  sageGreen: "#C8E0C5",    // A bright, cheerful sage green for backgrounds and highlights
  mutedGreen: "#F5FBF5",   // An ultra-light, almost glowing green for section backgrounds
  accentGreen: "#8CC089",  // A vivid yet soft green for hover states and accents
};

const ExportNavigator = () => {
  const location = useLocation();

  return (
    <div className="flex justify-center w-full">
      <nav
        className="backdrop-blur-lg shadow-xxl p-2 rounded-xl mb-10"
        style={{ backgroundColor: colors.mutedGreen }}
      >
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path} className="flex justify-center">
                <Link to={item.path} className="group relative block">
                  <div
                    className={`w-28 h-10 flex items-center justify-center rounded-lg shadow-xl transition-colors duration-200 sm:text-xs text-xs`}
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

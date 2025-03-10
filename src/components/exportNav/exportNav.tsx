import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/fruits", label: "Tropical Fruits" },
  { path: "/vegetables", label: "Tropical Vegetables" },
  { path: "/spices", label: "Spices and Oil" },
  { path: "/tea", label: "Tea" },
];

const SideNavigator = () => {
  const location = useLocation();

  return (
    <div className="flex justify-center w-full">
      <nav className="bg-white/10 backdrop-blur-lg shadow-lg p-2 rounded-xl mb-10">
        <ul className="flex flex-row gap-4">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path} className="flex justify-center">
                <Link to={item.path} className="group relative block">
                  <div
                    className={`w-42 h-16 flex items-center justify-center rounded-lg shadow-md transition-colors duration-200 
                      ${
                        isActive
                          ? "bg-green-500 text-white"
                          : "bg-white/20 text-gray-200 hover:bg-white/30"
                      }`}
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

export default SideNavigator;

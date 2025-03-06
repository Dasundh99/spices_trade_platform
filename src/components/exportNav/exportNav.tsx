import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const navItems = [
  { path: "/foods", label: "Foods" },
  { path: "/vegetables", label: "Vegetables" },
  { path: "/spices", label: "Spices" },
  { path: "/tea", label: "Tea" },
];

const SideNavigator = () => {
  return (
    <motion.nav
      initial={{ x: "-100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed left-4 top-1/2 transform -translate-y-1/2 bg-white/10 backdrop-blur-lg shadow-lg p-1 rounded-xl z-50"
    >
      <ul className="flex flex-col gap-2">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link to={item.path} className="group relative block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 text-gray-200 bg-white/20 rounded-lg shadow-md hover:bg-white/30 transition-colors duration-200"
              >
                <span className="text-m font-medium">{item.label}</span>
              </motion.div>
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
};

export default SideNavigator;
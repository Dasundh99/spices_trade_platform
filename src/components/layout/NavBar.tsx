import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-green-700 text-white p-4 fixed w-full top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/">GSGreen</a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-green-200 transition">Home</a>
          <a href="#about" className="hover:text-green-200 transition">About</a>
          <a href="#products" className="hover:text-green-200 transition">Products</a>
          <a href="#clients" className="hover:text-green-200 transition">Our Clients</a>
          <a href="#contact" className="hover:text-green-200 transition">Contact Us</a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4">
          <a href="#home" className="hover:text-green-200 transition" onClick={toggleMenu}>Home</a>
          <a href="#about" className="hover:text-green-200 transition" onClick={toggleMenu}>About</a>
          <a href="#products" className="hover:text-green-200 transition" onClick={toggleMenu}>Products</a>
          <a href="#clients" className="hover:text-green-200 transition" onClick={toggleMenu}>Our Clients</a>
          <a href="#contact" className="hover:text-green-200 transition" onClick={toggleMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
import React, { useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    // ✅ Limpieza del listener al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "About", path: "/about" },
    { name: "Login", path: "/login" },
  ];

  return (
    <nav
      className={`sticky top-0 py-4 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md backdrop-blur-md" : "bg-transparent" }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-brown-800">CoffeeShop</div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <ul className="hidden md:flex space-x-6 text-brown-900 font-medium">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `hover:text-brown-600 transition ${
                    isActive ? "text-brown-600 font-semibold" : ""
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-3 text-brown-900 font-medium">
          {navItems.map(({ name, path }) => (
            <li key={name}>
              <NavLink
                to={path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block hover:text-brown-600 transition ${
                    isActive ? "text-brown-600 font-semibold" : ""
                  }`
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;

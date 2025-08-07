import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiShoppingCart, FiUser, FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownTimeout = useRef(null);
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);

useEffect(() => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  setCartCount(totalCount);
}, [location.pathname]);
  const handleMouseEnter = () => {
    clearTimeout(dropdownTimeout.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setShowDropdown(false);
    }, 200); // Delay before hiding
  };

  return (
    <nav className="bg-white shadow-md font-[Poppins]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <img
              className="h-12 w-12"
              src="/assets/images/logo.png"
              alt="logo"
            />
            <span className="text-xl font-semibold text-gray-800">
              EarthBubs
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              to="/"
              className="text-[#00B4D8] border-b-2 border-[#00B4D8] pb-1"
            >
              Home
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-gray-700 hover:text-[#00B4D8] focus:outline-none">
                Products
              </button>

              {showDropdown && (
                <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  <ul className="py-1">
                    {[
                      { name: "Pampers", path: "/products/pampers" },
                      { name: "Boy's Fashion", path: "/products/boys-fashion" },
                      { name: "Girl's Fashion", path: "/products/girls-fashion" },
                      { name: "Soap", path: "/products/soap" },
                      { name: "Stroller", path: "/products/stroller" },
                      { name: "Bottle", path: "/products/bottle" },
                    ].map((item) => (
                      <li
                        key={item.name}
                        className="px-4 py-2 hover:bg-[#B0E4F4] border-b last:border-none border-gray-200 cursor-pointer"
                      >
                        <Link to={item.path}>{item.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Link to="/products/offer" className="text-gray-700 hover:text-[#00B4D8]">
              Offers
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-[#00B4D8]">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#00B4D8]">
              Contacts
            </Link>
          </div>

          {/* Search + Icons */}
          <div className="flex items-center space-x-3">
            <input
              type="text"
              placeholder="Search..."
              className="hidden sm:block w-24 sm:w-40 px-2 py-1 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#00B4D8]"
            />
<Link to="/cart" className="relative">
  <FiShoppingCart
    className={`text-xl ${
      location.pathname === "/cart"
        ? "text-[#00B4D8]"
        : "text-gray-700 hover:text-[#00B4D8]"
    }`}
  />
  {cartCount > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
      {cartCount}
    </span>
  )}
</Link>            <FiUser className="text-xl text-gray-700 hover:text-[#00B4D8]" />

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-2xl text-gray-700"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <ul className="flex flex-col p-4 space-y-3">
            <Link
              to="/"
              className="text-[#00B4D8] border-b-2 border-[#00B4D8] pb-1"
            >
              Home
            </Link>

            {/* Products - No hover in mobile */}
            <details>
              <summary className="cursor-pointer text-gray-700 hover:text-[#00B4D8]">
                Products
              </summary>
              <ul className="pl-4 pt-2 space-y-2">
                {[
                  { name: "Pampers", path: "/products/pampers" },
                  { name: "Boy's Fashion", path: "/products/boys-fashion" },
                  { name: "Girl's Fashion", path: "/products/girls-fashion" },
                  { name: "Soap", path: "/products/soap" },
                  { name: "Stroller", path: "/products/stroller" },
                  { name: "Bottle", path: "/products/bottle" },
                ].map((item) => (
                  <li
                    key={item.name}
                    className="px-2 py-1 hover:bg-[#B0E4F4] rounded cursor-pointer"
                  >
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </details>

            <Link to="/products/offer" className="text-gray-700 hover:text-[#00B4D8]">
              Offers
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-[#00B4D8]">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#00B4D8]">
              Contacts
            </Link>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

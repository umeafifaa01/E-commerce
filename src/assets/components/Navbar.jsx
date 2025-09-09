import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-800">Dribbble</h1>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#"
            className="text-sm text-gray-700 hover:text-black transition-colors"
          >
            Inspiration
          </a>
          <a
            href="#"
            className="text-sm text-gray-700 hover:text-black transition-colors"
          >
            Find Work
          </a>
          <a
            href="#"
            className="text-sm text-gray-700 hover:text-black transition-colors"
          >
            Learn Design
          </a>
          <a
            href="#"
            className="text-sm text-gray-700 hover:text-black transition-colors"
          >
            Go Pro
          </a>
          <a
            href="#"
            className="text-sm text-gray-700 hover:text-black transition-colors"
          >
            Hire Designers
          </a>
        </div>

        {/* Right side - Search, Profile, Actions */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent w-64"
            />
          </div>

          {/* Login/Sign Up */}
          <div className="flex items-center space-x-3">
            <a
              href="#"
              className="text-sm text-gray-700 hover:text-black transition-colors"
            >
              Log in
            </a>
            <a
              href="#"
              className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm hover:bg-pink-600 transition-colors"
            >
              Sign up
            </a>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-gray-700 hover:text-black">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
        <div className="flex flex-col space-y-3">
          <a href="#" className="text-sm text-gray-700 hover:text-black">
            Inspiration
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-black">
            Find Work
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-black">
            Learn Design
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-black">
            Go Pro
          </a>
          <a href="#" className="text-sm text-gray-700 hover:text-black">
            Hire Designers
          </a>
          <div className="pt-3 border-t border-gray-100">
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // State for search
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update search query as user types
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") return;

    // Redirect to search results page with query as param
    navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    setSearchQuery(""); // Clear input after search
  };

  const handleSignUp = () => navigate("/signup");
  const handleLoginPage = () => navigate("/login");
  const handleHomePage = () => navigate("/");

  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={handleHomePage}
            className="text-2xl font-bold text-gray-800 hover:text-pink-500 transition-colors"
          >
            Glossy
          </button>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <button className="text-sm text-gray-700 hover:text-black transition-colors">
            Inspiration
          </button>
          <button className="text-sm text-gray-700 hover:text-black transition-colors">
            Find Work
          </button>
          <button className="text-sm text-gray-700 hover:text-black transition-colors">
            Learn Design
          </button>
          <button className="text-sm text-gray-700 hover:text-black transition-colors">
            Go Pro
          </button>
          <button className="text-sm text-gray-700 hover:text-black transition-colors">
            Hire Designers
          </button>
        </div>

        {/* Right side - Search, Profile, Actions */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <form onSubmit={handleSearchSubmit} className="hidden md:block">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent w-64"
            />
          </form>

          {/* Login/Sign Up */}
          <div className="flex items-center space-x-3">
            <button
              onClick={handleLoginPage}
              className="text-sm text-gray-700 hover:text-black transition-colors"
            >
              Log in
            </button>
            <button
              onClick={handleSignUp}
              className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm hover:bg-pink-600 transition-colors"
            >
              Sign up
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-700 hover:text-black p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200 animate-fade-in">
          <form onSubmit={handleSearchSubmit} className="mb-3">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="w-full bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            />
          </form>
          {/* Mobile menu items... */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

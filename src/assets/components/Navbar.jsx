import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") return;
    navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    setSearchQuery("");
  };

  // Navigation actions
  const handleSignUp = () => navigate("/signup");
  const handleLoginPage = () => navigate("/login");
  const handleHomePage = () => navigate("/");

  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={handleHomePage}
          className="text-2xl font-bold text-gray-800 hover:text-pink-500 transition-colors"
        >
          Glossy
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => navigate("/insp")}
            className="text-sm text-gray-700 hover:text-pink-600 transition-colors"
          >
            Inspiration
          </button>
          <button
            onClick={() => navigate("/find")}
            className="text-sm text-gray-700 hover:text-pink-600 transition-colors"
          >
            Find Work
          </button>
          <button
            onClick={() => navigate("/learn")}
            className="text-sm text-gray-700 hover:text-pink-600 transition-colors"
          >
            Learn Design
          </button>
          <button
            onClick={() => navigate("/go")}
            className="text-sm text-gray-700 hover:text-pink-600 transition-colors"
          >
            Go Pro
          </button>
          <button
            onClick={() => navigate("/hire")}
            className="text-sm text-gray-700 hover:text-pink-600 transition-colors"
          >
            Hire Designers
          </button>
        </div>

        {/* Right Section - Search + Login + SignUp */}
        <div className="flex items-center space-x-4">
          {/* Search - Desktop Only */}
          <form onSubmit={handleSearchSubmit} className="hidden md:block">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 w-64"
            />
          </form>

          {/* Login / SignUp */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={handleLoginPage}
              className="text-sm text-gray-700 hover:text-pink-600 transition-colors"
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

          {/* Hamburger Button */}
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col space-y-4">
            <button
              onClick={() => navigate("/insp")}
              className="text-gray-700 hover:text-pink-600 text-left"
            >
              Inspiration
            </button>
            <button
              onClick={() => navigate("/find")}
              className="text-gray-700 hover:text-pink-600 text-left"
            >
              Find Work
            </button>
            <button
              onClick={() => navigate("/learn")}
              className="text-gray-700 hover:text-pink-600 text-left"
            >
              Learn Design
            </button>
            <button
              onClick={() => navigate("/go")}
              className="text-gray-700 hover:text-pink-600 text-left"
            >
              Go Pro
            </button>
            <button
              onClick={() => navigate("/hire")}
              className="text-gray-700 hover:text-pink-600 text-left"
            >
              Hire Designers
            </button>
          </div>

          {/* Mobile Login / SignUp */}
          <div className="flex flex-col mt-6 space-y-3">
            <button
              onClick={handleLoginPage}
              className="text-gray-700 hover:text-pink-600 text-left"
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
        </div>
      )}
    </nav>
  );
};

export default Navbar;

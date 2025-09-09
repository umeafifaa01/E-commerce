import React, { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-gray-800">Glossy</h1>
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
          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent w-64"
              aria-label="Search designs"
            />
          </div>

          {/* Login/Sign Up */}
          <div className="flex items-center space-x-3">
            <button className="text-sm text-gray-700 hover:text-black transition-colors">
              Log in
            </button>
            <button className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm hover:bg-pink-600 transition-colors">
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
          <div className="flex flex-col space-y-3">
            <button
              className="text-sm text-gray-700 hover:text-black text-left"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Inspiration
            </button>
            <button
              className="text-sm text-gray-700 hover:text-black text-left"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Find Work
            </button>
            <button
              className="text-sm text-gray-700 hover:text-black text-left"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Learn Design
            </button>
            <button
              className="text-sm text-gray-700 hover:text-black text-left"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Go Pro
            </button>
            <button
              className="text-sm text-gray-700 hover:text-black text-left"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Designers
            </button>
            <div className="pt-3 border-t border-gray-100">
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                aria-label="Search designs"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-pink-50 via-white to-purple-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Discover the world's top
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              {" "}
              designers & creatives
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            Glossy is the leading destination to find & showcase creative work
            and home to the world's best design professionals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Sign up to continue
            </button>
            <button className="text-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:text-black transition-colors border border-gray-300 hover:border-gray-400">
              Learn more
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-gray-900">50M+</div>
              <div className="text-gray-600">Creatives</div>
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-gray-900">15M+</div>
              <div className="text-gray-600">Shots</div>
            </div>
            <div className="hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-gray-900">1M+</div>
              <div className="text-gray-600">Designers hired</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DesignCard = ({
  title,
  author,
  likes,
  views,
  bgColor,
  textColor = "text-white",
}) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="group cursor-pointer">
      <div
        className={`${bgColor} rounded-xl aspect-[4/3] p-8 mb-4 relative overflow-hidden transition-all duration-300 group-hover:scale-105 group-hover:shadow-xl`}
      >
        <div className={`${textColor} font-bold text-lg mb-2 line-clamp-2`}>
          {title}
        </div>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
          <div className={`${textColor} opacity-80 text-sm truncate mr-2`}>
            by {author}
          </div>
          <div className="flex items-center space-x-4">
            <button
              className={`${textColor} opacity-80 text-sm flex items-center hover:opacity-100 transition-opacity`}
              onClick={(e) => {
                e.stopPropagation();
                setIsLiked(!isLiked);
              }}
              aria-label={`${isLiked ? "Unlike" : "Like"} this design`}
            >
              <svg
                className={`w-4 h-4 mr-1 transition-colors ${
                  isLiked ? "fill-red-500 text-red-500" : "fill-current"
                }`}
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              {likes}
            </button>
            <div
              className={`${textColor} opacity-80 text-sm flex items-center`}
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
              {views}
            </div>
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <div
            className={`w-10 h-10 ${
              bgColor === "bg-gray-800" ? "bg-white" : "bg-white/20"
            } rounded-full backdrop-blur-sm`}
          ></div>
        </div>
      </div>
    </div>
  );
};

const FeaturedWork = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const designs = [
    {
      title: "Mobile App Design",
      author: "Sarah Chen",
      likes: "2.1k",
      views: "15.2k",
      bgColor: "bg-gradient-to-br from-purple-500 to-pink-500",
      category: "mobile",
    },
    {
      title: "Brand Identity",
      author: "Alex Rivera",
      likes: "1.8k",
      views: "12.4k",
      bgColor: "bg-gradient-to-br from-blue-500 to-cyan-400",
      category: "branding",
    },
    {
      title: "Web Dashboard",
      author: "Maya Patel",
      likes: "3.2k",
      views: "18.7k",
      bgColor: "bg-gradient-to-br from-green-500 to-emerald-400",
      category: "web",
    },
    {
      title: "Logo Collection",
      author: "James Wilson",
      likes: "2.7k",
      views: "14.1k",
      bgColor: "bg-gradient-to-br from-orange-500 to-red-500",
      category: "branding",
    },
    {
      title: "UI Components",
      author: "Lisa Zhang",
      likes: "1.9k",
      views: "11.8k",
      bgColor: "bg-gradient-to-br from-indigo-500 to-purple-500",
      category: "ui",
    },
    {
      title: "Illustration Set",
      author: "David Kumar",
      likes: "2.4k",
      views: "16.3k",
      bgColor: "bg-gradient-to-br from-pink-500 to-rose-400",
      category: "illustration",
    },
  ];

  const filteredDesigns =
    selectedCategory === "all"
      ? designs
      : designs.filter((design) => design.category === selectedCategory);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore trending designs
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Get inspired by thousands of projects from the most talented
            designers around the world
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {["all", "mobile", "web", "branding", "ui", "illustration"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-pink-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            )
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredDesigns.map((design, index) => (
            <DesignCard key={`${design.category}-${index}`} {...design} />
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl">
            Browse more inspiration
          </button>
        </div>
      </div>
    </section>
  );
};

const Categories = () => {
  const categories = [
    {
      name: "Web Design",
      count: "180k",
      color: "bg-blue-100 text-blue-700",
      icon: "🌐",
    },
    {
      name: "Mobile",
      count: "120k",
      color: "bg-green-100 text-green-700",
      icon: "📱",
    },
    {
      name: "Branding",
      count: "95k",
      color: "bg-purple-100 text-purple-700",
      icon: "🎨",
    },
    {
      name: "Illustration",
      count: "78k",
      color: "bg-pink-100 text-pink-700",
      icon: "✏️",
    },
    {
      name: "Typography",
      count: "65k",
      color: "bg-orange-100 text-orange-700",
      icon: "🔤",
    },
    {
      name: "Animation",
      count: "52k",
      color: "bg-cyan-100 text-cyan-700",
      icon: "🎬",
    },
    {
      name: "Photography",
      count: "48k",
      color: "bg-red-100 text-red-700",
      icon: "📸",
    },
    {
      name: "UI/UX",
      count: "156k",
      color: "bg-indigo-100 text-indigo-700",
      icon: "💻",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find your next inspiration
          </h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Browse designs by category
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <button
              key={index}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 cursor-pointer group hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {category.name}
              </h3>
              <p className="text-gray-500 text-sm">{category.count} shots</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-600/10"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8">
          Ready to get started?
        </h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12">
          Join millions of designers and creative professionals who trust Glossy
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Get started for free
          </button>
          <button className="text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-colors border border-white/20 hover:border-white/40">
            Learn about Pro
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              For designers
            </h3>
            <div className="space-y-3">
              <button className="block text-gray-600 hover:text-black transition-colors text-left">
                Go Pro!
              </button>
              <button className="block text-gray-600 hover:text-black transition-colors text-left">
                Explore design work
              </button>
              <button className="block text-gray-600 hover:text-black transition-colors text-left">
                Design blog
              </button>
              <button className="block text-gray-600 hover:text-black transition-colors text-left">
                Overtime podcast
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Hire designers
            </h3>
            <div className="space-y-3">
              <button className="block text-gray-600 hover:text-black transition-colors text-left">
                Post a job opening
              </button>
              <button className="block text-gray-600 hover:text-black transition-colors text-left">
                Post a freelance project
              </button>
              <button className="block text-gray-600 hover:text-black transition-colors text-left">
                Search for designers
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Company</h3>
            <div className="space-y-3">
              <button className="block text-gray-600 hover:text-black transition-colors text-left">
                About
              </button>
              <button className="block text-gray-600 hover:text-black transition-colors text-left">
                Careers
              </button>
              <button className="block text-gray-600 hover:text-black transition-colors text-left">
                Support
              </button>
              <button className="block text-gray-600 hover:text-black transition-colors text-left">
                Media kit
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              Directories
            </h3>
            <div className="space-y-3">
              <button className="block text-gray-600 hover:text-black transition-colors text-left">
                Design jobs
              </button>
              <button className="block text-gray-600 hover:text-black transition-colors text-left">
                Designers for hire
              </button>
              <button className="block text-gray-600 hover:text-black transition-colors text-left">
                Freelance designers
              </button>
              <button className="block text-gray-600 hover:text-black transition-colors text-left">
                Tags
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2024 Glossy. All rights reserved.
          </div>
          <div className="flex items-center space-x-6">
            <button className="text-gray-500 hover:text-black transition-colors text-sm">
              Terms
            </button>
            <button className="text-gray-500 hover:text-black transition-colors text-sm">
              Privacy
            </button>
            <button className="text-gray-500 hover:text-black transition-colors text-sm">
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
      <Navbar />
      <Hero />
      <FeaturedWork />
      <Categories />
      <CTA />
      <Footer />
    </div>
  );
};

export default HomePage;

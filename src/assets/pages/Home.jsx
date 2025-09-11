import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Mock Hero Component
const Hero = () => {
  const navigate = useNavigate();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-pink-500/30 to-violet-500/30 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${mousePosition.x * 0.1}%`,
            top: `${mousePosition.y * 0.1}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          className="absolute w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-300"
          style={{
            right: `${mousePosition.x * 0.05}%`,
            bottom: `${mousePosition.y * 0.05}%`,
            transform: "translate(50%, 50%)",
          }}
        />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22 width=%2232%22 height=%2232%22 fill=%22none%22 stroke=%22rgb(148 163 184 / 0.05)%22%3e%3cpath d=%22m0 .5 32 0M.5 0v32%22/%3e%3c/svg%3e')] opacity-30"></div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm text-white border border-white/20 mb-8">
            ✨ Discover Amazing Designs
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200 animate-fade-in-up delay-200">
          Design
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
            Inspiration
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-400">
          Explore the world's leading design portfolios. Get inspired by
          creative work from top designers worldwide.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in-up delay-600">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-violet-600 text-white rounded-2xl font-semibold text-lg transform hover:scale-105 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(236,72,153,0.3)]">
            <span className="relative z-10"> Sign up to continue</span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-violet-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="px-8 py-4 text-white rounded-2xl font-semibold text-lg border border-white/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:border-white/40">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

// Enhanced Design Card Component
const DesignCard = ({ title, author, likes, views, image, category }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-semibold bg-white/90 backdrop-blur-sm text-gray-800 rounded-full">
            {category}
          </span>
        </div>

        {/* Hover Actions */}
        <div
          className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
            <span className="text-red-500">❤️</span>
          </button>
          <button className="p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-colors">
            <span className="text-gray-700">🔖</span>
          </button>
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-bold text-lg text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">by {author}</p>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="text-red-500">❤️</span>
              {likes}
            </span>
            <span className="flex items-center gap-1">
              <span className="text-gray-400">👁</span>
              {views}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id^="animate-"]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const designs = [
    {
      title: "Mobile App Design",
      author: "Sarah Chen",
      likes: "2.1k",
      views: "15.2k",
      image:
        "https://img.freepik.com/free-photo/realistic-phone-studio-social-media-concept_23-2151459536.jpg?semt=ais_hybrid&w=740&q=80",
      category: "mobile",
    },
    {
      title: "Brand Identity",
      author: "Alex Rivera",
      likes: "1.8k",
      views: "12.4k",
      image:
        "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=800&q=80",
      category: "branding",
    },
    {
      title: "Web Dashboard",
      author: "Maya Patel",
      likes: "3.2k",
      views: "18.7k",
      image:
        "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80",
      category: "web",
    },
    {
      title: "Logo Collection",
      author: "James Wilson",
      likes: "2.7k",
      views: "14.1k",
      image:
        "https://images.unsplash.com/photo-1665799871677-f1fd17338b43?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWV0YXxlbnwwfHwwfHx8MA%3D%3D",
      category: "branding",
    },
    {
      title: "UI Components",
      author: "Lisa Zhang",
      likes: "1.9k",
      views: "11.8k",
      image:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=800&q=80",
      category: "ui",
    },
    {
      title: "Illustration Set",
      author: "David Kumar",
      likes: "2.4k",
      views: "16.3k",
      image:
        "https://plus.unsplash.com/premium_photo-1731072641019-0fdaed888502?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhcGhpYyUyMGlsbHVzdHJhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
      category: "illustration",
    },
  ];

  const filteredDesigns =
    selectedCategory === "all"
      ? designs
      : designs.filter((design) => design.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>

      {/* Hero Section */}
      <Hero />

      {/* Featured Work Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div
            id="animate-featured"
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible["animate-featured"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-semibold rounded-full mb-6">
              ✨ Featured Work
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-8 leading-tight">
              Explore trending
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                designs
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Get inspired by thousands of projects from the most talented
              designers around the world
            </p>
          </div>

          {/* Enhanced Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {["all", "mobile", "web", "branding", "ui", "illustration"].map(
              (category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`group relative px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl"
                      : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 hover:text-purple-600"
                  }`}
                >
                  <span className="relative z-10">
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </span>
                  {selectedCategory === category && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  )}
                </button>
              )
            )}
          </div>

          {/* Enhanced Design Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
            {filteredDesigns.map((design, index) => (
              <div
                key={`${design.category}-${index}`}
                className="opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "forwards",
                }}
              >
                <DesignCard {...design} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="group relative px-10 py-5 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl text-lg font-semibold transform hover:scale-105 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
              <span className="relative z-10 flex items-center gap-2">
                Browse more inspiration
                <span className="transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Categories Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-100/50 to-pink-100/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100/50 to-cyan-100/50 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div
            id="animate-categories"
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible["animate-categories"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 text-sm font-semibold rounded-full mb-6">
              🎨 Categories
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-8">
              Find your next
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                inspiration
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Browse designs by category and discover amazing work
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              {
                name: "Web Design",
                count: "180k",
                color: "from-blue-400 to-blue-600",
                icon: "🌐",
              },
              {
                name: "Mobile",
                count: "120k",
                color: "from-green-400 to-green-600",
                icon: "📱",
              },
              {
                name: "Branding",
                count: "95k",
                color: "from-purple-400 to-purple-600",
                icon: "🎨",
              },
              {
                name: "Illustration",
                count: "78k",
                color: "from-pink-400 to-pink-600",
                icon: "✏️",
              },
              {
                name: "Typography",
                count: "65k",
                color: "from-orange-400 to-orange-600",
                icon: "🔤",
              },
              {
                name: "Animation",
                count: "52k",
                color: "from-cyan-400 to-cyan-600",
                icon: "🎬",
              },
              {
                name: "Photography",
                count: "48k",
                color: "from-red-400 to-red-600",
                icon: "📸",
              },
              {
                name: "UI/UX",
                count: "156k",
                color: "from-indigo-400 to-indigo-600",
                icon: "💻",
              },
            ].map((category, index) => (
              <button
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:scale-105 hover:-translate-y-2 border border-white/50"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}
                ></div>

                <div className="relative z-10">
                  <div className="text-4xl mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 transition-all duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm font-medium">
                    {category.count} shots
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse delay-300"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 32 32%22 width=%2232%22 height=%2232%22 fill=%22none%22 stroke=%22rgb(255 255 255 / 0.03)%22%3e%3cpath d=%22m0 .5 32 0M.5 0v32%22/%3e%3c/svg%3e')] opacity-50"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold bg-white/10 backdrop-blur-sm text-white border border-white/20">
              🚀 Join the Community
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-10 leading-tight">
            Ready to get
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
              started?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-16 leading-relaxed max-w-2xl mx-auto">
            Join millions of designers and creative professionals who trust
            Glossy to showcase their best work
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group relative px-10 py-5 bg-gradient-to-r from-pink-500 to-violet-600 text-white rounded-2xl text-lg font-bold transform hover:scale-105 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(236,72,153,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get started for free
                <span className="transform group-hover:translate-x-1 transition-transform">
                  ✨
                </span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-violet-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() => navigate("/pro")}
              className="px-10 py-5 text-white rounded-2xl text-lg font-semibold border border-white/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:border-white/40 hover:shadow-lg"
            >
              Learn about Pro
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

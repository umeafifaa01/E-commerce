import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  // Track mouse position for animated background
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

  // Intersection Observer for animations
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

    document
      .querySelectorAll('[id^="animate-"]')
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Filter logic
  const [selectedCategory, setSelectedCategory] = useState("all");
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
        "https://images.unsplash.com/photo-1665799871677-f1fd17338b43?fm=jpg&q=60&w=3000",
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
        "https://plus.unsplash.com/premium_photo-1731072641019-0fdaed888502?fm=jpg&q=60&w=3000",
      category: "illustration",
    },
  ];

  const filteredDesigns =
    selectedCategory === "all"
      ? designs
      : designs.filter((design) => design.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Custom animations */}
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
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>

      {/* ---------- HERO SECTION ---------- */}
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

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 backdrop-blur-sm text-white border border-white/20 mb-8">
            ✨ Discover Amazing Designs
          </span>

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
            <button
              onClick={() => navigate("/signup")}
              className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-violet-600 text-white rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(236,72,153,0.3)]"
            >
              <span className="relative z-10">Sign in to Continue</span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-violet-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() => navigate("/learn")}
              className="px-8 py-4 text-white rounded-2xl font-semibold text-lg border border-white/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:border-white/40"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ---------- FEATURED WORK SECTION ---------- */}
      <section className="py-32 px-6 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto text-center">
          <div
            id="animate-featured"
            className={`mb-20 transition-all duration-1000 ${
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

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {["all", "mobile", "web", "branding", "ui", "illustration"].map(
              (category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                      : "bg-white text-gray-700 border border-gray-200 hover:text-purple-600 hover:border-gray-300"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              )
            )}
          </div>

          {/* Design Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredDesigns.map((design, index) => (
              <div
                key={`${design.category}-${index}`}
                className="opacity-0 animate-fade-in-up"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "forwards",
                }}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                  <img
                    src={design.image}
                    alt={design.title}
                    className="w-full h-64 object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-gray-900 mb-2">
                      {design.title}
                    </h3>
                    <p className="text-gray-600 mb-4">by {design.author}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>❤️ {design.likes}</span>
                      <span>👁 {design.views}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <button
              onClick={() => navigate("/bro")}
              className="px-10 py-5 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Browse more inspiration →
            </button>
          </div>
        </div>
      </section>

      {/* ---------- CTA SECTION ---------- */}
      <section className="py-32 px-6 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white text-center">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-10 leading-tight">
          Ready to get
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-violet-400">
            started?
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-16 max-w-2xl mx-auto">
          Join millions of designers and creative professionals who trust Glossy
          to showcase their best work
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="px-10 py-5 bg-gradient-to-r from-pink-500 to-violet-600 text-white rounded-2xl text-lg font-bold hover:scale-105 transition-all duration-300"
          >
            Get started for free ✨
          </button>
          <button
            onClick={() => navigate("/pro")}
            className="px-10 py-5 text-white rounded-2xl text-lg font-semibold border border-white/20 hover:bg-white/10 transition-all duration-300"
          >
            Learn about Pro
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

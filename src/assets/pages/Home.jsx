import React, { useState } from "react";
import Hero from "../components/Hero";
import DesignCard from "../components/DesignCard";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
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
      {/* Hero Section */}
      <Hero />

      {/* Featured Work Section */}
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

          {/* Design Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredDesigns.map((design, index) => (
              <DesignCard key={`${design.category}-${index}`} {...design} />
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => navigate("/bro")}
              className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl"
            >
              Browse more inspiration
            </button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
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
            {[
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
            ].map((category, index) => (
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

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-600/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8">
            Ready to get started?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12">
            Join millions of designers and creative professionals who trust
            Glossy
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
    </div>
  );
};

export default HomePage;

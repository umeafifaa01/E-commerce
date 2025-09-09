import React from "react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-pink-50 via-white to-purple-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Discover the world's top
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              {" "}
              designers & creatives
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            Dribbble is the leading destination to find & showcase creative work
            and home to the world's best design professionals.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-pink-600 transition-all transform hover:scale-105 shadow-lg">
              Sign up to continue
            </button>
            <button className="text-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:text-black transition-colors border border-gray-300 hover:border-gray-400">
              Learn more
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900">50M+</div>
              <div className="text-gray-600">Creatives</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900">15M+</div>
              <div className="text-gray-600">Shots</div>
            </div>
            <div>
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
  return (
    <div className="group cursor-pointer">
      <div
        className={`${bgColor} rounded-xl aspect-[4/3] p-8 mb-4 relative overflow-hidden transition-transform group-hover:scale-105`}
      >
        <div className={`${textColor} font-bold text-lg mb-2`}>{title}</div>
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
          <div className={`${textColor} opacity-80 text-sm`}>by {author}</div>
          <div className="flex items-center space-x-4">
            <div
              className={`${textColor} opacity-80 text-sm flex items-center`}
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              {likes}
            </div>
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
            } rounded-full`}
          ></div>
        </div>
      </div>
    </div>
  );
};

const FeaturedWork = () => {
  const designs = [
    {
      title: "Mobile App Design",
      author: "Sarah Chen",
      likes: "2.1k",
      views: "15.2k",
      bgColor: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      title: "Brand Identity",
      author: "Alex Rivera",
      likes: "1.8k",
      views: "12.4k",
      bgColor: "bg-gradient-to-br from-blue-500 to-cyan-400",
    },
    {
      title: "Web Dashboard",
      author: "Maya Patel",
      likes: "3.2k",
      views: "18.7k",
      bgColor: "bg-gradient-to-br from-green-500 to-emerald-400",
    },
    {
      title: "Logo Collection",
      author: "James Wilson",
      likes: "2.7k",
      views: "14.1k",
      bgColor: "bg-gradient-to-br from-orange-500 to-red-500",
    },
    {
      title: "UI Components",
      author: "Lisa Zhang",
      likes: "1.9k",
      views: "11.8k",
      bgColor: "bg-gradient-to-br from-indigo-500 to-purple-500",
    },
    {
      title: "Illustration Set",
      author: "David Kumar",
      likes: "2.4k",
      views: "16.3k",
      bgColor: "bg-gradient-to-br from-pink-500 to-rose-400",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore trending designs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get inspired by thousands of projects from the most talented
            designers around the world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {designs.map((design, index) => (
            <DesignCard key={index} {...design} />
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors">
            Browse more inspiration
          </button>
        </div>
      </div>
    </section>
  );
};

const Categories = () => {
  const categories = [
    { name: "Web Design", count: "180k", color: "bg-blue-100 text-blue-700" },
    { name: "Mobile", count: "120k", color: "bg-green-100 text-green-700" },
    { name: "Branding", count: "95k", color: "bg-purple-100 text-purple-700" },
    { name: "Illustration", count: "78k", color: "bg-pink-100 text-pink-700" },
    {
      name: "Typography",
      count: "65k",
      color: "bg-orange-100 text-orange-700",
    },
    { name: "Animation", count: "52k", color: "bg-cyan-100 text-cyan-700" },
    { name: "Photography", count: "48k", color: "bg-red-100 text-red-700" },
    { name: "UI/UX", count: "156k", color: "bg-indigo-100 text-indigo-700" },
  ];

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Find your next inspiration
          </h2>
          <p className="text-xl text-gray-600">Browse designs by category</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div
                className={`w-16 h-16 ${
                  category.color.split(" ")[0]
                } rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform`}
              >
                <div className="w-8 h-8 bg-current rounded opacity-20"></div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {category.name}
              </h3>
              <p className="text-gray-500 text-sm">{category.count} shots</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-8">
          Ready to get started?
        </h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-12">
          Join millions of designers and creative professionals who trust
          Dribbble
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-pink-600 transition-all transform hover:scale-105 shadow-lg">
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

export default Hero;

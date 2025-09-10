import React from "react";

const Hero = () => {
  return (
    <>
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
    </>
  );
};

export default Hero;

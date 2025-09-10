import React from "react";

const LearnMore = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-white to-pink-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Learn More About{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Glossy
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Glossy is a platform for designers, developers, and creatives to
          showcase their talents, collaborate, and grow their careers. Our
          mission is to empower creativity and innovation worldwide.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
            <h3 className="text-xl font-bold text-pink-600 mb-4">
              Showcase Your Work
            </h3>
            <p className="text-gray-600">
              Share your creative projects with a global audience and inspire
              others through your unique vision.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
            <h3 className="text-xl font-bold text-purple-600 mb-4">
              Hire Designers
            </h3>
            <p className="text-gray-600">
              Find top talent for your next project. Post jobs and collaborate
              with creative minds worldwide.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
            <h3 className="text-xl font-bold text-pink-600 mb-4">
              Learn & Grow
            </h3>
            <p className="text-gray-600">
              Access resources, blogs, and tutorials to enhance your design
              skills and stay ahead in the industry.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-10 rounded-2xl shadow-lg text-white">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-6">
            Join Glossy today and be part of a thriving creative community.
          </p>
          <a
            href="/signup"
            className="bg-white text-pink-600 px-6 py-3 rounded-full font-medium shadow hover:bg-gray-100 transition"
          >
            Sign Up Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;

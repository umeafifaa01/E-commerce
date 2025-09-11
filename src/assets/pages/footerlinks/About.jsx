import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-pink-50 via-white to-purple-50">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About Glossy
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Glossy is a platform where designers and creatives share their
            projects, get inspired, and connect with the global design
            community. Our mission is to empower creativity.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <img
            src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=800&q=80"
            alt="Our Story"
            className="w-full md:w-1/2 rounded-2xl shadow-lg"
          />
          <div className="md:w-1/2">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              Founded in 2022, Glossy started as a small community for designers
              to share their work. Over the years, we’ve grown into a global
              platform connecting thousands of designers and creative
              professionals.
            </p>
            <p className="text-gray-600 text-lg">
              We believe in the power of collaboration, inspiration, and pushing
              the boundaries of design. Our platform helps creators showcase
              their skills and get recognized worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet the Team
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Our passionate team of designers, developers, and creatives is
            dedicated to making Glossy the best platform for designers.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              name: "Sarah Chen",
              role: "Founder & CEO",
              image: "https://randomuser.me/api/portraits/women/44.jpg",
            },
            {
              name: "Alex Rivera",
              role: "Head of Design",
              image: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Maya Patel",
              role: "Lead Developer",
              image: "https://randomuser.me/api/portraits/women/65.jpg",
            },
            {
              name: "James Wilson",
              role: "Marketing Manager",
              image: "https://randomuser.me/api/portraits/men/54.jpg",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-600/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8">
            Join Our Creative Community
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12">
            Connect with thousands of designers, share your projects, and get
            inspired every day.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("/")}
              className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/signup")}
              className="text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-colors border border-white/20 hover:border-white/40"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

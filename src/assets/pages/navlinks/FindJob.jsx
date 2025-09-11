import React from "react";
import { useNavigate } from "react-router-dom";

const FindJobs = () => {
  const navigate = useNavigate();

  const jobs = [
    {
      title: "Frontend Developer",
      location: "Remote",
      type: "Full-time",
      description:
        "Work on building interactive, responsive web applications using React and TailwindCSS.",
    },
    {
      title: "UI/UX Designer",
      location: "New York, USA",
      type: "Full-time",
      description:
        "Design innovative interfaces and improve user experiences for our platform.",
    },
    {
      title: "Marketing Specialist",
      location: "Remote",
      type: "Part-time",
      description:
        "Create engaging campaigns to attract designers and creative professionals.",
    },
    {
      title: "Content Writer",
      location: "London, UK",
      type: "Contract",
      description:
        "Write blog posts, tutorials, and guides to inspire the design community.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-pink-50 via-white to-purple-50">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Careers at Glossy
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Join our passionate team and help us build a global platform that
            inspires designers and creative professionals around the world.
          </p>
        </div>
      </section>

      {/* Why Work With Us Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Work With Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            At Glossy, we value creativity, innovation, and collaboration. We
            provide a flexible environment where your ideas can flourish and
            your career can grow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Flexible Environment",
              icon: "🕒",
              description: "Work from anywhere and manage your own schedule.",
            },
            {
              title: "Growth Opportunities",
              icon: "📈",
              description:
                "We support continuous learning and career development.",
            },
            {
              title: "Inclusive Culture",
              icon: "🤝",
              description: "Be part of a diverse and collaborative team.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Open Positions
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our current job openings and find a role that matches your
            skills and passions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {job.title}
              </h3>
              <p className="text-gray-500 mb-2">
                {job.location} • {job.type}
              </p>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <button
                onClick={() => navigate("/apply")}
                className="bg-pink-500 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-pink-600 transition-colors shadow-sm hover:shadow-md"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-600/10"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-8">
            Start Your Career With Us
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12">
            Join our team and help us shape the future of the creative
            community.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("/apply")}
              className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Apply Now
            </button>
            <button
              onClick={() => navigate("/contact")}
              className="text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-colors border border-white/20 hover:border-white/40"
            >
              Contact HR
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FindJobs;

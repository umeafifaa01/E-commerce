import React, { useState } from "react";

const FindJobs = () => {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All"); // Track active filter

  // Step 1: Jobs data - Added MORE jobs here
  const jobs = [
    {
      title: "Frontend Developer",
      company: "Techify Solutions",
      location: "Bangalore, India",
      type: "Full-Time",
      salary: "₹8 LPA",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
    },
    {
      title: "UI/UX Designer",
      company: "Design Hub",
      location: "Remote",
      type: "Part-Time",
      salary: "₹5 LPA",
      logo: "https://cdn-icons-png.flaticon.com/512/888/888859.png",
    },
    {
      title: "Backend Developer",
      company: "CodeCraft",
      location: "Hyderabad, India",
      type: "Internship",
      salary: "₹15,000/month",
      logo: "https://cdn-icons-png.flaticon.com/512/5968/5968322.png",
    },
    {
      title: "Product Manager",
      company: "InnovateX",
      location: "Mumbai, India",
      type: "Full-Time",
      salary: "₹18 LPA",
      logo: "https://cdn-icons-png.flaticon.com/512/1995/1995515.png",
    },
    {
      title: "Data Scientist",
      company: "AI Labs",
      location: "Pune, India",
      type: "Full-Time",
      salary: "₹20 LPA",
      logo: "https://cdn-icons-png.flaticon.com/512/906/906324.png",
    },
    {
      title: "Marketing Specialist",
      company: "BrandBoost",
      location: "Delhi, India",
      type: "Part-Time",
      salary: "₹25,000/month",
      logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    },
    {
      title: "DevOps Engineer",
      company: "CloudOps",
      location: "Chennai, India",
      type: "Full-Time",
      salary: "₹12 LPA",
      logo: "https://cdn-icons-png.flaticon.com/512/1005/1005141.png",
    },
    {
      title: "Content Writer",
      company: "WriteUp",
      location: "Remote",
      type: "Internship",
      salary: "₹10,000/month",
      logo: "https://cdn-icons-png.flaticon.com/512/2920/2920325.png",
    },
    {
      title: "Graphic Designer",
      company: "PixelPerfect",
      location: "Remote",
      type: "Part-Time",
      salary: "₹4 LPA",
      logo: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
    },
    {
      title: "Cybersecurity Analyst",
      company: "SecureIT",
      location: "Noida, India",
      type: "Full-Time",
      salary: "₹15 LPA",
      logo: "https://cdn-icons-png.flaticon.com/512/270/270798.png",
    },
    {
      title: "Business Analyst",
      company: "BizGrowth",
      location: "Gurgaon, India",
      type: "Full-Time",
      salary: "₹10 LPA",
      logo: "https://cdn-icons-png.flaticon.com/512/2784/2784461.png",
    },
    {
      title: "Intern - Machine Learning",
      company: "DataBrains",
      location: "Remote",
      type: "Internship",
      salary: "₹12,000/month",
      logo: "https://cdn-icons-png.flaticon.com/512/2942/2942928.png",
    },
    {
      title: "Full Stack Developer",
      company: "NextGen Solutions",
      location: "Hyderabad, India",
      type: "Full-Time",
      salary: "₹14 LPA",
      logo: "https://cdn-icons-png.flaticon.com/512/875/875610.png",
    },
    {
      title: "SEO Specialist",
      company: "MarketMinds",
      location: "Remote",
      type: "Part-Time",
      salary: "₹30,000/month",
      logo: "https://cdn-icons-png.flaticon.com/512/825/825519.png",
    },
    {
      title: "AI Researcher",
      company: "NeuralNet",
      location: "Bangalore, India",
      type: "Full-Time",
      salary: "₹25 LPA",
      logo: "https://cdn-icons-png.flaticon.com/512/1023/1023656.png",
    },
  ];

  // ✅ Step 2: Filtering Logic
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter =
      selectedFilter === "All" || job.type === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-purple-50min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          Find Your <span className="text-pink-600">Dream Job</span>
        </h1>

        {/* Search Bar */}
        <div className="flex justify-center mb-10">
          <input
            type="text"
            placeholder="Search by job title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-4 py-3 rounded-full border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["All", "Full-Time", "Part-Time", "Internship"].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2 rounded-full border transition-colors ${
                selectedFilter === filter
                  ? "bg-pink-500 text-white border-pink-500"
                  : "border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {job.title}
                    </h2>
                    <p className="text-gray-600 text-sm">{job.company}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-2">📍 {job.location}</p>
                <p className="text-gray-700 mb-4">
                  💼 {job.type} | 💰 {job.salary}
                </p>

                <button className="w-full bg-pink-500 text-white py-2 rounded-full hover:bg-pink-600 transition-colors">
                  Apply Now
                </button>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-600">
              No jobs found for your search or filter.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FindJobs;

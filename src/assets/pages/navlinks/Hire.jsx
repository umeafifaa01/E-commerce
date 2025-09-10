import React, { useState } from "react";

const HireDesigners = () => {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All");

  // Sample designers
  const designers = [
    {
      name: "Aisha Khan",
      role: "UI/UX Designer",
      location: "Mumbai, India",
      type: "Freelancer",
      image: "https://api.dicebear.com/8.x/adventurer/svg?seed=Aisha",
      skills: ["Figma", "Adobe XD", "Wireframing"],
    },
    {
      name: "Rajesh Patel",
      role: "Product Designer",
      location: "Bangalore, India",
      type: "Full-Time",
      image: "https://api.dicebear.com/8.x/adventurer/svg?seed=Rajesh",
      skills: ["UI Design", "Prototyping", "Sketch"],
    },
    {
      name: "Emily Johnson",
      role: "Graphic Designer",
      location: "New York, USA",
      type: "Part-Time",
      image: "https://api.dicebear.com/8.x/adventurer/svg?seed=Emily",
      skills: ["Illustrator", "Photoshop", "Branding"],
    },
    {
      name: "Arjun Mehta",
      role: "Motion Designer",
      location: "Pune, India",
      type: "Freelancer",
      image: "https://api.dicebear.com/8.x/adventurer/svg?seed=Arjun",
      skills: ["After Effects", "Animation", "3D Design"],
    },
    {
      name: "Sophia Williams",
      role: "Visual Designer",
      location: "London, UK",
      type: "Full-Time",
      image: "https://api.dicebear.com/8.x/adventurer/svg?seed=Sophia",
      skills: ["Typography", "Illustrations", "Web Design"],
    },
    {
      name: "Liam Anderson",
      role: "Interaction Designer",
      location: "Toronto, Canada",
      type: "Freelancer",
      image: "https://api.dicebear.com/8.x/adventurer/svg?seed=Liam",
      skills: ["Prototyping", "UX Research", "Figma"],
    },
    {
      name: "Zara Ali",
      role: "Creative Director",
      location: "Dubai, UAE",
      type: "Full-Time",
      image: "https://api.dicebear.com/8.x/adventurer/svg?seed=Zara",
      skills: ["Branding", "Design Strategy", "Photoshop"],
    },
    {
      name: "Noah Smith",
      role: "Web Designer",
      location: "Berlin, Germany",
      type: "Part-Time",
      image: "https://api.dicebear.com/8.x/adventurer/svg?seed=Noah",
      skills: ["HTML", "CSS", "UI Animations"],
    },
  ];
  // Filtering logic
  const filteredDesigners = designers.filter((designer) => {
    const matchesSearch = designer.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter =
      selectedFilter === "All" || designer.type === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-purple-50min-h-screen">
      {/* Header Section */}
      <div className="text-center py-14 px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Hire <span className="text-pink-600">Top Designers</span>
        </h1>
        <p className="text-gray-700 max-w-xl mx-auto">
          Find the perfect designer for your project — from freelancers to
          full-time professionals.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-6 mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by name or skill..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-pink-500"
        />

        {/* Filters */}
        <div className="flex space-x-3">
          {["All", "Freelancer", "Full-Time", "Part-Time"].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedFilter === filter
                  ? "bg-pink-500 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-pink-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Designers Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-20">
        {filteredDesigners.length > 0 ? (
          filteredDesigners.map((designer, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
            >
              <img
                src={designer.image}
                alt={designer.name}
                className="w-full h-40 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-900">
                  {designer.name}
                </h3>
                <p className="text-pink-500 text-sm font-medium">
                  {designer.role}
                </p>
                <p className="text-gray-600 text-sm mt-1">
                  {designer.location}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {designer.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <button className="w-full mt-5 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition">
                  Hire Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600">
            No designers found matching your criteria.
          </p>
        )}
      </div>
    </div>
  );
};

export default HireDesigners;

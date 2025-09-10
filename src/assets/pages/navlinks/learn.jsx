import React, { useState } from "react";

const LearnDesign = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const courses = [
    {
      title: "UI/UX Design Fundamentals",
      description:
        "Learn the core principles of user interface and user experience design with practical projects.",
      level: "Beginner",
      duration: "6 Weeks",
      category: "UI/UX",
      image: "https://cdn-icons-png.flaticon.com/512/2721/2721296.png",
    },
    {
      title: "Web Design Mastery",
      description:
        "Build responsive, modern websites using Figma and HTML/CSS best practices.",
      level: "Intermediate",
      duration: "8 Weeks",
      category: "Web Design",
      image: "https://cdn-icons-png.flaticon.com/512/919/919827.png",
    },
    {
      title: "Graphic Design Basics",
      description:
        "Understand the essentials of color theory, typography, and branding.",
      level: "Beginner",
      duration: "4 Weeks",
      category: "Graphic Design",
      image: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
    },
    {
      title: "Advanced UI Animation",
      description:
        "Create interactive prototypes and animated interfaces like a pro.",
      level: "Advanced",
      duration: "5 Weeks",
      category: "UI/UX",
      image: "https://cdn-icons-png.flaticon.com/512/2921/2921228.png",
    },
    {
      title: "Logo Design Workshop",
      description:
        "Learn how to design unique, professional logos for businesses.",
      level: "Intermediate",
      duration: "3 Weeks",
      category: "Graphic Design",
      image: "https://cdn-icons-png.flaticon.com/512/2921/2921224.png",
    },
    {
      title: "Responsive Design for Web",
      description:
        "Master responsive layouts and mobile-first design techniques.",
      level: "Intermediate",
      duration: "6 Weeks",
      category: "Web Design",
      image: "https://cdn-icons-png.flaticon.com/512/3050/3050525.png",
    },
  ];

  // Filter courses by category
  const filteredCourses = courses.filter(
    (course) =>
      selectedCategory === "All" || course.category === selectedCategory
  );

  return (
    <div className="bg-gradient-to-br from-pink-50 via-white to-purple-50min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Learn <span className="text-pink-600">Design</span> with Ease
        </h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          Explore a wide range of courses to master UI/UX, Graphic Design, and
          Web Design. Start your journey towards becoming a creative
          professional today.
        </p>
        <button className="px-8 py-3 bg-pink-600 text-white rounded-full shadow-md hover:bg-pink-700 transition">
          Start Learning
        </button>
      </section>

      {/* Category Filter */}
      <div className="flex justify-center gap-4 mb-10">
        {["All", "UI/UX", "Web Design", "Graphic Design"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full border transition ${
              selectedCategory === category
                ? "bg-pink-500 text-white border-pink-500"
                : "border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 p-6 text-center"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-20 h-20 mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {course.title}
              </h2>
              <p className="text-gray-600 mb-4">{course.description}</p>
              <p className="text-sm text-gray-500">
                <span className="font-semibold">Level:</span> {course.level} |{" "}
                <span className="font-semibold">Duration:</span>{" "}
                {course.duration}
              </p>
              <button className="mt-4 w-full bg-pink-500 text-white py-2 rounded-full hover:bg-pink-600 transition">
                Start Learning
              </button>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-600">
            No courses found in this category.
          </p>
        )}
      </div>
    </div>
  );
};

export default LearnDesign;

import React from "react";

const inspirations = [
  {
    title: "Modern UI Design",
    description: "Clean, minimal, and elegant designs for web apps.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Creative Branding",
    description: "Inspiring brand identities and logo designs.",
    image:
      "https://static.vecteezy.com/system/resources/previews/066/739/417/non_2x/creative-logo-design-services-for-building-a-strong-visual-brand-identity-company-vector.jpg",
  },
  {
    title: "Photography Ideas",
    description: "Explore stunning photography concepts and themes.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Mobile App UI",
    description: "Trendy designs for mobile applications.",
    image:
      "https://s3-figma-hubfile-images-production.figma.com/hub/file/carousel/img/1fa2f512a3f8aa78906dc4748c1a8ac720e5a1d9/930b6c7f949ed825daa1372d66c860e51edc5c12",
  },
  {
    title: "Illustrations",
    description: "Creative illustrations for storytelling and branding.",
    image:
      "https://www.duarte.com/wp-content/uploads/2024/05/BrandStorytelling.jpg",
  },
  {
    title: "3D Design",
    description: "Cutting-edge 3D concepts and designs for products.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9-9Z3P3l91PzMVs4kyRfy9FT6kvKaRgm8hw&s",
  },
];

const BrowseMoreInspiration = () => {
  return (
    <section className="bg-gradient-to-br from-pink-50 via-white to-purple-50 py-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Browse More{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Inspiration
            </span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore a world of creative ideas, designs, and concepts to spark
            your imagination and inspire your next project.
          </p>
        </div>

        {/* Grid of Inspiration Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {inspirations.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="/signup"
            className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg font-medium shadow hover:bg-pink-600 transition-all duration-300"
          >
            Join Glossy to Share Your Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrowseMoreInspiration;

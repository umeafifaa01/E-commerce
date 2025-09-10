import React from "react";
import { useLocation } from "react-router-dom";

// Dummy design data
const designs = [
  {
    id: 1,
    title: "Minimalist Logo",
    category: "Logo",
    image: "/src/img/logoo.jpg",
  },
  {
    id: 2,
    title: "Modern Website",
    category: "Web Design",
    image: "/images/web1.png",
  },
  {
    id: 3,
    title: "Creative Poster",
    category: "Poster",
    image: "/images/poster1.png",
  },
  {
    id: 4,
    title: "Portfolio Layout",
    category: "Web Design",
    image: "/images/web2.png",
  },
  {
    id: 5,
    title: "Business Card",
    category: "Print",
    image: "/images/card1.png",
  },
  {
    id: 6,
    title: "Logo Concept",
    category: "Logo",
    image: "/images/logo2.png",
  },
];

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query")?.toLowerCase() || "";

  // Filter designs based on title or category
  const filteredDesigns = designs.filter(
    (design) =>
      design.title.toLowerCase().includes(query) ||
      design.category.toLowerCase().includes(query)
  );

  return (
    <>
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6">
          Search Results {query && `for "${query}"`}
        </h1>

        {filteredDesigns.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredDesigns.map((design) => (
              <div
                key={design.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold">{design.title}</h2>
                  <p className="text-gray-500 text-sm">{design.category}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">
            No designs found matching your search.
          </p>
        )}
      </div>
    </>
  );
};

export default SearchResults;

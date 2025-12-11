import React from "react";

const TripIdeas = (props) => {
  const [activeCategory, setActiveCategory] = useState("Family-friendly");

  const categories = [
    "Family-friendly",
    "Beach",
    "Romantic",
    "Cultural",
    "Backpacking",
    "Nature",
  ];
  return (
    <div>
      <h2 className="text-md md:text-lg lg:text-2xl font-bold text-gray-900 mb-3 md:mb-6">
        Trip Ideas from Nigeria
      </h2>

      {/* category */}
      <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-colors ${
              activeCategory === category
                ? "bg-lime-100 text-lime-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

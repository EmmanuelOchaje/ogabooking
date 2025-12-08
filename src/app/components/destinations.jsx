import React, { useState } from "react";

export default function Destinations() {
  const [activeCategory, setActiveCategory] = useState("Family-friendly");

  const categories = [
    "Family-friendly",
    "Beach",
    "Romantic",
    "Cultural",
    "Backpacking",
    "Nature",
  ];

  const destinations = [
    {
      id: 1,
      name: "Cape Town",
      country: "South Africa",
      price: "750,773",
      image:
        "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=800",
    },
    {
      id: 2,
      name: "Dubai",
      country: "United Arab Emirates",
      price: "752,572",
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800",
    },
    {
      id: 3,
      name: "London",
      country: "United Kingdom",
      price: "796,894",
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800",
    },
    {
      id: 4,
      name: "Cairo",
      country: "Egypt",
      price: "824,445",
      image:
        "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=800",
    },
    {
      id: 5,
      name: "Abu Dhabi",
      country: "United Arab Emirates",
      price: "840,272",
      image:
        "https://images.unsplash.com/photo-1512632578888-169bbbc64f33?q=80&w=800",
    },
    {
      id: 6,
      name: "Amman",
      country: "Jordan",
      price: "925,474",
      image:
        "https://images.unsplash.com/photo-1580837119756-563d608dd119?q=80&w=800",
    },
    {
      id: 7,
      name: "Barcelona",
      country: "Spain",
      price: "925,549",
      image:
        "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=800",
    },
    {
      id: 8,
      name: "Muscat",
      country: "Oman",
      price: "936,333",
      image:
        "https://images.unsplash.com/photo-1591608971362-f08b2a75731a?q=80&w=800",
    },
    {
      id: 9,
      name: "Paris",
      country: "France",
      price: "956,311",
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800",
    },
  ];

  return (
    <div className="bg-white py-4 md:py-12 lg:py-10 px-4 md:px-5 lg:px-40">
      <div className="container mx-auto max-w-7xl">
        {/* header */}
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

        {/* destinations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md cursor-pointer border border-gray-100"
            >
              {/* image */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* content */}
              <div className="p-4 md:p-5">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                  {destination.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-600 mb-3">
                  {destination.country}
                </p>

                {/* price */}
                <div>
                  <p className="text-xs text-gray-500 mb-1">Round-trip from</p>
                  <p className="text-lg md:text-xl font-bold text-gray-900">
                    {destination.price}
                    <span className="text-sm font-normal">₦</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

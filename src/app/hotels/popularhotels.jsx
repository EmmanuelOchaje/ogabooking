"use client";

import { useRef } from "react";

const hotels = [
  {
    id: 1,
    name: "The Neat Place",
    stars: 3,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    rating: 7.8,
    reviews: 134,
    price: "108,447",
  },
  {
    id: 2,
    name: "Asaa Pyramid Hotel",
    stars: 3,
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop",
    rating: 7.8,
    reviews: 134,
  },
  {
    id: 3,
    name: "Martaba Millenium Hotels Limited",
    stars: 3,
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop",
    price: "193,704",
  },
  {
    id: 4,
    name: "Castle De White House Hotel",
    stars: 3,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
    rating: 7.8,
    reviews: 134,
    price: "200,993",
  },
];

const StarIcon = () => (
  <svg className="w-3 h-3 fill-yellow-500" viewBox="0 0 20 20">
    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
  </svg>
);

export default function KadunaHotels() {
  const containerRef = useRef(null);

  const scroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-20 py-8">
      <h1 className="text-xl font-bold mx-2">Popular Hotels in Abuja</h1>

      <div className="relative">
        <div
          ref={containerRef}
          className="flex gap-4 overflow-x-auto p-4 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="flex-none w-72 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={hotel.image}
                alt={hotel.name}
                className="w-full h-48 object-cover"
                loading="lazy"
              />

              <div className="p-4 flex flex-col items-start">
                <div>
                  <h3 className="font-semibold text-md mb-1">{hotel.name}</h3>

                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: hotel.stars }, (_, i) => (
                      <StarIcon key={i} />
                    ))}
                  </div>

                  {hotel.rating ? (
                    <div className="flex items-center gap-1 mb-4">
                      <span className="bg-[#188920] text-white text-sm font-bold px-2 rounded-full">
                        {hotel.rating}
                      </span>
                      <span className="text-xs text-gray-600">
                        {hotel.reviews} reviews
                      </span>
                    </div>
                  ) : (
                    <div className="mt-6" />
                  )}
                </div>

                <button className="font-semibold text-xs hover:text-green-700">
                  {hotel.price ? `${hotel.price}₦` : ""}
                </button>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={scroll}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 z-10"
          aria-label="Scroll right"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

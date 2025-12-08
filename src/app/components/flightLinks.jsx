import React from "react";

export default function FlightLinks() {
  const topCities = [
    { name: "Flights to Lagos", url: "/" },
    { name: "Flights to Abuja", url: "/" },
    { name: "Flights to Benin City", url: "/" },
    { name: "Flights to Akure", url: "/" },
    { name: "Flights to Owerri", url: "/" },
    { name: "Flights to Port Harcourt", url: "/" },
    { name: "Flights to Enugu", url: "/" },
    { name: "Flights to Asaba", url: "/" },
    { name: "Flights to Ilorin", url: "/" },
    { name: "Flights to Kano", url: "/" },
  ];

  const internationalDestinations = [
    { name: "Flights to Jeddah", url: "/" },
    { name: "Flights to Cairo", url: "/" },
    { name: "Flights to Dubai", url: "/" },
    { name: "Flights to Al Madinah", url: "/" },
    { name: "Flights to Muscat", url: "/" },
    { name: "Flights to Riyadh", url: "/" },
    { name: "Flights to Kuwait", url: "/" },
    { name: "Flights to Doha", url: "/" },
    { name: "Flights to London", url: "/" },
    { name: "Flights to Guangzhou", url: "/" },
  ];

  const topCountries = [
    { name: "Flights to Saudi Arabia", url: "/" },
    { name: "Flights to United Arab Emirates", url: "/" },
    { name: "Flights to Egypt", url: "/" },
    { name: "Flights to Oman", url: "/" },
    { name: "Flights to Kuwait", url: "/" },
    { name: "Flights to United Kingdom", url: "/" },
    { name: "Flights to China", url: "/" },
    { name: "Flights to India", url: "/" },
    { name: "Flights to Qatar", url: "/" },
    { name: "Flights to Canada", url: "/" },
  ];

  return (
    <div className="py-5 md:py-12 lg:py-10 px-4 md:px-5 lg:px-40">
      <div className="container mx-auto max-w-7xl">
        {/* Flights To Top Cities from Nigeria */}
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-4 md:mb-6">
            Flights To Top Cities from Nigeria
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-x-2 md:gap-x-8 gap-y-2 md:gap-y-3">
            {topCities.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-gray-700 text-xs md:text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Top International Destinations */}
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-4 md:mb-6">
            Top International Destinations
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-x-2 md:gap-x-8 gap-y-2 md:gap-y-3">
            {internationalDestinations.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-gray-700 text-xs md:text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Flights To Top Countries */}
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-900 mb-4 md:mb-6">
            Flights To Top Countries
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-x-2 md:gap-x-8 gap-y-2 md:gap-y-3">
            {topCountries.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-gray-700 text-xs md:text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

import europcar from "../../images/europcar.png";
import sixt from "../../images/sixt.png";
import national from "../../images/national.png";
import hertz from "../../images/hertz.png";
import alamo from "../../images/alamo.png";
import enterprise from "../../images/enterprise.png";
import Image from "next/image";

export default function CarRentalPartners() {
  const partners = [
    {
      name: "Europcar",
      logo: europcar,
    },
    {
      name: "Hertz",
      logo: hertz,
    },
    {
      name: "Sixt",
      logo: sixt,
    },
    {
      name: "Alamo",
      logo: alamo,
    },
    {
      name: "Enterprise",
      logo: enterprise,
    },
    {
      name: "National",
      logo: national,
    },
  ];

  const features = [
    {
      icon: (
        <svg
          className="w-10 h-10 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Search Fast, Worldwide.",
      description: "Live deals in seconds across airports and cities.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
      title: "Everything in One View.",
      description: "Compare cars, prices, and inclusions side-by-side.",
    },
    {
      icon: (
        <svg
          className="w-10 h-10 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Flexible Options.",
      description: "Filter for free cancellation and flexible policies.",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-20 py-12">
      {/* Partners Section */}
      <div className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-3">
            <h2 className="text-xl font-bold mb-3 text-gray-900">
              Our Car Rental Partners
            </h2>
            <p className="text-md text-gray-600">
              Get the best car rental deals with our partners
            </p>
          </div>

          <div className="lg:col-span-9">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
              {partners.map((partner, index) => (
                <div key={index} className="flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    className="w-30 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

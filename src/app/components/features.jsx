import plane from "../../images/flight-luggage.png";
import support from "../../images/support.png";
import payment from "../../images/payment.png";
import search from "../../images/search.png";
import Image from "next/image";

export const Features = () => {
  const features = [
    {
      title: "Best Travel Deals in Nigeria",
      imagePath: plane,
    },
    {
      title: "Thousands of Flights & Hotel Deals",
      imagePath: search,
    },
    {
      title: "Multiple Payment Methods",
      imagePath: payment,
    },
    {
      title: "24/7 Customer Service Support",
      imagePath: support,
    },
  ];

  return (
    <div className="bg-white py-8 md:py-12 pt-14 md:pt-7 lg:mt-7 lg:py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-3 md:mb-4">
                <Image
                  src={feature.imagePath}
                  alt={feature.title}
                  className="w-16 h-16 md:w-20 md:h-20 object-contain"
                />
              </div>

              <h3 className="text-gray-900 font-semibold text-xs md:text-sm leading-tight px-2">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

import React from "react";
import Image from "next/image";
import airpeace from "../../images/airpeace.png";
import egypt from "../../images/egypt.png";
import airviva from "../../images/airviva.png";
import asky from "../../images/asky.png";
import awa from "../../images/awa.png";
import cheaptickets from "../../images/cheaptickets.png";
import ethiopian from "../../images/ethopian.png";
import kenya from "../../images/kenya.png";
import kiwi from "../../images/kiwi.png";
import qatar from "../../images/qatar.png";
import rehlat from "../../images/rehlat.png";
import turkish from "../../images/turkish.png";
import ucuza from "../../images/ucuza.png";
import mytrip from "../../images/mytrip.png";
import onetravel from "../../images/onetravel.png";
import travelwings from "../../images/travelwings.png";

export default function AirPartners() {
  const airlines = [
    { name: "Air Peace", logo: airpeace },
    { name: "Egypt Air", logo: egypt },
    { name: "Turkish Airlines", logo: turkish },
    { name: "Ethiopian Airlines", logo: ethiopian },
    { name: "Kenya Airways", logo: kenya },
    { name: "Qatar Airways", logo: qatar },
    { name: "ASKY Airlines", logo: asky },
    { name: "AIYA Airlines", logo: awa },
  ];

  const partners = [
    { name: "MyTrip", logo: mytrip },
    { name: "Travelwings", logo: travelwings },
    { name: "OneTravel", logo: onetravel },
    { name: "Rehlat", logo: rehlat },
    { name: "Kiwi.com", logo: kiwi },
    { name: "LatestFlights", logo: ucuza },
    { name: "CheapTicket", logo: cheaptickets },
    { name: "AirViva", logo: airviva },
  ];

  return (
    <div className="py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-40">
      <div className="container mx-auto max-w-5xl">
        {/* airlines */}
        <div className="mb-5 lg:flex md:mb-10">
          <div className="mb-4 md:mb-6">
            <h2 className="text-lg md:text-lg lg:text-xl font-bold text-gray-900 mb-2">
              Popular Airlines in Nigeria
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Book cheap flights on your favourite airlines
            </p>
          </div>

          {/* airlines */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {airlines.map((airline, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white p-4"
              >
                <Image
                  src={airline.logo}
                  alt={airline.name}
                  className="max-w-full h-6 md:h-8 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* partners */}
        <div className="lg:flex">
          <div className="mb-4 md:mb-6">
            <h2 className="text-lg md:text-lg lg:text-xl font-bold text-gray-900 mb-2">
              Our Travel Partners
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              ogabooking searches for the best deals on these sites in Nigeria
            </p>
          </div>

          {/* partners */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex items-center justify-center bg-white p-4 cursor-pointer"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full h-6 md:h-8 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

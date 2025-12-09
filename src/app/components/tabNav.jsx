"use client";
import React, { useState } from "react";
import plane from "../../images/plane-g.png";
import hotel from "../../images/hotel.png";
import car from "../../images/car.png";
import Image from "next/image";

const TabNav = () => {
  const [clicked, setClicked] = useState("flights");
  return (
    <div className="px-4 md:px-0">
      <div className="flex justify-center mb-8">
        <div className="bg-white/20 backdrop-blur-lg border-white border-[.5px] rounded-full p-2 flex gap-2 shadow-lg w-full md:w-auto overflow-x-auto">
          <button
            className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-full transition-colors whitespace-nowrap ${
              clicked === "flights" ? "bg-white" : " text-white"
            } cursor-pointer`}
            onClick={() => setClicked("flights")}
          >
            <Image src={plane} className="w-4 h-4 md:w-5 md:h-5" alt="" />
            <span className="font-semibold text-sm md:text-base">Flights</span>
          </button>
          <button
            className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-full transition-colors whitespace-nowrap ${
              clicked === "hotels" ? "bg-white text-black" : " text-white"
            } cursor-pointer`}
            onClick={() => setClicked("hotels")}
          >
            <Image src={hotel} className="w-4 h-4 md:w-5 md:h-5" alt="" />
            <span className="font-semibold text-sm md:text-base">Hotels</span>
          </button>
          <button
            className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-full transition-colors whitespace-nowrap ${
              clicked === "car-rentals" ? "bg-white text-black" : " text-white"
            } cursor-pointer `}
            onClick={() => setClicked("car-rentals")}
          >
            <Image src={car} className="w-4 h-4 md:w-5 md:h-5" alt="" />
            <span className="font-semibold text-sm md:text-base">
              Car Rentals
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabNav;

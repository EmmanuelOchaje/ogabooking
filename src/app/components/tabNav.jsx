"use client";
import React, { useState } from "react";
import plane from "../../images/plane-g.png";
import hotel from "../../images/hotel.png";
import car from "../../images/car.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

const TabNav = ({ clicked, setClicked }) => {
  const pathname = usePathname();
  return (
    <div className="px-4 md:px-0">
      <div className="flex justify-center mb-2">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-1 flex gap-2 shadow-sm w-full md:w-auto overflow-x-auto">
          <Link
            href={"/"}
            className={`flex items-center gap-2 px-4 md:px-4 py-3 rounded-full transition-colors whitespace-nowrap ${
              pathname === "/" ? "bg-white" : " text-white"
            } cursor-pointer`}
            onClick={() => {
              setClicked("flights");
              // router.push("/flights");
            }}
          >
            <Image src={plane} className="w-4 h-4 md:w-5 md:h-5" alt="" />
            <span className="font-semibold text-sm md:text-base">Flights</span>
          </Link>
          <Link
            href={"/hotels"}
            className={`flex items-center gap-2 px-4 md:px-4 py-3 rounded-full transition-colors whitespace-nowrap ${
              pathname === "/hotels" ? "bg-white text-black" : " text-white"
            } cursor-pointer`}
            onClick={() => {
              setClicked("hotels");
              // router.push("/hotels");
            }}
          >
            <Image src={hotel} className="w-4 h-4 md:w-5 md:h-5" alt="" />
            <span className="font-semibold text-sm md:text-base">Hotels</span>
          </Link>
          <Link
            href={"/car-rentals"}
            className={`flex items-center gap-2 px-4 md:px-4 py-3 rounded-full transition-colors whitespace-nowrap ${
              pathname === "/car-rentals"
                ? "bg-white text-black"
                : " text-white"
            } cursor-pointer `}
            onClick={() => {
              setClicked("car-rentals");
              // router.push("/car-rentals");
            }}
          >
            <Image src={car} className="w-4 h-4 md:w-5 md:h-5" alt="" />
            <span className="font-semibold text-sm md:text-base">
              Car Rentals
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TabNav;

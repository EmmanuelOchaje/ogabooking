import React from "react";
import Image from "next/image";
import plane from "../../images/flight-t.png";
import attraction from "../../images/attraction.png";
import esim from "../../images/esim.png";

const Status = () => {
  return (
    <div className="w-full flex font-geist justify-center mx-auto relative">
      <div className="flex absolute bg-white rounded-xl -top-5 px-5 border border-gray-300">
        <button className="border-r border-r-gray-300 px-2 md:px-3 py-2 text-sm font-medium flex items-center gap-2">
          <div className="w-5 h-5 bg-lime-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs">
              <Image src={plane} className="w-5 h-5" alt="" />
            </span>
          </div>
          Flight Status
        </button>
        <button className="border-r border-r-gray-300 px-2 md:px-3 py-2 text-sm font-medium hover:bg-white transition-colors flex items-center gap-2">
          <span className="text-xl">
            <Image src={attraction} className="w-5 h-5" alt="" />
          </span>
          Attractions
        </button>
        <button className="px-2 md:px-3 py-2 text-sm font-medium hover:bg-white transition-colors flex items-center gap-2">
          <span className="text-sm text-white px-2 py-0.5 rounded">
            <Image src={esim} className="w-5 h-5" alt="" />
          </span>
          eSIM
        </button>
      </div>
    </div>
  );
};

export default Status;

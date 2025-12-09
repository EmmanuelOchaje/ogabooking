import {
  ArrowLeftRight,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";
import React, { useState } from "react";
import Input from "./input";

const TripSelector = () => {
  const [trip, setTrip] = useState("one-way");
  return (
    <div className="bg-white p-4 mx-auto md:p-8 lg:p-10 pb-5 w-full md:w-fit md:rounded-xl">
      {/* trip type */}
      <div className="flex gap-1 mb-4 overflow-x-auto">
        <button
          className={`px-3 md:px-6 text-xs md:text-normal font-semibold py-2 rounded-full transition-colors whitespace-nowrap ${
            trip === "one-way"
              ? "bg-[#e7fddc] text-[#238f2a]"
              : "text-gray-600 bg-gray-100"
          } cursor-pointer`}
          onClick={() => setTrip("one-way")}
        >
          One-way
        </button>
        <button
          className={`px-3 md:px-6 text-xs md:text-normal font-semibold py-2 rounded-full transition-colors whitespace-nowrap ${
            trip === "round-trip"
              ? "bg-[#e7fddc] text-[#238f2a]"
              : "bg-gray-100 text-gray-600"
          } cursor-pointer`}
          onClick={() => setTrip("round-trip")}
        >
          Round-trip
        </button>
        <button
          className={`px-3 md:px-6 text-xs md:text-normal font-semibold py-2 rounded-full transition-colors whitespace-nowrap text-gray-600 cursor-pointer ${
            trip === "multi-city"
              ? "bg-[#e7fddc] text-[#238f2a]"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => setTrip("multi-city")}
        >
          Multi-city
        </button>
      </div>

      {/* search inputs */}
      <div className="flex flex-col">
        <Input trip={trip} />
        {/* multi city extra */}
      </div>

      {/* options */}
      <div className="flex flex-col md:flex-row mt-4 gap-3 md:items-center md:justify-between">
        {/* direct flight */}
        <div className="flex items-center">
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 rounded mx-1 border-gray-300"
            />
            <span className="text-sm text-gray-700">Direct flights only</span>
          </label>
        </div>

        {/* dropdowns  */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          <select className="px-4 py-2 border text-sm border-gray-200 rounded-lg focus:outline-none">
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>3 Adults</option>
          </select>

          <select className="px-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none">
            <option>Economy</option>
            <option>Premium Economy</option>
            <option>Business</option>
            <option>First Class</option>
          </select>

          <select className="px-4 py-2 border text-sm border-gray-200 rounded-lg focus:outline-none">
            <option>2 Payment Types</option>
          </select>

          <button className="px-6 text-sm py-2 bg-lime-500 text-white rounded-full font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg">
            <Search className="w-5 h-5" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripSelector;

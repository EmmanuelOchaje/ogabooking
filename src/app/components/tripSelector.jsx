import {
  ArrowLeftRight,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";
import React from "react";

const TripSelector = () => {
  return (
    <div className="bg-white p-4 mx-auto md:p-8 lg:p-10 pb-5 w-full md:w-fit rounded-">
      {/* trip type */}
      <div className="flex gap-1 mb-4 overflow-x-auto">
        <button className="px-3 md:px-6 text-xs md:text-normal py-2 rounded-full transition-colors whitespace-nowrap text-gray-600 bg-gray-100">
          One-way
        </button>
        <button className="px-3 md:px-6 text-xs md:text-normal py-2 rounded-full transition-colors whitespace-nowrap bg-lime-100 text-emerald-700">
          Round-trip
        </button>
        <button className="px-3 md:px-6 text-xs md:text-normal py-2 rounded-full transition-colors whitespace-nowrap text-gray-600 bg-gray-100">
          Multi-city
        </button>
      </div>

      {/* search inputs */}
      <div className="flex flex-col md:flex-row gap-3 mb-2">
        {/* from */}
        <div className="p-2 md:p-3 rounded-xl border-gray-100 border relative flex-1">
          <label className="text-xs text-gray-500 mb-1 block">From</label>
          <input
            type="text"
            placeholder="Enter origin"
            className="w-ful px-2 py-1 border-gray-200 rounded-lg focus:outline-none"
          />
        </div>

        {/*swap btn, hidden on mobilee */}
        <div className="hidden md:flex items-end justify-center pb-5">
          <button className="p-2 border border-gray-100 rounded-full">
            <ArrowLeftRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* to */}
        <div className="border rounded-xl border-gray-200 p-2 md:p-3 flex-1">
          <label className="text-xs text-gray-500 mb-1 block">To</label>
          <input
            type="text"
            placeholder="Enter destination"
            className="w-full px-2 py-1 rounded-lg focus:outline-none"
          />
        </div>

        {/* depart date */}
        <div className="border p-2 md:p-3 rounded-xl border-gray-200 flex-1">
          <label className="text-xs text-gray-500 mb-1 block">Depart</label>
          <div className="flex justify-between px-3 gap-1">
            <p className="py-1 text-center text-sm rounded-lg focus:outline-none">
              Sat, 06 Dec 2025
            </p>
            <div className="flex gap-4">
              <button className="p-1 rounded">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="p-1 rounded">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* return date */}
        <div className="border p-3 rounded-xl border-gray-200 flex-1">
          <label className="text-xs text-gray-500 mb-1 block">Return</label>
          <input
            type="text"
            placeholder="Select return date"
            className="w-full px-2 py-1 text-sm rounded-lg focus:outline-none"
          />
        </div>
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

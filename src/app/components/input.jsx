import React from "react";
import {
  ArrowLeftRight,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";

const Input = ({ trip }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-3 mb-2">
        {/* from */}
        <div className="p-2 md:p-3 rounded-xl w-fit hover:border-gray-500 cursor-pointer border-gray-100 border relative flex-1">
          <label className="text-xs text-gray-500 mb-1 block">From</label>
          <input
            type="text"
            placeholder="Enter origin"
            className="w-full px-2 py-1 border-gray-200 rounded-lg focus:outline-none"
          />
        </div>
        {/*swap btn, hidden on mobilee */}
        <div className="hidden md:flex items-end justify-center pb-5">
          <button className="p-2 cursor-pointer border border-gray-100 rounded-full">
            <ArrowLeftRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
        {/* to */}
        <div className="border rounded-xl hover:border-gray-500 cursor-pointer border-gray-200 p-2 md:p-3 flex-1">
          <label className="text-xs text-gray-500 mb-1 block">To</label>
          <input
            type="text"
            placeholder="Enter destination"
            className="w-full px-2 py-1 rounded-lg focus:outline-none"
          />
        </div>
        {/* overall div for both depart and return */}
        <div className="md: border-gray-200 rounded-xl flex border">
          {/* depart date */}
          <div
            className={`p-2 md:p-3 hover:border-gray-500 hover:border ${
              trip === "round-trip" ? "hover:rounded-l-xl" : "rounded-xl"
            } cursor-pointer border-gray-200 /*flex-1*/`}
          >
            <label className="text-xs text-gray-500 mb-1 block">Depart</label>
            <div className="flex justify-between px-3 gap-1">
              <p className="py-1 text-center text-sm rounded-lg focus:outline-none">
                Sat, 06 Dec 2025
              </p>
              <div className="flex">
                <button className="p-1 rounded">
                  <ChevronLeft className="w-4 h-4 text-[#56cc1c]" />
                </button>
                <button className="p-1 rounded">
                  <ChevronRight className="w-4 h-4 text-[#56cc1c]" />
                </button>
              </div>
            </div>
          </div>
          {/* return date */}
          <div
            className={`border-l focus:outline-none ${
              trip === "round-trip" ? "block" : "hidden"
            } p-3 rounded- hover:border-gray-500 hover:border hover:rounded-r-xl cursor-pointer border-gray-200 /*flex-1*/`}
          >
            {/* <label className="text-xs text-gray-500 mb-1 block">Return</label> */}
            <input
              type="text"
              placeholder="Return"
              className="w-full px-2 py-1 mt-5 text-sm focus:outline-none"
            />
          </div>
        </div>
      </div>
      {/* extra for multicity */}
      <div
        className={`${
          trip === "multi-city" ? "block" : "hidden"
        } flex flex-col md:flex-row gap-3 mb-2`}
      >
        {/* from */}
        <div className="p-2 md:p-3 rounded-xl hover:border-gray-500 cursor-pointer border-gray-100 border relative flex-1">
          <label className="text-xs text-gray-500 mb-1 block">From</label>
          <input
            type="text"
            placeholder="Enter origin"
            className="w-full px-2 py-1 border-gray-200 rounded-lg focus:outline-none"
          />
        </div>

        {/*swap btn, hidden on mobilee */}
        <div className="hidden md:flex items-end justify-center pb-5">
          <button className="p-2 cursor-pointer border border-gray-100 rounded-full">
            <ArrowLeftRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        {/* to */}
        <div className="border rounded-xl hover:border-gray-500 cursor-pointer border-gray-200 p-2 md:p-3 flex-1">
          <label className="text-xs text-gray-500 mb-1 block">To</label>
          <input
            type="text"
            placeholder="Enter destination"
            className="w-full px-2 py-1 rounded-lg focus:outline-none"
          />
        </div>

        {/* depart date */}
        <div className="border p-2 md:p-3 w-fit hover:border-gray-500 cursor-pointer rounded-xl border-gray-200">
          <label className="text-xs text-gray-500 mb-1 block">Depart</label>
          <div className="flex justify-between px-3 gap-1">
            <p className="py-1 text-center text-sm rounded-lg focus:outline-none">
              Sat, 06 Dec 2025
            </p>
            <div className="flex">
              <button className="p-1 rounded">
                <ChevronLeft className="w-4 h-4 text-[#56cc1c]" />
              </button>
              <button className="p-1 rounded">
                <ChevronRight className="w-4 h-4 text-[#56cc1c]" />
              </button>
            </div>
          </div>
        </div>

        {/* return date */}
        <div
          className={`border ${
            trip === "round-trip" ? "block" : "hidden"
          } p-3 rounded-xl hover:border-gray-500 cursor-pointer border-gray-200 flex-1`}
        >
          <label className="text-xs text-gray-500 mb-1 block">Return</label>
          <input
            type="text"
            placeholder="Select return date"
            className="w-full px-2 py-1 text-sm rounded-lg focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
{
  /* from */
}

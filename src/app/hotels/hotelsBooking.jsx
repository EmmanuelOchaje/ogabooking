"use client";
import React, { useState } from "react";
import {
  ArrowLeftRight,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";

const HotelBooking = ({}) => {
  return (
    <div className="bg-white flex flex-col w-5xl mx-auto p-5 rounded-xl">
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          className="p-40 cursor-pointer rounded border-gray-300"
        />
        <h1 className="my-3 font-medium">Where do you want to stay?</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-3 mb-2">
        {/* from */}
        <div className="p-2 rounded-xl w-fit hover:border-black cursor-pointer border-gray-100 border relative flex-">
          <label className="text-xs text-gray-500 mb-1 block">
            Destination
          </label>
          <input
            type="text"
            placeholder="Abuja, Nigeria"
            className="w-full px-2 py- text-black font-bold border-gray-200 rounded-lg focus:outline-none"
          />
        </div>
        {/*swap btn, hidden on mobilee */}
        {/* overall div for both depart and return */}
        <div className="md: border-gray-200 rounded-xl flex border">
          {/* depart date */}
          <div
            className={`p-2 hover:border-black hover:border hover:rounded-l-xl "rounded-xl"
             cursor-pointer border-gray-200 /*flex-1*/`}
          >
            <label className="text-xs text-gray-500 mb-1 block">Check In</label>
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
            className={`border-l focus:outline-none 
              "block" "hidden" p-2 rounded- hover:border-black hover:border hover:rounded-r-xl cursor-pointer border-gray-200`}
          >
            <label className="text-xs text-gray-500 mb-1 block">
              Check Out
            </label>
            <div className="flex justify-between px-3 gap-1">
              <p className="py-1 text-center text-sm rounded-lg focus:outline-none">
                Sat, 07 Dec 2025
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
        </div>
        {/* to */}
        <div className="border rounded-xl hover:border-black cursor-pointer border-gray-200 p-2 flex-1">
          <label className="text-xs text-gray-500 mb-1 block">
            Guest & Rooms
          </label>
          <select className="px-4 py-2 cursor-pointer text-sm w-full border-gray-200 rounded-lg focus:outline-none">
            <option>2 Adults in 1 Room</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-2 gap-3 md:items-center md:justify-between">
        {/* direct flight */}
        <div className="flex items-center">
          <label className="flex items-center gap-1 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 cursor-pointer rounded mx-1 border-gray-300"
            />
            <span className="text-sm text-gray-700">Free cancellation</span>
          </label>
        </div>

        {/* dropdowns  */}
        <div className="flex flex-col cursor-pointer md:flex-row items-stretch md:items-center">
          <button className="px-6 text-sm cursor-pointer py-2 bg-lime-500 text-white rounded-full font-semibold flex items-center justify-center gap-2 transition-colors shadow-lg">
            <Search className="w-5 h-5" />
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelBooking;

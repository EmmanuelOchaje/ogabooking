"use client";
import React, { useState } from "react";
import {
  ArrowLeftRight,
  ChevronLeft,
  ChevronRight,
  Search,
} from "lucide-react";

const CarBooking = ({}) => {
  return (
    <div className="bg-white flex flex-col w-5xl mx-auto p-5 rounded-xl">
      <div className="flex gap-2 items-center">
        <input
          type="checkbox"
          className="p-4 w-4 h-4 cursor-pointer rounded border-gray-300"
        />
        <h1 className="my-3 font-normal">
          Drop Off car at a different Location
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-3 mb-2">
        {/* from */}
        <div className="p-2 rounded-xl w-fit hover:border-gray-400 flex-1 cursor-pointer border-gray-200 border relative">
          <label className="text-xs mx-2 text-gray-500 mb-1">
            Pick-up and drop-off at different location
          </label>
          <input
            type="text"
            placeholder="Search Location..."
            className="w-full px-2 text-black font-bold border-gray-200 rounded-lg focus:outline-none"
          />
        </div>
        {/* overall div for both depart and return */}
        <div className="border-transparent flex border">
          {/* pick-up date */}
          <div
            className={`py-2 hover:border-gray-400 border rounded-l-xl hover:rounded-l-xl
             cursor-pointer border-gray-200`}
          >
            <label className="text-xs mx-3 text-gray-500 mb-1 block">
              Pick-up Date
            </label>
            <div className="flex justify-between px-3 gap-1">
              <p className="py-1 text-center text-sm font-medium rounded-lg focus:outline-none">
                Sat, 06 Dec
              </p>
            </div>
          </div>
          {/* return date */}
          <div
            className={`border-l focus:outline-none py-2 rounded-r-xl border hover:border-gray-400 hover:border hover:rounded-r-xl cursor-pointer border-gray-200`}
          >
            <label className="text-xs mx-3 text-gray-500 mb-1 block">
              Time
            </label>
            <div className="flex justify-between px-3 gap-1">
              <p className="py-1 text-center text-sm font-medium rounded-lg focus:outline-none">
                10:00pm
              </p>
            </div>
          </div>
        </div>
        {/* drop off date */}
        <div className="md: border-transparent rounded-xl flex w-fit border">
          <div
            className="
      p-2 border border-gray-200 rounded-l-xl
      cursor-pointer
      hover:border-gray-400
    "
          >
            <label className="text-xs mx-1 text-gray-500 mb-1 block">
              Drop-off Date
            </label>
            <div className="flex justify-between px-1 gap-1">
              <p className="py-1 text-center text-sm font-medium rounded-lg focus:outline-none">
                Sat, 06 Dec
              </p>
            </div>
          </div>

          {/* return date */}
          <div
            className="
      p-2 border border-gray-200 border-l rounded-r-xl
      cursor-pointer
      hover:border-gray-400
    "
          >
            <label className="text-xs text-gray-500 mb-1 block">Time</label>
            <div className="flex justify-between gap-1">
              <p className="py-1 text-center text-sm font-medium rounded-lg focus:outline-none">
                10:00pm
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-2 gap-3 md:items-center md:justify-between">
        {/* direct flight */}
        <div className="flex items-center">
          <label className="flex items-center font-normal gap-1 cursor-pointer">
            <input
              type="checkbox"
              className="w-4 h-4 cursor-pointer rounded mx-1 border-gray-300"
            />
            <p className="text-md font-normal text-black">
              Driver aged between 30 - 69
            </p>
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

export default CarBooking;

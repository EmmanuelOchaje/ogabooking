"use client";
import Image from "next/image";
import Link from "next/link";
import nig from "../../images/flag.png";
import plane from "../../images/plane.png";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-14 py-4">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="flex items-center">
            <Link
              href=""
              className={`text-xl lg:text-3xl font-extrabold font-ptserif ${
                scrolled ? "text-gray-600" : "text-white"
              }`}
            >
              ogabooking
            </Link>
            <div className="bg-lime-400 rounded-lg border-2 border-[#308806] p-1 mb-3 lg:mb-5">
              <Image src={plane} className="w-2 lg:w-3" alt="" />
            </div>
          </div>

          {/* desktop */}
          <div className="hidden text-sm font-semibold lg:flex items-center gap-6">
            <div
              className={`flex items-center gap-4 ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              <Image
                src={nig}
                className="w-5 h-3 cursor-pointer"
                alt="Nigerian flag"
              />
              <span className="cursor-pointer border-r-2 border-l-2 px-2">
                EN
              </span>
              <span className="cursor-pointer">NGN</span>
            </div>
            <button
              className={`cursor-pointer ${
                scrolled ? "text-gray-700" : "text-white"
              }`}
            >
              Support
            </button>
            <button
              className={`${
                scrolled ? "text-gray-700" : "text-white"
              } cursor-pointer`}
            >
              My Trips
            </button>
            <button
              className={`px-6 py-2 border-2 cursor-pointer rounded-full ${
                scrolled
                  ? "border-gray-700 text-gray-600"
                  : "border-white text-white"
              }`}
            >
              Login
            </button>
          </div>

          {/* mobile  */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden ${scrolled ? "text-gray-700" : "text-white"}`}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
        {/* mobile*/}
        {mobileMenuOpen && (
          <div
            className={`lg:hidden ${
              scrolled ? "bg-white" : "bg-transparent backdrop-blur-lg"
            }`}
          >
            <div className="px-4 py-6 space-y-4">
              <div className="flex items-center gap-4">
                <Image src={nig} className="w-5 h-3" alt="Nigerian flag" />
                <span className={scrolled ? "text-gray-700" : "text-white"}>
                  EN
                </span>
                <span className={scrolled ? "text-gray-700" : "text-white"}>
                  NGN
                </span>
              </div>
              <button
                className={`w-full text-left ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                Support
              </button>
              <button
                className={`w-full text-left ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                My Trips
              </button>
              <button
                className={`w-full px-6 py-3 rounded-full ${
                  scrolled
                    ? "border-gray-700 text-gray-600"
                    : "bg-[#7ccf00] [#44b50b] text-white"
                }`}
              >
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

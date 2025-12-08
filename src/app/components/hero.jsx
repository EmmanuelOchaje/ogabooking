"use client";
import React from "react";
import TabNav from "./tabNav";
import TripSelector from "./tripSelector";
import Status from "./status";

const Hero = ({}) => {
  return (
    <div
      className="pt-25 pb-6 inset-0 z-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000")',
      }}
    >
      <TabNav />
      <TripSelector />
      <Status />
    </div>
  );
};

export default Hero;

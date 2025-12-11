"use client";
import React, { useState } from "react";
import TabNav from "./tabNav";
import TripSelector from "./tripSelector";
import Status from "./status";
import Hotels from "../hotels/hotelsBooking";

const Hero = ({}) => {
  const [clicked, setClicked] = useState("flights");
  return (
    <div
      className="pt-25 pb-10 inset-0 z-0 bg-cover bg-fixed bg-no-repeat"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000")',
      }}
    >
      <TabNav clicked={clicked} setClicked={setClicked} />
      {clicked === "flights" ? <TripSelector /> : <Hotels />}
      {/* <Status /> */}
    </div>
  );
};

export default Hero;

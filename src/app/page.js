"use client";
import Image from "next/image";
import Navbar from "./components/navbar";
import { useState } from "react";
import Hero from "./components/hero";
import { Features } from "./components/features";
import Stories from "./components/stories";
import AirPartners from "./components/airPartners";
import Download from "./components/download";
import FlightLinks from "./components/flightLinks";
import Footer from "./components/footer";
import Destinations from "./components/destinations";
import Status from "./components/status";

export default function Home() {
  return (
    <div className="font-geist">
      <Navbar />
      <Hero />
      <Status />
      <Features />
      <Stories />
      <AirPartners />
      <Destinations />
      <Download />
      <FlightLinks />
      <Footer />
      {/*
       */}
    </div>
  );
}

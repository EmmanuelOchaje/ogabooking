import Navbar from "../components/navbar";
import TabNav from "../components/tabNav";
import { Features } from "../components/features";
import Stories from "../components/stories";
import AirPartners from "../components/airPartners";
import Download from "../components/download";
import Destinations from "../components/destinations";
import FlightLinks from "../components/flightLinks";
import Footer from "../components/footer";
import HotelBooking from "../components/hotels";
import Status from "../components/status";
import PopularHotels from "./popularhotels";
import HotelsInTopCities from "./hotelsInTopCities";
import HotelsInTopCountries from "./hotelsInTopCountries";

export default function HotelsPage() {
  return (
    <div className="min-h-screen relative font-geist">
      {/* Background Image */}
      <div
        className="h-[450px] pt-25 pb-6 inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000")',
        }}
      >
        {/* Content */}
        <Navbar />

        <TabNav />
        <HotelBooking />
      </div>
      <Status />
      <Features />
      <Stories />
      <PopularHotels />
      {/* <AirPartners /> */}
      <HotelsInTopCities />
      <Download />
      <Destinations />
      <HotelsInTopCountries />
      {/* <FlightLinks /> */}
      <Footer />
    </div>
  );
}

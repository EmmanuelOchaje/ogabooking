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

export default function CarRentalsPage() {
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
        {/* <div className="absolute inset-0 bg-gradient-to-br from-emerald-700/80 via-emerald-600/70 to-teal-700/80"></div> */}

        {/* Content */}
        <Navbar />

        {/* <main className="container mx-auto px-4 py-32"> 
        </main>
        */}
        <TabNav />
        <HotelBooking />
      </div>
      {/* <div className="relative z-10"></div> */}
      <Status />
      <Features />
      <Stories />
      <AirPartners />
      <Download />
      <Destinations />
      <FlightLinks />
      <Footer />
    </div>
  );
}

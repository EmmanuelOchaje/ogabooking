import Navbar from "../components/navbar";
import TabNav from "../components/tabNav";
import { Features } from "../components/features";
import Stories from "../components/stories";
import Download from "../components/download";
import Destinations from "../components/destinations";
import Footer from "../components/footer";
import Status from "../components/status";
import PopularHotels from "./popularhotels";
import HotelsInTopCities from "./hotelsInTopCities";
import HotelsInTopCountries from "./hotelsInTopCountries";
import HotelBooking from "./hotelsBooking";

export default function HotelsPage() {
  return (
    <div className="min-h-screen relative font-geist">
      {/* Background img */}
      <div
        className="pt-25 pb-10 inset-0 z-0 bg-cover bg-fixed bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000")',
        }}
      >
        <Navbar />
        <TabNav />
        <HotelBooking />
      </div>
      <Status />
      <Features />
      <Stories />
      <PopularHotels />
      <HotelsInTopCities />
      <Download />
      <Destinations />
      <HotelsInTopCountries />
      <Footer />
    </div>
  );
}

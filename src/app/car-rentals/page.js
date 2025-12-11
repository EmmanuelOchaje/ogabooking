import Navbar from "../components/navbar";
import TabNav from "../components/tabNav";
import Download from "../components/download";
import Footer from "../components/footer";
import Status from "../components/status";
import CarBooking from "./carBooking";
import CarRentalPartners from "./carPartners";

export default function CarRentalsPage() {
  return (
    <div className="min-h-screen relative font-geist">
      {/* Background img */}
      <div
        className=" pt-25 pb-10 inset-0 z-0 bg-fixed bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000")',
        }}
      >
        <Navbar />
        <TabNav />
        <CarBooking />
      </div>
      <Status />
      <CarRentalPartners />
      <Download />
      <Footer />
    </div>
  );
}

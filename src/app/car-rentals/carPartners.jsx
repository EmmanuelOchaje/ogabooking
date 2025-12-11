import europcar from "../../images/europcar.png";
import sixt from "../../images/sixt.png";
import national from "../../images/national.png";
import hertz from "../../images/hertz.png";
import alamo from "../../images/alamo.png";
import enterprise from "../../images/enterprise.png";
import Image from "next/image";

export default function CarRentalPartners() {
  const partners = [
    {
      name: "Europcar",
      logo: europcar,
    },
    {
      name: "Hertz",
      logo: hertz,
    },
    {
      name: "Sixt",
      logo: sixt,
    },
    {
      name: "Alamo",
      logo: alamo,
    },
    {
      name: "Enterprise",
      logo: enterprise,
    },
    {
      name: "National",
      logo: national,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-20 pt-15">
      {/* partners */}
      <div className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-3">
            <h2 className="text-xl font-bold mb-3 text-gray-900">
              Our Car Rental Partners
            </h2>
            <p className="text-md text-gray-600">
              Get the best car rental deals with our partners
            </p>
          </div>

          <div className="lg:col-span-9">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 items-center">
              {partners.map((partner, index) => (
                <div key={index} className="flex items-center justify-center">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    className="w-30 object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

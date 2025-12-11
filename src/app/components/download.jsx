import { Check } from "lucide-react";
import Image from "next/image";
import download from "../../images/download.png";
import google from "../../images/google.png";
import apple from "../../images/apple.png";
import qr from "../../images/qr.png";

export default function Download() {
  const features = [
    {
      text: "Search, compare & book the best flight and hotel deals, all in one app.",
    },
    {
      text: "Save more with in-app promo codes. Pick the cheapest day to fly with the ogabooking Fare Calendar.",
    },
    {
      text: "Travel with confidence: fast checkout and 24/7 support via chat, WhatsApp, phone, and email.",
    },
  ];

  return (
    <div className="bg-white py-4 md:py-12 lg:py-8 px-4 md:px-4 lg:px-40">
      <div className="container mx-auto max-w-7xl">
        {/* main content */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0">
          {/* left */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src={download}
              alt="ogabooking App"
              className="w-64 md:w-80 lg:w-full h-full object-contain"
            />
          </div>

          {/* right */}
          <div className="w-full lg:w-1/2 h-11/12 bg-[#f1f1f1] py-6 md:py-8 lg:py-12.5 px-6 md:px-8 lg:px-10">
            <div className="mb-6">
              <h2 className="text-lg md:text-md lg:text-xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
                Unlock the Best Travel Deals in the Universe with the ogabooking
                App
              </h2>

              {/* features */}
              <div className="space-y-3 md:space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="shrink-0 mt-1">
                      <div className="w-5 h-5 bg-lime-500 rounded-full flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                      {feature.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* download */}
            <div>
              <p className="text-gray-900 font-semibold text-center md:text-start mb-4 text-sm md:text-base">
                Scan to download
              </p>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                {/* qr */}
                <div className="shrink-0">
                  <Image
                    src={qr}
                    alt="QR Code"
                    className="w-24 h-24 md:w-32 md:h-32 p-2 md:p-3 border-2 border-gray-200 rounded-lg"
                  />
                </div>

                {/* download btn */}
                <div className="flex flex-col gap-3 w-full md:w-auto">
                  <a href="#" className="block transition-opacity">
                    <Image
                      src={google}
                      alt="Get it on Google Play"
                      className="h-10 md:h-12 w-full md:w-auto object-contain rounded-xl"
                    />
                  </a>
                  <a href="#" className="block transition-opacity">
                    <Image
                      src={apple}
                      alt="Download on the App Store"
                      className="h-10 md:h-12 w-full md:w-auto object-contain rounded-xl"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

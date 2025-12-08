import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const companyLinks = [
    { name: "About Ogabooking", url: "nothing yet" },
    { name: "Press", url: "nothing yet" },
    { name: "Careers", url: "nothing yet" },
    { name: "Contact Us", url: "nothing yet" },
  ];

  const learnMoreLinks = [
    { name: "Book on Ogabooking", url: "nothing yet" },
    { name: "OgabookingPro Business Travel", url: "nothing yet", badge: "NEW" },
    { name: "Affiliates", url: "nothing yet" },
    { name: "Advertise", url: "nothing yet" },
    { name: "Hoteliers", url: "nothing yet" },
    { name: "Data Privacy Policy", url: "nothing yet" },
    { name: "Terms", url: "nothing yet" },
  ];

  const exploreLinks = [
    { name: "Flights Promo Code", url: "nothing yet" },
    { name: "Hotels Promo Code", url: "nothing yet" },
    { name: "Airport Directory", url: "nothing yet" },
    { name: "Airlines Directory", url: "nothing yet" },
    { name: "Flight Schedules", url: "nothing yet" },
    { name: "Hotel Chains", url: "nothing yet" },
  ];

  const downloadLinks = [
    { name: "Ogabooking App (iOS)", url: "nothing yet" },
    { name: "Ogabooking App (Android)", url: "nothing yet" },
  ];

  const socialLinks = [
    { icon: Facebook, url: "nothing yet", label: "Facebook" },
    { icon: Twitter, url: "nothing yet", label: "Twitter" },
    { icon: Instagram, url: "nothing yet", label: "Instagram" },
    { icon: Linkedin, url: "nothing yet", label: "LinkedIn" },
    {
      icon: () => (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      ),
      url: "#",
      label: "TikTok",
    },
  ];

  return (
    <footer className="bg-black md:px-40 text-white">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center mb-12">
          {/* Company Column */}
          <div>
            <h3 className="text-sm font-bold mb-4">COMPANY</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-white transition-colors text-xs"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn More Column */}
          <div>
            <h3 className="text-sm font-bold mb-4">LEARN MORE</h3>
            <ul className="space-y-3">
              {learnMoreLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-white transition-colors text-xs inline-flex items-center gap-2"
                  >
                    {link.name}
                    {link.badge && (
                      <span className="bg-orange-500 text-white text-xs font-bold px-1 py-0.5 rounded">
                        {link.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Column */}
          <div>
            <h3 className="text-sm font-bold mb-4">EXPLORE</h3>
            <ul className="space-y-3">
              {exploreLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-white transition-colors text-xs"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Download Column */}
          <div>
            <h3 className="text-sm font-bold mb-4">DOWNLOAD</h3>
            <ul className="space-y-3">
              {downloadLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-white transition-colors text-xs"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-xs text-white text-center md:text-left">
              <p>Copyright ©2025 Ogabooking Pte Ltd. All Rights Reserved</p>
              <p>
                Site Operator: Ogabooking Pte. Ltd. Travel License No. 03513
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  aria-label={social.label}
                  className="text-white hover:text-white transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

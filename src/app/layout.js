import { PT_Serif, Geist } from "next/font/google";
import "./globals.css";

const ptSerif = PT_Serif({
  variable: "--font-pt-serif",
  subsets: ["latin"],
  weight: ["700"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ptSerif.variable} ${geist.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

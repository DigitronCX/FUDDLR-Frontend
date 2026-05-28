import type { Metadata } from "next";
import { Poppins, Young_Serif, Unbounded } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import JumpToTop from "@/components/JumpToTop";

const youngSerif = Young_Serif({
  variable: "--font-youngSerif",
  subsets: ["latin"],
  weight: "400",
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});
const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "FUDDLR Distribution",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${youngSerif.variable} ${unbounded.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="font-poppins min-h-full flex flex-col">
        <Navbar />
        {children}
        <JumpToTop />
        <Footer />
      </body>
    </html>
  );
}

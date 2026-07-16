import { IconCircleCheck } from "@tabler/icons-react";
import Image from "next/image";

const data = [
  {
    title: "Competitive wholesale pricing",
    description: "Access competitive wholesale pricing designed to maximise margins while staying competitive in today’s retail market.",
    icon: IconCircleCheck
  },
  {
    title: "Curated premium brands",
    description: "Stock carefully selected premium pet brands that attract customers, build trust, and drive repeat purchases.",
    icon: IconCircleCheck
  },
  {
    title: "Easy bulk ordering",
    description: "Place bulk orders quickly through a simple, efficient platform built for seamless wholesale purchasing experience.",
    icon: IconCircleCheck
  }
]
export default function RetailersCTA() {
  return (
    <section className="bg-accent border-3 border-accent/50 rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">

      {/* Left Content */}
      <div className="flex flex-col items-start ">
        <h2 className="text-4xl md:text-7xl text-background font-youngSerif mb-4">
          Retailers
        </h2>

        <p className="text-2xl md:text-4xl text-background font-youngSerif mb-8">
          Start stocking our brands today.
        </p>

        <div className="space-y-6">
          {/* Item */}
          {
            data.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="text-background text-xl">
                  <item.icon className="size-8" />
                </div>
                <div className="w-full flex flex-col justify-center items-start">
                  <h4 className="text-2xl font-youngSerif text-background">{item.title}</h4>
                  <p className="text-background text-sm text-left max-w-2xl">{item.description}</p>
                </div>
              </div>
            ))
          }
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-green-700 transition">
            Apply to Stock Our Brands
          </button>

          <button className="border border-background px-6 py-3 rounded-full hover:bg-gray-100 transition text-white">
            Explore Products
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="absolute right-0">
        <Image
          src="/Sections/Cta.png"
          alt="Retailer"
          width={400}
          height={400}
          className="w-[320px] md:w-[400px] object-contain"
        />
      </div>
    </section>
  );
}
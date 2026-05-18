// components/BrandsSection.jsx

import { IconCircleCheck } from "@tabler/icons-react";
import Image from "next/image";

const data = [
    {
        title: "Access to retailer network",
        description: "Get your products stocked by trusted retailers across Australia through our growing distribution network.",
        icon: IconCircleCheck
    },
    {
        title: "Sales & distribution support",
        description: "We manage sales, logistics, and retailer relationships to help your brand scale.",
        icon: IconCircleCheck
    },
]
export default function BrandCTA() {
    return (
        <section className="bg-accent border-3 border-accent/50 rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">

            {/* Left Content */}
            <div className="flex flex-col items-start">
                <h2 className="text-4xl md:text-7xl text-background font-youngSerif mb-4">
                    Brands
                </h2>

                <p className="text-2xl md:text-4xl text-left text-background font-youngSerif mb-8">
                    Partner with FUDDLR for Wider Distribution.
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
                    <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-brand/90 transition">
                        Brands Apply Here
                    </button>
                </div>
            </div>

            {/* Right Image */}
            <div className="relative">
                <Image
                    src="/Sections/BrandCTA.png"
                    alt="Retailer"
                    width={400}
                    height={400}
                    className="w-[320px] md:w-[400px] object-contain"
                />
            </div>
        </section>
    );
}
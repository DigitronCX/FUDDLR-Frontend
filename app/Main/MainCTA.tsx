"use client";
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
export default function MainCTA() {
    return (
        <section className="m-14 bg-accent border-3 border-accent/50 rounded-2xl p-8 md:p-12 shadow-2xl grid grid-cols-[1fr_1.5fr] items-center justify-between gap-10">

            {/* Left Content */}
            <div className="relative flex-1" >
                <Image
                    src="/Sections/Steps.png"
                    alt="Retailer"
                    width={400}
                    height={400}
                    className="w-[300px] md:w-[320px] object-contain"
                />
            </div>

            {/* Right Image */}
            <div className="flex flex-col flex-2 items-start">
                <h2 className="text-4xl md:text-5xl text-background font-youngSerif mb-4">
                    Your Complete Wholesale hub for pet supplies
                </h2>
                {/* <p>
                    Reach out and lets discuss how can we support your business.
                </p> */}

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

        </section>
    );
}
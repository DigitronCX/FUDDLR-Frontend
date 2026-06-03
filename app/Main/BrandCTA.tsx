// components/BrandsSection.jsx
import { IconCircleCheck } from "@tabler/icons-react";
import Image from "next/image";

const data = [
    {
        title: "Access to retailer network",
        description: "Get your products stocked by trusted retailers across Australia through our growing distribution network",
        icon: IconCircleCheck
    },
    {
        title: "Sales & distribution support",
        description: "We manage sales, logistics, and retailer relationships to help your brand scale efficiently nationwide.",
        icon: IconCircleCheck
    },
    {
        title: "Australia-wide reach",
        description: "Expand beyond local markets and reach customers nationwide with our scalable distribution and retail network.",
        icon: IconCircleCheck
    },
]
export default function BrandCTA() {
    return (

        <section className="md:mx-14 mx-4 md:my-20 my-8 bg-accent border-3 border-[#034769] rounded-2xl md:rounded-4xl p-8 shadow-2xl">
            <div className="mb-5 md:mb-1">
                <h2 className="text-4xl md:text-7xl text-background font-youngSerif mb-4">
                    Brands
                </h2>

                <p className="text-2xl md:text-4xl text-left text-background font-youngSerif ">
                    Partner with FUDDLR for Wider Distribution
                </p>
            </div>
            {/* <div className="flex flex-col lg:flex-row items-center justify-between gap-1 h-full"> */}
            <div className="grid lg:grid-cols-[1.2fr_0.5fr] grid-cols-1 items-center justify-between gap-1 h-full">
                {/* Left Content */}
                <div className="flex flex-col gap-8 items-stretch justify-center h-full">

                    {/* Item */}
                    {
                        data.map((item, index) => (
                            <div key={index} className="flex flex-row items-center gap-4">
                                <div className="text-background text-xl">
                                    <item.icon className="size-8" />
                                </div>
                                <div className="w-full flex flex-col justify-center items-start">
                                    <h4 className="text-lg sm:text-2xl font-youngSerif text-background">{item.title}</h4>
                                    <p className="text-background text-xs sm:text-sm text-left max-w-2xl">{item.description}</p>
                                </div>
                            </div>
                        ))
                    }

                    <div className="hidden md:flex gap-4">
                        <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-brand/90 transition">
                            Brands Apply Here
                        </button>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative mx-auto">
                    <Image
                        src="/Sections/BrandCTA.png"
                        alt="Retailer"
                        width={600}
                        height={600}
                        // className="w-[320px] md:w-[320px] 2xl:w-full object-contain"
                        className="w-full object-contain"
                    />
                </div>
            </div>

            <div className="flex md:hidden gap-4">
                <button className="bg-primary text-white px-6 py-3 rounded-full hover:bg-brand/90 transition text-xs md:text-base">
                    Brands Apply Here
                </button>
            </div>
        </section>
    );
}
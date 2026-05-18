import { IconBuildingStore, IconCheck, IconCurrencyDollar } from "@tabler/icons-react";
import Image from "next/image";

const cardsData = [
    {
        icon: IconCurrencyDollar,
        title: "Competitive Wholesale Pricing",
        description: "Maximize margins while remaining competitive & attractive.",
    },
    {
        icon: IconBuildingStore,
        title: "Active In-Store Advocacy",
        description: "Engage retailers in-person to educate, promote & place your products effect.",
    },
    {
        icon: IconCheck,
        title: "Tailored Brand Support",
        description: "Sales consulting & brand-building services (POA) to strengthen market positioning.",
    }
]
export default function SectionFuddlerBrands() {
    return (
        <section className="relative py-10 sm:py-20 px-4 sm:px-6 lg:px-16 overflow-hidden">
            <div className="flex flex-col-reverse lg:flex-row justify-between gap-12 items-center relative z-10">

                {/* LEFT CONTENT */}
                <div className="w-full flex-2">
                    <p className="text-xs sm:text-sm tracking-[0.25em] text-gray-500 mb-4">
                        GROW YOUR BRAND WITH FUDDLR
                    </p>

                    <h2 className="text-3xl lg:text-5xl font-youngSerif text-gray-800 mb-2">
                        <span className="text-brand">FUDDLR</span> For Brands
                    </h2>

                    <p className="text-primary leading-relaxed mb-10 text-sm sm:text-base">
                        Every brand we consider is evaluated based on product integrity, market fit, and growth opportunity within our retail network. Our focus is on building a portfolio that retailers trust and customers return to.
                    </p>

                    {/* CARDS */}
                    <div className="grid sm:grid-cols-3 gap-2 mb-2 w-full ">
                        {
                            cardsData.map((data, index) => (
                                <div className="bg-[#f6ffe6] w-full rounded-2xl px-4 py-6" key={index}>
                                    <div className="flex justify-center md:justify-end mb-4">
                                        <div className="text-brand size-10 flex items-center justify-center">
                                            <data.icon className="size-8" />
                                        </div>
                                    </div>
                                    <h3 className="font-youngSerif text-lg sm:text-xl text-secondary mb-2">
                                        {data.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-secondary">
                                        {data.description}
                                    </p>
                                </div>
                            ))
                        }
                    </div>

                    {/* NOTE */}
                    <div className="bg-[#f6ffe6] rounded-xl px-6 py-4 flex items-center gap-3 mb-8">
                        <p className="text-secondary text-sm sm:text-lg">
                            Additional services are offered on a tailored, POA basis where required.
                        </p>
                    </div>

                    {/* BUTTON */}
                    <button className="px-8 text-sm sm:text-sm sm:px-8 py-2 sm:py-4 font-medium bg-brand rounded-4xl cursor-pointer border border-transparent text-white hover:border-brand/80 hover:text-white transition-colors">
                        BRANDS APPLY HERE
                    </button>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative flex justify-center lg:justify-end flex-1">
                    <div className="bg-brand rounded-3xl p-2">
                        <Image
                            width={400}
                            height={400}
                            src="/Sections/Brands.png"
                            alt="Products"
                            className="w-[400px] object-contain"
                        />
                    </div>
                </div>
            </div>

        </section>
    );
}
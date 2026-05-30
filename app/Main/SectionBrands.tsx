import { IconBuildingStore, IconCheck, IconCurrencyDollar } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const cardsData = [
    {
        icon: IconCurrencyDollar,
        title: "Competitive Wholesale Pricing",
        description: "Maximise margins while remaining competitive & attractive.",
    },
    {
        icon: IconBuildingStore,
        title: "Active In Store Advocacy",
        description: "Engage retailers in person to educate, promote & place.",
    },
    {
        icon: IconCheck,
        title: "Tailored Brand Building",
        description: "Sales consulting & brand building services (POA) to strengthen market positioning.",
    }
]
export default function SectionFuddlerBrands() {
    return (
        <section className="relative py-10 sm:py-20 px-4 sm:px-6 lg:px-16 overflow-hidden">
            <div className="flex flex-col-reverse lg:flex-row justify-between gap-12 items-center relative z-10">

                <div className="w-full flex-2">
                    <p className="text-xs sm:text-sm tracking-[0.25em] text-gray-500 mb-4">
                        GROW YOUR BRAND WITH FUDDLR
                    </p>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-youngSerif text-gray-800 mb-2">
                        <span className="text-brand">FUDDLR </span> For Brands
                    </h2>

                    <p className="text-primary leading-relaxed mb-2 text-sm sm:text-base max-w-3xl">
                        Every brand we consider is evaluated based on product integrity, market fit, and growth opportunity within our retail network. Our focus is on building a portfolio that retailers trust and customers return to.
                    </p>

                    {/* <section className="grid bg-black lg:grid-cols-[2fr_1.1fr] items-start gap-2 w-full"> */}
                    <section className="mt-8 flex lg:flex-row flex-col justify-center items-center gap-2 w-full">
                        {/* LEFT CONTENT */}
                        <div className="flex-2 flex flex-col ">
                            {/* CARDS */}
                            <div className="grid sm:grid-cols-3 gap-2 mb-4 w-full h-full ">
                                {
                                    cardsData.map((data, index) => (
                                        <div className="bg-[#f6ffe6] w-full h-full rounded-2xl px-4 py-6 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-center items-center " key={index}>
                                            <div className="ml-auto flex justify-center md:justify-end mb-4">
                                                <div className="text-brand size-10 flex items-center justify-center">
                                                    <data.icon className="size-8" />
                                                </div>
                                            </div>
                                            <h3 className="font-youngSerif text-lg sm:text-xl text-secondary mb-2">
                                                {data.title}
                                            </h3>
                                            <p className="text-sm sm:text-sm text-secondary">
                                                {data.description}
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>

                            {/* NOTE */}
                            <div className="bg-[#f6ffe6] rounded-xl px-6 py-4 flex items-center gap-3">
                                <p className="text-secondary text-sm sm:text-lg">
                                    Additional services are offered on a tailored, POA basis where required.
                                </p>
                            </div>
                        </div>

                        {/* RIGHT IMAGE */}
                        <div className="md:mt-0 relative flex justify-center lg:justify-end flex-1 max-h-80 2xl:max-h-70 h-full">
                            {/* <div className="mt-8 md:mt-0 relative bg-black h-full"> */}
                            <div className="bg-brand w-full md:w-[80%] md:ml-15 h-[90%] rounded-3xl absolute inset-0 z-0 mt-2 " />
                            <div className="z-10 rounded-3xl relative top-0 w-full -mr-6">
                                <Image
                                    width={700}
                                    height={700}
                                    src="/Sections/FuddlrBrands.webp"
                                    alt="Products"
                                    className="h-full object-contain w-full scale-125"
                                />
                            </div>
                        </div>
                    </section>

                    {/* BUTTON */}
                    <div className="mt-8">
                        <Link
                            href="/contact-us"
                            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-brand border border-brand px-4 sm:px-6 lg:px-8 py-3 md:py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20"
                        >
                            <span
                                className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 ease-out group-hover:translate-y-0"
                            ></span>

                            <span
                                className="relative z-10 font-semibold text-white transition-colors duration-300 group-hover:text-brand text-xs sm:text-xs"
                            >
                                BRANDS APPLY HERE
                            </span>
                        </Link>
                    </div>
                </div>

            </div>

        </section>
    );
}
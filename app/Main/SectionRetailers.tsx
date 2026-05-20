import { IconArrowUpRight, IconCheck } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const features = [
    {
        title: "Trading Portal for Retailers",
        desc: "A simple, intuitive ordering portal that lets you browse.",
    },
    {
        title: "Access Wholesale Pricing",
        desc: "Access wholesale pricing designed to support healthy",
    },
    {
        title: "Low or No Bulky MOQ's",
        desc: "lexible order quantities that let you manage cash",
    },
];

export default function SectionRetailers() {
    return (
        <section className="relative bg-background py-10 sm:py-16 lg:py-20 overflow-hidden">

            {/* Background blobs (hide some on mobile) */}

            <div className="px-4 sm:px-8 lg:px-14 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center relative z-10">

                {/* IMAGE */}
                <div className="relative flex flex-col items-center justify-center order-1 lg:order-0">
                    <Image
                        // src="/Sections/Retailers.png"
                        src="/Sections/Retailers.png"
                        alt="FUDDLR"
                        width={700}
                        height={700}
                        className="w-[85%] sm:w-[70%] lg:w-[90%] h-auto drop-shadow-xl lg:-rotate-2 z-10"
                    />
                    {/* Glow */}
                    <div className="absolute top-0 left-10 h-32 sm:h-40 w-full bg-accent blur-2xl rounded-full opacity-30" />
                    <div className="absolute bottom-0 left-10 h-32 sm:h-40 w-full bg-accent blur-2xl rounded-full opacity-20" />
                </div>

                {/* CONTENT */}
                <div className="order-2 lg:order-0 text-center lg:text-left relative z-10">

                    <p className="text-[10px] sm:text-xs tracking-[0.25em] sm:tracking-[0.3em] text-primary mb-2 sm:mb-3 font-poppins">
                        BUILD FOR RETAILERS
                    </p>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-secondary mb-3 font-youngSerif leading-tight">
                        Your <span className="text-brand">Trusted</span> Wholesale <br /> Partner
                    </h2>

                    <p className="text-foreground mb-6 sm:mb-8 text-sm sm:text-sm max-w-xl mx-auto lg:mx-0">
                        Delivering quality products worldwide with dependable margins.
                    </p>

                    {/* Feature List */}
                    <div className="space-y-5 sm:space-y-4 mt-10 md:mt-0">
                        {features.map((item, i) => (
                            <div key={i} className="flex items-start gap-3 sm:gap-5 text-left">

                                <div className="bg-brand mt-1 rounded-full p-1 sm:p-px shrink-0">
                                    <IconCheck className="text-white size-3 sm:size-5" />
                                </div>

                                <div className="space-y-0 sm:space-y-2">
                                    <h4 className="text-base sm:text-sm text-secondary font-youngSerif font-light">
                                        {item.title}
                                    </h4>
                                    <p className="text-gray-600 text-sm sm:text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>

                            </div>
                        ))}
                    </div>
                    <Link
                        href="/contact-us"
                        className="group mt-5 relative inline-flex items-center justify-center overflow-hidden rounded-full bg-brand border border-brand px-4 sm:px-6 lg:px-14 py-3 md:py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20"
                    >
                        <span
                            className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 ease-out group-hover:translate-y-0"
                        ></span>

                        <span
                            className="relative z-10 font-semibold text-white transition-colors duration-300 group-hover:text-brand text-xs sm:text-xs flex gap-1 items-center"
                        >
                            Lets Begin <IconArrowUpRight className="size-4" />
                        </span>
                    </Link>
                    {/* <button className="mt-5 px-2 text-sm sm:text-base sm:px-10 flex gap-2 py-2 sm:py-2 bg-brand rounded-4xl cursor-pointer border-4 border-transparent text-white hover:border-brand/80 hover:text-white transition-colors z-20">
                        Lets Begin <IconArrowUpRight className="text-white" />
                    </button> */}
                </div>

            </div>
        </section>
    );
}
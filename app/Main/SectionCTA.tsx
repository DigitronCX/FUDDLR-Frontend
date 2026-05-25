"use client";

import Image from "next/image";
import Link from "next/link";
import { IconBuildingStore, IconCircleCheck } from "@tabler/icons-react";

export default function SectionCTA() {

    return (
        <section className="text-center py-10 md:py-16 px-4 sm:px-6 md:px-14">

            <h2 className="text-3xl sm:text-4xl md:text-5xl text-secondary font-semibold mb-4 font-youngSerif">
                Get Started On{" "}
                <span className="text-brand">FUDDLR</span> Now
            </h2>

            <p className="text-gray-600 max-w-xl mx-auto mb-8 text-sm sm:text-base">
                Getting started with FUDDLR is quick and easy. Simply sign up, explore our
                wide range of products
            </p>

            {/* Tabs */}
            {/* <div className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => setActiveTab("retailers")}
          className={`px-6 py-2 rounded-full border transition ${activeTab === "retailers"
            ? "bg-green-600 text-white border-green-600"
            : "border-green-600 text-green-600"
            }`}
        >
          For Retailers
        </button>

        <button
          onClick={() => setActiveTab("brands")}
          className={`px-6 py-2 rounded-full transition ${activeTab === "brands"
            ? "bg-green-600 text-white"
            : "bg-green-100 text-green-700"
            }`}
        >
          For Brands
        </button>
      </div> */}

            {/* Content Switch */}
            <section className="mx-auto grid gap-5 lg:grid-cols-2">
                {/* Retailers Card */}
                <div className="relative h-full overflow-hidden rounded-[28px] bg-[#dfe8e5] py-5 sm:px-8 px-4 group/image">
                    <div className="grid h-full items-center gap-4 md:grid-cols-[1fr_260px]">
                        {/* Content */}
                        <div className="max-w-md text-start">
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#00b67a] text-white">
                                {/* Store Icon */}
                                <IconBuildingStore className="h-7 w-7" />
                            </div>

                            <h2 className="font-youngSerif text-2xl sm:text-4xl leading-tight text-[#2c2c2c]">
                                For Retailers
                            </h2>

                            <p className="text-sm text-[#4a4a4a] mt-2">
                                Stock carefully selected premium pet
                                brands that attract customers, build
                                trust, and drives revenue.
                            </p>

                            <div className="mt-4 sm:mt-8 group/button">
                                <Link
                                    href="/contact-us"
                                    className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-brand border border-brand px-4 sm:px-6 lg:px-8 py-3 md:py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20"
                                >
                                    <span
                                        className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 ease-out group-hover/button:translate-y-0"
                                    ></span>

                                    <span
                                        className="relative z-10 font-semibold text-white transition-colors duration-300 group-hover/button:text-brand text-xs sm:text-xs"
                                    >
                                        Apply to Stock Our Brands
                                    </span>
                                </Link>
                            </div>
                            {/* <button className="mt-8 rounded-full bg-[#00b67a] px-7 py-3 text-xs font-medium text-white transition hover:bg-[#009f6a]">
                                Apply to Stock Our Brands
                            </button> */}
                        </div>

                        {/* Image */}
                        <div className="relative h-[200px] md:h-[330px] overflow-hidden rounded-[36px] group-hover/image:scale-105 transition-transform duration-500 ease-out">
                            <Image
                                src="/Sections/Retailers.webp"
                                alt="Dog treats"
                                className="relative z-10 object-contain"
                                width={1000}
                                height={1000}
                            /></div>
                    </div>
                </div>

                {/* Brands Card */}
                <div className="relative h-full overflow-hidden rounded-[28px] bg-[#ebe6f6] py-5 sm:px-8 px-4 group">
                    {/* Purple Shape */}
                    <div className="absolute bottom-[-140px] right-[-80px] h-[360px] w-[360px] rounded-full bg-[#b8a4f3]" />

                    <div className="relative grid h-fit items-center gap-4 md:grid-cols-[1fr_260px]">
                        {/* Content */}
                        <div className="text-start">
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#6c4ce4] text-white">
                                {/* Check Icon */}
                                <IconCircleCheck className="h-7 w-7" />
                            </div>

                            <h2 className="font-youngSerif text-2xl sm:text-4xl leading-tight text-[#2c2c2c]">
                                For Brands
                            </h2>

                            <p className="text-sm text-[#4a4a4a] mt-2">
                                We position your brand to sell through
                                compelling storytelling and strategic
                                retail partnerships.
                            </p>

                            {/* Button Group */}
                            <div className="mt-4 sm:mt-8 group/button">
                                <Link
                                    href="/contact-us"
                                    className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#5d3fd2] border border-[#5d3fd2] px-4 sm:px-6 lg:px-8 py-3 md:py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20"
                                >
                                    <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 ease-out group-hover/button:translate-y-0"></span>

                                    <span className="relative z-10 font-semibold text-white transition-colors duration-300 group-hover/button:text-[#5d3fd2] text-xs sm:text-xs">
                                        Apply for Distribution
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* Product Image */}
                        <div className="relative h-[200px] md:h-[330px] flex items-center justify-center group-hover:scale-105 transition-all duration-300">
                            <Image
                                src="/Sections/Brands.webp"
                                alt="Dog treats"
                                className="absolute -bottom-5 md:-bottom-15 left-4 z-10 object-contain h-48 md:h-full w-full scale-115"
                                width={1000}
                                height={1000}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* </main> */}
            {/* <div className="px-14">
        {activeTab === "retailers" && <RetailersCTA />}
        {activeTab === "brands" && <BrandCTA />}
      </div> */}
        </section>
    );
}
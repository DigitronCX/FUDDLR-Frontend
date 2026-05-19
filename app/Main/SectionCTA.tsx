"use client";

import { useState } from "react";
import BrandCTA from "./BrandCTA";
import RetailersCTA from "./RetailersCTA";
import Image from "next/image";
import Link from "next/link";

export default function SectionCTA() {
    const [activeTab, setActiveTab] = useState("brands");

    return (
        <section className="text-center py-16 px-6 md:px-14">

            <h2 className="text-4xl text-secondary md:text-5xl font-semibold mb-4 font-youngSerif">
                Get Started On{" "}
                <span className="text-brand">FUDDLR</span> Now
            </h2>

            <p className="text-gray-600 max-w-xl mx-auto mb-8">
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
            {/* <main className="min-h-screen bg-[#f5f5f5] px-6 py-16"> */}
            <section className="mx-auto grid gap-5 lg:grid-cols-2">
                {/* Retailers Card */}
                <div className="relative h-fit overflow-hidden rounded-[28px] bg-[#dfe8e5] py-5 sm:px-8 px-4">
                    <div className="grid h-full items-center gap-4 md:grid-cols-[1fr_260px]">
                        {/* Content */}
                        <div className="max-w-md text-start">
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#00b67a] text-white">
                                {/* Store Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-7 w-7"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 9l1.5-4.5A2 2 0 016.4 3h11.2a2 2 0 011.9 1.5L21 9m-18 0h18m-1 0v8a2 2 0 01-2 2H6a2 2 0 01-2-2V9m4 4h3m2 0h3"
                                    />
                                </svg>
                            </div>

                            <h2 className="font-youngSerif text-2xl sm:text-4xl leading-tight text-[#2c2c2c]">
                                For Retailers
                            </h2>

                            <p className="text-sm text-[#4a4a4a] mt-2">
                                Stock carefully selected premium pet
                                brands that attract customers, build
                                trust, and drives revenue.
                            </p>

                            <div className="mt-4 sm:mt-8">
                                <Link
                                    href="/contact-us"
                                    className=" group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-brand px-4 sm:px-6 lg:px-8 py-3 md:py-4 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <span
                                        className="absolute inset-0 translate-y-full bg-brand transition-transform duration-500 ease-out group-hover:translate-y-0"
                                    ></span>

                                    <span
                                        className="relative z-10 font-semibold text-brand transition-colors duration-300 group-hover:text-white text-xs sm:text-xs"
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
                        <div className="relative h-[200px] md:h-[330px] overflow-hidden rounded-[36px]">
                            <Image
                                src="/Sections/Cta-One.png"
                                alt="Dog treats"
                                className="relative z-10 object-contain"
                                width={1000}
                                height={1000}
                            /></div>
                    </div>
                </div>

                {/* Brands Card */}
                <div className="relative h-fit overflow-hidden rounded-[28px] bg-[#ebe6f6] py-5 sm:px-8 px-4">
                    {/* Purple Shape */}
                    <div className="absolute bottom-[-140px] right-[-80px] h-[360px] w-[360px] rounded-full bg-[#b8a4f3]" />

                    <div className="relative grid h-fit items-center gap-4 md:grid-cols-[1fr_260px]">
                        {/* Content */}
                        <div className="text-start">
                            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#6c4ce4] text-white">
                                {/* Check Icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-7 w-7"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 12l2 2 4-4m6 2A9 9 0 1112 3a9 9 0 019 9z"
                                    />
                                </svg>
                            </div>

                            <h2 className="font-youngSerif text-2xl sm:text-4xl leading-tight text-[#2c2c2c]">
                                For Brands
                            </h2>

                            <p className="text-sm text-[#4a4a4a] mt-2">
                                We position your brand to sell through
                                compelling storytelling and strategic
                                retail partnerships.
                            </p>
                            <div className="mt-4 sm:mt-8">
                                <Link
                                    href="/contact-us"
                                    className=" group relative inline-flex items-center justify-center overflow-hidden rounded-full border border-[#5d3fd2] px-4 sm:px-6 lg:px-8 py-3 md:py-4 transition-all duration-300 hover:-translate-y-1"
                                >
                                    <span
                                        className="absolute inset-0 translate-y-full bg-[#5d3fd2] transition-transform duration-500 ease-out group-hover:translate-y-0"
                                    ></span>

                                    <span
                                        className="relative z-10 font-semibold text-[#5d3fd2] transition-colors duration-300 group-hover:text-white text-xs sm:text-xs"
                                    >
                                        Apply for Distribution
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* Product Image */}
                        <div className="relative h-[200px] md:h-[330px] flex items-center justify-center">
                            <Image
                                src="/Sections/Cta-Two.png"
                                alt="Dog treats"
                                className="absolute -bottom-6 z-10 object-contain h-48 md:h-full"
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
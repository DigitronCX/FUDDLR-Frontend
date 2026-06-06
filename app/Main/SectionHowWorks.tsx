import Link from "next/link";

// app/components/HowItWorks.tsx
export default function SectionHowWorks() {
    const retailerFeatures = [
        {
            id: "1",
            title: "Competitive wholesale pricing",
            description:
                "Access wholesale pricing that maximises margins and keeps you competitive.",
        },
        {
            id: "2",
            title: "Curated premium brands",
            description:
                "Stock carefully selected premium pet brands that attract customers, build trust, and drive repeat purchases.",
        },
        {
            id: "3",
            title: "Easy bulk ordering",
            description:
                "Place bulk orders quickly through a simple, seamless wholesale platform.",
        },
    ];

    const brandFeatures = [
        {
            id: "1",
            title: "Access to retailer network",
            description: "Get your products stocked by trusted retailers globally through our growing distribution network.",
        },
        {
            id: "2",
            title: "Sales & distribution support",
            description: "We manage sales, logistics, and retailer relationships to help your brand scale efficiently.",
        },
        {
            id: "3",
            title: "Global wide reach",
            description: "Expand beyond local markets and reach customers worldwide with our scalable distribution and retail network",
        },
    ];

    return (
        <section className="px-6 sm:px-10 py-10 sm:py-16 lg:py-24">
            <div className="mx-auto sm:px-6">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-youngSerif text-[#2E2E2E]">
                        How It{" "}
                        <span className="text-emerald-500">
                            Works
                        </span>
                    </h2>
                </div>

                {/* Content */}
                <div className="relative mt-10 sm:mt-16 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-40">
                    {/* Divider */}
                    <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gray-300">
                        {/* <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-600">
                        </div>  */}
                    </div>

                    {/* Retailers */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white">
                                ⚙
                            </div>

                            <h3 className="text-2xl font-youngSerif sm:text-3xl text-[#2E2E2E]">
                                For Retailers
                            </h3>
                        </div>

                        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {retailerFeatures.map((item) => (
                                <div key={item.id} className="flex gap-2 items-start">
                                    <div className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs font-semibold text-white">
                                        {item.id}
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xs font-semibold text-[#2E2E2E]">
                                            {item.title}
                                        </h4>

                                        <p className="text-[10px] font-medium leading-[18px] text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 sm:mt-10 mx-auto">
                            <Link
                                href="/contact"
                                title="Apply to become a FUDDLR brand partner"
                                aria-label="Apply to become a FUDDLR brand partner"
                                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-brand border border-brand px-4 sm:px-4 lg:px-10 py-2 md:py-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20"
                            >
                                <span
                                    className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 ease-out group-hover:translate-y-0"
                                ></span>

                                <span
                                    className="relative z-10 font-semibold text-white transition-colors duration-300 group-hover:text-brand text-xs sm:text-xs"
                                >
                                    Apply Now
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Brands */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500 text-white">
                                ✿
                            </div>

                            <h3 className="text-2xl font-youngSerif sm:text-3xl text-[#2E2E2E]">
                                For Brands
                            </h3>
                        </div>

                        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {brandFeatures.map((item) => (
                                <div key={item.id} className="flex gap-2 items-start">

                                    <div className="flex shrink-0 h-6 w-6 items-center justify-center rounded-full bg-violet-500 text-xs font-semibold text-white">
                                        {item.id}
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xs font-semibold text-[#2E2E2E]">
                                            {item.title}
                                        </h4>

                                        <p className="text-[10px] font-medium text-gray-600 leading-[18px]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 sm:mt-10 mx-auto">
                            <Link
                                href="/our-brands"
                                title="Get started with brand partnership opportunities"
                                aria-label="Get started with brand partnership opportunities"
                                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#6c4ce4] border border-[#6c4ce4] px-4 sm:px-4 lg:px-10 py-2 md:py-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20"
                            >
                                <span
                                    className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 ease-out group-hover:translate-y-0"
                                ></span>

                                <span
                                    className="relative z-10 font-semibold text-white transition-colors duration-300 group-hover:text-[#6c4ce4] text-xs sm:text-xs"
                                >
                                    Get Started
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
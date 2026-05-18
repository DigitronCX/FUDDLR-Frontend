// app/components/HowItWorks.tsx
export default function SectionHowWorks() {
    const retailerFeatures = [
        {
            id: "1",
            title: "Competitive wholesale pricing",
            description:
                "Access competitive wholesale pricing designed margins while staying competitive in today's retail market.",
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
                "Place bulk orders quickly through a simple, efficient platform built for seamless wholesale purchasing experience.",
        },
    ];

    const brandFeatures = [
        {
            id: "4",
            title: "Access to retailer network",
            description: "Get your products stocked by trusted retailers across Australia through our growing distribution network.",
        },
        {
            id: "5",
            title: "Sales & distribution support",
            description: "We manage sales, logistics, and retailer relationships to help your brand scale efficiently nationwide.",
        },
        {
            id: "6",
            title: "Australia-wide reach",
            description: "Expand beyond local markets and reach customers nationwide with our scalable distribution and retail network.",
        },
    ];

    return (
        <section className="px-6 sm:px-10 py-10 sm:py-16 lg:py-24">
            <div className="mx-auto px-6">
                {/* Heading */}
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#2E2E2E]">
                        How It{" "}
                        <span className="text-emerald-500">
                            Works
                        </span>
                    </h2>
                </div>

                {/* Content */}
                <div className="relative mt-16 grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-40">
                    {/* Divider */}
                    <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gray-300">
                        <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-gray-300 bg-white text-sm font-medium text-gray-600">
                            OR
                        </div>
                    </div>

                    {/* Retailers */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-white">
                                ⚙
                            </div>

                            <h3 className="text-3xl font-semibold text-[#2E2E2E]">
                                For Retailers
                            </h3>
                        </div>

                        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
                            {retailerFeatures.map((item) => (
                                <div key={item.id} className="flex gap-2 items-start">
                                    <div className="shrink-0 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-xs font-semibold text-white">
                                        {item.id}
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xs font-semibold text-[#2E2E2E]">
                                            {item.title}
                                        </h4>

                                        <p className="text-[10px] leading-[18px] text-gray-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="mt-10 rounded-full bg-emerald-500 px-6 sm:px-8 py-3 sm:py-4 text-sm font-medium text-white transition hover:bg-emerald-600 mx-auto">
                            Apply Now →
                        </button>
                    </div>

                    {/* Brands */}
                    <div className="flex flex-col">
                        <div className="flex items-center gap-4">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-500 text-white">
                                ✿
                            </div>

                            <h3 className="text-3xl font-semibold text-[#2E2E2E]">
                                For Brands
                            </h3>
                        </div>

                        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                            {brandFeatures.map((item) => (
                                <div key={item.id} className="flex gap-2 items-start">

                                    <div className="flex shrink-0 h-6 w-6 items-center justify-center rounded-full bg-violet-500 text-xs font-semibold text-white">
                                        {item.id}
                                    </div>
                                    <div className="space-y-2">
                                        <h4 className="text-xs font-semibold text-[#2E2E2E]">
                                            {item.title}
                                        </h4>

                                        <p className="text-[10px] text-gray-600 leading-[18px]">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="mt-10 rounded-full bg-violet-500 px-6 sm:px-8 py-3 sm:py-4 text-sm font-medium text-white transition hover:bg-violet-600 w-fit mx-auto ">
                            Get Started →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
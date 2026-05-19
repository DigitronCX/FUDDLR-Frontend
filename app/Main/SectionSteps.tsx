import {
    IconArrowUpRight,
    IconCheck,
    IconCurrencyDollar,
    IconFileDescription,
    IconShoppingCartPlus,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const steps = [
    {
        id: 1,
        title: "APPLY FOR WHOLESALE ACCOUNT",
        desc: "Sign up quickly by filling out a simple application form.",
        icon: IconFileDescription,
    },
    {
        id: 2,
        title: "GET APPROVED",
        desc: "Our team reviews your application and approves your account.",
        icon: IconCheck,
    },
    {
        id: 3,
        title: "ACCESS PRICING",
        desc: "Once approved, unlock exclusive wholesale pricing tailored for your retail business.",
        icon: IconCurrencyDollar,
    },
    {
        id: 4,
        title: "PLACE BULK ORDERS",
        desc: "Easily browse products and place bulk orders through our seamless ordering system.",
        icon: IconShoppingCartPlus,
    },
];

export default function WholesaleSteps() {
    return (
        <section className="w-full bg-accent py-14 md:py-20 px-4 sm:px-6 md:px-12 relative overflow-hidden">
            {/* Heading */}
            <div className="mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center capitalize font-unbounded leading-tight">
                    get started in 4 Easy Steps
                </h2>
            </div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
                {/* LEFT SIDE */}
                <div className="flex flex-col items-center justify-center order-2 lg:order-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className="bg-white rounded-2xl px-4 pt-4 pb-8 shadow-md relative flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                            >
                                {/* Top */}
                                <div className="flex items-center relative gap-2 mr-auto pb-10">
                                    <div className="bg-brand text-white w-12 h-12 flex items-center justify-center rounded-md font-bold text-lg">
                                        {step.id}
                                    </div>

                                    <div className="absolute top-7 left-9 bg-white text-black text-xl p-2 border border-primary rounded-md shadow-sm">
                                        <step.icon size={22} />
                                    </div>
                                </div>

                                {/* Title */}
                                <h3 className="font-bold text-black/80 text-lg md:text-xl leading-snug mb-2 max-w-57">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-800 text-sm md:text-xs font-light leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Button */}
                    <div className="mt-8 md:mt-10 flex justify-center">
                        <Link
                            href="/contact-us"
                            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-brand border border-brand px-4 sm:px-2 lg:px-8 py-3 md:py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30"
                        >
                            <span
                                className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 ease-out group-hover:translate-y-0"
                            ></span>

                            <span
                                className="relative z-10 font-semibold text-white transition-colors duration-300 group-hover:text-brand text-xs sm:text-xs flex gap-2 items-center"
                            >
                                Apply Now <IconArrowUpRight size={20} />
                            </span>
                        </Link>

                        {/* <button className="px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-medium bg-brand rounded-full cursor-pointer border border-transparent text-white hover:border-brand/80 transition-colors flex gap-2 items-center">
                            Apply Now <IconArrowUpRight size={20} />
                        </button> */}
                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="md:relative hidden md:flex items-center justify-center order-1 lg:order-2">
                    <Image
                        src="/Sections/Steps.png"
                        alt="Steps"
                        width={700}
                        height={700}
                        className="w-full md:absolute md:-top-72 max-w-[250px] md:max-w-[450px] object-contain"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
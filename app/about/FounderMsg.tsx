import { IconBrandInstagram, IconBrandLinkedin, IconQuoteFilled } from "@tabler/icons-react";
import Image from "next/image";
// import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function FounderMsg() {
    return (
        <section className="bg-gray-50 py-16 px-6 md:px-14 relative overflow-hidden">
            <div className="grid md:grid-cols-[1.1fr_2fr] gap-12 items-start relative z-10">

                {/* LEFT: Image Card */}
                <div className="relative flex items-start justify-start">
                    <div className="rounded-4xl overflow-hidden shadow-lg">
                        <Image
                            src="/Founder/Footni.jpeg" // replace with your image
                            alt="Founder"
                            width={300}
                            height={300}
                            className="object-cover w-full h-full"
                        />
                    </div>

                    {/* Name Badge */}
                    <div className="absolute w-90 mx-auto bottom-4 left-3 bg-white/90 backdrop-blur-md rounded-3xl py-4 px-6 text-center shadow-md">
                        <h3 className="text-xl font-semibold text-gray-900">
                            Fotini Pratis
                        </h3>
                        <p className="text-sm tracking-widest text-gray-500">
                            CEO / FOUNDER
                        </p>
                    </div>
                </div>

                {/* RIGHT: Text Content */}
                <div>
                    <IconQuoteFilled className="text-brand size-22 mb-2" />
                    <p className="text-secondary uppercase tracking-[0.3em] text-sm mb-2">
                        Our Message
                    </p>

                    <h2 className="text-4xl md:text-6xl mb-6 font-youngSerif">
                        <span className="text-brand">Founder’s</span>{" "}
                        <span className="text-secondary">Message</span>
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-6">
                        FUDDLR was born from my lifelong love for animals and a desire to
                        create something meaningful and aligned with my values. After years
                        in the corporate world, I set out to build a business focused on
                        quality, transparency, and genuine care for pets. Through FUDDLR, we
                        bring together trusted pet food brands that support better nutrition
                        and healthier lives for pets, while helping retailers grow with
                        confidence.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4">
                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:opacity-80"
                        >
                            <IconBrandLinkedin />
                        </a>
                        <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white hover:opacity-80"
                        >
                            <IconBrandInstagram />
                        </a>
                    </div>
                </div>
            </div>
            {/* ==== Blobs ==== */}
            <div className="z-0">
                <div className="absolute top-5 left-10 size-14 bg-accent rounded-xl opacity-20 " />
                <div className="absolute top-25 left-40 size-10 bg-accent rounded-md opacity-20 " />
                <div className="absolute top-1/4 -left-14 size-24 bg-accent rounded-xl opacity-20 " />
                <div className="absolute bottom-5 left-1/4 size-24 bg-linear-to-t to-background from-accent rounded-xl opacity-20 " />
                <div className="absolute bottom-1/3 -right-14 w-28 h-28 bg-linear-to-b to-background from-brand  rounded-2xl opacity-40" />
                <div className="absolute bottom-1/7 right-5 w-20 h-20 bg-linear-to-l to-background from-brand rounded-xl opacity-20" />
                <div className="absolute right-1/6 bottom-5 size-12 bg-linear-to-t to-background from-brand  rounded-md opacity-40 " />
            </div>

        </section>
    );
}
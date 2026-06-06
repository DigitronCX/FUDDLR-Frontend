"use client"
import { IconBrandFacebook, IconBrandInstagram, IconClock, IconLocation, IconMail, IconPhoneCall } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
const Mainlinks = [
    { name: "Home", path: "/", title: "Go to FUDDLR Home Page" },
    { name: "Our Brands", path: "/our-brands", title: "Explore FUDDLR Brand Partnerships" },
    { name: "Why Fuddlr", path: "/about", title: "Learn About FUDDLR – Pet Nutrition & Distribution" },
    { name: "Contact", path: "/contact", title: "Contact FUDDLR for Brand Partnership" },
];

const OtherPages = [
    { name: "FAQ's", path: "/faq", title: "Frequently Asked Questions – FUDDLR" },
    { name: "Brands Apply Here", path: "/contact", title: "Apply to Become a FUDDLR Brand Partner" },
    { name: "Wholesale Application", path: "/contact", title: "Submit a Wholesale Distribution Application" },
];

const QuickLinks = [
    { name: "Terms & Conditions", path: "/terms-and-conditions", title: "FUDDLR Terms & Conditions" },
    { name: "Privacy Policy", path: "/privacy-policy", title: "FUDDLR Privacy Policy" },
];

const Contactus = [
    {
        icon: IconPhoneCall,
        text: "0416 165 987",
    },
    {
        icon: IconMail,
        text: "fuddlr@outlook.com",
    },
    {
        icon: IconClock,
        text: "24/7 Support",
    },
    {
        icon: IconLocation,
        text: "181 Rouse Street, Port Melbourne, VIC 3207 (By Appointment Only)",
    },
];
const Followus = [
    {
        icon: IconBrandFacebook,
        path: "https://www.facebook.com/fuddlr/",
        title: "Follow FUDDLR on Facebook",
        ariaLabel: "Follow FUDDLR on Facebook"
    },
    {
        icon: IconBrandInstagram,
        path: "https://www.instagram.com/fuddlr/",
        title: "Follow FUDDLR on Instagram",
        ariaLabel: "Follow FUDDLR on Instagram"
    },
];
const Footer = () => {
    return (
        // <footer className="bg-linear-to-b bg-brand from-10% to-tertiary font-poppins pt-15 px-6 md:px-12 text-white">
        <footer className="bg-brand font-poppins pt-15 px-6 md:px-12 text-white">
            {/* Grid layout responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-12">
                {/* ---- Logo ---- */}
                <section className="flex items-start flex-col gap-2 max-w-11/12">
                    <Image
                        src="/Logo/LogoWhite.png"
                        title="FUDDLR - Healthy Pet Food, Nutrition and Pet Care"
                        alt="FUDDLR logo - Healthy pet food and nutrition products"
                        width={200}
                        height={200}
                        className="w-28 sm:w-32 h-auto object-contain"
                    />
                    <p className="text-xs sm:text-sm tracking-wider font-normal leading-relaxed">
                        Delivering high quality pet nutrition and
                        innovative products designed to help
                        pets live healthier, happier lives, with
                        quality you can trust.
                    </p>
                    <div>
                        <ul className="space-y-2 text-sm capitalize pt-3 flex gap-2">
                            {
                                Followus.map((item, index) => (
                                    <li key={index} className="text-white  p-2 sm:size-12 size-8 rounded-full">
                                        <Link href={item.path} target="_blank" rel="noopener noreferrer" className="cursor-pointer" title={item.title} aria-label={item.ariaLabel}>
                                            <item.icon strokeWidth={1.5} />
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </section>

                {/* ---- Main Links ---- */}
                <section>
                    <h6 className="font-bold uppercase  text-white">
                        Pages
                    </h6>
                    {/* <hr className="my-2 border-gray-700" /> */}
                    <hr className="my-2 border-gray-200/30" />
                    <ul className="space-y-2">
                        {Mainlinks.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.path}
                                    title={item.title}
                                    aria-label={item.title}
                                    className="hover:text-white transition-colors font-light text-xs sm:text-sm">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
                {/* ---- Other Pages ---- */}
                <section>
                    <h6 className="font-bold uppercase text-white">Other Links</h6>
                    <hr className="my-2 border-gray-200/30" />
                    <ul className="space-y-2">
                        {OtherPages.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.path}
                                    title={item.title}
                                    aria-label={item.title}
                                    className="hover:text-white font-light text-xs sm:text-sm transition-colors">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
                {/* ---- Quick Links ---- */}
                <section>
                    <h6 className="font-bold uppercase text-white">Company</h6>
                    <hr className="my-2 border-gray-200/30" />
                    <ul className="space-y-2">
                        {QuickLinks.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.path}
                                    title={item.title}
                                    aria-label={item.title}
                                    className="hover:text-white font-light text-xs sm:text-sm transition-colors">
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* ---- Social Media ---- */}
                <section>
                    <h6 className="font-bold uppercase text-white">
                        Contact US
                    </h6>
                    <hr className="my-2 border-gray-200/30" />
                    <ul className="space-y-3">
                        {Contactus.map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <div className={"flex items-center gap-2"}>
                                    <item.icon
                                        strokeWidth={1.5}
                                        className="size-4 sm:size-5 text-white shrink-0"
                                    />
                                    <p className="hover:text-white font-light text-xs sm:text-sm transition-colors">{item.text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            {/* ---- Bottom ---- */}
            <div className="my-5">
                <hr className="border-gray-200/10" />
                <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-3 pt-6 text-sm">
                    <p>
                        {new Date().getFullYear()} © FUDDLR {new Date().getFullYear()}. All
                        Rights Reserved.
                    </p>
                    <p>
                        Powered by{" "}
                        <Link
                            href="https://digitroncx.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Visit DigitronCX website"
                            aria-label="Visit DigitronCX website"
                            className="text-background font-extrabold"
                        >
                            DigitronCX
                        </Link>
                    </p>
                </div>
                {/* <div className="pt-8">
                    <Image src={'/Logo/FUDDLR Distribution.svg'} alt="saas" width={400} height={200} className="w-full" loading="eager" />
                </div> */}
            </div>
        </footer>
    );
};

export default Footer;
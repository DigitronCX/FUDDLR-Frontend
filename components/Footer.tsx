"use client"
import { IconBrandFacebook, IconBrandInstagram, IconClock, IconLocation, IconMail, IconPhoneCall } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

const Mainlinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/product" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
];

const OtherPages = [
    { name: "FAQ's", path: "/faq" },
    { name: "Our Brands", path: "/our-brands" },
    { name: "Brands Apply Here", path: "/" },
    { name: "Wholesale Application", path: "/" },
];

const QuickLinks = [
    // { name: "Company", path: "/" },
    { name: "Terms & Conditions", path: "/" },
    { name: "Privacy Policy", path: "/" },
    // { name: "About", path: "/about-us" },
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
        path: "https://www.fuddlr.com.au/"
    },
    {
        icon: IconBrandInstagram,
        path: ""
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
                        alt="Logo"
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
                                    <li key={index} className="text-white p-2 sm:size-12 size-8 rounded-full">{<item.icon strokeWidth={1.5} />}   </li>
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
                            target="_blank"
                            href="https://digitroncx.com/"
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
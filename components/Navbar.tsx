"use client"
import { IconMenu, IconX } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const PagesNav = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/product" },
    { name: "Our Brands", path: "/our-brands" },
    { name: "Why Fuddlr", path: "/about" },
    { name: "Contact", path: "/contact" },
];


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="px-5 bg-background text-foreground border-b border-gray-200 relative z-50">
            {/* ----- Main Navbar ----- */}
            <div className="flex justify-between items-center py-4">

                {/* ---------- Logo ---------- */}
                <section className="text-start px-2 sm:px-0 md:text-left">
                    <Image src="/Logo/Logo.png" alt="Logo" width={200} height={200} className="w-32 h-auto object-contain" />
                    {/* <h3 className="text-base sm:text-2xl uppercase font-thin sm:tracking-widest">
                        Link City Whiskey
                    </h3> */}
                </section>
                {/* ---------- Desktop Nav Links ---------- */}
                <nav className="hidden md:flex justify-center">
                    <ul className="flex gap-10 text-sm capitalize">
                        {PagesNav.map((page, index) => (
                            <li key={index}>
                                <Link href={page.path} className="text-foreground hover:text-brand transition-colors">{page.name}</Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* ---------- Contact Btn ---------- */}
                <section className="hidden md:flex items-center gap-3">
                    <Link
                        href="/contact-us"
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-brand/20 border border-brand px-4 sm:px-8 py-3 transition-all duration-300 hover:-translate-y-1"
                    >
                        <span
                            className="absolute inset-0 translate-y-full bg-brand transition-transform duration-500 ease-out group-hover:translate-y-0"
                        ></span>

                        <span
                            className="relative z-10 font-semibold text-brand transition-colors duration-300 group-hover:text-white text-sm sm:text-xs"
                        >
                            Brands Apply Here
                        </span>
                    </Link>
                    <Link
                        href="/contact-us"
                        className="group relative inline-flex items-center justify-center overflow-hidden bg-brand rounded-full border border-brand px-4 sm:px-8 py-3 transition-all duration-300 hover:-translate-y-1"
                    >
                        <span
                            className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 ease-out group-hover:translate-y-0"
                        ></span>

                        <span
                            className="relative z-10 font-semibold text-white transition-colors duration-300 group-hover:text-brand text-sm sm:text-xs"
                        >
                            Retailers Sign in
                        </span>
                    </Link>
                </section>

                {/* ---------- Mobile Menu Button ---------- */}
                <button
                    className="md:hidden"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? (
                        <IconX className="size-5" />
                    ) : (
                        <IconMenu className="size-5" />
                    )}
                </button>
            </div>

            {/* ---------- Mobile Fullscreen Slide Menu ---------- */}
            <div
                className={`fixed top-0 left-0 w-full h-screen bg-linear-to-b from-tertiary via-tertiary to-tertiary text-white transform transition-transform duration-300 ease-in-out ${menuOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* Close button */}
                <div className="flex justify-between items-center p-5 border-b border-gray-700">
                    <h3 className="text-xl font-semibold">Menu</h3>
                    <button onClick={() => setMenuOpen(false)}>
                        <IconX className="size-6" />
                    </button>
                </div>

                {/* Menu Links */}
                <ul className="flex flex-col gap-6 text-base uppercase font-thin tracking-widest p-8">
                    {PagesNav.map((page, index) => (
                        <li key={index}>
                            <Link
                                href={page.path}
                                onClick={() => setMenuOpen(false)}
                            >
                                {page.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* ---------- Contact Btn ---------- */}
                <section className="flex w-full px-8 md:flex-row justify-start items-start gap-3">
                    <Link href="/contact-us">
                        <button className="px-5 text-xs sm:text-xs sm:px-3 flex gap-2 py-3 border font-medium bg-transparent rounded-3xl cursor-pointer text-background hover:text-white hover:bg-brand transition-colors">
                            Brands Apply Here
                        </button>
                    </Link>
                    {/* <span className="hidden md:block border-l h-6 border-gray-700"></span> */}
                    <Link href="/contact-us">
                        <button className="px-5 text-xs sm:text-xs sm:px-3 flex gap-2 py-3 font-medium bg-background/40 rounded-3xl cursor-pointer text-white hover:text-secondary hover:bg-background transition-colors">
                            Retailers Sign in
                        </button>
                    </Link>
                </section>

                {/* Social Icons */}
                {/* <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-6">
                    {socialIcons.map((item, index) => (
                        <item.icon
                            key={index}
                            strokeWidth={1}
                            className="size-6"
                        />
                    ))}
                </div> */}
            </div>
        </header>
    );
};

export default Navbar;
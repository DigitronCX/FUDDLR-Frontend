"use client";

import Image from "next/image";
import { useState } from "react";

const categories = [
    {
        id: 1,
        name: "Treats",
        bg: "#f5ede0",
        image: "/Product/Product-1.png",
    },
    {
        id: 2,
        name: "Dry Food",
        bg: "#eaf4ea",
        image: "/Product/Product-2.png",
    },
    {
        id: 3,
        name: "Ice Cream",
        bg: "#f5f5f5",
        image: "/Product/Product-3.png",
    },
    {
        id: 4,
        name: "Butters & Buttons",
        bg: "#e8f4fd",
        image: "/Product/Product-4.png",
    },
    {
        id: 5,
        name: "Wet Food",
        bg: "#fdeaea",
        image: "/Product/Product-5.png",
    },
    {
        id: 6,
        name: "Supplements",
        bg: "#fff8e1",
        image: "/Product/Product-6.png",
    },
];

const SLOTS = [
    { translateX: -400, scale: 0.70, zIndex: 1, opacity: 0.55 }, // -2
    { translateX: -220, scale: 0.85, zIndex: 2, opacity: 0.80 }, // -1
    { translateX: 0, scale: 1.00, zIndex: 3, opacity: 1.00 }, //  0 active
    { translateX: 220, scale: 0.85, zIndex: 2, opacity: 0.80 }, // +1
    { translateX: 400, scale: 0.70, zIndex: 1, opacity: 0.55 }, // +2
];

const CARD_W = 350; // base card width in px

export default function CategoryCarousel() {
    const [active, setActive] = useState(2);
    const n = categories.length;

    const prev = () => setActive((i) => (i - 1 + n) % n);
    const next = () => setActive((i) => (i + 1) % n);

    // Build visible slots: offsets -2 … +2
    const slots = [-2, -1, 0, 1, 2].map((offset, si) => ({
        cat: categories[(active + offset + n) % n],
        offset,
        cfg: SLOTS[si],
    }));

    return (
        <div className="px-4 py-10 sm:px-6 lg:p-20 flex flex-col items-start justify-center min-h-screen overflow-hidden">

            {/* Header */}
            <div className="flex flex-col items-start justify-center space-y-4 text-foreground w-full">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-youngSerif leading-tight">
                    Our <span className="text-brand">Categories</span>
                </h1>

                <p className="text-sm sm:text-base max-w-2xl">
                    Explore our curated selection of the most loved products,
                    chosen by pet parents like you.
                </p>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-5 mt-4 w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-4 sm:px-8 py-3 sm:py-4 text-sm font-medium bg-brand rounded-4xl cursor-pointer border border-transparent text-white hover:border-brand/80 transition-colors">
                        Login to browse our range
                    </button>

                    <button className="w-full sm:w-auto px-4 sm:px-8 py-3 sm:py-4 text-sm font-medium bg-transparent rounded-4xl cursor-pointer border border-brand text-brand hover:border-tertiary/80 hover:bg-background/70 duration-500 hover:text-secondary capitalize transition-all">
                        New customer? Apply Here
                    </button>
                </div>
            </div>

            {/* Desktop Carousel */}
            <div
                   className="hidden md:flex mt-20 relative items-center justify-center w-full overflow-visible"
                 style={{ height: 340 }}
            >
                {slots.map(({ cat, offset, cfg }) => {
                    const isActive = offset === 0;

                    return (
                        <div
                            key={`${cat.id}-${offset}`}
                            onClick={() => {
                                if (offset < 0) prev();
                                if (offset > 0) next();
                            }}
                            style={{
                                position: "absolute",
                                left: "50%",
                                transform: `translateX(calc(-50% + ${cfg.translateX}px)) scale(${cfg.scale})`,
                                zIndex: cfg.zIndex,
                                // opacity: cfg.opacity,
                                width: CARD_W,
                                transition: "transform 0.45s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.45s ease, box-shadow 0.45s ease",
                                borderRadius: 20,
                                overflow: "hidden",
                                boxShadow: isActive
                                    ? "0 20px 50px rgba(0,0,0,0.18)"
                                    : "0 6px 20px rgba(0,0,0,0.10)",
                                cursor: isActive ? "default" : "pointer",
                            }}
                        >
                            {/* Image area */}
                            <div className={`flex items-center justify-center transition-[height] duration-450 ease-in-out ${isActive ? 'h-[300px]' : 'h-[220px]'}`}>
                                <Image
                                    width={200}
                                    height={200}
                                    src={cat.image}
                                    alt={cat.name}
                                    className={`transition-all object-cover duration-450 ease ${isActive ? "w-full h-full" : "w-full h-full"
                                        }`}
                                />
                            </div>

                            {/* Label */}
                            <div
                                className={`text-white bg-[#f6ffe6] px-5 py-8 text-center font-semibold tracking-[0.02em] leading-[1.3] ${isActive ? "text-lg" : "text-sm"}`}
                            // style={{
                            //     background: isActive ? "#4db8d4" : "#6acce0",
                            //     padding: isActive ? "18px 16px" : "14px 12px",
                            //     textAlign: "center",
                            //     transition: "all 0.3s ease",
                            // }}
                            >
                                <p
                                    className={`text-secondary font-bold tracking-[0.02em] leading-[1.3] ${isActive ? "text-2xl" : "text-base"
                                        }`}>
                                    {cat.name}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>


            {/* Mobile Carousel */}
            <div className="md:hidden w-full mt-10">
                <div className="relative w-full max-w-[320px] mx-auto rounded-2xl overflow-hidden shadow-lg bg-white">
                    <div className="h-[250px]">
                        <Image
                            width={350}
                            height={250}
                            src={categories[active].image}
                            alt={categories[active].name}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="bg-[#f6ffe6] py-6 text-center">
                        <p className="text-secondary text-xl font-bold">
                            {categories[active].name}
                        </p>
                    </div>
                </div>
            </div>
            {/* ── Arrow + dot controls ── */}
            <div className="flex mx-auto items-center gap-6 mt-20">
                <button
                    onClick={prev}
                    aria-label="Previous"
                    style={{
                        width: 40, height: 40, borderRadius: "50%",
                        border: "2px solid #d1d5db", background: "#fff",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        cursor: "pointer", transition: "border-color 0.2s, color 0.2s",
                        color: "#9ca3af",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#4db8d4"; (e.currentTarget as HTMLButtonElement).style.color = "#4db8d4"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#d1d5db"; (e.currentTarget as HTMLButtonElement).style.color = "#9ca3af"; }}
                >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>

                {/* Dots */}
                <div className="flex gap-2 items-center">
                    {categories.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setActive(i)}
                            aria-label={`Go to ${categories[i].name}`}
                            style={{
                                borderRadius: 9999,
                                height: 10,
                                width: i === active ? 24 : 10,
                                background: i === active ? "#4db8d4" : "#d1d5db",
                                border: "none",
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                padding: 0,
                            }}
                        />
                    ))}
                </div>

                <button
                    onClick={next}
                    aria-label="Next"
                    style={{
                        width: 40, height: 40, borderRadius: "50%",
                        border: "2px solid #d1d5db", background: "#fff",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        cursor: "pointer", transition: "border-color 0.2s, color 0.2s",
                        color: "#9ca3af",
                    }}
                    onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#4db8d4"; (e.currentTarget as HTMLButtonElement).style.color = "#4db8d4"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "#d1d5db"; (e.currentTarget as HTMLButtonElement).style.color = "#9ca3af"; }}
                >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
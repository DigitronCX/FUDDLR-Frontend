"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

const categories = [
    { id: 2, name: "Supplements", bg: "#eaf4ea", image: "/Product/Supplements.webp" },
    { id: 3, name: "Treats", bg: "#f5f5f5", image: "/Product/Treats.webp" },
    { id: 4, name: "Ice Creams", bg: "#e8f4fd", image: "/Product/IceCream.webp" },
    { id: 5, name: "Wet Food", bg: "#fdeaea", image: "/Product/Wet.png" },
    { id: 6, name: "Dry Food", bg: "#fff8e1", image: "/Product/DryFood.webp" },
];

const N = categories.length;

type CarouselSizing = {
    cardWidth: number;
    step: number;
    desktopHeight: number;
    imageHeight: number;
};

function getCarouselSizing(viewportWidth: number): CarouselSizing {
    const baseCardWidth = 300;
    const baseStep = baseCardWidth * 0.70;
    const baseDesktopHeight = 360;
    const baseImageHeight = 260;

    const scale = viewportWidth >= 3100
        ? 3.4
        : viewportWidth >= 2560
            ? 2.4
            : viewportWidth >= 1920
                ? 1.6
                : viewportWidth >= 1536
                    ? 1.4
                    : viewportWidth >= 1326
                        ? 1.2
                        : viewportWidth >= 1280
                            ? 1.1
                            : viewportWidth >= 1024
                                ? 1
                                : 0.9;

    return {
        cardWidth: Math.round(baseCardWidth * scale),
        step: Math.round(baseStep * scale),
        desktopHeight: Math.round(baseDesktopHeight * scale),
        imageHeight: Math.round(baseImageHeight * scale),
    };
}

function cardStyle(offset: number, cardWidth: number, step: number): React.CSSProperties {
    const abs = Math.min(Math.abs(offset), 2.5);
    const scale = 1 - abs * 0.145;
    const opacity = 1 - abs * 0.245;
    const zIndex = Math.round(30 - abs * 10);
    const tx = offset * step;
    const shadow = abs < 0.3
        ? "0 20px 50px rgba(0,0,0,0.18)"
        : "0 6px 20px rgba(0,0,0,0.09)";

    return {
        position: "absolute",
        left: "50%",
        width: cardWidth,
        borderRadius: 20,
        overflow: "hidden",
        willChange: "transform, opacity",
        transform: `translateX(calc(-50% + ${tx}px)) scale(${scale})`,
        opacity,
        zIndex,
        boxShadow: shadow,
    };
}

export default function CategoryCarousel() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        startIndex: 0,
        align: "center",
        duration: 28,
        skipSnaps: false,
    });

    const [offsets, setOffsets] = useState<number[]>(() => categories.map((_, i) => i));
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [viewportWidth, setViewportWidth] = useState(0);

    useLayoutEffect(() => {
        const updateViewportWidth = () => setViewportWidth(window.innerWidth);

        updateViewportWidth();
        window.addEventListener("resize", updateViewportWidth);

        return () => window.removeEventListener("resize", updateViewportWidth);
    }, []);

    const sizing = getCarouselSizing(viewportWidth);

    const syncOffsets = useCallback(() => {
        if (!emblaApi) return;

        const progress = emblaApi.scrollProgress();
        const snapList = emblaApi.scrollSnapList();

        const next: number[] = snapList.map((snap) => {
            let diff = snap - progress;
            if (diff > 0.5) diff -= 1;
            if (diff < -0.5) diff += 1;
            return diff * N;
        });

        setOffsets(next);
    }, [emblaApi]);

    const syncSelected = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useLayoutEffect(() => {
        if (!emblaApi) return;

        const handleSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap());
        };

        const handleScroll = () => {
            syncOffsets();
        };

        emblaApi.on("select", handleSelect);
        emblaApi.on("scroll", handleScroll);
        emblaApi.on("reInit", handleScroll);

        emblaApi.emit("select");
        emblaApi.emit("scroll");

        return () => {
            emblaApi.off("select", handleSelect);
            emblaApi.off("scroll", handleScroll);
            emblaApi.off("reInit", handleScroll);
        };
        // if (!emblaApi) return;

        // emblaApi.on("scroll", syncOffsets);
        // emblaApi.on("select", syncSelected);
        // emblaApi.on("reInit", syncOffsets);

        // syncOffsets();
        // syncSelected();

        // return () => {
        //     emblaApi.off("scroll", syncOffsets);
        //     emblaApi.off("select", syncSelected);
        //     emblaApi.off("reInit", syncOffsets);
        // };
    }, [emblaApi, syncOffsets, syncSelected]);

    useLayoutEffect(() => {
        emblaApi?.reInit();
    }, [emblaApi, sizing.cardWidth, sizing.step]);

    const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
    const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

    return (
        <section className="px-4 py-10 sm:px-6 lg:px-12 xl:px-16 lg:py-16 flex flex-col items-start justify-center min-h-screen overflow-hidden">
            <div className="flex flex-col items-start space-y-4 text-foreground w-full">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-youngSerif leading-tight">
                    Our <span className="text-brand">Categories</span>
                </h1>

                <p className="text-sm sm:text-sm md:text-base max-w-2xl">
                    Gain access to unique brands available at exclusive wholesale pricing for approved retailers, grocery, groomers, breeders, vet and pet services.
                </p>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-5 mt-4 w-full sm:w-auto">
                    <Link
                        href="/"
                        className="group relative inline-flex items-center justify-center overflow-hidden bg-brand rounded-full border border-brand px-4 sm:px-6 lg:px-8 py-3 md:py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30"
                    >
                        <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 ease-out group-hover:translate-y-0" />
                        <span className="relative z-10 font-semibold text-white transition-colors duration-300 group-hover:text-brand text-xs capitalize">
                            Login to browse our range
                        </span>
                    </Link>
                    <Link
                        href="/contact"
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white border border-brand px-4 sm:px-2 lg:px-8 py-3 md:py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30"
                    >
                        <span className="absolute inset-0 translate-y-full bg-brand transition-transform duration-500 ease-out group-hover:translate-y-0" />
                        <span className="relative z-10 font-semibold text-brand transition-colors duration-300 group-hover:text-white text-xs capitalize">
                            New customer? Apply Here
                        </span>
                    </Link>
                </div>
            </div>

            <div className="hidden md:block w-full mt-12">
                <div
                    ref={emblaRef}
                    className="overflow-hidden"
                    style={{ height: 0, visibility: "hidden", pointerEvents: "none" }}
                    aria-hidden="true"
                >
                    <div className="flex">
                        {categories.map((cat) => (
                            <div key={cat.id} className="flex-none" style={{ width: sizing.cardWidth }} />
                        ))}
                    </div>
                </div>

                <div
                    className="relative flex items-center justify-center w-full select-none"
                    style={{ height: sizing.desktopHeight }}
                // onPointerDown={(e) => {
                //     console.log(e, ".........................")
                //     // const root = emblaApi?.rootNode();
                //     // if (!root) return;
                //     // root.dispatchEvent(new PointerEvent("pointerdown", {
                //     //     clientX: e.clientX,
                //     //     clientY: e.clientY,
                //     //     pointerId: e.pointerId,
                //     //     pointerType: e.pointerType,
                //     //     bubbles: true,
                //     //     cancelable: true,
                //     // }));
                // }}
                >
                    {categories.map((cat, i) => {
                        const offset = offsets[i] ?? i;
                        const absOffset = Math.abs(offset);
                        const isActive = absOffset < 0.4;

                        if (absOffset > 2.7) return null;

                        return (
                            <div
                                key={cat.id}
                                style={{
                                    ...cardStyle(offset, sizing.cardWidth, sizing.step),
                                    cursor: isActive ? "grab" : "pointer",
                                }}
                                onClick={() => {
                                    if (!isActive) scrollTo(i);
                                }}
                            >
                                <div
                                    className="relative overflow-hidden"
                                    style={{ height: sizing.imageHeight, background: cat.bg }}
                                >
                                    <Image
                                        width={sizing.cardWidth}
                                        height={sizing.imageHeight}
                                        src={cat.image}
                                        alt={cat.name}
                                        loading="eager"
                                        draggable={false}
                                        className="bg-[#ffffff]"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "contain",
                                            transition: "transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94)",
                                            pointerEvents: "none",
                                            userSelect: "none",
                                        }}
                                    />
                                </div>

                                <div className="bg-[#f6ffe6] px-4 py-5 text-center">
                                    <p
                                        className="text-[#2d6a4f] tracking-[0.02em] leading-snug"
                                        style={{
                                            fontSize: isActive ? 20 : 14,
                                            fontWeight: isActive ? 700 : 600,
                                            transition: "font-size 0.35s ease",
                                        }}
                                    >
                                        {cat.name}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <MobileCarousel selectedIndex={selectedIndex} scrollTo={scrollTo} />

            <div className="flex mx-auto items-center gap-6 mt-16">
                <button
                    onClick={scrollPrev}
                    aria-label="Previous category"
                    className="w-10 h-10 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center cursor-pointer text-gray-400 transition-colors duration-200 hover:border-[#4db8d4] hover:text-[#4db8d4]"
                >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                </button>

                <div className="flex gap-2 items-center">
                    {categories.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => scrollTo(i)}
                            aria-label={`Go to ${categories[i].name}`}
                            className="border-none cursor-pointer p-0 rounded-full transition-all duration-300"
                            style={{
                                height: 10,
                                width: i === selectedIndex ? 24 : 10,
                                background: i === selectedIndex ? "#4db8d4" : "#d1d5db",
                            }}
                        />
                    ))}
                </div>

                <button
                    onClick={scrollNext}
                    aria-label="Next category"
                    className="w-10 h-10 rounded-full border-2 border-gray-200 bg-white flex items-center justify-center cursor-pointer text-gray-400 transition-colors duration-200 hover:border-[#4db8d4] hover:text-[#4db8d4]"
                >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                    </svg>
                </button>
            </div>
        </section>
    );
}

function MobileCarousel({
    selectedIndex,
    scrollTo,
}: {
    selectedIndex: number;
    scrollTo: (i: number) => void;
}) {
    const [mobileRef, mobileApi] = useEmblaCarousel({
        loop: true,
        startIndex: selectedIndex,
        align: "center",
        duration: 25,
    });

    const prevSelectedRef = useRef(selectedIndex);

    useEffect(() => {
        if (!mobileApi || selectedIndex === prevSelectedRef.current) return;
        prevSelectedRef.current = selectedIndex;
        mobileApi.scrollTo(selectedIndex);
    }, [mobileApi, selectedIndex]);

    useEffect(() => {
        if (!mobileApi) return;

        const syncDesktopSelection = () => {
            scrollTo(mobileApi.selectedScrollSnap());
        };

        mobileApi.on("select", syncDesktopSelection);
        mobileApi.on("reInit", syncDesktopSelection);
        syncDesktopSelection();

        return () => {
            mobileApi.off("select", syncDesktopSelection);
            mobileApi.off("reInit", syncDesktopSelection);
        };
    }, [mobileApi, scrollTo]);

    return (
        <div className="md:hidden w-full mt-10">
            <div
                ref={mobileRef}
                // className="overflow-hidden w-full max-w-[92vw] sm:max-w-[360px] mx-auto rounded-2xl shadow-lg"
                className="overflow-hidden w-full mx-auto max-w-[360px] rounded-2xl shadow-lg"
            >
                <div className="flex touch-pan-y">
                    {categories.map((cat) => (
                        <div key={cat.id} className="flex-none w-full ">
                            <div className="h-[250px] flex  justify-center" style={{ background: cat.bg }}>
                                <Image
                                    width={320}
                                    height={250}
                                    src={cat.image}
                                    alt={cat.name}
                                    draggable={false}
                                    className="w-auto h-auto object-contain"
                                />
                            </div>
                            <div className="bg-[#f6ffe6] py-6 text-center">
                                <p className="text-[#2d6a4f] text-xl font-bold">{cat.name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

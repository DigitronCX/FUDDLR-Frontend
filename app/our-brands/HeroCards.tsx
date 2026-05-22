"use client";

import { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
} from "framer-motion";

const CardsSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // RAW transforms
    const card2Raw = useTransform(
        scrollYProgress,
        [0.15, 0.55],
        [0, -300]
    );

    const card3Raw = useTransform(
        scrollYProgress,
        [0.45, 0.9],
        [0, -550]
    );

    // Smooth spring animation
    const card2X = useSpring(card2Raw, {
        stiffness: 90,
        damping: 20,
        mass: 0.8,
    });

    const card3X = useSpring(card3Raw, {
        stiffness: 90,
        damping: 20,
        mass: 0.8,
    });

    return (
        <div ref={containerRef} className="relative h-[300vh] w-full">
            <div className="sticky top-0 min-h-screen w-full overflow-x-hidden">
                <section className="w-full h-screen pl-10 flex items-center gap-10">

                    {/* LEFT CONTENT */}
                <div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl  text-secondary leading-tight font-youngSerif">
                        Are You a Brand <br /> Looking to Grow?
                    </h1>

                    <p className="mt-6 text-gray-600 max-w-lg leading-relaxed text-sm sm:text-base">
                        Partner with FUDDLR to access a boutique distribution model designed to help your brand stand out & not get lost. We work closely with a curated selection of brands, offering dedicated support, retail connections, and optional sales growth packages to help you scale in the Australian market.
                    </p>

                    <button className="mt-8 w-fit group relative inline-flex items-center justify-center overflow-hidden bg-brand rounded-full border border-brand px-4 sm:px-6 lg:px-8 py-3 md:py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 cursor-pointer">
                        <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 ease-out group-hover:translate-y-0" />
                        <span className="relative z-10 font-semibold text-white transition-colors duration-300 group-hover:text-brand text-xs">
                            Brands Apply Now
                        </span>
                    </button>
                </div>

                    {/* RIGHT CARDS */}
                    <div className="flex-2 py-5">
                        <div className="relative flex items-center ">

                            {/* Card 1 */}
                            <motion.div
                                style={{ zIndex: 1 }}
                                className="absolute left-0 w-[420px] h-[280px] bg-accent border-2 border-accent rounded-[30px] p-8 shadow-2xl will-change-transform flex flex-col justify-center "
                            >
                                <h3 className="text-2xl mb-3 text-white font-semibold font-youngSerif">
                                    Competitive Wholesale Pricing
                                </h3>

                                <p className="text-white">
                                    Maximise margins while remain competitive & attractive.
                                </p>
                            </motion.div>

                            {/* Card 2 */}
                            <motion.div
                                style={{
                                    x: card2X,
                                    zIndex: 2,
                                    left: 420,
                                }}
                                className="ml-10 bg-accent border-2 border-accent absolute w-[420px] h-[280px]  rounded-[30px] p-8 shadow-xl will-change-transform flex flex-col justify-center"
                            >
                                <h3 className="text-2xl mb-3 text-white font-semibold font-youngSerif">
                                    Active In-Store Advocacy
                                </h3>

                                <p className="text-white">
                                    Engage retailers in person to educate, promote & place your products effect.
                                </p>
                            </motion.div>

                            {/* Card 3 */}
                            <motion.div
                                style={{
                                    x: card3X,
                                    zIndex: 3,
                                    left: 840,
                                }}
                                className="bg-accent border-2 border-accent absolute w-[420px] h-[280px]  rounded-[30px] p-8 shadow-xl will-change-transform flex flex-col justify-center"
                            >
                                <h3 className="text-2xl mb-3 text-white font-semibold font-youngSerif">
                                    Tailored Brand Support
                                </h3>

                                <p className="text-white">
                                    Sales consulting & brand building services (POA) to
                                    strengthen market positioning.
                                </p>
                            </motion.div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default CardsSection;
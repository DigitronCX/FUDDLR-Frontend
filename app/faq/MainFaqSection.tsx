"use client";

import { IconChevronDownFilled, IconQuestionMark } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqData = [
    {
        id: 1,
        question: "Who qualifies to be a wholesale partner?",
        answer:
            "Simply browse our Shop page, select your favorite pieces, and proceed to checkout. Follow the easy steps to complete your purchase securely.",
    },
    {
        id: 2,
        question: "How long does it take to get access?",
        answer:
            "Yes, we provide fast and reliable delivery across Australia. Orders are processed quickly to ensure you receive your jewelry as soon as possible.",
    },
    {
        id: 3,
        question: "What s the lead time for orders?",
        answer:
            "Delivery typically takes 4–7 business days, depending on your location. You will receive tracking details once your order is dispatched via email.",
    },
    {
        id: 4,
        question: "What if I need support for my order?",
        answer:
            "We accept major credit/debit cards (Stripe) and local secure online payment options for a smooth and safe checkout experience.",
    },
    // {
    //     id: 5,
    //     question: "Can I browse products before approval?",
    //     answer:
    //         "No. All purchases are final as we use 3rd party providers to process orders.",
    // },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

const MainFaqSection = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const toggleShow = (id: number) => {
        setActiveFaq((prev) => (prev === id ? null : id));
    };

    return (
        <div className="min-h-screen relative z-10 grid md:grid-cols-[1fr_1.5fr] place-items-center gap-10 py-10 md:py-20 px-4 sm:px-6 md:px-12 overflow-hidden bg-background">

            {/* Image Section */}
            <motion.section
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="w-full hidden md:flex bg-accent h-[80%] justify-center items-center rounded-2xl relative"
            >
                {/* --------- Question Marks --------- */}
                <div className="absolute top-0 left-0 size-20 bg-background rounded-xl grid place-items-center">
                    <IconQuestionMark className="text-accent size-18 stroke-3" />
                </div>
                <div className="absolute bottom-0 right-0 size-20 bg-background rounded-xl grid place-items-center">
                    <IconQuestionMark className="text-accent size-18 stroke-3" />
                </div>
                {/* --------- Heading --------- */}
                <div>
                    <h3 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-unbounded text-white">FAQs</h3>
                </div>
            </motion.section>

            {/* FAQ Section */}
            <motion.section
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-10 w-full"
            >
                <div className="space-y-2">
                    <motion.h5
                        variants={item}
                        className="text-secondary font-bold font-unbounded text-3xl sm:text-4xl lg:text-5xl"
                    >
                        Frequently Asked <span className="text-brand">Questions</span>
                    </motion.h5>
                    <p className="text-secondary text-sm sm:text-base">Got questions? We’ve got answers to help you get started and grow your business smoothly.</p>
                </div>

                <motion.div variants={container} className="grid gap-5">
                    {faqData.map((itemData) => {
                        const isOpen = activeFaq === itemData.id;

                        return (
                            <motion.div
                                variants={item}
                                whileHover={{ scale: 1.02 }}
                                key={itemData.id}
                                onClick={() => toggleShow(itemData.id)}
                                className="flex gap-x-5 py-6 px-4 justify-between border shadow-md shadow-accent/10 border-brand items-start cursor-pointer rounded-3xl bg-background backdrop-blur-sm"
                            >
                                <div className="flex items-start gap-5 flex-1">
                                    <div className="flex-1">
                                        <p
                                            className={`text-sm sm:text-base ${isOpen ? "text-brand" : "text-secondary"
                                                }`}
                                        >
                                            {itemData.question}
                                        </p>

                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.35 }}
                                                    className="overflow-hidden"
                                                >
                                                    <p className="pt-2 text-secondary text-sm md:text-sm">
                                                        {itemData.answer}
                                                    </p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </div>

                                <motion.div
                                    animate={{ rotate: isOpen ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className=""
                                >
                                    <IconChevronDownFilled size={22} />
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>
                {/* <div className="flex w-full gap-8">
                    <button>
                        <Link
                            href="/contact-us"
                            className="group relative inline-flex items-center justify-center overflow-hidden bg-brand rounded-full border border-brand px-4 sm:px-6 lg:px-8 py-3 md:py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30"
                        >
                            <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 ease-out group-hover:translate-y-0" />
                            <span className="relative z-10 font-semibold text-white transition-colors duration-300 group-hover:text-brand text-xs">
                                Register Now
                            </span>
                        </Link>
                    </button>
                    <button>
                        <Link
                            href="/contact-us"
                            className="group relative inline-flex items-center justify-center overflow-hidden bg-white rounded-full border border-brand px-4 sm:px-6 lg:px-8 py-3 md:py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30"
                        >
                            <span className="absolute inset-0 translate-y-full bg-brand transition-transform duration-500 ease-out group-hover:translate-y-0" />
                            <span className="relative z-10 font-semibold text-brand transition-colors duration-300 group-hover:text-white text-xs">
                                Brands Apply
                            </span>
                        </Link>
                    </button>
                </div> */}
            </motion.section>

        </div>
    );
};

export default MainFaqSection;
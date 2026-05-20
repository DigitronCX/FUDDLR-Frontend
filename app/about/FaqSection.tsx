"use client";

import { IconArrowDown, IconChevronDownFilled } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const faqData = [
    {
        id: 1,
        question: "What is FUDDLR?",
        answer:
            "Simply browse our Shop page, select your favorite pieces, and proceed to checkout. Follow the easy steps to complete your purchase securely.",
    },
    {
        id: 2,
        question: "Who can use the FUDDLR portal?",
        answer:
            "Yes, we provide fast and reliable delivery across Australia. Orders are processed quickly to ensure you receive your jewelry as soon as possible.",
    },
    {
        id: 3,
        question: "How do I register on the platform?",
        answer:
            "Delivery typically takes 4–7 business days, depending on your location. You will receive tracking details once your order is dispatched via email.",
    },
    {
        id: 4,
        question: "Are all brands on FUDDLR verified?",
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

const FaqSection = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const toggleShow = (id: number) => {
        setActiveFaq((prev) => (prev === id ? null : id));
    };

    return (
        <div className="min-h-screen relative z-10 grid md:grid-cols-[1fr_1fr] place-items-center gap-10 px-4 sm:px-10 py-10 overflow-hidden bg-background">

            {/* Image Section */}
            <motion.section
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="w-full hidden md:flex bg-accent h-[60%]"
            >
                {/* <Image
                    src={"/Sections/Faq.png"}
                    width={1000}
                    height={1000}
                    alt="Image"
                    className="h-full w-full object-contain rounded-xl"
                /> */}
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
                        className="text-secondary font-bold text-3xl font-unbounded sm:text-4xl md:text-5xl"
                    >
                        Frequently Asked <span className="text-brand">Questions</span>
                    </motion.h5>
                    <p className="text-secondary text-sm">Got questions? We’ve got answers to help you get started and grow your business smoothly.</p>
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
                                className="flex gap-x-5 py-6 px-4 justify-between border-2 shadow-md shadow-accent/10 border-brand items-start cursor-pointer rounded-3xl bg-background backdrop-blur-sm"
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
            </motion.section>

        </div>
    );
};

export default FaqSection;
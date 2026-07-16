"use client";
import Image from "next/image";
import Link from "next/link";

// components/ContactSection.jsx
export default function ContactSection() {
    return (
        <section className="px-4 py-10 sm:px-6 lg:p-20 relative overflow-hidden">

            {/* Header */}
            <div className="text-center mb-5">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-youngSerif font-semibold text-secondary">Contact Us</h2>
                <p className="text-gray-500 mt-3 text-sm sm:text-base">
                    Have questions, need support, or want to partner with us? We’re here to help.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* LEFT: Form */}
                <div className="bg-white rounded-4xl border-2 border-brand p-6 sm:p-8 shadow-sm">
                    <p className="text-xs sm:text-sm tracking-widest text-secondary mb-2">
                        GET IN TOUCH
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-medium mb-6 text-secondary font-youngSerif">Contact Form</h3>

                    <form className="space-y-5">
                        {/* Name */}
                        <div>
                            <label className="block text-sm text-secondary font-medium mb-1">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. Enter your first name"
                                className="inp-primary"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm  text-secondary font-medium mb-1">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                placeholder="e.g. Enter your best email"
                                className="inp-primary"
                            />
                        </div>

                        {/* Country */}
                        <div className="text-secondary">
                            <label className="block text-secondary text-sm font-medium mb-1">
                                Country <span className="text-red-500">*</span>
                            </label>
                            <select className="w-full border border-brand rounded-lg px-2 py-2 text-secondary text-xs placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/400">
                                <option>Select a Country</option>
                                <option>Australia</option>
                                <option>UK</option>
                                <option>Canada</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm text-secondary font-medium mb-1">
                                Message
                            </label>
                            <textarea
                                rows={5}
                                placeholder="Write your message"
                                className="inp-primary"
                            ></textarea>
                        </div>

                        <div className="text-secondary flex gap-2">
                            <input type="checkbox" name="checkbox" id="checkbox" className="border rounded-none border-gray-500" />
                            <label htmlFor="checkbox" className="text-sm">Terms and Conditions <span className="text-brand">Privacy Policy </span><span className="text-red-500">*</span></label>
                        </div>
                        <button
                            type="submit"
                            className="w-full group relative inline-flex items-center justify-center overflow-hidden bg-secondary rounded-full border border-secondary px-4 sm:px-6 lg:px-8 py-3 md:py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30"
                        >
                            <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 ease-out group-hover:translate-y-0" />
                            <span className="relative z-10 font-semibold text-white transition-colors duration-300 group-hover:text-secondary text-xs">
                                Submit
                            </span>
                        </button>

                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-2 mt-4 w-full sm:w-auto">
                            <Link
                                href="/contact-us"
                                className="group relative w-full inline-flex items-center justify-center overflow-hidden bg-brand rounded-full border border-brand px-4 sm:px-6 lg:px-8 py-3 md:py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30"
                            >
                                <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 ease-out group-hover:translate-y-0" />
                                <span className="relative z-10 font-semibold text-white transition-colors duration-300 group-hover:text-brand text-xs">
                                    Apply Now Wholesaler
                                </span>
                            </Link>
                            <Link
                                href="/contact-us"
                                className="group relative w-full inline-flex items-center justify-center overflow-hidden rounded-full bg-white border border-brand px-4 sm:px-2 lg:px-8 py-3 md:py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30"
                            >
                                <span className="absolute inset-0 translate-y-full bg-brand transition-transform duration-500 ease-out group-hover:translate-y-0" />
                                <span className="relative z-10 font-semibold text-brand transition-colors duration-300 group-hover:text-white text-xs ">
                                    Apply Now Brands
                                </span>
                            </Link>
                        </div>
                    </form>
                </div>

                {/* RIGHT: Image + Floating Icons */}
                <div className="relative hidden md:flex justify-center">
                    {/* Background shapes */}
                    {/* <div className="absolute w-72 h-72 bg-green-200 rounded-3xl top-0 right-10 z-5"></div> */}
                    {/* <div className="absolute w-48 h-48 bg-accent/40 rounded-3xl top-0 left-0 z-5"></div> */}

                    {/* Image */}
                    <Image
                        width={1000}
                        height={1000}
                        src="/Sections/ContactHero.webp" // replace with your image
                        alt="Dog"
                        className="rounded-3xl w-[80%] object-cover z-20"
                    />
                    <div className="bg-brand absolute top-1/2 -translate-y-1/2 w-9/12 right-1/6 h-[80%] rounded-3xl z-10"></div>
                    {/* Floating Icons */}
                    {/* <div className="absolute left-0 top-1/3 bg-brand text-white p-4 rounded-full shadow-lg size-20 flex items-center justify-center text-3xl z-20">
                        <div className="p-2 bg-white rounded-full">
                            <IconMail className="size-7 text-brand" />
                        </div>
                    </div>

                    <div className="absolute bottom-1/3 right-1/3 bg-brand text-white p-4 rounded-full shadow-lg z-20 size-20 flex items-center justify-center text-3xl">
                        <div className="p-2 bg-white rounded-full">
                            <IconMapPinFilled className="size-6 text-brand" />
                        </div>
                    </div>

                    <div className="absolute bottom-15 left-8 bg-brand text-white p-4 rounded-full shadow-lg z-20 size-20 flex items-center justify-center text-3xl">
                        <div className="p-2 bg-white rounded-full">
                            <IconPhoneCall className="size-6 text-brand" />
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    );
}
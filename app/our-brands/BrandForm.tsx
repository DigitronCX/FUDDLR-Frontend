import { IconFlag3Filled, IconMail, IconMapPinFilled, IconPhoneCall } from "@tabler/icons-react";
import Image from "next/image";

// components/ContactSection.jsx
export default function BrandForm() {
    return (
        <section className="py-20 px-6 lg:px-20 relative overflow-hidden">
            {/* Background blobs */}
            <div className="z-0">
                <div className="absolute top-5 left-10 size-14 bg-accent rounded-xl opacity-20 " />
                <div className="absolute top-25 left-40 size-10 bg-accent rounded-md opacity-20 " />
                <div className="absolute top-1/4 -left-14 size-24 bg-accent rounded-xl opacity-20 " />
                <div className="absolute bottom-5 left-1/4 size-24 bg-linear-to-t to-background from-accent rounded-xl opacity-20 " />
                <div className="absolute bottom-1/3 -right-14 w-28 h-28 bg-linear-to-b to-background from-brand  rounded-2xl opacity-40" />
                <div className="absolute bottom-1/7 right-5 w-20 h-20 bg-linear-to-l to-background from-brand rounded-xl opacity-20" />
                <div className="absolute right-1/6 bottom-5 size-12 bg-linear-to-t to-background from-brand  rounded-md opacity-40 " />
            </div>


            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* LEFT: Form */}
                <div className="bg-white rounded-2xl border-2 border-brand p-8 shadow-sm">
                    <div className="space-y-2 mb-6">
                        <p className="text-sm tracking-widest text-secondary">
                            Contact Form
                        </p>
                        <h3 className="text-3xl font-medium text-secondary font-youngSerif">Apply to Join FUDDLR</h3>
                        <p className="text-sm text-secondary">
                            We are partner with selected brands. Tell us a bit about yours.
                        </p>
                    </div>

                    <form className="space-y-5">
                        <section className="grid grid-cols-2 gap-5">
                            {/* Name */}
                            <div>
                                <label htmlFor="brandName" className="block text-sm text-secondary font-medium mb-1">
                                    Brand Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="brandName"
                                    placeholder="e.g. Enter your brand name"
                                    className="inp-primary"
                                />
                            </div>
                            {/* Name */}
                            <div>
                                <label htmlFor="website" className="block text-sm text-secondary font-medium mb-1">
                                    Website / Instagram <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="e.g. Website url or instagram link"
                                    className="inp-primary"
                                />
                            </div>
                        </section>
                        <section className="grid grid-cols-2 gap-5">
                            {/* Name */}
                            <div>
                                <label htmlFor="fullName" className="block text-sm text-secondary font-medium mb-1">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id='fullName'
                                    placeholder="e.g. Enter your full name"
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
                        </section>
                        <section className="grid grid-cols-2 gap-5">
                            {/* Contact */}
                            <div>
                                <label className="block text-sm  text-secondary font-medium mb-1">
                                    Contact <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="tel"
                                    placeholder="e.g. Enter your phone no"
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
                                    <option>USA</option>
                                    <option>UK</option>
                                    <option>Canada</option>
                                </select>
                            </div>
                        </section>

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
                            className="btn-primary"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* RIGHT: Image + Floating Icons */}
                <div className="relative flex justify-center">
                    {/* Background shapes */}
                    {/* <div className="absolute w-72 h-72 bg-green-200 rounded-3xl top-0 right-10 z-5"></div> */}
                    <div className="absolute w-48 h-48 bg-accent/40 rounded-3xl top-0 left-0 z-5"></div>

                    {/* Image */}
                    <Image
                        width={1000}
                        height={1000}
                        src="/Sections/FuddlrForm.png" // replace with your image
                        alt="Dog"
                        className="rounded-3xl w-[85%] object-cover z-20"
                    />
                    <div className="bg-linear-to-t from-accent/50 to-accent/50 absolute top-1/2 -translate-y-1/2 w-9/12 right-1/6 h-[80%] rounded-3xl z-10"></div>
                    {/* Floating Icons */}
                    <div className="absolute left-0 top-1/3 bg-brand text-white p-4 rounded-full shadow-lg size-20 flex items-center justify-center text-3xl z-20">
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
                    </div>
                </div>
            </div>

            <div className="my-10 py-3 w-full mx-auto text-center bg-accent/20 rounded-2xl text-secondary text-sm sm:text-base md:text-lg font-medium flex items-center justify-center gap-2">
                <div className="p-2 text-accent rounded-full">
                    <IconFlag3Filled className="size-6" />
                </div>
                <p>
                    NOTE: We carefully review all brands. Additional sales and brand support may be offered where needed (POA).
                </p>
            </div>
        </section>
    );
}
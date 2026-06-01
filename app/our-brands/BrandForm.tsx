import { IconPawFilled } from "@tabler/icons-react";
import Image from "next/image";

// components/ContactSection.jsx
export default function BrandForm() {
    return (
        <section className="py-10 px-6 lg:px-20 relative overflow-hidden">
            {/* Background blobs */}
            {/* <div className="z-0">
                <div className="absolute top-5 left-10 size-14 bg-accent rounded-xl opacity-20 " />
                <div className="absolute top-25 left-40 size-10 bg-accent rounded-md opacity-20 " />
                <div className="absolute top-1/4 -left-14 size-24 bg-accent rounded-xl opacity-20 " />
                <div className="absolute bottom-5 left-1/4 size-24 bg-linear-to-t to-background from-accent rounded-xl opacity-20 " />
                <div className="absolute bottom-1/3 -right-14 w-28 h-28 bg-linear-to-b to-background from-brand  rounded-2xl opacity-40" />
                <div className="absolute bottom-1/7 right-5 w-20 h-20 bg-linear-to-l to-background from-brand rounded-xl opacity-20" />
                <div className="absolute right-1/6 bottom-5 size-12 bg-linear-to-t to-background from-brand  rounded-md opacity-40 " />
            </div> */}


            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
                {/* LEFT: Form */}
                <div className="bg-white rounded-2xl border-2 border-brand p-5 md:p-8 shadow-sm">
                    <div className="space-y-2 mb-6">
                        <p className="text-sm tracking-widest text-secondary">
                            Contact Form
                        </p>
                        <h3 className="text-3xl font-medium text-secondary font-youngSerif">Apply to Join <span className="text-brand">FUDDLR</span> </h3>
                        <p className="text-sm text-secondary">
                            We are partner with selected brands. Tell us a bit about yours.
                        </p>
                    </div>

                    <form className="space-y-5">
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                                    Product Category <span className="text-red-500">*</span>
                                </label>
                                <select className="w-full border border-brand rounded-lg px-2 py-2 text-secondary text-xs placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand/400">
                                    <option>Select a Category</option>
                                    <option>Pet Food</option>
                                    <option>Pet Ice Cream</option>
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
                        {/* Currently Stocked  */}
                        <div>
                            <label className="block text-sm  text-secondary font-medium mb-1">
                                Are you currently stocked in retail? <span className="text-red-500">*</span>
                            </label>
                            <div className="flex items-center gap-5">
                                <label htmlFor="" className='flex items-center gap-2'>
                                    <input type="radio" name="stockedInRetail" id="stockedInRetail" value="yes" className='accent-brand size-3' />
                                    <p className='text-sm text-secondary'>
                                        Yes
                                    </p>
                                </label>
                                <label htmlFor="" className='flex items-center gap-2'>
                                    <input type="radio" name="stockedInRetail" id="stockedInRetail" value="no" className='accent-brand size-3' />
                                    <p className='text-sm text-secondary'>
                                        No
                                    </p>
                                </label>
                            </div>
                        </div>

                        {/* Terms and Conditions */}
                        {/* <div className="text-secondary flex gap-2">
                            <input type="checkbox" name="checkbox" id="checkbox" className="border rounded-none border-gray-500" />
                            <label htmlFor="checkbox" className="text-sm">Terms and Conditions <span className="text-brand">Privacy Policy </span><span className="text-red-500">*</span></label>
                        </div> */}

                        <button
                            type="submit"
                            className="w-full group relative inline-flex items-center justify-center overflow-hidden bg-brand rounded-full border border-brand px-4 sm:px-6 lg:px-8 py-3 md:py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30 cursor-pointer"
                        >
                            <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 ease-out group-hover:translate-y-0" />
                            <span className="relative z-10 font-semibold text-white transition-colors duration-300 group-hover:text-brand text-xs">
                                Submit
                            </span>
                        </button>
                    </form>
                </div>

                {/* RIGHT: Image + Floating Icons */}
                <div className="relative hidden md:flex justify-center">
                    {/* Background shapes */}
                    {/* <div className="absolute w-72 h-72 bg-green-200 rounded-3xl top-0 right-10 z-5"></div> */}
                    {/* <div className="absolute size-32 bg-accent rounded-3xl bottom-0 left-0 z-50"></div> */}
                    <div className="absolute z-40 bottom-2 md:bottom-10 left-0 translate-y-1/4 md:-translate-x-3 size-20 sm:size-28 md:size-30  rounded-2xl bg-accent overflow-hidden shadow-lg flex items-center justify-center">
                        <IconPawFilled className="text-white size-10 sm:size-12 md:size-14 -rotate-15" />
                        {/* <Image
                            src="/Images/Vector.svg" // replace with your image
                            alt="Dog playing"
                            width={100}
                            height={100}
                            className="object-cover size-12"
                        /> */}
                    </div>

                    {/* Image */}
                    <Image
                        width={1000}
                        height={1000}
                        src="/Sections/FuddlrForm.png" // replace with your image
                        alt="Dog"
                        className="rounded-3xl w-[85%] object-cover z-20"
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

            <div className="my-10 px-4 lg:px-8 py-3 w-full mx-auto text-center bg-accent rounded-2xl text-sm sm:text-base md:text-lg md:font-medium flex items-center justify-center gap-2 text-white">
                <p>
                    NOTE: We carefully review all brands. Additional sales and brand support may be offered where needed (POA).
                </p>
            </div>
        </section>
    );
}
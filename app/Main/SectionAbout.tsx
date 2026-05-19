import Image from "next/image";
import Link from "next/link";

export default function SectionAbout() {
    return (
        <section className="w-full bg-white py-10 sm:py-20 px-6 md:px-16 relative z-10 overflow-hidden">

            <div className="mx-auto grid lg:grid-cols-2 gap-5 items-center">
                {/* LEFT: Images */}
                <div className="relative flex justify-center md:justify-center w-full">

                    {/* Main Image */}
                    <div className="relative rounded-3xl overflow-hidden z-20 w-3/4 flex justify-center">
                        <Image
                            src="/Sections/About-One.png" // replace with your image
                            alt="Dog"
                            width={400}
                            height={400}
                            className="object-contain w-auto h-auto"
                        />
                    </div>

                    {/* Small Image */}
                    <div className="absolute bottom-5 sm:bottom-10 lg:bottom-0 left-0 translate-y-1/4 -translate-x-3 size-28 sm:size-34 md:size-42 rounded-2xl overflow-hidden z-30">
                        <Image
                            src="/Sections/About-Two.png" // replace with your image
                            alt="Dog playing"
                            width={100}
                            height={100}
                            className="object-cover w-full h-auto"
                        />
                    </div>

                    <div className="bg-brand absolute top-1/2 -translate-y-1/2 w-[90%] right-1/2 translate-x-1/2 h-[80%] rounded-3xl z-10"></div>
                </div>

                {/* RIGHT: Content */}
                <div>
                    <h2 className="text-4xl md:text-5xl mb-6 text-secondary font-youngSerif">
                        About <span className="text-green-500">FUDDLR</span>
                    </h2>

                    <p className="text-primary mb-4 font-light leading-relaxed text-sm sm:text-base">
                        FUDDLR is a pet supplies distribution business supplying trusted, high quality brands to retailers worldwide. From day one, our focus has been simply to make it easy for retailers to discover, order, and stock products that their customers will love.
                    </p>

                    <p className="text-primary mb-6 font-light leading-relaxed text-sm sm:text-base">
                        We work closely with selected brands that align with our values of quality, transparency, and thoughtful nutrition. We don&apos;t just list products, we actively support brands by helping them grow within our retail network.
                    </p>
                    <div className="flex flex-wrap gap-5 mb-8">
                        <div className="flex items-center gap-2">
                            <span className="bg-secondary text-white p-1 rounded-4xl w-fit h-fit"></span>
                            <p className="text-base text-secondary font-youngSerif">Proudly Australian</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="bg-secondary text-white p-1 rounded-4xl w-fit h-fit"></span>
                            <p className="text-base text-secondary font-youngSerif">Premium Quality</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="bg-secondary text-white p-1 rounded-4xl w-fit h-fit"></span>
                            <p className="text-base text-secondary font-youngSerif">Competitive</p>
                        </div>
                    </div>
                    <Link
                        href="/contact-us"
                        className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-brand border border-brand px-4 sm:px-6 lg:px-8 py-3 md:py-4 transition-all duration-300 hover:-translate-y-1"
                    >
                        <span
                            className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 ease-out group-hover:translate-y-0"
                        ></span>

                        <span
                            className="relative z-10 font-semibold text-white transition-colors duration-300 group-hover:text-brand text-xs sm:text-xs"
                        >
                            About Us
                        </span>
                    </Link>
                </div>
            </div>

        </section>
    );
}
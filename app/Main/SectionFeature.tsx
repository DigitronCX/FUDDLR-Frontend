import Image from "next/image";
import Link from "next/link";

const features = [
    {
        title: "Curated Brand Selection",
        desc: "We carefully choose innovative, high quality pet food brands that align with our values of trust, nutrition, and transparency.",
        img: "/Sections/Feat1.png",
        imgClass: "bottom-0 -right-1 w-16 md:w-24",
    },
    {
        title: "Innovative Retailer Portal",
        desc: "Our dedicated retailer portal simplifies bulk ordering, wholesale pricing access, and seamless product management for efficient business operations.",
        img: "/Sections/Feat2.png",
        imgClass: "-bottom-4 left-1/2 -translate-x-1/2 w-20 md:w-28",
        class: "translate-y-15"
    },
    {
        title: "Diversified Brand Network",
        desc: "We offer a wide range of trusted and innovative pet food brands, giving retailers access to multiple categories in one place.",
        img: "/Sections/Feat3.png",
        imgClass: "bottom-0 -right-1 w-20 md:w-28",
    },
    {
        title: "Flexible Trade Credit Access",
        desc: "Approved retailers can access trade credit options, helping manage cash flow while ensuring consistent product availability.",
        img: "/Sections/Feat4.png",
        imgClass: "bottom-0 -right-1 w-14 md:w-22",
        class: "translate-y-15"
    },
];

export default function SectionFeature() {
    return (
        <section className="py-20 bg-gray-50 relative">
            {/* Heading */}
            <div className="text-center mb-12 flex flex-col gap-4">
                <h2 className="text-4xl text-secondary font-youngSerif ">
                    What Sets{" "}
                    <span className="text-brand font-bold">FUDDLR</span> Apart
                </h2>

                <button>
                    <Link
                        href="/contact-us"
                        className="group relative inline-flex items-center justify-center overflow-hidden bg-brand rounded-full border border-brand px-4 sm:px-6 lg:px-8 py-3 md:py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30"
                    >
                        <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 ease-out group-hover:translate-y-0" />
                        <span className="relative z-10 font-semibold text-white transition-colors duration-300 group-hover:text-brand text-xs">
                            Join Now
                        </span>
                    </Link>
                </button>
            </div>

            {/* Cards */}
            <div className="mx-4 md:mx-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 pb-25">
                {features.map((item, i) => (
                    <div
                        key={i}
                        className={`${item.class} relative rounded-3xl border border-accent md:p-6 p-4 h-[220px] sm:h-[290px] md:min-h-[370px] overflow-hidden shadow-sm w-full`}
                    >
                        <h3 className="text-2xl text-secondary mb-3 font-youngSerif">
                            {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            {item.desc}
                        </p>

                        {/* Image */}
                        <div className={`absolute ${item.imgClass}`}>
                            <Image
                                src={item.img}
                                alt={item.title}
                                width={120}
                                height={120}
                                className="object-contain w-full h-auto"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
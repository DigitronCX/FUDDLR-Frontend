import { IconCheck, IconCheckbox } from "@tabler/icons-react";
import Image from "next/image";
// import { CheckCircle } from "lucide-react";

const features = [
    {
        title: "Trading Portal for Retailers",
        desc: "FUDDLR offers a simple, user friendly portal where retailers can easily browse products and place bulk orders anytime with just a few clicks.",
    },
    {
        title: "Secure Payment System",
        desc: "Our platform ensures safe and reliable transactions, giving retailers complete confidence and peace of mind with every purchase.",
    },
    {
        title: "Low or No Bulky MOQ's",
        desc: "Low or no minimum order requirements for greater flexibility to retailers",
    },
];

export default function MainTrusted() {
    return (
        <section className="relative bg-background py-10 md:py-20 px-4 sm:px-6 md:px-12  overflow-hidden">

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

                {/* LEFT - Tablet Image */}

                <div className="relative flex justify-start">
                    <Image
                        src="/Sections/FeatureMain.jpeg" // replace with your mockup image
                        alt="FUDDLR dashboard"
                        width={650}
                        height={500}
                        className="w-5/6 h-auto z-10 rounded-4xl"
                    />

                    {/* Small Image */}
                    <div className="absolute bottom-0 right-0 translate-y-1/4 -translate-x-3 size-24 sm:size-32 md:size-40 rounded-2xl bg-linear-to-tl from-background to-accent/40 overflow-hidden shadow-lg flex items-center justify-center z-10">
                        <Image
                            src="/Sections/FeatureMain.jpeg" // replace with your image
                            alt="Dog playing"
                            width={100}
                            height={100}
                            className="object-cover size-full"
                        />
                    </div>
                    <div className="absolute top-0 left-10 h-40 w-full z-0 bg-accent blur-3xl rounded-full opacity-20" />
                    <div className="absolute bottom-0 left-10 h-40 w-full z-0 bg-accent blur-3xl rounded-full opacity-20" />
                </div>
                {/* RIGHT CONTENT */}
                <div>
                    <p className="text-xs tracking-[0.3em] text-primary mb-3 font-poppins">
                        TRUSTED WHOLESALE
                    </p>

                    <h2 className="text-3xl sm:text-4xl lg:text-5xl text-secondary mb-2 font-youngSerif">
                        <span className="text-brand">Your Trusted </span> Wholesale Partner
                    </h2>

                    <p className="text-gray-600 text-sm sm:text-base mb-8 leading-relaxed">
                        Your trusted wholesale partner for Australian pet retailers, delivering quality products worldwide with dependable margins.
                    </p>

                    {/* Feature List */}
                    <div className="space-y-6">
                        {features.map((item, i) => (
                            <div key={i} className="flex items-start gap-5">
                                <div className="bg-brand rounded-full p-2 mt-1">
                                    <IconCheck className="text-white size-4" />
                                </div>

                                <div>
                                    <h3 className="text-lg sm:text-xl text-secondary font-youngSerif">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </section>
    );
}
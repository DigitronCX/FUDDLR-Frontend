import { IconPawFilled } from "@tabler/icons-react";
import Image from "next/image";

export default function MainAbout() {
    return (
        <section className="w-full bg-white py-20 px-6 md:px-16 relative z-10 overflow-hidden">
            {/* <div className="absolute top-10 left-10 size-10 bg-accent rounded-lg opacity-30 "></div>
            <div className="absolute bottom-10 -right-10 w-20 h-20 bg-green-300 rounded-xl opacity-40"></div> */}
            <div className="mx-auto grid md:grid-cols-2 gap-5 items-center">

                {/* LEFT: Images */}
                <div className="relative flex justify-center md:justify-center w-full">

                    {/* Main Image */}
                    <div className="relative rounded-3xl overflow-hidden bg-brand w-3/4 flex justify-center z-20">
                        <Image
                            src="/Sections/AboutPage.png" // replace with your image
                            alt="Dog"
                            width={350}
                            height={200}
                            className="object-contain w-auto h-auto"
                        />
                    </div>

                    {/* Small Image */}
                    <div className="absolute z-20 bottom-0 left-0 translate-y-1/4 -translate-x-3 size-30 rounded-2xl bg-accent overflow-hidden shadow-lg flex items-center justify-center">
                        <IconPawFilled className="text-white size-14 -rotate-15" />
                        {/* <Image
                            src="/Images/Vector.svg" // replace with your image
                            alt="Dog playing"
                            width={100}
                            height={100}
                            className="object-cover size-12"
                        /> */}
                    </div>
                    {/* <div className="absolute top-0 right-0 -translate-y-10 -translate-x-3 size-30 rounded-2xl bg-linear-to-tl from-background to-accent/40 overflow-hidden shadow-lg flex items-center justify-center z-10"></div> */}
                </div>

                {/* RIGHT: Content */}
                <div>
                    <p className="text-base tracking-widest text-tertiary mb-2 font-poppins font-light ">
                        ABOUT US
                    </p>

                    <h2 className="text-4xl md:text-5xl mb-6 text-brand font-youngSerif">
                        About <span className="text-secondary">Our Journey</span>
                    </h2>

                    <p className="text-primary mb-4 leading-relaxed">
                        At FUDDLR, we believe pets are more than just animals they are family. Our goal is simple: to bring better, cleaner, and more honest food choices to the pets we love.
                    </p>

                    <p className="text-primary mb-6 leading-relaxed">
                        We work with brands that care about what goes into their products, focusing on real ingredients, thoughtful nutrition, and complete transparency Because when it comes to our pets, only the best will do.
                    </p>

                    <button className="btn-primary">
                        About Us
                    </button>
                </div>
            </div>
        </section>
    );
}
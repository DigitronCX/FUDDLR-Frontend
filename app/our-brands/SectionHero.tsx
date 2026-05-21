export default function BrandGrowthSection() {
    return (
        <section className="relative py-20 px-6 overflow-hidden">
            {/* Background blobs */}
            {/* <div className="z-0">
                <div className="absolute top-10 left-10 w-16 h-16 bg-linear-to-b to-background from-brand rounded-xl opacity-40"></div>
                <div className="absolute bottom-10 right-10 w-20 h-20 bg-green-300 rounded-xl opacity-40 z-0"></div>
            </div> */}

            <div className="mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

                {/* LEFT SIDE */}
                <div>
                    <h1 className="text-4xl md:text-5xl text-secondary leading-tight font-youngSerif">
                        Are You a Brand <br /> Looking to Grow?
                    </h1>

                    <p className="mt-6 text-gray-600 max-w-lg leading-relaxed">
                        Partner with FUDDLR to access a boutique distribution model designed to help your brand stand out & not get lost. We work closely with a curated selection of brands, offering dedicated support, retail connections, and optional sales growth packages to help you scale in the Australian market.
                    </p>

                    <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition">
                        Brands Apply Now
                    </button>
                </div>

                {/* RIGHT SIDE CARDS */}
                <div className="bg-green-100 border border-green-400 rounded-3xl flex flex-col md:flex-row overflow-hidden">

                    {/* Card 1 */}
                    <div className="flex-1 p-6 bg-accent border-b md:border-b-0 md:border-r border-accent flex flex-col justify-center items-center">
                        <h3 className="text-xl font-semibold text-background">
                            Competitive Pricing
                        </h3>
                        <p className="mt-2 text-background text-sm">
                            Maximise margins with competitive & attractive pricing.
                        </p>
                    </div>

                    {/* Card 2 */}
                    {/* <div className="flex-1 p-6 border-b md:border-b-0 md:border-r border-green-300"> */}
                    <div className="flex-1 p-6 bg-accent border-b md:border-b-0 md:border-r border-accent flex flex-col justify-center items-center">

                        <h3 className="text-xl font-semibold text-background">
                            Active In-Store Advocacy
                        </h3>
                        <p className="mt-2 text-background text-sm">
                            Engage retailers, educate, promote products effectively.
                        </p>
                    </div>

                    {/* Card 3 */}
                    {/* <div className="flex-1 p-6"> */}
                    <div className="flex-1 p-6 bg-accent border-b md:border-b-0 md:border-r border-accent flex flex-col justify-center items-center">
                        <h3 className="text-xl font-semibold text-background">
                            Tailored Brand Support
                        </h3>
                        <p className="mt-2 text-background text-sm">
                           Sales consulting & brand-building services to strengthen market positioning.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
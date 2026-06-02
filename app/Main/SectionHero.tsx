"use client";
import BrandMarquee from '@/components/BrandMarquee'
import Image from 'next/image'
import Link from 'next/link'

const SectionHero = () => {
    return (
        <div style={{
            background: 'url(/Sections/HeroBck.webp) no-repeat center center fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }} className="sm:min-h-screen pb-24 pt-10 lg:pb-0 lg:pt-20 px-4 sm:px-8 lg:px-14 relative overflow-hidden flex justify-center items-center">

            <section className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 sm:gap-4">

                {/* ============ Left Side ============ */}
                <div className="relative flex flex-col items-center lg:items-start text-center lg:text-left flex-1 gap-4 lg:mb-20">

                    <h2 className='text-3xl md:text-5xl lg:text-[70px] font-bold text-secondary leading-tight font-youngSerif'>
                        Distributor of all <span className="text-brand">things pet.</span>
                    </h2>

                    <p className='text-sm sm:text-lg text-secondary font-poppins max-w-md'>
                        Boutique distribution of premium pet supplies, worldwide.
                    </p>
                    <div className="w-10/12 lg:w-[55%] flex-1 relative flex md:hidden items-center justify-center">
                        <Image
                            src="/Sections/HeroHome.webp"
                            alt="Dog"
                            width={600}
                            height={600}
                            priority
                            fetchPriority="high"
                            quality={60}
                            sizes="83vw"
                            // sizes="(max-width: 768px) 83vw, 55vw"
                            className="z-10 w-full h-auto object-cover"
                        />
                    </div>
                    <div className='flex flex-col md:flex-row justify-center items-center gap-2 mt-5'>

                        <Link
                            href="/contact-us"
                            className="group relative inline-flex items-center justify-center overflow-hidden bg-brand rounded-full border border-brand px-4 sm:px-6 lg:px-8 py-3 md:py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30"
                        >
                            <span
                                className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 ease-out group-hover:translate-y-0"
                            ></span>

                            <span
                                className="relative z-10 font-semibold text-white transition-colors duration-300 group-hover:text-brand text-xs sm:text-xs"
                            >
                                Wholesaler Register Now
                            </span>
                        </Link>
                        <Link
                            href="/contact-us"
                            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-white border border-brand px-4 sm:px-2 lg:px-8 py-3 md:py-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/30"
                        >
                            <span
                                className="absolute inset-0 translate-y-full bg-brand transition-transform duration-500 ease-out group-hover:translate-y-0"
                            ></span>

                            <span
                                className="relative z-10 font-semibold text-brand transition-colors duration-300 group-hover:text-white text-xs sm:text-xs"
                            >
                                Are you a brand? <span className='underline font-semibold'>Sell on FUDDLR</span>
                            </span>
                        </Link>
                    </div>

                    <section className='hidden lg:block absolute bottom-0 lg:-bottom-[28%] w-full'>
                        <BrandMarquee />
                    </section>
                </div>


                {/* ============ Right Side ============ */}
                <div className="w-10/12 lg:w-[55%] flex-1 relative md:flex hidden items-center justify-center">
                    <Image
                        src="/Sections/HeroHome.webp"
                        alt="Dog"
                        width={600}
                        height={600}
                        priority
                        className="z-10 w-full h-auto object-cover"
                    />
                </div>
            </section>

            <section className='block lg:hidden absolute bottom-0 lg:-bottom-[28%] w-full'>
                <BrandMarquee />
            </section>
        </div>
    )
}

export default SectionHero
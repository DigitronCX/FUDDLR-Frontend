import BrandMarquee from '@/components/BrandMarquee'
import Image from 'next/image'

const SectionHero = () => {
    return (
        <div style={{
            background: 'url(/Sections/HeroBck.webp) no-repeat center center fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }} className="min-h-screen h-full pb-24 pt-10 lg:pb-0 lg:pt-20 px-4 sm:px-8 lg:px-14 relative overflow-hidden">

            <section className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 sm:gap-10">

                {/* ============ Left Side ============ */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 gap-4 lg:mb-20">

                    <h2 className='text-3xl md:text-5xl lg:text-[70px] font-bold text-secondary leading-tight font-youngSerif'>
                        Distributor of all <span className="text-brand">things pet.</span>
                    </h2>

                    <p className='text-sm sm:text-lg text-secondary font-poppins max-w-md'>
                        Boutique distribution of premium pet supplies, worldwide.
                    </p>

                    <div className='flex flex-wrap justify-center items-center gap-2 mt-5'>
                        <button className="px-4 text-xs sm:text-sm sm:px-8 py-3 sm:py-4 font-medium bg-brand rounded-4xl cursor-pointer border border-transparent text-white hover:border-brand/80 hover:text-white transition-colors">
                            Wholesaler Register Now
                        </button>
                        <button className="px-4 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-medium bg-transparent rounded-4xl cursor-pointer border border-brand text-brand hover:border-tertiary/80 hover:bg-background/70 duration-500 hover:text-secondary capitalize transition-all">
                            Are you a brand? <span className='underline font-semibold'>Sell on FUDDLR</span>
                        </button>
                    </div>
                </div>


                {/* ============ Right Side ============ */}
                <div className="w-10/12 lg:w-[55%] flex-1 relative flex items-center justify-center">
                    <Image
                        src="/Sections/Hero-Main.webp"
                        alt="Dog"
                        width={600}
                        height={600}
                        priority
                        className="z-10 w-full h-auto object-cover"
                    />
                </div>

            </section>

            <section className='absolute -bottom-0 lg:bottom-[8%] left-0 right-0 w-full'>
                <BrandMarquee />
            </section>
        </div>
    )
}

export default SectionHero
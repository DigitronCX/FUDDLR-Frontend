import './marues.css'

const Text = [
    "100% Australian owned",
    "Low MOQ",
    "Distributor Pricing",
    "Fast Dispatch",
    "100% Australian owned",
    "Low MOQ",
    "Distributor Pricing",
    "Fast Dispatch",
]
const BrandMarquee = () => {

    return (
        <div className='py-1 w-full overflow-hidden'>
            <div className="marquee">
                {
                    Text.map((text, i) => (
                        <div
                            key={i}
                            className='flex items-center h-16 shrink-0 px-6 text-sm sm:text-base text-secondary font-youngSerif'
                        >
                            <div className='flex gap-3 items-center'>
                                <div className='p-1 rounded-full border border-brand'></div>
                                {text}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BrandMarquee
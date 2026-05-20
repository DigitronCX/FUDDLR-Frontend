import Image from 'next/image'
import React from 'react'
import Marquee from "react-fast-marquee"

const logos = [

    "/Logo/logoipsum-414.png",
    "/Logo/logoipsum-416.png",
    "/Logo/logoipsum-418.png",
    "/Logo/logoipsum-422.png",
]
const Text = [
    "100% Australian owned",
    "Low MOQ Distributor Pricing",
    "Fast Dispatch",
]
const BrandMarquee = () => {
    return (
        <div className='py-1 w-full'>
            <Marquee speed={80} pauseOnHover  autoFill>
                {
                    Text.map((text, i) => (
                        <span
                            key={i}
                            className='w-20 h-12 sm:w-24 sm:h-24 lg:w-32 lg:h-28 text-base text-secondary mx-4 sm:mx-6 font-youngSerif'
                        >
                            <div className='flex gap-3 items-center ml-4'>
                                <div className='p-1 rounded-full border border-brand'>
                                </div>
                                {text}
                            </div>
                        </span>
                    ))
                }
            </Marquee>
        </div>
    )
}

export default BrandMarquee
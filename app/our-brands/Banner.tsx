import React from 'react'

const Banner = () => {
    return (
        <section className='text-start mx-auto py-10 px-6 md:px-12'>
            <div className='bg-linear-to-b from-brand to-tertiary shadow-lg px-8 py-14 rounded-4xl'>
                <p className='text-4xl text-zinc-300 font-medium'>
                    <span className='text-[54px] text-background mb-4 font-bold'>Looking to grow your brand?</span> We work with selected partners and offer tailored sales and brand support where needed to help you succeed (POA).
                </p>
            </div>
        </section>
    )
}

export default Banner
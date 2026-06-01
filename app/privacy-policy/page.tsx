import React from 'react'

const PrivacyPolicy = () => {
    return (
        <main className='min-h-screen py-8 sm:py-16 px-4 sm:px-14 text-secondary'>
            <section className='flex flex-col items-start justify-start mb-5 sm:mb-15'>
                <h1 className='font-youngSerif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-secondary font-bold'>Privacy Policy</h1>
            </section>
            <section className='flex flex-col items-start justify-start mb-5 sm:mb-10'>
                <h2 className='font-youngSerif text-2xl sm:text-3xl md:text-5xl text-secondary font-bold'>Information Collected via Email</h2>
                <div className='space-y-2 list-disc mt-2 sm:mt-5 font-light text-xs sm:text-lg'>
                    <p>
                        When you email us, we will record your email address and will only use it for the purpose for which you provided it. Your email address will not be added to a mailing list. We will not disclose your email address without your consent, except where required or authorised by law.
                    </p>
                </div>
            </section>

            <section className='flex flex-col items-start justify-start mb-5 sm:mb-10'>
                <h2 className='font-youngSerif text-2xl sm:text-3xl md:text-5xl text-secondary font-bold'>Information Collected via Online Forms</h2>
                <div className='space-y-2 list-disc mt-2 sm:mt-5 font-light text-xs sm:text-lg'>
                    <p>
                        When you use our online forms, we may collect your name, email address, street address, telephone number, company name, area of interest, and other personal information you provide. This information is used solely for the purpose for which it was provided. It will not be added to a mailing list, and we will not disclose it without your consent except where required or authorised by law.
                    </p>
                </div>
            </section>
            <section className='flex flex-col items-start justify-start mb-5 sm:mb-10'>
                <h2 className='font-youngSerif text-2xl sm:text-3xl md:text-5xl text-secondary font-bold'>Access & Correction</h2>
                <div className='space-y-2 list-disc mt-2 sm:mt-5 font-light text-xs sm:text-lg'>
                    <p>
                        In accordance with Australian Privacy Principles 12 and 13 of the Privacy Act 1988 (Cth), you may request access to, or correction of, any personal information we hold about you. To make a request, please contact us at FUDDLR@outlook.com or call 0416 165 987
                    </p>
                </div>
            </section>
        </main >
    )
}

export default PrivacyPolicy
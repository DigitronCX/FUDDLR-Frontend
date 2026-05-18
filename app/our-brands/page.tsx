import React from 'react'
import BrandGrowthSection from './SectionHero'
import FeaturedBrands from './FeaturedBrands'
import Banner from './Banner'
import BrandForm from './BrandForm'

const page = () => {
    return (
        <>
            <main className="min-h-screen">
                <BrandGrowthSection />
                <FeaturedBrands />
                <Banner />
                <BrandForm />
            </main>
        </>
    )
}

export default page
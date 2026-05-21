import React from 'react'
import BrandGrowthSection from './SectionHero'
import FeaturedBrands from './FeaturedBrands'
import Banner from './Banner'
import BrandForm from './BrandForm'

const page = () => {
    return (
        <>
            <main>
                <BrandGrowthSection />
                <FeaturedBrands />
                <Banner />
                <BrandForm />
            </main>
        </>
    )
}

export default page
import React from 'react'
import BrandGrowthSection from './SectionHero'
import FeaturedBrands from './FeaturedBrands'
import Banner from './Banner'
import BrandForm from './BrandForm'
import CardsSection from './HeroCards'

const page = () => {
    return (
        <>
            <CardsSection />
            {/* <BrandGrowthSection /> */}
            <FeaturedBrands />
            <Banner />
            <BrandForm />
        </>
    )
}

export default page
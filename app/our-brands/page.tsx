import FeaturedBrands from './FeaturedBrands'
import Banner from './Banner'
import BrandForm from './BrandForm'
import CardsSection from './HeroCards'
import { createPageMetadata } from '../seo'

export const metadata = createPageMetadata({
    title: "Our Brands",
    description:
        "Partner with FUDDLR to grow your pet brand through wholesale distribution, retailer access, and hands-on sales support.",
    path: "/our-brands",
});

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

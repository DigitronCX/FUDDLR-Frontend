"use client"
import BrandMarquee from '@/components/BrandMarquee'
import SectionAbout from './Main/SectionAbout'
import SectionHero from './Main/SectionHero'
import SectionRetailers from './Main/SectionRetailers'
import SectionFuddlerBrands from './Main/SectionBrands'
import SectionCTA from './Main/SectionCTA'
import CarouselSection from './Main/CarouselSection'
import SectionSteps from './Main/SectionSteps'
import MainCTA from './Main/MainCTA'
import SectionHowWorks from './Main/SectionHowWorks'

const page = () => {
  return (
    <main>
      <SectionHero />
      <CarouselSection />
      <SectionRetailers />
      <SectionSteps />
      <SectionFuddlerBrands />
      <SectionAbout />
      <SectionCTA />
      {/* <MainCTA /> */}
      <SectionHowWorks />
    </main>
  )
}

export default page
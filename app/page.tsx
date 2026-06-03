"use client"
import dynamic from 'next/dynamic'
import SectionAbout from './Main/SectionAbout'
import SectionHero from './Main/SectionHero'
import SectionRetailers from './Main/SectionRetailers'
import SectionFuddlerBrands from './Main/SectionBrands'
import SectionCTA from './Main/SectionCTA'
// import CarouselSection from './Main/CarouselSection'
import SectionSteps from './Main/SectionSteps'
import SectionHowWorks from './Main/SectionHowWorks'

const CarouselSection = dynamic(() => import("./Main/CarouselSection"), {
  ssr: false,
  loading: () => <div className="min-h-screen" />,
});

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
      <SectionHowWorks />
    </main>
  )
}

export default page
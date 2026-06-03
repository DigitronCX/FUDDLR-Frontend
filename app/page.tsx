import dynamic from 'next/dynamic'
import SectionHero from './Main/SectionHero'
// import CarouselSection from './Main/CarouselSection'
import SectionRetailers from './Main/SectionRetailers'
import SectionCTA from './Main/SectionCTA'
// import SectionFuddlerBrands from './Main/SectionBrands'
// import SectionAbout from './Main/SectionAbout'
// import SectionSteps from './Main/SectionSteps'
// import SectionHowWorks from './Main/SectionHowWorks'

const CarouselSection = dynamic(() => import("./Main/CarouselSection"), {
  loading: () => <div className="min-h-screen" />,
});
const SectionFuddlerBrands = dynamic(() => import("./Main/SectionBrands"), {
  loading: () => <div className="min-h-screen" />,
});
const SectionAbout = dynamic(() => import("./Main/SectionAbout"), {
  loading: () => <div className="min-h-screen" />,
});
const SectionHowWorks = dynamic(() => import("./Main/SectionHowWorks"), {
  loading: () => <div className="min-h-screen" />,
});
const SectionSteps = dynamic(() => import("./Main/SectionSteps"), {
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
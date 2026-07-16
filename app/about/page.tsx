import MainAbout from './MainAbout'
import MainTrusted from './MainTrusted'
import MissionVision from './MissionVision'
import FounderMsg from './FounderMsg'
import SectionFeature from '../Main/SectionFeature'
import FaqSection from './FaqSection'
import { createPageMetadata } from '../seo'

export const metadata = createPageMetadata({
  title: "Why FUDDLR",
  description:
    "Learn how FUDDLR helps pet retailers with trusted wholesale supply, brand curation, and dependable retail support.",
  path: "/about",
});

const page = () => {
  return (
    <main>
      <MainAbout />
      <MainTrusted />
      <MissionVision />
      <FounderMsg />
      <SectionFeature />
      <FaqSection />
    </main>
  )
}

export default page

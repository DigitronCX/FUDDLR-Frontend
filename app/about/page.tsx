import React from 'react'
import MainAbout from './MainAbout'
import MainTrusted from './MainTrusted'
import MissionVision from './MissionVision'
import FounderMsg from './FounderMsg'
import SectionFeature from '../Main/SectionFeature'
import FaqSection from './FaqSection'

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
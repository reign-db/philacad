import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import VisionMission from '../components/home/VisionMission'
import OfficialLogosSection from '../components/home/OfficialLogosSection'
import DirectorMessage from '../components/home/DirectorMessage'
import EditorialBoardSection from '../components/home/EditorialBoardSection'

export default function HomePage() {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash === '#about-publishing') {
      const el = document.getElementById('about-publishing')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [hash])

  return (
    <>
      <HeroSection />
      <AboutSection />
      <VisionMission />
      <OfficialLogosSection />
      <DirectorMessage />
      <EditorialBoardSection />
    </>
  )
}

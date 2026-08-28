import usePageTitle from '../hooks/usePageTitle'
import Hero from '../components/Hero'
import MyWebsitesShowcase from '../components/MyWebsitesShowcase'
import Testimonials from '../components/Testimonials'
import CTASection from '../components/CTASection'
import { pageMeta } from '../data/site'

export default function HomePage() {
  usePageTitle(pageMeta.home)

  return (
    <main>
      <Hero />
      <MyWebsitesShowcase />
      <Testimonials />
      <CTASection />
    </main>
  )
}

import usePageTitle from '../hooks/usePageTitle'
import PageHeader from '../components/PageHeader'
import About from '../components/About'
import WorkProcess from '../components/WorkProcess'
import CTASection from '../components/CTASection'
import { brand, pageMeta } from '../data/site'

export default function AboutPage() {
  usePageTitle(pageMeta.about)

  return (
    <main>
      <PageHeader
        eyebrow="About"
        title={`The developer behind ${brand.name}`}
        description="Self-taught web developer building custom sites for clients on Fiverr and beyond."
      />
      <About />
      <WorkProcess />
      <CTASection />
    </main>
  )
}

import usePageTitle from '../hooks/usePageTitle'
import PageHeader from '../components/PageHeader'
import About from '../components/About'
import WorkProcess from '../components/WorkProcess'
import { brand, pageMeta } from '../data/site'

export default function AboutPage() {
  usePageTitle(pageMeta.about)

  return (
    <main>
      <PageHeader
        eyebrow="About"
        title={`The developer behind ${brand.name}`}
        description="Custom websites, a clear process, and live work you can review before you hire."
      />
      <About />
      <WorkProcess />
    </main>
  )
}

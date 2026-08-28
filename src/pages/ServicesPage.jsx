import usePageTitle from '../hooks/usePageTitle'
import PageHeader from '../components/PageHeader'
import Services from '../components/Services'
import WorkProcess from '../components/WorkProcess'
import CTASection from '../components/CTASection'
import { pageMeta } from '../data/site'

export default function ServicesPage() {
  usePageTitle(pageMeta.services)

  return (
    <main>
      <PageHeader
        eyebrow="Services"
        title="Web development services"
        description="From business websites to online stores — every project is coded by hand for your brand."
      />
      <Services />
      <WorkProcess />
      <CTASection />
    </main>
  )
}

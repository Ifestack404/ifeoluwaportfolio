import usePageTitle from '../hooks/usePageTitle'
import PageHeader from '../components/PageHeader'
import MyWebsitesShowcase from '../components/MyWebsitesShowcase'
import CTASection from '../components/CTASection'
import { pageMeta } from '../data/site'

export default function ProjectsPage() {
  usePageTitle(pageMeta.projects)

  return (
    <main>
      <PageHeader
        eyebrow="Portfolio"
        title="Work you can click, test, and trust"
        description="Every project below is a live website. Review the design, speed, and quality — then hire with a clear picture of what you’ll get."
      />
      <MyWebsitesShowcase />
      <CTASection />
    </main>
  )
}

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
        title="Websites I've built"
        description="Click any link below to open the live website in a new tab and review my work."
      />
      <MyWebsitesShowcase />
      <CTASection />
    </main>
  )
}

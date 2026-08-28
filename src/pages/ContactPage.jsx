import usePageTitle from '../hooks/usePageTitle'
import PageHeader from '../components/PageHeader'
import Contact from '../components/Contact'
import { pageMeta } from '../data/site'

export default function ContactPage() {
  usePageTitle(pageMeta.contact)

  return (
    <main>
      <PageHeader
        eyebrow="Contact"
        title="Start your project"
        description="Tell me what you need — I'll get back to you with a timeline and quote."
      />
      <Contact />
    </main>
  )
}

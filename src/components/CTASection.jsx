import { Link } from 'react-router-dom'
import { brand, profile } from '../data/site'

export default function CTASection() {
  return (
    <section className="cta-section section">
      <div className="container cta-section__inner">
        <div>
          <p className="eyebrow">Ready to start?</p>
          <h2>Let&apos;s build your website with {brand.name}</h2>
          <p>
            Order on Fiverr or send a message — I&apos;ll reply within 24 hours with next steps
            and a clear quote.
          </p>
        </div>
        <div className="cta-section__actions">
          <a
            href={profile.fiverrUrl}
            className="btn btn--primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Order on Fiverr
          </a>
          <Link to="/contact" className="btn btn--outline">
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  )
}

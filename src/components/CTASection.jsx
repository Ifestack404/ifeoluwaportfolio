import { Link } from 'react-router-dom'
import { profile } from '../data/site'

export default function CTASection() {
  return (
    <section className="cta-section section">
      <div className="container cta-section__inner">
        <div>
          <p className="eyebrow">Ready when you are</p>
          <h2>Let&apos;s build a website your customers will trust</h2>
          <p>
            Share your idea, timeline, and budget. I&apos;ll come back with a practical plan —
            not a generic template pitch.
          </p>
        </div>
        <div className="cta-section__actions">
          <Link to="/contact" className="btn btn--primary">
            Get a Quote
          </Link>
          <a href={`mailto:${profile.email}`} className="btn btn--outline">
            Email me
          </a>
        </div>
      </div>
    </section>
  )
}

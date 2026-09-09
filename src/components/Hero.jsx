import { Link } from 'react-router-dom'
import { profile, stats } from '../data/site'
import LogoHeroCanvas from './LogoHeroCanvas'

export default function Hero() {
  return (
    <section className="hero section">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="hero__status">
            <span className="hero__status-dot" aria-hidden="true" />
            {profile.availability}
          </p>

          <p className="hero__role">{profile.role}</p>

          <h1>
            {profile.headline}{' '}
            <span className="text-gradient">{profile.headlineAccent}</span>
          </h1>

          <p className="hero__lead">{profile.bio}</p>

          <div className="hero__actions">
            <a href="#my-websites" className="btn btn--primary">
              View My Work
            </a>
            <Link to="/contact" className="btn btn--outline">
              Get a Quote
            </Link>
          </div>

          <dl className="hero__stats">
            {stats.map((item) => (
              <div key={item.label} className="hero__stat">
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <LogoHeroCanvas />
      </div>
    </section>
  )
}

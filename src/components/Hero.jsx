import { Link } from 'react-router-dom'
import { brand, profile, whyHire } from '../data/site'
import MoleculePortrait from './MoleculePortrait'

export default function Hero() {
  return (
    <section className="hero section">
      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow">{profile.availability}</p>
          <h1>
            {profile.headline}{' '}
            <span className="text-gradient">{profile.headlineAccent}</span>
          </h1>
          <p className="hero__lead">
            Welcome to <strong>{brand.name}</strong> — {profile.bio}
          </p>

          <div className="hero__actions">
            <a href="#my-websites" className="btn btn--primary">
              View My Websites
            </a>
            <Link to="/contact" className="btn btn--outline">
              Get a Quote
            </Link>
            <a
              href={profile.fiverrUrl}
              className="btn btn--ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fiverr Profile
            </a>
          </div>

          <ul className="hero__checks">
            {whyHire.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <MoleculePortrait />
      </div>
    </section>
  )
}

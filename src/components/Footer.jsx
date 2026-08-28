import { Link } from 'react-router-dom'
import { brand, navLinks, profile } from '../data/site'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" className="footer__logo-link">
            <span className="navbar__logo">I</span>
            <strong>{brand.name}</strong>
          </Link>
          <p>{brand.tagline}</p>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <span className="label">Pages</span>
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__contact">
          <span className="label">Get in touch</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.social.whatsapp} target="_blank" rel="noopener noreferrer">
            {profile.phone}
          </a>
          <a href={profile.fiverrUrl} target="_blank" rel="noopener noreferrer">
            Order on Fiverr
          </a>
        </div>

        <div className="footer__social">
          <span className="label">Follow</span>
          <ul>
            {profile.social.twitter && (
              <li>
                <a href={profile.social.twitter} target="_blank" rel="noopener noreferrer">
                  Twitter
                </a>
              </li>
            )}
            {profile.social.facebook && (
              <li>
                <a href={profile.social.facebook} target="_blank" rel="noopener noreferrer">
                  Facebook
                </a>
              </li>
            )}
            {profile.social.github && (
              <li>
                <a href={profile.social.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            )}
            {profile.social.linkedin && (
              <li>
                <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>
          &copy; {year} {brand.name}. All rights reserved.
        </p>
        <p className="footer__credit">
          Built by {profile.name}
        </p>
      </div>
    </footer>
  )
}

import { Link } from 'react-router-dom'
import { brand, navLinks, profile } from '../data/site'

function isLiveLink(url = '') {
  return Boolean(url) && !/yourusername|example\.com|15551234567/i.test(url)
}

export default function Footer() {
  const year = new Date().getFullYear()
  const socials = [
    { label: 'GitHub', href: profile.social.github },
    { label: 'X / Twitter', href: profile.social.twitter },
    { label: 'Facebook', href: profile.social.facebook },
    { label: 'LinkedIn', href: profile.social.linkedin },
  ].filter((item) => isLiveLink(item.href))

  return (
    <footer className="footer">
      <div className="container footer__cta">
        <div>
          <p className="eyebrow">Let&apos;s work together</p>
          <h2>Have a project in mind?</h2>
          <p>
            Tell me what you need. I&apos;ll reply with a timeline, a clear quote, and the next
            step — usually within 24 hours.
          </p>
        </div>
        <div className="footer__cta-actions">
          <Link to="/contact" className="btn btn--primary">
            Get a Quote
          </Link>
          <Link to="/projects" className="btn btn--outline">
            See live websites
          </Link>
        </div>
      </div>

      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/" className="footer__logo-link">
            <span className="navbar__logo">I</span>
            <strong>{brand.name}</strong>
          </Link>
          <p>{brand.description}</p>
          <span className="footer__availability">{profile.availability}</span>
        </div>

        <nav className="footer__nav" aria-label="Footer navigation">
          <span className="label">Explore</span>
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__contact">
          <span className="label">Contact</span>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          <span>{profile.location}</span>
        </div>

        {socials.length > 0 && (
          <div className="footer__social">
            <span className="label">Connect</span>
            <ul>
              {socials.map((item) => (
                <li key={item.label}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="container footer__bottom">
        <p>
          &copy; {year} {brand.name}. All rights reserved.
        </p>
        <p className="footer__credit">Custom websites, built to convert.</p>
      </div>
    </footer>
  )
}

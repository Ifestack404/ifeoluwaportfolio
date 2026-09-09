import { Link } from 'react-router-dom'
import { myWebsites } from '../data/myWebsites'
import { formatWebsiteDomain, isValidWebsiteUrl } from '../utils/websiteUrl'

export default function MyWebsitesShowcase() {
  const liveSites = myWebsites.filter((site) => isValidWebsiteUrl(site.url))

  return (
    <section id="my-websites" className="portfolio-work section section--alt">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Portfolio — live work</p>
          <h2>Websites you can open and review right now</h2>
          <p>
            These are real projects I designed and developed. Click through, test them on your
            phone, and see the standard I deliver before you hire.
          </p>
        </div>

        <div className="portfolio-work__grid">
          {liveSites.map((site, index) => {
            const domain = formatWebsiteDomain(site.url)

            return (
              <article key={site.id} className="portfolio-card">
                <a
                  href={site.url.trim()}
                  className="portfolio-card__preview"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${site.name} live website`}
                >
                  <span className="portfolio-card__chrome" aria-hidden="true">
                    <i />
                    <i />
                    <i />
                    <em>{domain}</em>
                  </span>
                  <span className="portfolio-card__stage">
                    <span className="portfolio-card__index">0{index + 1}</span>
                    <strong>{site.name}</strong>
                    <small>Live website</small>
                  </span>
                </a>

                <div className="portfolio-card__body">
                  {site.category && (
                    <span className="portfolio-card__category">{site.category}</span>
                  )}
                  <h3>{site.name}</h3>
                  {site.description && <p>{site.description}</p>}
                  <div className="portfolio-card__actions">
                    <a
                      href={site.url.trim()}
                      className="btn btn--primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit live site
                    </a>
                    <Link to="/contact" className="portfolio-card__ask">
                      I want a site like this
                    </Link>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        <div className="portfolio-work__close">
          <div>
            <h3>Want a website at this level?</h3>
            <p>
              Send a short brief and I&apos;ll reply with a timeline and quote. You keep the
              source code when we launch.
            </p>
          </div>
          <Link to="/contact" className="btn btn--primary">
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  )
}

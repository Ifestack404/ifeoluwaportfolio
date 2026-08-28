import { myWebsites } from '../data/myWebsites'
import { formatWebsiteDomain, isValidWebsiteUrl } from '../utils/websiteUrl'

export default function MyWebsitesShowcase() {
  const liveCount = myWebsites.filter((site) => isValidWebsiteUrl(site.url)).length

  return (
    <section id="my-websites" className="my-websites section section--alt">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">My work — live websites</p>
          <h2>Websites I built (click to visit)</h2>
          <p>
            {liveCount === 0
              ? 'Add your links in src/data/myWebsites.js — each card below will become clickable for buyers.'
              : `${liveCount} of 5 live links ready. Buyers can open each site in a new tab.`}
          </p>
        </div>

        <div className="my-websites__grid">
          {myWebsites.map((site, index) => {
            const hasLink = isValidWebsiteUrl(site.url)
            const domain = hasLink ? formatWebsiteDomain(site.url) : null

            return (
              <article
                key={site.id}
                className={`my-websites__card ${hasLink ? 'my-websites__card--live' : 'my-websites__card--empty'}`}
              >
                <span className="my-websites__num">#{index + 1}</span>

                <h3>{site.name}</h3>
                {site.category && (
                  <span className="my-websites__category">{site.category}</span>
                )}
                {site.description && <p>{site.description}</p>}

                {hasLink ? (
                  <a
                    href={site.url.trim()}
                    className="btn btn--primary my-websites__btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit {domain} ↗
                  </a>
                ) : (
                  <div className="my-websites__placeholder">
                    <p>Add link in:</p>
                    <code>src/data/myWebsites.js</code>
                    <p className="my-websites__hint">Slot {index + 1} → set the url field</p>
                  </div>
                )}
              </article>
            )
          })}
        </div>

        <div className="my-websites__help">
          <strong>How to add your links:</strong> Open{' '}
          <code>src/data/myWebsites.js</code> → paste each live URL like{' '}
          <code>https://yourclient.com</code> → save → refresh this page.
        </div>
      </div>
    </section>
  )
}

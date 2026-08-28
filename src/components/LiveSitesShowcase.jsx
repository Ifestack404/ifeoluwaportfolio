import { Link } from 'react-router-dom'
import { projects } from '../data/site'
import { getProjectUrl, hasLiveWebsite, formatDomain } from '../utils/projectLinks'

export default function LiveSitesShowcase({ compact = false }) {
  const liveProjects = projects.filter(hasLiveWebsite)

  if (liveProjects.length === 0) {
    return (
      <section className={`live-sites ${compact ? 'live-sites--compact' : ''}`}>
        <div className="container">
          <div className="live-sites__empty">
            <p className="eyebrow">Live websites</p>
            <h2>Add your built websites</h2>
            <p>
              Open <code>src/data/site.js</code> and set <code>websiteUrl</code> for each
              project to your real live links (e.g. https://myclient.com).
            </p>
            <Link to="/projects" className="btn btn--outline">
              Go to portfolio setup
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className={`live-sites section ${compact ? 'live-sites--compact section--alt' : 'section--alt'}`}>
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Live websites</p>
          <h2>Click to visit sites I built</h2>
          <p>
            Every link opens the real, live website in a new tab — so buyers can explore
            your work directly.
          </p>
        </div>

        <ul className="live-sites__list">
          {liveProjects.map((project) => {
            const url = getProjectUrl(project)
            const domain = formatDomain(url)
            return (
              <li key={project.id} className="live-sites__item">
                <div className="live-sites__info">
                  <span
                    className="live-sites__dot"
                    style={{ background: project.accent }}
                    aria-hidden="true"
                  />
                  <div>
                    <strong>{project.title}</strong>
                    <span>{project.tech.join(' · ')}</span>
                  </div>
                </div>
                <a
                  href={url}
                  className="live-sites__link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {domain}
                  <span className="live-sites__arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              </li>
            )
          })}
        </ul>

        {!compact && (
          <p className="live-sites__note">
            Want more detail? Browse full case studies on the{' '}
            <Link to="/projects">Projects page</Link>.
          </p>
        )}
      </div>
    </section>
  )
}

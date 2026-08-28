import { getProjectUrl, hasLiveWebsite, formatDomain } from '../utils/projectLinks'

export default function ProjectCard({ project }) {
  const url = getProjectUrl(project)
  const isLive = hasLiveWebsite(project)
  const domain = formatDomain(url)

  return (
    <article className="project-card">
      {isLive ? (
        <a
          href={url}
          className="project-card__thumb project-card__thumb--link"
          style={{ '--accent': project.accent }}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.title} live website`}
        >
          {project.image ? (
            <img src={project.image} alt={`Screenshot of ${project.title}`} />
          ) : (
            <span className="project-card__initial">{project.title.charAt(0)}</span>
          )}
          <span className="project-card__visit-overlay">Visit website ↗</span>
          {project.featured && <span className="project-card__badge">Featured</span>}
        </a>
      ) : (
        <div className="project-card__thumb" style={{ '--accent': project.accent }}>
          {project.image ? (
            <img src={project.image} alt={`Screenshot of ${project.title}`} />
          ) : (
            <span className="project-card__initial">{project.title.charAt(0)}</span>
          )}
          {project.featured && <span className="project-card__badge">Featured</span>}
        </div>
      )}

      <div className="project-card__body">
        <h3>{project.title}</h3>

        {isLive && domain && (
          <a
            href={url}
            className="project-card__url"
            target="_blank"
            rel="noopener noreferrer"
          >
            {domain}
          </a>
        )}

        <p>{project.description}</p>

        {project.client && (
          <p className="project-card__client">
            <span className="label">Client</span> {project.client}
          </p>
        )}

        <ul className="project-card__tech">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="project-card__links">
          {isLive ? (
            <a
              href={url}
              className="btn btn--small btn--primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Live Website
            </a>
          ) : (
            <span className="project-card__pending">Add website link in site.js</span>
          )}
          {project.githubUrl && project.githubUrl !== '#' && (
            <a
              href={project.githubUrl}
              className="btn btn--small btn--ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

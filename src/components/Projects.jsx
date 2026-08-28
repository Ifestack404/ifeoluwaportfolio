import { useState } from 'react'
import { projectCategories, projects } from '../data/site'
import { hasLiveWebsite } from '../utils/projectLinks'
import ProjectCard from './ProjectCard'
import LiveSitesShowcase from './LiveSitesShowcase'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  const liveCount = projects.filter(hasLiveWebsite).length

  return (
    <>
      <LiveSitesShowcase />

      <section className="projects section">
        <div className="container">
          <div className="projects__intro">
            <div>
              <p className="eyebrow">Full portfolio</p>
              <h2>All website projects</h2>
              <p>
                {liveCount} of {projects.length} projects have live links. Add yours in{' '}
                <code>src/data/site.js</code> using <code>websiteUrl</code>.
              </p>
            </div>
          </div>

          <div className="projects__filters" role="tablist" aria-label="Filter projects">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={filter === cat.id}
                className={filter === cat.id ? 'is-active' : ''}
                onClick={() => setFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="projects__grid">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

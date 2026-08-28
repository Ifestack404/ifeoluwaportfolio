import { Link } from 'react-router-dom'
import { projects } from '../data/site'
import ProjectCard from './ProjectCard'

export default function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3)

  return (
    <section className="featured-projects section section--alt">
      <div className="container">
        <div className="section-header section-header--row">
          <div>
            <p className="eyebrow">Featured Work</p>
            <h2>Recent websites I built</h2>
            <p className="section-header__sub">
              Click <strong>Visit Live Website</strong> on any project to open the real site
              for buyers to review.
            </p>
          </div>
          <Link to="/projects" className="btn btn--outline">
            View All Projects
          </Link>
        </div>

        <div className="projects__grid">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

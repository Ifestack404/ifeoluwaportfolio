import { Link } from 'react-router-dom'
import { profile, skills, whyHire, portraitSrc } from '../data/site'

export default function About() {
  return (
    <section className="about section">
      <div className="container">
        <div className="about__layout">
          <div className="about__photo">
            <img
              src={portraitSrc}
              alt={`${profile.name} — ${profile.role}`}
              className="about__image"
              width={640}
              height={800}
            />
            <div className="about__photo-meta">
              <span className="about__photo-status" />
              <div>
                <strong>{profile.name}</strong>
                <small>{profile.role}</small>
              </div>
            </div>
          </div>

          <div className="about__content">
            <p className="eyebrow">The person behind the work</p>
            <h2>{profile.about.headline}</h2>
            <p className="about__lead">{profile.about.lead}</p>
            {profile.about.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <ul className="about__points">
              {whyHire.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="about__actions">
              <Link to="/contact" className="btn btn--primary">
                Start a project
              </Link>
              <Link to="/projects" className="btn btn--outline">
                Review live work
              </Link>
            </div>

            <div className="about__meta">
              <div>
                <span className="label">Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
              <div>
                <span className="label">Availability</span>
                <span>{profile.availability}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="about__skills">
          <h3>Skills & tools</h3>
          <ul className="skill-tags">
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

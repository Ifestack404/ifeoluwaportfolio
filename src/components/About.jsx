import { profile, skills } from '../data/site'

export default function About() {
  return (
    <section className="about section">
      <div className="container">
        <div className="about__grid">
          <div className="about__text">
            <p>{profile.bio}</p>
            <p>
              Every project in my portfolio was designed and coded by me. I work closely
              with buyers from first message to launch, keeping the process transparent
              and straightforward.
            </p>
            <div className="about__meta">
              <div>
                <span className="label">Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
              <div>
                <span className="label">Based in</span>
                <span>{profile.location}</span>
              </div>
            </div>
          </div>

          <div className="about__skills">
            <h3>Skills & Tools</h3>
            <ul className="skill-tags">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

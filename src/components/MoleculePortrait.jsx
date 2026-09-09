import { profile, portraitSrc } from '../data/site'

export default function MoleculePortrait() {
  return (
    <div className="hero-portrait">
      <div className="hero-portrait__glow" aria-hidden="true" />
      <div className="hero-portrait__frame">
        <img
          src={portraitSrc}
          alt={`${profile.name} — ${profile.role}`}
          className="hero-portrait__image"
          width={640}
          height={800}
          fetchPriority="high"
        />
        <div className="hero-portrait__overlay" aria-hidden="true" />
        <div className="hero-portrait__caption">
          <span className="hero-portrait__status" />
          <span>
            {profile.name}
            <small>{profile.location}</small>
          </span>
        </div>
      </div>
    </div>
  )
}

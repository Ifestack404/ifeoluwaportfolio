import { useState } from 'react'
import { profile } from '../data/site'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Project inquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setStatus('success')
  }

  return (
    <section className="contact section">
      <div className="container">
        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__item">
              <span className="label">Email</span>
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="contact__item">
              <span className="label">Phone / WhatsApp</span>
              <a href={profile.social.whatsapp} target="_blank" rel="noopener noreferrer">
                {profile.phone}
              </a>
            </div>
            <div className="contact__item">
              <span className="label">Status</span>
              <span className="status-pill">{profile.availability}</span>
            </div>

            <div className="contact__social">
              <a href={profile.fiverrUrl} target="_blank" rel="noopener noreferrer">
                Fiverr
              </a>
              <a href={profile.social.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={profile.social.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <label>
              Your name
              <input
                type="text"
                name="name"
                required
                placeholder="John Smith"
                value={form.name}
                onChange={handleChange}
              />
            </label>
            <label>
              Email address
              <input
                type="email"
                name="email"
                required
                placeholder="you@company.com"
                value={form.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Project details
              <textarea
                name="message"
                required
                rows={5}
                placeholder="What kind of website do you need? Timeline, budget, examples you like..."
                value={form.message}
                onChange={handleChange}
              />
            </label>
            <button type="submit" className="btn btn--primary btn--full">
              Send Message
            </button>
            {status === 'success' && (
              <p className="form-note" role="status">
                Your email app should open — if not, email me directly at {profile.email}.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

import { testimonials } from '../data/site'

export default function Testimonials() {
  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">Testimonials</p>
          <h2>What clients say</h2>
          <p>Social proof helps buyers trust your work. Update with real reviews.</p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((item) => (
            <blockquote key={item.name} className="testimonial-card">
              <p>&ldquo;{item.quote}&rdquo;</p>
              <footer>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

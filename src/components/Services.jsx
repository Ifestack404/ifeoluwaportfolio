import { services } from '../data/site'

export default function Services() {
  return (
    <section className="services section">
      <div className="container">
        <div className="services__grid">
          {services.map((service) => (
            <article key={service.title} className="service-card">
              <span className="service-card__icon" aria-hidden="true">
                {service.icon}
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

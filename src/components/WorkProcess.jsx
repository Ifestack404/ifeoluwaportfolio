import { processSteps } from '../data/site'

export default function WorkProcess() {
  return (
    <section className="process section section--alt">
      <div className="container">
        <div className="section-header">
          <p className="eyebrow">How I Work</p>
          <h2>A simple, reliable process</h2>
          <p>Buyers get clarity at every step — no surprises, no jargon.</p>
        </div>

        <ol className="process__steps">
          {processSteps.map((item) => (
            <li key={item.step} className="process-step">
              <span className="process-step__num">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

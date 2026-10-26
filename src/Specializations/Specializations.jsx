
import './Specializations.css'

const specializations = [
  {
    number: '01',
    title: 'Brain Surgery',
    description:
      'Specialized care for brain conditions and neurosurgical disorders.',
    icon: '🧠',
  },
  {
    number: '02',
    title: 'Spine Surgery',
    description:
      'Evaluation and treatment of conditions affecting the spine.',
    icon: '🦴',
  },
  {
    number: '03',
    title: 'Nerve Disorders',
    description:
      'Assessment and care for conditions affecting the nervous system.',
    icon: '⚕',
  },
  {
    number: '04',
    title: 'Neurosurgical Consultation',
    description:
      'Professional consultation to understand treatment options and next steps.',
    icon: '🩺',
  },
]

function Specializations() {
  return (
    <main className="specializations-page">
      <section className="specializations-hero">
        <span className="specializations-label">
          EXPERTISE & SERVICES
        </span>

        <h1>
          Areas of <span>Specialization</span>
        </h1>

        <p>
          Comprehensive neurosurgical consultation and care
          for brain, spine, and nervous system conditions.
        </p>
      </section>

      <section className="specializations-grid">
        {specializations.map((item) => (
          <article className="specialization-card" key={item.number}>
            <div className="specialization-icon">{item.icon}</div>
            <span className="specialization-number">{item.number}</span>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </article>
        ))}
      </section>

      <section className="specializations-cta">
        <h2>Need a Professional Consultation?</h2>
        <p>
          Contact the clinic to discuss your concerns and
          arrange a consultation.
        </p>
        <a href="/booking">Book a Consultation</a>
      </section>
    </main>
  )
}

export default Specializations

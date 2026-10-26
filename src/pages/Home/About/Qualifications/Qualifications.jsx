
import './Qualifications.css'

function Qualifications() {
  const qualifications = [
    {
      number: '01',
      title: 'MBBS',
      description: 'Medical degree',
    },
    {
      number: '02',
      title: 'MD',
      description: 'Listed medical qualification',
    },
    {
      number: '03',
      title: 'RMP',
      description: 'Listed professional qualification',
    },
    {
      number: '04',
      title: 'MCPS',
      description: 'Listed postgraduate qualification',
    },
    {
      number: '05',
      title: 'FCPS (Neurosurgeon)',
      description: 'Listed neurosurgical qualification',
    },
  ]

  return (
    <main className="qualifications-page">
      <section className="qualifications-hero">
        <span className="section-label">
          EDUCATION &amp; TRAINING
        </span>

        <h1>Professional Qualifications</h1>

        <p>
          Medical education and professional qualifications
          listed in the provided profile.
        </p>
      </section>

      <section className="qualifications-content">
        <div className="qualifications-grid">
          {qualifications.map((item) => (
            <article
              className="qualification-card"
              key={item.number}
            >
              <span className="qualification-number">
                {item.number}
              </span>

              <div className="qualification-symbol">✚</div>

              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div className="education-note">
          <span className="section-label">EDUCATION</span>

          <h2>Medical Education &amp; Certification</h2>

          <p>
            The provided profile references Ayub Medical College,
            Abbottabad, and the College of Physicians and Surgeons
            Pakistan.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Qualifications


import './About.css'


function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-heading">
          <span className="section-label">ABOUT THE DOCTOR</span>
          <h1>Dedicated to Brain &amp; Spine Care</h1>
          <p>
            Learn about Dr. Khalid Khan Zadran and his professional
            focus in neurosurgery.
          </p>
        </div>
      </section>

      <section className="about section" id="about">
        <div className="about-content">
          <span className="section-label">PROFESSIONAL PROFILE</span>

          <h2>Dr. Khalid Khan Zadran</h2>

          <h3 className="about-subtitle">
            Consultant Neurosurgeon | Brain &amp; Spine Surgeon
          </h3>

          <p>
            Dr. Khalid Khan Zadran is presented in this portfolio
            as a consultant neurosurgeon based in Kabul, Afghanistan,
            with a professional focus on brain and spine surgery.
          </p>

          <p>
            His profile lists qualifications including MBBS, MD,
            RMP, MCPS, and FCPS (Neurosurgeon), with education
            associated with Ayub Medical College, Abbottabad.
          </p>

          <div className="about-highlight">
            <span className="about-highlight-icon">✚</span>
            <div>
              <h3>Brain &amp; Spine Surgery</h3>
              <p>Kabul, Afghanistan</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="about-value-card">
          <span>01</span>
          <h3>Patient-Centered Care</h3>
          <p>
            Emphasizing clear communication, patient safety,
            and individualized care.
          </p>
        </div>

        <div className="about-value-card">
          <span>02</span>
          <h3>Neurosurgical Practice</h3>
          <p>
            A professional focus on conditions affecting the
            brain, spine, and nerves.
          </p>
        </div>

        <div className="about-value-card">
          <span>03</span>
          <h3>Professional Development</h3>
          <p>
            Continuing to develop knowledge and skills in
            neurosurgical care.
          </p>
        </div>
      </section>
    </main>
  )
}

export default About

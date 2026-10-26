
import doctorPhoto from '../../assets/doctor-cutout.png'
import './Home.css'

function Home() {
  return (
    <main className="home-page" id="home">
      <section className="home-hero">
        <div className="home-content">
          <p className="home-label">
            CONSULTANT NEUROSURGEON
          </p>

          <h1>Dr. Khalid Khan Zadran</h1>

          <h2>Expert Brain &amp; Spine Care</h2>

          <p className="home-description">
            Providing professional neurosurgical care for
            brain, spine, and nerve conditions with a focus
            on patient safety, compassion, and personalized
            treatment.
          </p>

          <div className="home-buttons">
            <a href="/contact" className="home-btn primary-btn">
              Contact the Clinic
            </a>

            <a href="/about" className="home-btn secondary-btn">
              Learn More
            </a>
          </div>

          <p className="home-location">
            <span>✚</span> Kabul, Afghanistan
          </p>
        </div>

        <div className="home-image">
          <img
            className="doctor-real-photo"
            src={doctorPhoto}
            alt="Doctor portrait"
          />

          <div className="image-caption">
            <span>✚</span>

            <div>
              <strong>Dr. Khalid Khan Zadran</strong>
              <p>Consultant Neurosurgeon</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home

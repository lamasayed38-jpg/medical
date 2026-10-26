
import doctorPhoto from '../assets/OIP.jpg'
import './Hero.css'

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">

        <div className="hero-content">
          <p className="hero-label">
            CONSULTANT NEUROSURGEON
          </p>

          <h1>
            Dr. Khalid Khan <span>Zadran</span>
          </h1>

          <h2>Expert Neurosurgical Care</h2>

          <p className="hero-description">
            Providing professional care for brain, spine,
            and nerve conditions with a focus on patient
            safety and compassionate care.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="hero-btn primary-btn">
              Contact the Clinic
            </a>

            <a href="#about" className="hero-btn secondary-btn">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="doctor-photo">
            <img
              src={doctorPhoto}
              alt="Dr. Khalid Khan Zadran"
            />
          </div>

          <div className="image-caption">
            <span className="status-dot"></span>

            <div>
              <h3>Dr. Khalid Khan Zadran</h3>
              <p>Consultant Neurosurgeon</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero

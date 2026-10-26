
import { Link } from 'react-router-dom'
import './Contact.css'

function Contact() {
  return (
    <main className="contact-page">
      <section className="contact-header">
        <span className="contact-label">
          GET IN TOUCH
        </span>

        <h1>Contact the Clinic</h1>

        <p>
          Have questions or need a consultation?
          Contact the clinic to discuss your concerns
          and learn about the next steps.
        </p>
      </section>

      <section className="contact-card">
        <div className="contact-icon">✚</div>

        <h2>Dr. Khalid Khan Zadran</h2>

        <p className="contact-role">
          Consultant Neurosurgeon | Brain & Spine Surgeon
        </p>

        <div className="contact-divider" />

        <p className="contact-message">
          For appointment arrangements and inquiries,
          please contact the clinic directly.
        </p>

        <Link to="/booking" className="contact-button">
          Book a Consultation
        </Link>
      </section>

      <div className="contact-back">
        <Link to="/">← Return to Home</Link>
      </div>
    </main>
  )
}

export default Contact


import { Link } from 'react-router-dom'
import './Booking.css'

function Booking() {
  return (
    <main className="booking-page">
      <section className="booking-content">
        <span className="booking-label">
          APPOINTMENTS
        </span>

        <h1>Book a Consultation</h1>

        <p>
          Take the first step toward understanding your
          brain or spine concerns. Contact the clinic to
          discuss your needs and arrange a consultation.
        </p>

        <div className="booking-actions">
          <Link to="/contact" className="booking-primary">
            Contact the Clinic
          </Link>

          <Link to="/" className="booking-secondary">
            Back to Home
          </Link>
        </div>

        <div className="booking-note">
          <span className="booking-note-icon">✚</span>

          <div>
            <h2>Personalized Medical Care</h2>

            <p>
              Please contact the clinic for appointment
              arrangements and further information.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Booking

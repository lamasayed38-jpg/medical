
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <span className="logo-icon">✚</span>
        Dr. Khalid Khan Zadran
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/qualifications">Qualifications</Link>
        <Link to="/specializations">Specializations</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <Link to="/booking" className="nav-button">
        Book a Consultation
      </Link>
    </nav>
  )
}

export default Navbar

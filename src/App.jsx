
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './Navbar/Navbar'
import Home from './pages/Home/Home'
import About from './About/About'
import Qualifications from './pages/Home/About/Qualifications/Qualifications'
import Specializations from './Specializations/Specializations'
import Booking from './Booking/Booking'
import Contact from './Contact/Contact'

import './App.css'

function Footer() {
  return (
    <footer className="site-footer">
      <p>© Dr. Khalid Khan Zadran. All rights reserved.</p>
    </footer>
  )
}

function App() {
  return (
    <BrowserRouter>
      <div className="medical-portfolio">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/qualifications" element={<Qualifications />} />
          <Route path="/specializations" element={<Specializations />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

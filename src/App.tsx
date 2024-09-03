import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Contact from './Components/Contact'
import Services from './Components/Services'
import Navbar from './Components/Navbar'
import About from './Components/About'

const App:React.FC = () => {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} /> 
          <Route path="/services" element={<Services/>} /> 
          <Route path="/about" element={<About/>} /> 
          <Route path="/contact" element={<Contact/>} /> 
        </Routes>
      </Router>

    </div>
  )
}

export default App

import React from 'react'
import { Link } from 'react-router-dom'

const Footer:React.FC = () => {
  return (
    <footer className='bg-gray-800 text-white py-10'>
      <div className='container mx-auto px-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
          <div>
            <h1 className='font-bold text-xl text-yellow-400 mb-4'>Quick Links</h1>
            <ul className='space-y-2 grid grid-rows-3'>
              <Link to="/"><a href="#home" className='hover:underline'>Home</a></Link>
              <Link to="/contact"><a href="#contact" className='hover:underline'>Contact</a></Link>
              <Link to="/about"><a href="#about" className='hover:underline'>About</a></Link>
            </ul>
          </div>
          <div>
            <h1 className='font-bold text-xl text-yellow-400 mb-4'>General Enquiry</h1>
            <ul className='space-y-2'>
              <li><a href="#payment" className='hover:underline'>How to make payment?</a></li>
              <li><a href="#select-pujari" className='hover:underline'>Can we select the pujari?</a></li>
              <li><a href="#services" className='hover:underline'>What other services are available?</a></li>
            </ul>
          </div>
          <div>
            <h1 className='font-bold text-xl text-yellow-400 mb-4'>Address</h1>
            <address className='not-italic space-y-2'>
              <p>Smart Puja</p>
              <p>Nakkhu, Lalitpur, 44600</p>
              <p>Contact: +977 9870444321</p>
            </address>
          </div>
        </div>
      </div>
      <div className='bg-gray-700 text-center py-4 mt-10'>
        <p className='text-sm'>© {new Date().getFullYear()} Smart Puja - All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer

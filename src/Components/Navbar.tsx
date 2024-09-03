import React from 'react'
import { Link } from 'react-router-dom'
import Navlogo from '../Images/nav-logo.png'

const Navbar:React.FC = () => {
  return (
    <>
    <div className='top-bar flex p-2 text-white font-play'>
      <p className='pl-20 cursor-pointer hover:text-gray-600 transition ease-in-out'>9860666319</p>
      <p className='pl-20 cursor-pointer hover:text-gray-600 transition ease-in-out'>Smartpuja@gmail.com</p>
    </div>
    <div className='flex justify-between mx-20 '>
    <div>
      <img src={Navlogo} alt="Navlogo"  className='w-10 h-auto py-5' />
    </div>
      <div className='list-none no-underline text-black flex justify-center text-lg gap-5 py-5 font-play tracking-light'>
        <Link to='/' className='cursor-pointer hover:text-gray-600 transition ease-in-out'>Home</Link>
        <Link to='/services' className='cursor-pointer hover:text-gray-600 transition ease-in-out'>Services</Link>
        <Link to='/about' className='cursor-pointer hover:text-gray-600 transition ease-in-out'>About</Link>
        <Link to="/contact" className='cursor-pointer hover:text-gray-600 transition ease-in-out'>Contact</Link>
      </div>
    </div>
    </>
  )
}

export default Navbar

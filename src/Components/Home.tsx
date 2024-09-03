import React from 'react'
import Homebg from '../Images/home-bg.jpg'
import Bookyourpuja from './InternalComponents/Bookyourpuja'
import HomeServices from './InternalComponents/HomeServices'
import HomeInfo from './InternalComponents/HomeInfo'
import Footer from './InternalComponents/Footer'
import { Link } from 'react-router-dom'

const Home:React.FC = () => {
  return (
    <>
      <div className='relative whitebg'>
        <img src={Homebg} alt="Homebg" className='w-full max-h-fit object-fill opacity-90 ' />
        <div className='absolute top-96 left-20'>
        <h1 className='text-yellow-500 text-5xl font-play'>Best Puja Experience with <br />
          Experienced and Verified 
          Pandits</h1>
        <p className=' font-play text-white text-lg py-2'>SmartPandit is your one stop solution to all different kinds of Puja and various services.</p>

        <div>
          <Link to="/about">
          <button className='text-black btn-color  py-4 px-4 rounded-xl hover:bg-yellow-600 transition ease-in-out mt-5 font-play '>Learn About Us</button>
          </Link>
        </div>
        </div>
        <Bookyourpuja/>
        <HomeServices/>
        <HomeInfo/>
        <Footer/>
      </div>
    </>
  )
}

export default Home

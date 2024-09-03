import React from 'react'
import { Link } from 'react-router-dom'

const HomeServices:React.FC = () => {
  return (
    <div className='services-bg pb-20'>
      <div className='text-center my-10 pt-10'>
        <h1 className='font-play text-5xl text-gray-800 my-20'>Our Services</h1>
      </div>
      <div className='w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
        {/* Row 1 */}
        <div className='border border-gray-300 shadow-lg h-96 rounded-xl overflow-hidden'>
          <img src="https://smartpandit.in/wp-content/uploads/2020/11/laxmi-1.jpg" alt="Laxmi Puja" className='w-full h-2/3 object-cover' />
          <p className='text-center bg-white text-black py-5 font-bold text-xl'>Laxmi Puja</p>
          <div className='flex justify-center'>
          <Link to="/contact">
            <button className='text-white bg-yellow-500 w-40 h-10 my-3 py-2 rounded-xl hover:bg-yellow-600 transition ease-in-out  font-play'>Book Now</button>
            </Link>
          </div>
        </div>
        <div className='border border-gray-300 shadow-lg h-96 rounded-xl overflow-hidden'>
          <img src="https://smartpandit.in/wp-content/uploads/2021/07/ganesha-067-1024x683.jpg" alt="Ganesh Puja" className='w-full h-2/3 object-cover' />
          <p className='text-center bg-white text-black py-5 font-bold text-xl'>Ganesh Puja</p>
          <div className='flex justify-center'>
                        <Link to="/contact">
            <button className='text-white bg-yellow-500 w-40 h-10 my-3 py-2 rounded-xl hover:bg-yellow-600 transition ease-in-out  font-play'>Book Now</button>
            </Link>
          </div>
        </div>
        <div className='border border-gray-300 shadow-lg h-96 rounded-xl overflow-hidden'>
          <img src="https://smartpandit.in/wp-content/uploads/2020/10/bhagwan_satyanarayan_13_09_2019.jpg" alt="Satya Narayan Puja" className='w-full h-2/3 object-cover' />
          <p className='text-center bg-white text-black py-5 font-bold text-xl'>Satya Narayan Puja</p>
          <div className='flex justify-center'>
                        <Link to="/contact">
            <button className='text-white bg-yellow-500 w-40 h-10 my-3 py-2 rounded-xl hover:bg-yellow-600 transition ease-in-out  font-play'>Book Now</button>
            </Link>
          </div>
        </div>
        <div className='border border-gray-300 shadow-lg h-96 rounded-xl overflow-hidden'>
          <img src="https://smartpandit.in/wp-content/uploads/2020/10/920b3405901e4fb2be8a_sath-phere-16-819x614-1.jpg" alt="Bibah" className='w-full h-2/3 object-cover' />
          <p className='text-center bg-white text-black py-5 font-bold text-xl'>Bibah</p>
          <div className='flex justify-center'>
                        <Link to="/contact">
            <button className='text-white bg-yellow-500 w-40 h-10 my-3 py-2 rounded-xl hover:bg-yellow-600 transition ease-in-out  font-play'>Book Now</button>
            </Link>
          </div>
        </div>
        {/* Row 2 */}
        <div className='border border-gray-300 shadow-lg h-96 rounded-xl overflow-hidden'>
          <img src="https://smartpandit.in/wp-content/uploads/2020/10/pooja_samagri_blog.jpg" alt="Vrat" className='w-full h-2/3 object-cover' />
          <p className='text-center bg-white text-black py-5 font-bold text-xl'>Vrat</p>
          <div className='flex justify-center'>
                        <Link to="/contact">
            <button className='text-white bg-yellow-500 w-40 h-10 my-3 py-2 rounded-xl hover:bg-yellow-600 transition ease-in-out  font-play'>Book Now</button>
            </Link>
          </div>
        </div>
        <div className='border border-gray-300 shadow-lg h-96 rounded-xl overflow-hidden'>
          <img src="https://smartpandit.in/wp-content/uploads/2020/10/spindi_16_09_2019.jpg" alt="Shradha" className='w-full h-2/3 object-cover' />
          <p className='text-center bg-white text-black py-5 font-bold text-xl'>Shradha</p>
          <div className='flex justify-center'>
                        <Link to="/contact">
            <button className='text-white bg-yellow-500 w-40 h-10 my-3 py-2 rounded-xl hover:bg-yellow-600 transition ease-in-out  font-play'>Book Now</button>
            </Link>
          </div>
        </div>
        <div className='border border-gray-300 shadow-lg h-96 rounded-xl overflow-hidden'>
          <img src="https://smartpandit.in/wp-content/uploads/2021/01/upnayan_sanskar_10_05_2018.jpg" alt="Bratabanda" className='w-full h-2/3 object-cover' />
          <p className='text-center bg-white text-black py-5 font-bold text-xl'>Bratabanda</p>
          <div className='flex justify-center'>
                        <Link to="/contact">
            <button className='text-white bg-yellow-500 w-40 h-10 my-3 py-2 rounded-xl hover:bg-yellow-600 transition ease-in-out  font-play'>Book Now</button>
            </Link>
          </div>
        </div>
        <div className='border border-gray-300 shadow-lg h-96 rounded-xl overflow-hidden'>
          <img src="https://smartpandit.in/wp-content/uploads/2020/10/154d91d5d125f4e0c00730d81d54cdf9-1024x533.jpg" alt="Hom Puja" className='w-full h-2/3 object-cover' />
          <p className='text-center bg-white text-black py-5 font-bold text-xl'>Hom Puja</p>
          <div className='flex justify-center'>
                        <Link to="/contact">
            <button className='text-white bg-yellow-500 w-40 h-10 my-3 py-2 rounded-xl hover:bg-yellow-600 transition ease-in-out  font-play'>Book Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeServices

import React from 'react'
import Homeinfobg from '../../Images/home-infobg.jpg'
import { Link } from 'react-router-dom'

const HomeInfo:React.FC = () => {
  return (
    <div>
        <div className='grid grid-cols-2 px-40 py-20 whitebg'>
            <div className=''>
                <img src={Homeinfobg} alt="" className='rounded-xl' />
            </div>
            <div className=' p-10'>
                <h1 className='text-center text-3xl font-play'>Types of Puja services offered by our excellent pandits.</h1>
                <br />
                <div>
                    <p className='flex my-6 font-play'>Smartpuja covers nearly all types of puja services according to the traditional Nepali culture. Laxmi puja, wedding, Ganesh Puja, Satya Narayan puja, Vrat,
                        Saraswati puja, Rahu Shanti puja, Griha shanti puja, Gobardhan puja, and so many other puja services are there that you can enjoy.</p>

                        <p className='flex font-play'>So, you should not wait any longer. Just connect with us and enjoy error-free high-quality puja services. God is everywhere. Pray with dedication and remove all negativities from your mind.
                             You will feel better and more connected. If you find it hard to remove negativity from your mind, 
                            connect with our Pandits.They will guide you through the best puja process that will calm your mind and let you create new opportunities in life.</p>
                    <div className='flex justify-center'>
                        <Link to="/about">
                        <button className='text-white bg-yellow-500 w-40 my-3 py-3 px-4 rounded-xl hover:bg-yellow-600 transition ease-in-out  font-play'>Learn More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default HomeInfo

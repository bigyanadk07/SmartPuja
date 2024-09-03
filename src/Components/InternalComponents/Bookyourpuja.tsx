import React from 'react'

const Bookyourpuja:React.FC = () => {
  return (
    <div className=''>
        <div className=' grid grid-cols-2 px-24 gap-x-20 pt-20  mx-80 my-20 rounded-md shadow-2xl whitebg'>
            <div>
                <h1 className='text-center font-bold text-5xl font-play'>Book Your Puja</h1>
                <p className='text-center font-play my-2 '>Please fill this form to book for a puja or occasion.</p>
                
                <div>
                    <form action="" className='w-full'>
                        <div className='flex w-full gap-1'>
                            <input type="text" placeholder='First Name' name="fname" id="fname" className='rounded-lg border border-gray-600 p-2 my-2 w-full' />
                            <input type="text" placeholder='Last Name' name="lname" id="lname" className='rounded-lg border border-gray-600 p-2 my-2 w-full'/>
                        </div>
                        <div>
                            <input type="text" name="phone" id="phone" placeholder="Mobile Number" className='rounded-lg border border-gray-600 p-2 my-2 w-full' />
                        </div>
                        <div>
                            <p className='font-bold text-left'>Looking for: <span className='text-red-700'>*</span></p>
                            <select id="select" defaultValue="Select" className='rounded-lg border border-gray-600 p-2 w-full my-2 required'>
                                <option value="Select" disabled>Select</option>
                                <option value="Ganesh Puja">Ganesh Puja</option>
                                <option value="Laxmi Puja">Laxmi Puja</option>
                                <option value="Shivaratri Puja">Shivaratri Puja</option>
                                <option value="Sartya Narayan Puja">Sartya Narayan Puja</option>
                                <option value="Hom Puja">Hom Puja</option>
                                <option value="Vrat">Vrat</option>
                                <option value="Bibah">Bibah</option>
                                <option value="Bratabanda">Bratabanda</option>
                                <option value="Shradha">Shradha</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <button type='submit' className='w-full bg-orange-600 text-white font-bold text-lg rounded-lg p-2 my-5 hover:bg-orange-700 transition ease-in-out'>
                            Book Now
                        </button>
                    </form>
                </div>
            </div>


            <div className='text-lg p-5 font-play'>
                <p>
                    With SmartPuja, booking the best Pandit in around Nepal.
                    It’s a matter of some clicks. Thanks to the advancement in the technology sector, booking the best pandits has become easier than ever. 
                    No longer do you need to knock on the doors of pandits physically or wait for hours in mandirs to have a discussion with an expert pandit. 
                    You can book all types of puja services online from the comfort of your home.
                    <br />
                    Our website is responsive enough and you can open it using your mobile browser. Probably you are reading this right from your mobile device. 
                    You just need to open the website in your browser and fill out the quote form. While filling out the quote form, you should not forget to enter the reason for the puja, date, time, and venue. 
                </p>
            </div>
            <div className='text-lg p-5 font-play col-span-2 mb-5'>
                <p>
                Our team will review the provided details and check our pandit’s availability. If you have any special requirements, you can mention the same on the quote form. 
                Generally, we help our users with a complete checklist for all readily available items that they need to perform puja in an error-free manner.
                 All the package details you will get on the website. Browse a little and you will get all the information that you need before hiring a pandit online
                </p>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

export default Bookyourpuja

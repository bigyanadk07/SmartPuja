import React, { useState } from 'react';
import Footer from '../Components/InternalComponents/Footer';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    pujaType: '',
    gotra: '',
    date: '',
    time: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
<div>
<div className='grid grid-cols-1 px-24 pb-20 gap-x-20 pt-20 mx-80 my-20 rounded-md shadow-2xl bg-white'>
      <div>
        <h1 className='text-center font-bold text-5xl mb-4 text-gray-800'>Book Your Puja</h1>
        <p className='text-center mb-6 text-gray-600'>Please fill this form to book your puja or occasion.</p>
        
        <form onSubmit={handleSubmit} className='w-full'>
          <div className='flex w-full gap-1 mb-4'>
            <input
              type="text"
              placeholder='First Name'
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className='rounded-lg border border-gray-600 p-2 w-full'
              required
            />
            <input
              type="text"
              placeholder='Last Name'
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className='rounded-lg border border-gray-600 p-2 w-full'
              required
            />
          </div>
          <div className='mb-4'>
            <input
              type="text"
              placeholder='Address'
              name="address"
              id="address"
              value={formData.address}
              onChange={handleChange}
              className='rounded-lg border border-gray-600 p-2 w-full'
              required
            />
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2'>Puja Type: <span className='text-red-700'>*</span></label>
            <select
              id="pujaType"
              name="pujaType"
              value={formData.pujaType}
              onChange={handleChange}
              className='rounded-lg border border-gray-600 p-2 w-full'
              required
            >
              <option value="" defaultValue="Select Puja Type">Select Puja Type</option>
              <option value="Laxmi Puja">Laxmi Puja</option>
              <option value="Ganesh Puja">Ganesh Puja</option>
              <option value="Satya Narayan Puja">Satya Narayan Puja</option>
              <option value="Bibah">Bibah</option>
              <option value="Vrat">Vrat</option>
              <option value="Shradha">Shradha</option>
              <option value="Bratabanda">Bratabanda</option>
              <option value="Hom Puja">Hom Puja</option>
            </select>
          </div>
          <div className='mb-4'>
            <label className='block text-gray-700 font-bold mb-2'>Gotra: <span className='text-red-700'>*</span></label>
            <select
              id="gotra"
              name="gotra"
              value={formData.gotra}
              onChange={handleChange}
              className='rounded-lg border border-gray-600 p-2 w-full'
              required
            >
              <option value="" defaultValue="Select Your Gotra">Select Your Gotra</option>
              <option value="Bharadwaj">Bharadwaj</option>
              <option value="Kashyap">Kashyap</option>
              <option value="Vasishta">Vasishta</option>
              <option value="Gautam">Gautam</option>
              <option value="Atreya">Atreya</option>
              <option value="Kaushik">Kaushik</option>
              <option value="Agastya">Agastya</option>
            </select>
          </div>
          <div className='flex gap-10 w-full'>
          <div className='mb-4 w-full'>
            <label className='block text-gray-700 font-bold mb-2' htmlFor="date">Date: <span className='text-red-700'>*</span></label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className='rounded-lg border border-gray-600 p-2 w-full'
              required
            />
          </div>
          <div className='mb-4 w-full'>
            <label className='block text-gray-700 font-bold mb-2' htmlFor="time">Time: <span className='text-red-700'>*</span></label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className='rounded-lg border border-gray-600 p-2 w-full'
              required
            />
          </div>
          </div>
          <div className='text-center'>
            <button
              type="submit"
              className='bg-orange-600 text-white font-bold text-lg rounded-lg p-2 hover:bg-orange-700 transition ease-in-out duration-200 w-full'
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  <Footer/>
</div>
  );
};

export default Contact;

import React from 'react';

const services = [
  {
    title: 'Laxmi Puja',
    img: 'https://smartpandit.in/wp-content/uploads/2020/11/laxmi-1.jpg',
  },
  {
    title: 'Ganesh Puja',
    img: 'https://smartpandit.in/wp-content/uploads/2021/07/ganesha-067-1024x683.jpg',
  },
  {
    title: 'Satya Narayan Puja',
    img: 'https://smartpandit.in/wp-content/uploads/2020/10/bhagwan_satyanarayan_13_09_2019.jpg',
  },
  {
    title: 'Bibah',
    img: 'https://smartpandit.in/wp-content/uploads/2020/10/920b3405901e4fb2be8a_sath-phere-16-819x614-1.jpg',
  },
  {
    title: 'Vrat',
    img: 'https://smartpandit.in/wp-content/uploads/2020/10/pooja_samagri_blog.jpg',
  },
  {
    title: 'Shradha',
    img: 'https://smartpandit.in/wp-content/uploads/2020/10/spindi_16_09_2019.jpg',
  },
  {
    title: 'Bratabanda',
    img: 'https://smartpandit.in/wp-content/uploads/2021/01/upnayan_sanskar_10_05_2018.jpg',
  },
  {
    title: 'Hom Puja',
    img: 'https://smartpandit.in/wp-content/uploads/2020/10/154d91d5d125f4e0c00730d81d54cdf9-1024x533.jpg',
  },
];

const ServicesPage: React.FC = () => {
  return (
    <>
      <div className='bg-gray-100 py-10 font-play'>
        <div className='container mx-auto px-6'>
          <h1 className='text-4xl font-bold text-center text-gray-800 mb-10'>Our Services</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
            {services.map((service) => (
              <div key={service.title} className='border border-gray-300 shadow-lg rounded-xl overflow-hidden'>
                <img src={service.img} alt={service.title} className='w-full h-48 object-cover' />
                <div className='p-5'>
                  <h2 className='text-xl font-semibold text-gray-700'>{service.title}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='bg-gray-700 text-center py-4 mt-10 absolute bottom-0 w-full text-white'>
        <p className='text-sm'>© {new Date().getFullYear()} Smart Puja - All Rights Reserved</p>
      </div>
    </>
  );
};

export default ServicesPage;

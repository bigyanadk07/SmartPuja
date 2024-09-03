import React from 'react'
import Aboutimg from '../Images/about.jpg'
import Footer from './InternalComponents/Footer'

const About:React.FC = () => {
  return (
    <div>
      <div>
        <h1 className='text-5xl font-play text-black font-semibold ml-40 mt-20'>Know about our team at SmartPuja</h1>
        <div className='grid grid-cols-2 px-20 mt-20'>
          <div className='px-40 mt-10'>
            <p className='flex'>
                        Booking a pandit is no longer a hassle with SmartPuja at your service. With years of experience and expertise, SmartPuja offers a comprehensive range of puja services. If you are looking for the best pandit in Nepal who is dedicated and guides clients from start to finish, look no further than SmartPuja.

            SmartPuja is committed to maintaining the sanctity and traditions of Nepali culture. With highly educated and experienced pandits, SmartPuja ensures that every ritual is performed flawlessly. Following traditional Nepali customs and Sanskrit slokas is crucial in any puja, and our pandits are well-versed in these practices. In a bustling urban environment like Kathmandu, it can be challenging to find a pandit with the right knowledge and expertise.
            <br /><br /><br />
            SmartPuja addresses this need by showcasing the skills and experience of our pandits, making it easy for you to make an informed decision.

            Whether you need a pandit for a marriage ceremony or Grahpravesh, SmartPuja has got you covered. From providing a detailed list of Samagri to offering a comprehensive guide on pre- and post-rituals, we ensure that every aspect of your puja or event is taken care of to guarantee its success.

            Choose SmartPuja for a seamless and authentic Nepali puja experience, where tradition meets dedication and excellence.
            </p>
          </div>
          <div>
            <img src={Aboutimg} alt="Smartpuja" className='h-full w-full rounded-xl'/>
          </div>
        </div>
        
        <div>
          <h1 className='text-5xl font-play text-black font-semibold ml-40 mt-20'>Why SmartPuja?</h1>
          <p className='px-60 mt-10 mb-20'>

          Certainly! Here's a revised version focused on SmartPuja as an organization based in Nepal, emphasizing its dedication to Nepali traditional culture and customs:

          If you search online, you will find plenty of options for booking pandits. Many websites make high claims, but not all of them are genuine or capable of providing the best services. Before hiring any pandit online, it is crucial to conduct a background check. At SmartPuja, we encourage you to do the same. On our platform, you will meet the best pandits with years of experience and advanced skills.

          Now the question is why you should choose SmartPuja, especially when the internet is filled with numerous options.
          <br /><br />

          <span className='font-bold'>Experience</span> – Whether you are looking for a software engineer or a pandit, experience matters in all cases. SmartPuja’s pandits are well-experienced and well-versed in all puja rituals that are integral to Nepali culture. Our pandits have advanced degrees in Sanskrit and regularly practice traditional pujas. So, if you are looking for someone who is highly knowledgeable, you should definitely consider SmartPuja.
<br /><br />
          <span className='font-bold'>Expertise</span> – To become an expert pandit, one must devote many years to learning and practice. At SmartPuja, our pandits have dedicated their lives to mastering puja skills. This commitment ensures that you will receive expert puja services tailored to your cultural and specific requirements.
<br /><br />
          <span className='font-bold'>Personalization</span> – Just like any other service, the best puja services can also be personalized. However, not all pandits know how to customize rituals and puja-related norms effectively. Achieving proper personalization requires a deep level of experience, and SmartPuja’s pandits are well-versed in the techniques of customization to meet your needs.
<br />
          Choose SmartPuja for a seamless and authentic Nepali puja experience, where tradition meets dedication and excellence.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About

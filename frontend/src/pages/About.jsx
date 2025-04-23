import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      {/*----------------TITLE OF THIS PAGE----------------*/}
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      {/*----------------IMAGE PLACEMENT----------------*/}
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Name brand clothing used to describe a company that is well-known, and which can therefore charge higher prices for its products: He recommends buying a computer from a name-brand supplier.</p>
          <p>The term fashion brand or fashion label includes all the brands that operate within the fashion industry. A fashion brand combines symbolism, style, and experiential elements, and it needs to differentiate its products and coordinate its supply chain to succeed in the market.</p>
          <b className='text-gray-800'>OUR MISSION</b>
          <p>Our mission is providing quality products and services, inspiring athletes, or promoting timeless elegance.</p>
        </div>
      </div>
      {/*----------------ABOUT US INFORMATION----------------*/}
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>QUALITY ASSURANCE:</b>
          <p className='text-gray-600'>A statement that puts a spotlight on what your brand is currently doing and focusing on to fulfill its brand purpose.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>CONVENIENCE:</b>
          <p className='text-gray-600'>Product that the customer usually buys frequently, immediately, and with a minimum of comparison and buying effort.”</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>EXCEPTIONAL CUSTOMER SERVICE:</b>
          <p className='text-gray-600'>Offers customer service in 36 languages across three time zones. Their channels include phone, live chat, email, review handling, social media, and WhatsApp.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
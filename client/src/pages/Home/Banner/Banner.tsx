import image from '../../../assets/images/ATM Sir Img.png';
import { Link } from 'react-router-dom';

import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";



const Banner = () => {
  return <div className="flex mt-10 container mx-auto px-5 lg:mt-0 flex-col lg:flex-row lg:min-h-screen lg:justify-between gap-10 lg:gap-0 items-center  font-roboto">

    {/* Text contents */}
    <div>
        {/* Name and designation */}
        <h3 className='font-oswald font-bold text-5xl  lg:text-8xl uppercase'>Atm Mahmud</h3>
        <p className=' text-xl lg:text-3xl my-8'>Career Specialist, Motivational Speaker, Entrepreneur</p>

        {/* Description */}
        <p className=' font-[200] text-lg leading-relaxed text-gray-300'>I am <span className='font-semibold'>ATM Mahmud</span>, also known as <span className='font-semibold'>ATM Sir, Founder and CEO of ATM's.</span> I'm here to be your guide on the journey to achieving your career goals.</p>

        {/* Social icons */}
        <div className='mt-12 flex justify-center md:justify-start items-center gap-6'>
           <Link className=' text-5xl lg:text-6xl hover:text-gray-200 transition-all duration-300' target='_blank' to="https://www.facebook.com/founder.atms"><FaFacebookSquare /></Link>
           <Link className='text-5xl lg:text-6xl hover:text-gray-200' target='_blank' to="https://www.linkedin.com/in/atm-mahmud-95570333"><FaLinkedin /></Link>
           <Link className='text-5xl lg:text-6xl hover:text-gray-200' target='_blank' to="https://www.instagram.com/atmmahmud"><FaInstagramSquare /></Link>
           <Link className='text-5xl lg:text-6xl hover:text-gray-200' target='_blank' to="https://twitter.com/atmmahmud1"><FaSquareTwitter /></Link>
        </div>
    </div>


    {/* Aside section */}
    <div className='lg:flex-shrink-0'>
        <img className='lg:h-[600px]' src={image} alt="Atm Mahmud hero section image" />
    </div>

  </div>
}

export default Banner
import { Link } from 'react-router-dom';
import signature from '../../../assets/images/Atm Mahmud logo.png';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareTwitter } from 'react-icons/fa6';

const Footer = () => {

    return <footer >

        <div className='bg-black'>
            <div className='lg:grid grid-cols-3 gap-10 lg:items-end font-roboto container mx-auto px-5 py-14'>
                {/* Signature */}
                <div>
                    <img className='w-48' src={signature} alt="ATM Sir signature" />
                    <p className='text-sm leading-6 text-[#FFFFFFC9] font-[300] mt-8 mb-10 lg:mb-0'>
                        As a career specialist, I leverage my expertise to help people find fulfilling career paths. Through my organization, ATM's, I offer services like career development, language training, and visa consultancy. My approach prioritizes honesty and integrity, ensuring a trustworthy environment for clients navigating the complexities of career choices.
                    </p>
                </div>

                {/* Footer content container */}
                <div className='col-span-2 flex flex-col lg:flex-row justify-evenly'>

                    {/* Primary navLinks */}
                    <ul className='flex flex-col gap-6 '>
                        <li className='text-[#FFFFFFC9]  hover:underline'>
                            <Link to="/">Home</Link>
                        </li>

                        <li className='text-[#FFFFFFC9]  hover:underline'>
                            <Link to="/about">About</Link>
                        </li>

                        <li className='text-[#FFFFFFC9] hover:underline'>
                            <Link to="/blog">Blog</Link>
                        </li>

                        <li className='text-[#FFFFFFC9] hover:underline'>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>


                    {/* Secondary navLinks */}
                    <ul className=' flex flex-col mt-6 lg:mt-0 gap-6'>
                        <li className='text-[#FFFFFFC9]  hover:underline'>
                            <Link to="/">Terms & Condition</Link>
                        </li>

                        <li className='text-[#FFFFFFC9]  hover:underline'>
                            <Link to="/">Privacy Policy</Link>
                        </li>
                    </ul>


                    {/* Social links */}
                    <div className='mt-6 lg:mt-0'>
                        <p className='text-xs mb-2 text-[#FFFFFFC9]'>Connect with ATM Mahmud</p>
                        <ul className=' flex lg:justify-center md:justify-start  gap-4'>
                            <Link className=' text-5xl lg:text-3xl hover:text-gray-200 transition-all duration-300' target='_blank' to="https://www.facebook.com/founder.atms"><FaFacebookSquare /></Link>
                            <Link className='text-5xl lg:text-3xl hover:text-gray-200' target='_blank' to="https://www.linkedin.com/in/atm-mahmud-95570333"><FaLinkedin /></Link>
                            <Link className='text-5xl lg:text-3xl hover:text-gray-200' target='_blank' to="https://www.instagram.com/atmmahmud"><FaInstagramSquare /></Link>
                            <Link className='text-5xl lg:text-3xl hover:text-gray-200' target='_blank' to="https://twitter.com/atmmahmud1"><FaSquareTwitter /></Link>
                        </ul>
                    </div>

                </div>
            </div>
        </div>


        {/* Copyright */}
        <div className='py-3 text-center font-roboto text-[#FFFFFFC9] text-sm'>
            &copy; 2024 ATM Mahmud | All Rights Reserved.
        </div>

    </footer>
}

export default Footer
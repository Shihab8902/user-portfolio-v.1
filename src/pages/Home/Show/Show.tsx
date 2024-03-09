import { Link } from 'react-router-dom';
import image from '../../../assets/images/Career and Life Coach, Motivational Speaker ATM sir.jpg';
import facebook from '../../../assets/icons/facebook.png';
import youtube from '../../../assets/icons/youtube.png';

import AOS from 'aos';
import 'aos/dist/aos.css';


const Show = () => {

    //initialize aos
    AOS.init({
        duration: 800
    })



    return <div className="container mx-auto flex flex-col lg:flex-row py-10 lg:items-center px-5 border-b-2 border-[#3a3a3a]">

        {/* For mobile devices */}
        <h3 className='text-3xl font-bold font-merriweather mb-5 lg:hidden'>ATM Sir Show</h3>

        {/* Image section */}
        <div data-aos="fade-right" className='flex-1'>
            <img className='lg:w-96' src={image} alt="Career and Life Coach, Motivational Speaker ATM sir" />
        </div>

        {/* Text content */}
        <div className='flex-1'>
            {/* Title */}
            <h3 className='font-merriweather hidden lg:block text-4xl font-bold'>ATM Sir Show</h3>

            <p className='my-6 leading-8 text-[#FFFFFFC9] font-[300]  font-merriweather'> I proudly present my platforms where I engage with my audience: Facebook and YouTube. On my Facebook page, boasting over 635,000 followers, and YouTube channel, with over 124,000 subscribers, I share motivational content and insightful discussions. Join me on these platforms to be inspired, empowered, and part of a community striving for personal and professional growth.</p>

            {/* Social links */}
            <div className='flex flex-col lg:flex-row gap-6 items-center'>
                <Link className='flex items-center gap-2 font-merriweather  bg-[#312f2f] py-3 px-5 rounded' to="https://www.facebook.com/atmsir" target='_blank'>
                    <img className='w-10 h-10' src={facebook} alt="Facebook icon" />

                    <div>
                        <h5 className='text-xs text-[#C58940]'>Follow on</h5>
                        <p className=' font-semibold'>Facebook</p>
                    </div>
                </Link>

                <Link className='flex items-center gap-2 font-merriweather  bg-[#312f2f] py-3 px-5 rounded' to="https://www.youtube.com/atmsir" target='_blank'>
                    <img className='w-10 h-8' src={youtube} alt="Facebook icon" />

                    <div>
                        <h5 className='text-xs text-[#C58940]'>Subscribe on</h5>
                        <p className=' font-semibold'>YouTube</p>
                    </div>
                </Link>
            </div>



        </div>




    </div>
}

export default Show
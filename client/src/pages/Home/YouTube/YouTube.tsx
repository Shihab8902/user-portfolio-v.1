import banner from '../../../assets/images/YouTube ATM Sir 100K Subscribers.png';
import image from '../../../assets/images/ATM Sir With Silver Play Button.jpg';
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';


const YouTube = () => {
    return <div className=" mt-10 lg:mt-32 ">

        {/* Upper banner */}
        <img className='mx-auto' src={banner} alt="ATM sir 100K YouTube subscriber award" />

        {/* Inner content */}
        <div className='my-5 border-y-2 border-[#3a3a3a] container mx-auto px-5 p-5 gap-6 flex justify-between items-center'>


            <div>
                <h3 className='text-3xl font-bold font-merriweather mt-5 lg:mt-0'>A Silver Milestone on YouTube!</h3>

                {/* Hide on desktop */}
                <div className='flex-shrink-0 lg:hidden my-8'>
                    <img className='w-[300px] mx-auto' src={image} alt="ATM sir with silver play button" />
                </div>

                <p className='my-6 leading-8 text-[#FFFFFFC9] font-[300]  font-merriweather'>Alhamdulillah, another milestone has been reached! I'm humbled and grateful to receive the Silver Play Button from YouTube. This achievement wouldn't be possible without the incredible support of each and every one of you who subscribe to my channel, "ATM Sir." Thank you for being a part of this journey. Your dedication inspires me to continue creating content that not only educates and motivates you but also empowers you to achieve your goals. Insha'Allah, this Silver Play Button will be a catalyst for even greater achievements to come. Alhamdulillah, another milestone has been reached! I'm humbled and grateful to receive the Silver Play Button from YouTube. This achievement wouldn't be possible without the incredible support of each and every one of you who subscribe to my channel, "ATM Sir." Thank you for being a part of this journey. Your dedication inspires me to continue creating content that not only educates and motivates you but also empowers you to achieve your goals. Insha'Allah, this Silver Play Button will be a catalyst for even greater achievements to come.</p>

                {/* Action button */}
                <div className='mt-10'>
                    <Link to="https://youtube.com/atmsir" target='_blank'>  <button className='flex items-center gap-3 uppercase text-[#C58940]  font-semibold hover:text-white hover:bg-[#C58940] px-7 py-3 border border-[#C58940] font-merriweather'>Subscribe <FaYoutube className='text-2xl' /></button></Link>
                </div>
            </div>

            <div className='flex-shrink-0 hidden lg:block'>
                <img className='w-[300px] ' src={image} alt="ATM sir with silver play button" />
            </div>

        </div>



    </div>
}

export default YouTube
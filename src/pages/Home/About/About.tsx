import image from '../../../assets/images/ATM Sir img text.png';
import { HiMiniArrowUpRight } from "react-icons/hi2";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const About = () => {



    //initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 500
        })
    }, [])





    return <div className="lg:min-h-screen flex flex-col justify-end  relative  ">

        {/* inner layer */}
        <div className="bg-[#3a3a3a]">

            <div className="container mx-auto w-full flex flex-col-reverse lg:flex-col items-end  px-5 lg:px-20 py-10">
                <div className="lg:w-1/2">
                    <h3 className="font-merriweather text-2xl lg:text-4xl font-extrabold">I'm ATM Mahmud (ATM Sir).</h3>

                    <p className="font-roboto mt-5  leading-relaxed text-[#FFFFFFC9] ">My name is ATM Mahmud, also known as ATM Sir. I am a multifaceted individual who has dedicated myself to contributing to the educational and entrepreneurial landscape of Bangladesh.</p>

                    <p className="font-roboto mt-5  leading-relaxed text-[#FFFFFFC9]  ">Throughout my journey, I have worn various hats, including career specialist, motivational speaker, and entrepreneur. Each role has allowed me to play a part in guiding and empowering individuals towards success.... <Link to="/about"><span className='text-[#C58940] font-bold hover:underline'>Read More.</span></Link></p>



                    {/* Action button */}
                    <div className='mt-10'>
                        <Link to="https://atm-sir.com/appointment" target='_blank'>
                            <button className='flex items-center gap-1  text-[#C58940]  font-semibold hover:text-white hover:bg-[#C58940] px-5 py-3 border border-[#C58940] font-merriweather'>Book a Meeting <HiMiniArrowUpRight /></button>
                        </Link>
                    </div>


                </div>
            </div>


            <div data-aos="zoom-in" className='hidden lg:block lg:absolute bg-gradient-to-b from-[#FFF] to-[#070707] -bottom-12 pt-8 mx-20'>
                <img className='lg:h-[530px] w-[530px]' src={image} alt="ATM Sir image" />
            </div>

        </div>


    </div >
}

export default About
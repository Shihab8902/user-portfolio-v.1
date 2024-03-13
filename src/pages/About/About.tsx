import { useEffect } from 'react';
import image from '../../assets/images/ATM Sir img text.png';

const About = () => {


    //Scroll on top
    useEffect(() => {
        window.scrollTo(0, 0,);
    }, [])


    return <div className='container mx-auto px-5 mt-5 mb-20 font-roboto'>

        {/* Hero image */}
        <div >
            <img className=' mx-auto' src={image} alt="ATM Mahmud (ATM Sir)" />
            <h3 className='text-center  mt-20 font-medium text-2xl md:text-3xl font-merriweather text-[#C58940]'>ATM Mahmud (ATM Sir)</h3>
        </div>

        {/* Quote */}
        <div className='bg-[#202020] text-center text-lg md:text-2xl lg:text-4xl mt-10 py-12 px-8 rounded'>
            <h3 className=" leading-relaxed font-[300] text-[#FFFFFFC9]">"Only those who start are successful in the world. And those who do not start or start late fail." - ATM Mahmud (ATM Sir)</h3>
        </div>


        {/* Text content */}
        <div className='mt-10 text-[#FFFFFFC9] font-[300] leading-7 flex flex-col gap-6'>

            <p>My name is ATM Mahmud, also known as ATM Sir. I am a multifaceted individual who has dedicated myself to contributing to the educational and entrepreneurial landscape of Bangladesh.</p>

            <p>Throughout my journey, I have worn various hats, including career specialist, motivational speaker, and entrepreneur. Each role has allowed me to play a part in guiding and empowering individuals towards success.</p>

            <p>As a career specialist, I leverage my expertise to help people find fulfilling career paths. Through my organization, ATM's, I offer services like career development, language training, and visa consultancy. My approach prioritizes honesty and integrity, ensuring a trustworthy environment for clients navigating the complexities of career choices.</p>

            <p>Beyond career guidance, I am a passionate motivational speaker, inspiring individuals to unlock their potential. My impactful speeches and engaging content resonate with audiences on YouTube (over 124,000 subscribers), Facebook Page (over 635,000 followers), and personal Facebook ID (over 58,000 followers). I aim to ignite the spark of ambition and empower individuals to overcome challenges and achieve their goals.</p>

            <p>Furthermore, my entrepreneurial spirit shines through as the founder and CEO of ATM's. Through my leadership, the organization has established itself as a leading IELTS coaching center and visa consultancy firm in Dhaka. My dedication to providing high-quality services and affordable solutions reflects my commitment to contributing to Bangladesh's economic and social development.</p>

            <p>My story is one of dedication, perseverance, and a desire to empower others. My success across diverse fields underscores my versatility and my unwavering dedication to making a positive impact on the lives of those I encounter.</p>
        </div>



    </div>
}

export default About
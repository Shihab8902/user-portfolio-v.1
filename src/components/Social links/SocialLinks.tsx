import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaQuora } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";


const SocialLinks = () => {

    return <div className="container mx-auto px-5 my-20 flex md:items-center justify-between gap-10 lg:gap-0 flex-wrap flex-col md:flex-row">

        {/* Linkedin */}
        <div className="flex gap-4">
            <span className='text-5xl lg:text-6xl hover:text-gray-200'><FaLinkedin /></span>
            <div>
                <h3 className=" font-merriweather font-medium ">LinkedIn</h3>
                <span className=" font-roboto font-[300] text-sm">12k followers</span>
                <Link to="https://www.linkedin.com/in/atm-mahmud-95570333" className="flex items-center gap-2 mt-5 text-[#C58940] text-lg " target="_blank">Follow<IoIosArrowRoundForward className="text-2xl" /> </Link>
            </div>
        </div>

        {/* Facebook */}
        <div className="flex gap-4">
            <span className='text-5xl lg:text-6xl hover:text-gray-200'><FaFacebookSquare /></span>
            <div>
                <h3 className=" font-merriweather font-medium ">Facebook</h3>
                <span className=" font-roboto font-[300] text-sm">1k followers</span>
                <Link to="https://www.facebook.com/founder.atms" className="flex items-center gap-2 mt-5 text-[#C58940] text-lg " target="_blank">Follow<IoIosArrowRoundForward className="text-2xl" /> </Link>
            </div>
        </div>

        {/* Instagram */}
        <div className="flex gap-4">
            <span className='text-5xl lg:text-6xl hover:text-gray-200'><FaInstagramSquare /></span>
            <div>
                <h3 className=" font-merriweather font-medium ">Instagram</h3>
                <span className=" font-roboto font-[300] text-sm">961 followers</span>
                <Link to="https://www.instagram.com/atmmahmud/" className="flex items-center gap-2 mt-5 text-[#C58940] text-lg" target="_blank" >Follow <IoIosArrowRoundForward className="text-2xl" /> </Link>
            </div>
        </div>

        {/* Twitter */}
        <div className="flex gap-4">
            <span className='text-5xl lg:text-6xl hover:text-gray-200'><FaSquareTwitter /></span>
            <div>
                <h3 className=" font-merriweather font-medium ">Twitter</h3>
                <span className=" font-roboto font-[300] text-sm">1k followers</span>
                <Link to="https://twitter.com/atmmahmud1" className="flex items-center gap-2 mt-5 text-[#C58940] text-lg" target="_blank" >Follow <IoIosArrowRoundForward className="text-2xl" /> </Link>
            </div>
        </div>

        {/* Quora */}
        <div className="flex gap-4">
            <span className='text-3xl p-[9px] lg:text-4xl hover:bg-gray-200 text-black bg-white rounded-xl h-14'  ><FaQuora /></span>
            <div>
                <h3 className=" font-merriweather font-medium ">Quora</h3>
                <span className=" font-roboto font-[300] text-sm">1k followers</span>
                <Link to="https://bn.quora.com/profile/ATM-Sir-3" className="flex items-center gap-2 mt-5 text-[#C58940] text-lg" target="_blank" >Follow <IoIosArrowRoundForward className="text-2xl" /> </Link>
            </div>
        </div>



    </div>
}

export default SocialLinks
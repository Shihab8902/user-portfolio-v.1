import { useEffect, useState } from "react"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"

const Contact = () => {


    //Scroll to top
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const [confirmationMessage, setConfirmationMessage] = useState('');


    //Handle form submit
    const handleFormSubmit = (e) => {
        e.preventDefault();
        setConfirmationMessage("Thanks for your message! We'll be in touch soon.")
    }



    return <div className="container mx-auto px-5 py-20 font-roboto">

        {/* Upper contents */}
        <div>
            <h3 className="text-3xl lg:text-4xl text-[#FFFFFFC9] font-merriweather text-center">Contact me</h3>
            <div className="w-3/12 bg-[#C58940] h-1 mx-auto mt-3"></div>
        </div>

        <div className='mt-10 text-[#FFFFFFC9] font-[300] leading-7 flex flex-col gap-6 '>
            <p className="text-center text-sm  lg:w-3/4 mx-auto">Please feel free to use the form below to reach out to me. Kindly refrain from sending spam messages, as I receive a large volume of messages and may require some time to respond. Thank you for your understanding.</p>
        </div>

        {/* Contact form */}
        {
            confirmationMessage ? <p className="mt-20 text-[#ffffffaf] font-[300] text-2xl">{confirmationMessage}</p>
                :
                <form className="mt-20" onSubmit={handleFormSubmit}>
                    <input className="w-full mb-6 bg-transparent px-6 py-5 border-b border-[#3a3a3a] outline-none " type="text" name="name" id="name" placeholder="Your Name" required />
                    <input className="w-full mb-6 bg-transparent px-6 py-5 border-b border-[#3a3a3a] outline-none " type="email" name="email" id="name" placeholder="Your Email" required />
                    <textarea className="w-full h-52 mb-6 bg-transparent px-6 py-5 border-b border-[#3a3a3a] outline-none " name="message" id="message" placeholder="Your message" required></textarea>
                    <button type="submit" className='flex items-center gap-1 mt-2 text-[#C58940]  font-semibold hover:text-white hover:bg-[#C58940] px-5 py-3 border border-[#C58940] font-merriweather'>Submit<MdKeyboardDoubleArrowRight /></button>
                </form>
        }

    </div>

}

export default Contact
import { useState } from 'react';
import './navbar.css';
import { Transition } from '@headlessui/react';
import { IoMenu } from "react-icons/io5";
import logo from '../../../assets/images/Atm Mahmud logo.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const navLinks = <>

    <li className='text-lg hover:text-[#c58940]'><NavLink to="/">Home</NavLink></li>
    <li className='text-lg hover:text-[#c58940]'><NavLink to="/about">About</NavLink></li>
    <li className='text-lg hover:text-[#c58940]'><NavLink to="/blog">Blog</NavLink></li>
    <li className='text-lg hover:text-[#c58940]'><NavLink to="/contact">Contact</NavLink></li>

  </>


  return (
    <nav className="bg-black z-20 transition-scroll duration-300 py-4 lg:py-7 font-roboto lg:sticky lg:top-0">
      <div className="container  mx-auto px-5 md:px-10">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/"><img className="h-7 lg:h-8" src={logo} alt="Atm Mahmud" /></Link>
          </div>
          <div className="hidden lg:block">
            <ul className="flex space-x-8">
              {
                navLinks
              }
            </ul>
          </div>
          <div className="lg:hidden ">
            <button
              className="text-white hover:text-gray-300 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <IoMenu className='text-3xl' />
            </button>
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        enter="transition ease-out duration-200 transform"
        enterFrom="opacity-0 scale-95 -translate-y-1"
        enterTo="opacity-100 scale-100 translate-y-0"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100 translate-y-0"
        leaveTo="opacity-0 scale-95 -translate-y-1"
      >
        {(ref) => (
          <div className="lg:hidden" ref={ref}>
            <ul className="mt-2 p-5 space-y-3 ">
              <li className='text-lg hover:text-[#c58940] border-y p-2'><NavLink onClick={() => setIsOpen(!isOpen)} to="/">Home</NavLink></li>
              <li className='text-lg hover:text-[#c58940] border-b p-2'><NavLink onClick={() => setIsOpen(!isOpen)} to="/about">About</NavLink></li>
              <li className='text-lg hover:text-[#c58940] border-b p-2'><NavLink onClick={() => setIsOpen(!isOpen)} to="/blog">Blog</NavLink></li>
              <li className='text-lg hover:text-[#c58940] border-b p-2'><NavLink onClick={() => setIsOpen(!isOpen)} to="/contact">Contact</NavLink></li>
            </ul>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;

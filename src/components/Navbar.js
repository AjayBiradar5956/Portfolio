import React from 'react'
import { FaBars, faBars, faTimes } from 'react-icons/fa'
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={logo} alt='logo' style={{ width: '150px', height: '80px' }} />
            </div>

            {/* Menu */}
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>

            {/* Hamburger */}
            <div className='md:hidden z-10'>
                <FaBars />
            </div>
            {/* mobile View */}
            <ul className=' hidden absolute top-0 w-full left-0 h-screen flex flex-col justify-center items-center bg-[#0a192F]'>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

        </div>
    )
}

export default Navbar
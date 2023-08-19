import React, { useState } from 'react'
import { FaBars, faBars, faTimes } from 'react-icons/fa'
import logo from '../assets/logo.png';

const Navbar = () => {
    const [ham, setHam] = useState(false);
    const handleHam = () => {
        console.log(ham);
        setHam(!ham);
    }
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={logo} alt='logo' style={{ width: '80px', height: '70px', borderRadius: '50%' }} />
            </div>

            {/* Menu */}
            <ul className='hidden md:flex'>
                <li className='text-xl'>Home</li>
                <li className='text-xl'>About</li>
                <li className='text-xl'>Skills</li>
                <li className='text-xl'>Work</li>
                <li className='text-xl'>Contact</li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleHam} className='md:hidden z-10 cursor-pointer'>
                {!ham ? <FaBars style={{ height: '100px' }} /> : 'X'}
            </div>
            {/* mobile View */}
            <ul className={ham ? 'absolute top-0 w-full left-0 h-screen flex flex-col justify-center items-center bg-[#0a192F]' : 'hidden'}>
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
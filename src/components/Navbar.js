import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'

import logo from '../assets/logo.png';
import { Link } from 'react-scroll'

const Navbar = () => {
    const [ham, setHam] = useState(false);
    const handleHam = () => {
        console.log(ham);
        setHam(!ham);
    }


    return (


        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 text-black font-bold'>
            <div>
                <img src={logo} alt='logo' className='w-[80px] hidden sm:block h-[70px] ml-5 my-2' style={{ borderRadius: '50%', border: '1px solid red' }} />
            </div>

            {/* Menu */}
            <ul className='hidden md:flex'>
                <li className='text-xl'>
                    <Link to="Home" smooth={true} offset={50} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='text-xl'>
                    <Link to="About" smooth={true} offset={50} duration={500}>
                        About
                    </Link>
                </li>
                <li className='text-xl'>
                    <Link to="Skills" smooth={true} offset={50} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='text-xl'>Work</li>
                <li className='text-xl'>Contact</li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleHam} className='md:hidden text-white z-10 cursor-pointer'>
                {!ham ? <FaBars style={{ height: '100px', color: 'black' }} /> : 'X'}
            </div>

            {/* mobile View */}
            <ul className={ham ? 'absolute top-0 w-full left-0 h-screen flex flex-col justify-center items-center bg-[#0a192F] text-white' : 'hidden'}>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleHam} to="Home" smooth={true} offset={50} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleHam} to="About" smooth={true} offset={50} duration={500}>
                        About
                    </Link>
                </li>
                <li className='py-6 text-4xl'>
                    <Link onClick={handleHam} to="Skills" smooth={true} offset={50} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>



        </div>

    )
}

export default Navbar
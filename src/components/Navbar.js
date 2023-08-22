import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import logo from '../assets/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {
    const [ham, setHam] = useState(false);
    const handleHam = () => {
        console.log(ham);
        setHam(!ham);
    }
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 z-10 text-black font-bold'>
            <div>
                <img
                    src={logo}
                    alt='logo'
                    className='shadow-md shadow-[#868bda] w-[80px] hidden sm:block h-[70px] ml-5 my-2 rounded-full'
                />
            </div>

            {/* Menu */}
            <ul className='hidden lg:flex me-10 '>
                <li className='text-xl hover:text-orange-500'>
                    <Link
                        to="Home"
                        smooth={true}
                        offset={50}
                        duration={500}>
                        Home
                    </Link>
                </li>
                <li className='text-xl hover:text-orange-500'>
                    <Link
                        to="About"
                        smooth={true}
                        offset={50}
                        duration={500}>
                        About
                    </Link>
                </li>
                <li className='text-xl hover:text-orange-500'>
                    <Link
                        to="Skills"
                        smooth={true}
                        offset={50}
                        duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='text-xl hover:text-orange-500'>
                    <Link
                        to="Work"
                        smooth={true}
                        offset={50}
                        duration={500}>
                        Work
                    </Link>
                </li>
                <li className='text-xl hover:text-orange-500'>
                    <Link
                        to="Certification"
                        smooth={true}
                        offset={50}
                        duration={500}>
                        Certification
                    </Link>
                </li>
                <li className='text-xl hover:text-orange-500'>
                    <Link
                        to="Contact"
                        smooth={true}
                        offset={50}
                        duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <button
                onClick={handleHam}
                className='lg:hidden text-white z-10 cursor-pointer'>
                {!ham
                    ?
                    <FaBars size={30} color='black' />
                    :
                    <div className='text-4xl pr-4'>X</div>
                }
            </button>

            {/* mobile View */}
            <ul
                className=
                {ham
                    ?
                    'absolute top-0 w-full left-0 h-screen flex flex-col justify-center items-center bg-[#E3B448] text-white'
                    :
                    'hidden'
                }>
                <li className='p-3 text-4xl hover:text-orange-500'>
                    <Link
                        onClick={handleHam}
                        to="Home"
                        smooth={true}
                        offset={50}
                        duration={500}>
                        Home
                    </Link>
                </li>
                <li className='p-3 text-4xl hover:text-orange-500'>
                    <Link
                        onClick={handleHam}
                        to="About"
                        smooth={true}
                        offset={50}
                        duration={500}>
                        About
                    </Link>
                </li>
                <li className='p-3 text-4xl hover:text-orange-500'>
                    <Link
                        onClick={handleHam}
                        to="Skills"
                        smooth={true}
                        offset={50}
                        duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='p-3 text-4xl hover:text-orange-500'>
                    <Link
                        onClick={handleHam}
                        to="Work"
                        smooth={true}
                        offset={50}
                        duration={500}>
                        Work
                    </Link>
                </li>
                <li className='p-3 text-4xl hover:text-orange-500'>
                    <Link
                        onClick={handleHam}
                        to="Certification"
                        smooth={true}
                        offset={50}
                        duration={500}>
                        Certification
                    </Link>
                </li>
                <li className='p-3 text-4xl hover:text-orange-500'>
                    <Link
                        onClick={handleHam}
                        to="Contact"
                        smooth={true}
                        offset={50}
                        duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
import React, { useState } from 'react'
import { FaBars, FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs';
import logo from '../assets/logo.png';
import { Link } from 'react-scroll'

const Navbar = () => {
    const [ham, setHam] = useState(false);
    const handleHam = () => {
        console.log(ham);
        setHam(!ham);
    }
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-white text-black font-bold'>
            <div>
                <img src={logo} alt='logo' className='w-[80px] h-[70px] ml-5 my-2' style={{ borderRadius: '50%', border: '1px solid red' }} />
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
            <div onClick={handleHam} className='md:hidden z-10 cursor-pointer'>
                {!ham ? <FaBars style={{ height: '100px' }} /> : 'X'}
            </div>

            {/* mobile View */}
            <ul className={ham ? 'absolute top-0 w-full left-0 h-screen flex flex-col justify-center items-center' : 'hidden'}>
                <li className='py-6 text-4xl'>Home</li>
                <li className='py-6 text-4xl'>About</li>
                <li className='py-6 text-4xl'>Skills</li>
                <li className='py-6 text-4xl'>Work</li>
                <li className='py-6 text-4xl'>Contact</li>
            </ul>

            {/* Social Icons */}
            <div className=' hidden lg:flex fixed flex-col top-[35%] left-0 '>
                <ul>
                    <li className='w-[160px] h-[50px] flex justify-between items-center'>
                        <a href='/' className='flex justify-between items-center w-full text-gray-100 ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 h-[50px] px-2'>
                            LinkedIn <FaLinkedinIn size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center'>
                        <a href='/' className='flex justify-between items-center w-full text-gray-100 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] h-[50px] px-2'>
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[50px] flex justify-between items-center'>
                        <a href='/' className='flex justify-between items-center w-full text-gray-100 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] h-[50px] px-2'>
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center'>
                        <a href='/' className='flex justify-between items-center w-full text-gray-100 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] h-[50px] px-2'>
                            Contact <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>

                </ul>
            </div>

        </div>
    )
}

export default Navbar
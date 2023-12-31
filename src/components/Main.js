import React from 'react'
import resume from '../assets/resume.pdf'
import { FaCloudDownloadAlt } from 'react-icons/fa'
import pic from '../assets/Ajay.jpeg'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Main = () => {
    return (
        <div
            name='Home'
            className='w-[700px] md:w-full h-screen bg-white flex flex-row text-center md:justify-around items-center'>
            {/* Social Icons */}
            <div className=' hidden lg:flex fixed flex-col top-[35%] left-0 '>
                <ul>
                    <li className='w-[160px] h-[50px] flex justify-between items-center'>
                        <a
                            href='https://www.linkedin.com/in/ajay-biradar-302608181/'
                            rel="noopener noreferrer"
                            target="_blank"
                            className='flex justify-between items-center w-full text-gray-100 ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 h-[50px] px-2'>
                            LinkedIn
                            <FaLinkedinIn size={30} />
                        </a>
                    </li>
                    <li
                        className='w-[160px] h-[60px] flex justify-between items-center'>
                        <a
                            href='https://github.com/AjayBiradar5956'
                            rel="noopener noreferrer"
                            target="_blank"
                            className='flex justify-between items-center w-full text-gray-100 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] h-[50px] px-2'>
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li >
                        <a
                            href='*'
                            className='w-[130px] h-[50px] flex justify-between items-center'>
                            <Link
                                className='flex justify-between items-center w-full text-gray-100 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] h-[50px] px-2'
                                to="Contact"
                                smooth={true}
                                offset={50}
                                duration={500}>
                                Contact
                                <BsFillPersonLinesFill size={30} />
                            </Link>
                        </a>
                    </li>
                </ul>
            </div>

            <div className='max-w-[1000px] md:mx-[120px] px-8 flex flex-col justify-center md:h-full h-[80%]'>
                <p className='text-[#4646dd] text-base font-bold'>
                    Hi my name is,
                </p>
                <h1 className='text-4xl md:text-7xl font-bold text-[#020407] py-2'>
                    Ajay Biradar
                </h1>
                <h3 className='text-4xl sm:text-6xl font-bold text-[#233871]'>
                    Full Stack Developer
                </h3>
                <p className='text-[#39466c] max-w-[700px] py-4'>
                    Certified by <b>Coding Ninjas</b>. I enjoy working on every aspect of web development, from user Interface to server logic.
                </p>
                <span className='h-[30px] w-[150px] self-center me-10 mb-10'>
                    <a
                        href={resume}
                        download="Ajay Biradar Resume">
                        <button className='text-black group  border-2 border-[#9487df] w-[180px] px-3 py-2 my-2 flex justify-between items-center hover:scale-110 duration-300 hover:bg-[#dfc5eb] hover:border-black'>
                            <span className='text-2xl'>
                                Resume
                            </span>
                            <FaCloudDownloadAlt size={30} />
                        </button>
                    </a>
                </span>
            </div>
            <div
                className='lg:h-[250px] lg:w-[250px] md:h-[200px] md:w-[300px] hidden md:block text-red-700 border-4 p-1 mr-10 border-[#ed9654] shaodow-md rounded-full filter'>
                <img
                    src={pic}
                    alt='Profile Pic'
                    className='h-full w-full rounded-full object-cover hover:scale-110 duration-300 shadow-lg shadow-slate-500'
                />
            </div>
        </div>
    )
}

export default Main;
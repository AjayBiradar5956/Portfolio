import React, { useState } from 'react'
import resume from '../assets/resume.pdf'
import { FaCloudDownloadAlt } from 'react-icons/fa'
import pic from '../assets/Ajay.jpeg'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

const Home = () => {
    const [email, setEmail] = useState(false);
    const handleEmail = () => {
        console.log("hi");
        setEmail(!email);
    }
    return (
        <div name='Home' className='w-[90%] h-screen bg-white flex flex-row justify-around items-center'>
            {/* Social Icons */}
            <div className=' hidden lg:flex fixed flex-col top-[35%] left-0 '>
                <ul>
                    <li className='w-[160px] h-[50px] flex justify-between items-center'>
                        <a href='https://www.linkedin.com/in/ajay-biradar-302608181/' className='flex justify-between items-center w-full text-gray-100 ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500 h-[50px] px-2'>
                            LinkedIn <FaLinkedinIn size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center'>
                        <a href='https://github.com/AjayBiradar5956' className='flex justify-between items-center w-full text-gray-100 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] h-[50px] px-2'>
                            GitHub <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[50px] flex justify-between items-center' onClick={handleEmail}>
                        <a className='flex justify-between items-center w-full text-gray-100 ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] h-[50px] px-2'>
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
            < div className={email ? 'absolute top-[40%] left-[40%] h-[150px] w-[350px] border-2 border-black bg-[#e2ad38] flex justify-around items-center flex-col text-black font-bold z-10' : 'hidden'} >
                <h1 className='text-3xl'>Please Mail me at</h1>
                <h3 className='text-xl mb-2'>ajay99biradar@gmail.com</h3>
                <button className='text-white bg-black hover:bg-white hover:text-black h-10 w-20 text-[25px] border-2 border-black' onClick={() => setEmail(false)}>Close</button>
            </div >
            <div className={email ? 'blur' : 'max-w-[1000px] mx-[120px] px-8 flex flex-col justify-center h-full'}>
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
                <span className='h-[30px] w-[150px]'>
                    <a href={resume} download="Ajay Biradar Resume">
                        <button className='text-black group border-2 border-[#9487df] w-[180px] px-3 py-2 my-2 flex justify-between items-center hover:scale-110 duration-300 hover:bg-[#dfc5eb] hover:border-black'>
                            <span className='text-2xl'>Resume</span>
                            <FaCloudDownloadAlt size={30} />
                        </button>
                    </a>
                </span>
            </div>
            {email ? <></> : <div className='h-[250px] w-[250px] hidden md:block text-red-700 border-4 p-1 border-[#ed9654] shaodow-md rounded-full filter'>
                <img src={pic} className='h-full w-full rounded-full object-cover' />
            </div>}
        </div>
    )
}

export default Home;
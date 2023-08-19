import React from 'react'
import resume from '../assets/resume.pdf'
import { FaCloudDownloadAlt } from 'react-icons/fa'

const home = () => {
    return (
        <div name='Home' className='w-full h-screen bg-white'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
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
                    From Hyderabad,India. I enjoy working on every aspect of web development, from user Interface to server logic.
                </p>
                <div>
                    <a href={resume} download="Ajay Biradar Resume">
                        <button className='text-black group border-2 border-[#9487df] w-[180px] px-3 py-2 my-2 flex justify-between items-center hover:scale-110 duration-300 hover:bg-[#dfc5eb] hover:border-black'>
                            <span className='text-2xl'>Resume</span>
                            <FaCloudDownloadAlt size={30} />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default home
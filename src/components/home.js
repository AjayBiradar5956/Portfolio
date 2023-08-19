import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const home = () => {
    return (
        <div name='Home' className='w-full h-screen bg-[#0a192F]'>
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi my name is, </p>
                <h1 className='text-4xl md:text-7xl font-bold text-[#ccd6f6] py-2'>Ajay Biradar</h1>
                <h3 className='text-4xl sm:text-7xl font-bold text-[#8892B0]'>I'm a Full Stack Developer</h3>
                <p className='text-[#8892B0] max-w-[700px] py-4'> loremasdasda asdasd assdasdasd assdasdfwfzc asdfsdasddas asdsasdsdasdas asdasda a asadd asda sd asd asdasdsd asda sadasdsaad  asdasds asda asd asd asadds add </p>
                <div>
                    <button className='text-white group border-2 w-[150px] px-3 py-3 my-2 flex justify-between items-center hover:bg-pink-600 hover:border-pink-400'>
                        View Work
                        <span className='group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default home
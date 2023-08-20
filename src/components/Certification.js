import React from 'react'
import dbms from '../assets/DBMS.JPG'
import java from '../assets/java.JPG'
import fe from '../assets/FE.JPG'
import be from '../assets/BE.JPG'
import react from '../assets/react.JPG'


const Certification = () => {
    return (
        <div name="Certification" className='pt-[120px] w-full h-screen bg-[#317773] flex text-[#E2D1F9] flex-col justify-center items-center'>
            <p className='text-4xl font-bold  inline border-b-4 border-pink-600'>
                Certification
            </p>
            <div className=' h-[500px] w-[75%] flex flex-wrap justify-evenly pt-5'>
                <div className=' h-[45%] w-[30%]'>
                    <a
                        href='https://drive.google.com/file/d/1QZXNMa9qxVneApeoLeLoeKMmUyVe8XjK/view?usp=sharing' rel="noopener noreferrer" target="_blank">
                        <img src={java} alt='java certificate' className='h-full w-full object-contain hover:scale-110 duration-300 cursor-pointer' />
                    </a>
                </div>
                <div className=' h-[45%] w-[30%]'>
                    <a
                        href='https://drive.google.com/file/d/13z5t4BBBsVv7lNNRBvA6h8Yq7UwENxRo/view?usp=sharing' rel="noopener noreferrer" target="_blank">
                        <img src={fe} alt='frontend certificate' className='h-full w-full object-contain hover:scale-110 duration-300 cursor-pointer' />
                    </a>
                </div>
                <div className=' h-[45%] w-[30%]'>
                    <a
                        href='https://drive.google.com/file/d/1YaAemgPx9B53dJ7B0tB5VrsykhDLPtBE/view?usp=sharing' rel="noopener noreferrer" target="_blank">
                        <img src={be} alt='backend certificate' className='h-full w-full object-contain hover:scale-110 duration-300 cursor-pointer' />
                    </a>
                </div>
                <div className=' h-[45%] w-[30%]'>
                    <a
                        href='https://drive.google.com/file/d/1fG0hBVXPtUf4MxVXjWzWl5a-uY--DbBE/view?usp=sharing' rel="noopener noreferrer" target="_blank">
                        <img src={react} alt='react certificate' className='h-full w-full object-contain hover:scale-110 duration-300 cursor-pointer' />
                    </a>
                </div>
                <div className=' h-[45%] w-[30%]'>
                    <a
                        href='https://drive.google.com/file/d/18OYPwwcQZ53U60FWhdWFis_w96FYIBU2/view?usp=sharing' rel="noopener noreferrer" target="_blank">
                        <img src={dbms} alt='dbms certificate' className='h-full w-full object-contain hover:scale-110 duration-300 cursor-pointer' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Certification
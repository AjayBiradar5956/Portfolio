import React from 'react'
import gynx from '../assets/gynx.png'
import { FaGithub } from 'react-icons/fa'

const Work = () => {
    return (
        <div name='Work' className='h-auto pt-[150px] w-full flex flex-col justify-center items-center'>
            <div className='flex flex-row justify-start'>
                <div className='text-4xl font-bold'> Somethings I've Build</div>
                <div className='border-t-2 border-gray-500 w-[600px] self-center mx-5'></div>
            </div>
            {/* project overall container */}
            <div className='h-[800px] w-[75%] mt-10 relative'>
                <span className='ps-5 top-20 absolute h-[100px] w-[250px]'>
                    <span className=' text-lg font-bold text-blue-400 font-sans'>Featured Project</span><br></br>
                    <span className='font-bold text-3xl font-mono '>Gynx Music Player</span>
                </span>
                <div className='top-0 h-[300px] w-[650px] right-0 absolute'>
                    <img src={gynx} className='h-full w-full object-contain' />
                </div>
                <div className='h-auto text-lg font-serif text-white bg-blue-600 p-3 w-[550px] left-0 bottom-[200px] absolute'>
                    <p>This application provides a feature-rich music player,also enabled with Authentication and Authorization where users can listen to music made by their favorite singer, listen to ton of albums saving them into their own favorites list. Also users can listen to trending songs which have been liked by multiple users.</p>
                    <p><br></br>
                        <h2>Demo Accounts</h2>
                        <h3>Email: Pass:</h3>
                        <h3>Email: Pass:</h3>
                    </p>
                    <p>
                        <span className='font-bold text-yellow-300'>Note:</span> This Back-end application is hosted on a free-server, there might be a delay or the website might be down due to certain time limit. Rest assured I would always make sure it keeps running all the time.
                    </p>
                </div>
                <div className='h-auto w-[450px] bottom-[100px] absolute'>
                    <ul className='flex flex-row flex-wrap text-xl font-sans text-gray-600 '>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>NodeJs</li>
                        <li>ExpressJs</li>
                        <li>Passport</li>
                        <li>MongoDB Atlas</li>
                        <li>Noty</li>
                        <li>ejs</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div className='bottom-5 left-4 absolute'>
                    <a href='https://github.com/AjayBiradar5956/GynxMusicStudio'><FaGithub size={45} /></a>
                </div>
            </div>

            {/* Redux Porject */}
            <div className='h-[800px] w-[75%] mt-10 relative'>
                <span className='ps-5 top-20 absolute h-[100px] w-[250px]'>
                    <span className=' text-lg font-bold text-blue-400 font-sans'>Featured Project</span><br></br>
                    <span className='font-bold text-3xl font-mono '>Gynx Music Player</span>
                </span>
                <div className='top-0 h-[300px] w-[650px] right-0 absolute'>
                    <img src={gynx} className='h-full w-full object-contain' />
                </div>
                <div className='h-auto text-lg font-serif text-white bg-blue-600 p-3 w-[550px] left-0 bottom-[200px] absolute'>
                    <p>This application provides a feature-rich music player,also enabled with Authentication and Authorization where users can listen to music made by their favorite singer, listen to ton of albums saving them into their own favorites list. Also users can listen to trending songs which have been liked by multiple users.</p>
                    <p><br></br>
                        <h2>Demo Accounts</h2>
                        <h3>Email: Pass:</h3>
                        <h3>Email: Pass:</h3>
                    </p>
                    <p>
                        <span className='font-bold text-yellow-300'>Note:</span> This Back-end application is hosted on a free-server, there might be a delay or the website might be down due to certain time limit. Rest assured I would always make sure it keeps running all the time.
                    </p>
                </div>
                <div className='h-auto w-[450px] bottom-[100px] absolute'>
                    <ul className='flex flex-row flex-wrap text-xl font-sans text-gray-600 '>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>NodeJs</li>
                        <li>ExpressJs</li>
                        <li>Passport</li>
                        <li>MongoDB Atlas</li>
                        <li>Noty</li>
                        <li>ejs</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div className='bottom-5 left-4 absolute'>
                    <a href='https://github.com/AjayBiradar5956/GynxMusicStudio'><FaGithub size={45} /></a>
                </div>
            </div>
        </div>
    )
}

export default Work
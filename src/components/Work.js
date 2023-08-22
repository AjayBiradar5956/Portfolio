import React from 'react'
import gynx from '../assets/gynx.png'
import ecom101 from '../assets/ecom101.png'
import meals from '../assets/meals.JPG'
import { FaGithub } from 'react-icons/fa';
import { BsBoxArrowInUpRight } from 'react-icons/bs'

const Work = () => {
    return (
        <div
            name='Work'
            className='h-auto pt-[150px] w-full flex flex-col justify-center items-center'>
            <div className='flex flex-row justify-start'>
                <div className='text-4xl font-bold'>
                    Somethings I've Build
                </div>
                <div className='border-t-2 border-gray-500 w-0 md:w-[350px] lg:w-[550px] self-center mx-5'></div>
            </div>
            {/* project overall container */}

            {/* Meals App */}
            <div className='h-[800px] w-[75%] mt-10 relative border-b-2 border-gray-300'>
                <span className='ps-5 top-20 right-0  absolute h-[100px] w-[250px]'>
                    <span className=' text-lg font-bold text-blue-400 font-sans'>
                        Featured Project
                    </span><br></br>
                    <span
                        className='font-bold text-3xl font-mono '>
                        Meals App
                    </span>
                </span>
                <div className='top-0 h-[300px] w-[650px] left-0 absolute'>
                    <img
                        src={meals}
                        alt='Meals App Homepage'
                        className='h-full w-full object-contain'
                    />
                </div>
                <div className='h-auto text-lg font-serif text-white bg-blue-600 p-3 w-[550px] right-0 bottom-[200px] absolute'>
                    <p>
                        This application is a pure <b>Javascript Project</b>, which helps a user to fetch any dish and view all of its details. The information is provided by <b>FreeMealApi</b>, Here the user can also mark certain dishes as his favorites for ease access in future, application makes use of <b>Local Storage</b> to provide this feature. Application has been made in such a manner that all the info is made available along with a youtube link for making of the dish.
                    </p>
                    <br></br>
                    <p>
                        <span className='font-bold text-yellow-300'>Note:</span>
                        This application has been hosted on a free-server, please expect a delay. Thank you for your patience.
                    </p>
                </div>
                <div className='h-auto w-[450px]  bottom-[100px] right-0 absolute'>
                    <ul className='flex flex-row flex-wrap text-xl font-sans text-gray-600 '>
                        <li>Javascript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Local Storage</li>
                        <li>Bootstrap</li>
                    </ul>
                </div>
                <div className='bottom-10 right-10 absolute flex flex-row justify-start'>
                    <a
                        href='https://github.com/AjayBiradar5956/MealApp'
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <FaGithub size={40} className='hover:scale-150 hover:duration-300' />
                    </a>
                    <>
                        <a
                            href='https://ajaybiradar5956.github.io/MealApp/'
                            className='ps-5'
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <BsBoxArrowInUpRight size={40} className='hover:scale-150 hover:duration-300' />
                        </a>
                    </>
                </div>
            </div>

            {/* Gynx Music Studio */}
            <div className='h-[800px] w-[75%] mt-10 relative border-b-2 border-gray-300'>
                <span className='ps-5 top-20 absolute h-[100px] w-[250px]'>
                    <span className=' text-lg font-bold text-blue-400 font-sans'>
                        Featured Project
                    </span><br></br>
                    <span
                        className='font-bold text-3xl font-mono '>
                        Gynx Music Player
                    </span>
                </span>
                <div className='top-0 h-[300px] w-[650px] right-0 absolute'>
                    <img
                        src={gynx}
                        alt='Gynx Project HomePage'
                        className='h-full w-full object-contain'
                    />
                </div>
                <div className='h-auto text-lg font-serif text-white bg-blue-600 p-3 w-[550px] left-0 bottom-[200px] absolute'>
                    <p>This <b>NodeJs</b> application provides a feature-rich music player,also enabled with <b>Authentication/Authorization and GoogleOAuth</b> where users can listen to music made by their favorite singer, listen to ton of albums saving them into their own favorites list. Also users can listen to trending songs which have been liked by multiple users.</p>
                    <br></br>
                    <p><b>Demo Accounts</b></p>
                    <p><b>Email:</b> test@gmail.com <b>Pass:</b>test@123</p>
                    <p><b>Email:</b> test2@gmail.com <b>Pass:</b>test@123</p>
                    <p>
                        <span className='font-bold text-yellow-300'>Note:</span>
                        This Back-end application is hosted on a free-server, there might be a delay or the website might be down due to certain time limit. Rest assured I would always make sure it keeps running all the time.
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
                <div className='bottom-10 left-4 absolute flex flex-row justify-start'>
                    <a
                        href='https://github.com/AjayBiradar5956/GynxMusicStudio'
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <FaGithub size={40} className='hover:scale-150 hover:duration-300' />
                    </a>
                    <>
                        <a
                            href='https://gynxmusicplayer.onrender.com/'
                            className='ps-5'
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <BsBoxArrowInUpRight size={40} className='hover:scale-150 hover:duration-300' />
                        </a>
                    </>
                </div>
            </div>

            {/* Redux Porject */}
            <div className='h-[600px] w-[75%] mt-10 relative'>
                <span className='ps-5 top-20 right-0 absolute h-[100px] w-[250px]'>
                    <span className=' text-lg font-bold text-blue-400 font-sans'>
                        Featured Project
                    </span>
                    <br></br>
                    <span className='font-bold text-3xl font-mono '>
                        ECOM 101
                    </span>
                </span>
                <div className='top-0 h-[300px] w-[650px] left-0 absolute'>
                    <img
                        src={ecom101}
                        alt='ECOM101 Project HomePage'
                        className='h-full w-full object-contain'
                    />
                </div>
                <div className='h-auto text-lg font-serif text-white bg-blue-600 p-3 w-[450px] right-0 bottom-[150px] absolute'>
                    <p>
                        This Redux based Ecommerce Application provides users to add items onto the cart, view product details and more. Users can also add products with the edit access to the existing ones
                    </p>
                    <br></br>
                    <p>
                        <span className='font-bold text-yellow-300'>
                            Note:
                        </span>
                        This application is hosted on a free-server using a third-party app. Delay is expected.
                    </p>
                </div>
                <div className='h-auto w-[450px] right-0 bottom-[80px] absolute'>
                    <ul className='flex flex-row-reverse flex-wrap text-xl font-sans text-gray-600 '>
                        <li>React</li>
                        <li>Redux</li>
                        <li>React-toastify</li>
                    </ul>
                </div>
                <div className='bottom-5 right-4 absolute flex flex-row justify-start'>
                    <a
                        href='https://github.com/AjayBiradar5956/ReduxEcom'
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        <FaGithub size={40} className='hover:scale-150 hover:duration-300' />
                    </a>
                    <>
                        <a
                            href='https://redux-ecom-hrod.vercel.app/'
                            className='ps-5'
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <BsBoxArrowInUpRight size={40} className='hover:scale-150 hover:duration-300' />
                        </a>
                    </>
                </div>
            </div>
        </div>
    )
}

export default Work
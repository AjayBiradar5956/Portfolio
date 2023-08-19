import React from 'react';

const About = () => {
    return (
        <div name='About' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About Me
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-3xl font-bold'>
                        <p>Hi. I'm Ajay Biradar,<br></br> 2020 Graduate<br></br> from<br></br> Vidya Jyothi Institute of Technology, Hyderabad<br></br> CGPA:9.16</p>
                    </div>
                    <div>
                        <p>I'm a passionate and certified Full Stack Developer(MERN Stack) certified by Coding Ninjas. I have pivoted my career into the field of Web Development and have embarked on a journey of constant learning and growth.

                        </p>
                        <p>
                            As a Full-Stack Developer, I posses a diverse skill set that allows me to handle both the Frontend and Backend aspects of web development.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;
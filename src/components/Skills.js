import React from "react";
import java from '../assets/java.png'
import javascript from '../assets/javascript.png'
import html from '../assets/html.png'
import css from '../assets/css.png'
import react from '../assets/react.png'
import redux from '../assets/redux.png'
import node from '../assets/node.png'
import mongo from '../assets/mongo.png'
import mysql from '../assets/mysql.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'

const Skills = () => {
    return (
        <div
            name='Skills'
            className="h-screen w-[728px] md:w-full bg-[#DDD0C8] text-[#323232] flex flex-col justify-center items-center pt-36 mb-20">
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                Technical Skills
            </p>
            <div className="w-[550px] mt-10 lg:w-[1000px] h-[350px] flex flex-row flex-wrap justify-evenly md:justify-between items-center mb-32">
                <div className="lg:w-[150px] lg:h-[150px] mb-5 md:mb-0 md:w-[100px] md:h-[100px] h-[80px] w-[80px]">
                    <img
                        className="shadow-md shadow-[#323232] hover:scale-110 duration-500 h-full w-full rounded-full"
                        src={java}
                        alt="Java"
                    />
                </div>
                <div className="lg:w-[150px] lg:h-[150px] mb-5 md:mb-0 md:w-[100px] md:h-[100px] h-[80px] w-[80px]">
                    <img
                        className=" shadow-md shadow-[#323232] hover:scale-110 duration-500 h-full w-full rounded-full"
                        src={javascript}
                        alt="Javascript"
                    />
                </div>
                <div className="lg:w-[150px] lg:h-[150px] mb-5 md:mb-0 md:w-[100px] md:h-[100px] h-[80px] w-[80px]">
                    <img
                        className=" shadow-md shadow-[#323232] hover:scale-110 duration-500 h-full w-full rounded-full"
                        src={html}
                        alt="HTML"
                    />
                </div>
                <div className="lg:w-[150px] lg:h-[150px] mb-5 md:mb-0 md:w-[100px] md:h-[100px] h-[80px] w-[80px]">
                    <img
                        className=" shadow-md shadow-[#323232] hover:scale-110 duration-500 h-full w-full rounded-full"
                        src={css}
                        alt="CSS"
                    />
                </div>
                <div className="lg:w-[150px] lg:h-[150px] mb-5 md:mb-0 md:w-[100px] md:h-[100px] h-[80px] w-[80px]">
                    <img
                        className=" shadow-md shadow-[#323232] hover:scale-110 duration-500 h-full w-full rounded-full"
                        src={node}
                        alt="Node"
                    />
                </div>
                <div className="lg:w-[150px] lg:h-[150px] mb-5 md:mb-0 md:w-[100px] md:h-[100px] h-[80px] w-[80px]">
                    <img
                        className=" shadow-md shadow-[#323232] hover:scale-110 duration-500 h-full w-full rounded-full"
                        src={react}
                        alt="React"
                    />
                </div>

                <div className="lg:w-[150px] lg:h-[150px] mb-5 md:mb-0 md:w-[100px] md:h-[100px] h-[80px] w-[80px]">
                    <img
                        className=" shadow-md shadow-[#323232] hover:scale-110 duration-500 h-full w-full rounded-full"
                        src={redux}
                        alt="Redux"
                    />
                </div>
                <div className="lg:w-[150px] lg:h-[150px] mb-5 md:mb-0 md:w-[100px] md:h-[100px] h-[80px] w-[80px]">
                    <img
                        className=" shadow-md shadow-[#323232] hover:scale-110 duration-500 h-full w-full rounded-full"
                        src={mongo}
                        alt="MongoDB"
                    />
                </div>
                <div className="lg:w-[150px] lg:h-[150px] mb-5 md:mb-0 md:w-[100px] md:h-[100px] h-[80px] w-[80px]">
                    <img
                        className=" shadow-md shadow-[#323232] hover:scale-110 duration-500 h-full w-full rounded-full"
                        src={mysql}
                        alt="MySql"
                    />
                </div>
                <div className="lg:w-[150px] lg:h-[150px] mb-5 md:mb-0 md:w-[100px] md:h-[100px] h-[80px] w-[80px]">
                    <img
                        className=" shadow-md shadow-[#323232] hover:scale-110 duration-500 h-full w-full rounded-full"
                        src={github}
                        alt="Github"
                    />
                </div>
                <div className="lg:w-[150px] lg:h-[150px] mb-5 md:mb-0 md:w-[100px] md:h-[100px] h-[80px] w-[80px]   ">
                    <img
                        className=" shadow-md shadow-[#323232] hover:scale-110 duration-500 h-full w-full rounded-full"
                        src={tailwind}
                        alt="Java"
                    />
                </div>
            </div>
        </div>
    );
};

export default Skills;
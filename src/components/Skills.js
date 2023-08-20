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
            className="h-screen w-full bg-[#DDD0C8] text-[#323232] flex flex-col justify-center items-center pt-10">
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                Technical Skills
            </p>
            <div className="w-full mt-10 lg:w-[1000px] h-[350px] flex flex-row flex-wrap justify-center md:justify-between items-center">
                <div className="lg:w-[150px] lg:h-[150px] mb-5 md:mb-0 md:w-[150px] md:h-[150px] h-[100px] w-[100px]">
                    <img
                        className="shadow-md shadow-[#323232] hover:scale-110 duration-500 h-full w-full rounded-full"
                        src={java}
                    />
                </div>
                <div className="lg:w-[150px] lg:h-[150px] mb-5 md:mb-0 md:w-[150px] md:h-[150px] h-[100px] w-[100px]">
                    <img
                        className=" shadow-md shadow-[#323232] hover:scale-110 duration-500 h-full w-full rounded-full"
                        src={javascript}
                    />
                </div>
                <div className="lg:w-[150px] lg:h-[150px] mb-5 md:mb-0 md:w-[150px] md:h-[150px] h-[100px] w-[100px]">
                    <img
                        className=" shadow-md shadow-[#323232] hover:scale-110 duration-500 h-full w-full rounded-full"
                        src={html}
                    />
                </div>
                <div className="lg:w-[150px] lg:h-[150px] mb-5 md:mb-0 md:w-[150px] md:h-[150px] h-[100px] w-[100px]">
                    <img
                        className=" shadow-md shadow-[#323232] hover:scale-110 duration-500 h-full w-full rounded-full"
                        src={css}
                    />
                </div>
                <div className="lg:w-[150px] lg:h-[150px] mb-5 md:mb-0 md:w-[150px] md:h-[150px] h-[100px] w-[100px]">
                    <img
                        className=" shadow-md shadow-[#323232] hover:scale-110 duration-500 h-full w-full rounded-full"
                        src={node}
                    />
                </div>
                <div className="lg:w-[150px] lg:h-[150px] mb-5 md:mb-0 md:w-[150px] md:h-[150px] h-[100px] w-[100px]">
                    <img
                        className=" shadow-md shadow-[#323232] hover:scale-110 duration-500 h-full w-full rounded-full"
                        src={react}
                    />
                </div>

                <div className="lg:w-[150px] lg:h-[150px] mb-5 md:mb-0 md:w-[150px] md:h-[150px] h-[100px] w-[100px]">
                    <img
                        className=" shadow-md shadow-[#323232] hover:scale-110 duration-500 h-full w-full rounded-full"
                        src={redux}
                    />
                </div>
                <div className="lg:w-[150px] lg:h-[150px] mb-5 md:mb-0 md:w-[150px] md:h-[150px] h-[100px] w-[100px]">
                    <img
                        className=" shadow-md shadow-[#323232] hover:scale-110 duration-500 h-full w-full rounded-full"
                        src={mongo}
                    />
                </div>
                <div className="lg:w-[150px] lg:h-[150px] mb-5 md:mb-0 md:w-[150px] md:h-[150px] h-[100px] w-[100px]">
                    <img
                        className=" shadow-md shadow-[#323232] hover:scale-110 duration-500 h-full w-full rounded-full"
                        src={mysql}
                    />
                </div>
                <div className="lg:w-[150px] lg:h-[150px] mb-5 md:mb-0 md:w-[150px] md:h-[150px] h-[100px] w-[100px]">
                    <img
                        className=" shadow-md shadow-[#323232] hover:scale-110 duration-500 h-full w-full rounded-full"
                        src={github}
                    />
                </div>
                <div className="lg:w-[150px] lg:h-[150px] mb-5 md:mb-0 md:w-[150px] md:h-[150px] h-[100px] w-[100px]">
                    <img
                        className=" shadow-md shadow-[#323232] hover:scale-110 duration-500 h-full w-full rounded-full"
                        src={tailwind}
                    />
                </div>
            </div>
        </div>
    );
};

export default Skills;
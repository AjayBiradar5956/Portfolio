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
        <div name='Skills' className="h-screen w-full bg-[#DDD0C8] text-[#323232] flex flex-col justify-center items-center">
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                Technical Skills
            </p>
            <div className="w-[1000px] mt-5 h-[350px] flex flex-wrap flex-row justify-evenly items-start">
                <div className="w-[150px] h-[150px]">
                    <img className="h-full w-full rounded-full" src={java} />
                </div>
                <div className="w-[150px] h-[150px]">
                    <img className="h-full w-full rounded-full" src={javascript} />
                </div>
                <div className="w-[150px] h-[150px]">
                    <img className="h-full w-full rounded-full" src={html} />
                </div>
                <div className="w-[150px] h-[150px]">
                    <img className="h-full w-full rounded-full" src={css} />
                </div>
                <div className="w-[150px] h-[150px]">
                    <img className="h-full w-full rounded-full" src={node} />
                </div>
                <div className="w-[150px] h-[150px]">
                    <img className="h-full w-full rounded-full" src={react} />
                </div>

                <div className="w-[150px] h-[150px]">
                    <img className="h-full w-full rounded-full" src={redux} />
                </div>
                <div className="w-[150px] h-[150px]">
                    <img className="h-full w-full rounded-full" src={mongo} />
                </div>
                <div className="w-[150px] h-[150px]">
                    <img className="h-full w-full rounded-full" src={mysql} />
                </div>
                <div className="w-[150px] h-[150px]">
                    <img className="h-full w-full rounded-full" src={github} />
                </div>
            </div>
        </div>
    );
};

export default Skills;
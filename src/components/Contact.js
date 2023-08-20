import React from 'react'

const Contact = () => {
    return (
        <div name='Contact' className='w-full md:h-screen mb-5 pt-[100px]'>
            <div className=' max-w-[1000px] h-[100%] mx-auto flex-col flex justify-center items-center'>
                <h1 className='mb-16 font-bold text-4xl text-[#0a192F] border-b-4 border-pink-600 self-center'>Get In Touch</h1>
                <div className='flex md:flex-row pt-4 flex-col justify-around items-center w-full h-[70%] '>
                    <div className='font-bold mt-10 text-2xl text-[#213F99] h-full border-black '>
                        <h1 className='font-bold text-4xl text-[#0a192F] border-b-4 border-pink-600 self-center'>Contact</h1>
                        <p className='pt-5'>
                            <b>Email:</b>ajay99biradar@gmail.com<br></br>
                            <b>Contact:</b> 8522875956
                        </p>
                    </div>
                    <div className=' max-h-[400px] w-[450px] rounded-lg bg-[#F8E5E5]'>
                        <h1 className=' font-bold pt-5 text-4xl text-[#0a192F]  flex justify-center'>Send a Message</h1>
                        <form action='https://getform.io/f/f2ce87bd-efe8-4ba4-946f-e42a9b96c9f7' method='post' className='flex flex-col justify-center p-5'>
                            <input
                                type='name'
                                name='name'
                                placeholder='Enter Name'
                                className='border-b-2 border-[#000000] p-1 bg-inherit focus:outline-none' />
                            <br></br>
                            <input
                                type='email'
                                name='email'
                                className='border-b-2 border-black p-1 bg-inherit focus:outline-none'
                                placeholder='Enter your Email' />
                            <br></br>
                            <textarea
                                name='message'
                                type='text'
                                rows={3}
                                maxLength={150}
                                placeholder="Enter Message"
                                className='border-b-2 p-1 max-h-16 focus:outline-none border-black bg-inherit'>
                            </textarea>
                            <button
                                className="bg-[#C39EA0] mt-5 text-xl hover:bg-[#FA255E]  text-white font-bold py-2 px-4 rounded-full">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
import React from 'react'

const Contact = () => {
    return (
        <div name='Contact' className='p-1 w-full h-screen mt-20 mb-5'>
            <div className=' max-w-[1000px] h-[100%] mx-auto flex-col flex justify-center items-center'>
                <h1 className='mb-10 font-bold text-4xl text-[#0a192F] border-b-4 border-pink-600 '>Get In Touch</h1>
                <div className=' w-full flex flex-row justify-between items-center'>
                    <h1 className='font-bold text-4xl text-[#0a192F] border-b-4 border-pink-600 self-start ms-10'>Contact</h1>
                    <h1 className=' me-10 font-bold text-4xl text-[#0a192F] border-b-4 border-pink-600 '>Send a Message</h1>
                </div>
                <div className='flex md:flex-row flex-col justify-around items-center  w-full h-[70%]'>
                    <div className='font-bold self-start mt-10 text-2xl text-[#213F99] h-full w-[500px] border-r-2 border-dashed border-black'>
                        <b>Email:</b>ajay99biradar@gmail.com<br></br>
                        <b>Contact:</b> 8522875956
                    </div>
                    <div className=' h-[350px] w-[350px]'>
                        <form action='https://getform.io/f/f2ce87bd-efe8-4ba4-946f-e42a9b96c9f7' method='post' className='flex flex-col justify-start'>
                            <input type='name' name='name' placeholder='Enter Name' className='border-2 rounded-lg border-black p-1' /><br></br>
                            <input type='email' name='email' className='border-2 p-1 border-black rounded-lg' placeholder='Enter your Email' /><br></br>
                            <textarea name='message' type='text' rows={7} placeholder="Enter Message" className='border-2 p-1 rounded-lg border-black'>
                            </textarea>
                            <button class="bg-blue-500 mt-5 text-xl hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact
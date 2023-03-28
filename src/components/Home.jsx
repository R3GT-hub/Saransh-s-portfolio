import React from 'react'
// import image from'C:\Users\This - PC\Desktop\portfolio\saranshimage-removebg-preview.png'
import HeroImage from './saranshimage-removebg-preview.png'
import {Link} from "react-scroll"

import {MdKeyboardArrowRight}  from "react-icons/md"
 const Home=()=>{
    return (
        <div name="Home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white ">
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
                <div className='flex flex-col justify-center h-full mt-12'>
                    <h2 className='text-4xl sm:text-7xl  font-bold text-white mt-12' >
                        I'm a Web Developer
                    </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                       Hello!! I'm Saransh Sharma and Currently I am a student of 2nd year NIT Raipur, Electronics and communication engineering branch.I have interest in web developement and competetive programming .Currently I love to work on web applications using React, Bootstrap, Tailwind etc.
                    </p>
                    <div>
                        <Link to="Portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                            Portfolio <span className='group-hover:rotate-90 duration-300'><MdKeyboardArrowRight size={25} className="ml-1"/></span>
                        </Link>
                    </div>
                </div>
                <div>
                    <img src={HeroImage} alt="ProfileImage" className='rounded-2xl mx-auto  w-2/3 md:w-full' />
                </div>
            </div>
        </div>
    );
 };
export default Home;
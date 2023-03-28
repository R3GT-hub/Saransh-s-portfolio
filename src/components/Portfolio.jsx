import React from 'react'
import microsoftcloneimg  from "./microsoftcloneimg.jpg";
import mociesphereimg  from "./mociesphereimg.jpg";
import counterimg  from "./counterimg.jpg";
import dicegameimg  from "./dicegameimg.jpg";
import edtechimg  from "./EDTECHimg.jpg";
import todoimg from "./todoimg.jpg"
const Portfolio = () => {
  return (
    <div name="Portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>Check out some of my work right here </p>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={mociesphereimg} alt=""  className='rounded md: duration-200 hover:scale-105'/>
            <div className='flex items-center justify-center'>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href="https://github.com/R3GT-hub">Demo</a></button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href="https://github.com/R3GT-hub">Code</a></button>
            </div>
          </div>
        {/* </div> */}
        {/* <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'> */}
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={microsoftcloneimg} alt=""  className='rounded md: duration-200 hover:scale-105'/>
            <div className='flex items-center justify-center'>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href="https://github.com/R3GT-hub">Demo</a></button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href="https://github.com/R3GT-hub">Code</a></button>
            </div>
          </div>
        {/* </div> */}
        {/* <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'> */}
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={edtechimg} alt=""  className='rounded md: duration-200 hover:scale-105'/>
            <div className='flex items-center justify-center'>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href="https://github.com/R3GT-hub">Demo</a></button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href="https://github.com/R3GT-hub">Code</a></button>
            </div>
          </div>
        {/* </div> */}
        {/* <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'> */}
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={todoimg} alt=""  className='rounded md: duration-200 hover:scale-105'/>
            <div className='flex items-center justify-center'>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href="https://github.com/R3GT-hub">Demo</a></button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href="https://github.com/R3GT-hub">Code</a></button>
            </div>
          </div>
        {/* </div> */}
        {/* <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'> */}
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={dicegameimg} alt=""  className='rounded md: duration-200 hover:scale-105'/>
            <div className='flex items-center justify-center'>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href="https://github.com/R3GT-hub">Demo</a></button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href="https://github.com/R3GT-hub">Code</a></button>
            </div>
          </div>
        {/* </div> */}
        {/* <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'> */}
          <div className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={counterimg} alt=""  className='rounded md: duration-200 hover:scale-105'/>
            <div className='flex items-center justify-center'>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href="https://github.com/R3GT-hub">Demo</a></button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href="https://github.com/R3GT-hub">Code</a></button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Portfolio
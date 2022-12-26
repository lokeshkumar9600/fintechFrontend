import React from 'react'
import Typed from "react-typed"

const Hero = () => {
  return (
    <div className="text-white">
         <div className='max-w-[800px]  mx-auto w-full mt-[-96px] h-screen flex justify-center text-center items-center flex-col'>
        <p className='text-[#00df9a] font-bold p-2 uppercase'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='text-white font-bold  md:text-7xl sm:text-6xl text-4xl md:pt-3'>Grow with data.</h1>
        <div className='flex justify-center items-center'>
            <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible financing for  </p>
            <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold py-4 md:pl-4 pl-2 '
            strings = {['BTB','BTC','SASS']}
            typeSpeed = {120}
            backSpeed = {140}
            loop
            />
        </div>
        <p className='md:text-xl text-md font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB,BTC & SASS platforms.</p>
        <button className='bg-[#00df9a] py-3 mx-auto font-medium  rounded-md text-[#000300] w-[200px] mt-4'>Get Started</button>
    </div>
    </div>
  )
   
}

export default Hero

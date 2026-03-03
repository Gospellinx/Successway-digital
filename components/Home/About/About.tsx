import React from 'react'
import { FaAward } from 'react-icons/fa'

const About = () => {
  return (
    <div className='pt-16 pb-16 '>
      {/* Two sections in grid */}
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* First Part */}
        <div>
            <div className='flex items-center space-x-4 '>
                <div className='w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center flex-col'>
                    <FaAward className='text-white w-6 h-6'/>
                </div>
                <h1 className='text-xl text-black font-semibold'>Guranteed & Certified</h1>
            </div>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-6xl mt-8 font-bold md:leading-[3rem] lg:leading-[3.5rem] xl:leading-[4rem] text-gray-800'>Get empowered today:</h1>
            <p className=''>Starting your professional career can be very Easy and at no COST. Here’s how to:</p>
        </div>
        {/* Second Part */}
        <div></div>
      </div>
    </div>
  )
}

export default About

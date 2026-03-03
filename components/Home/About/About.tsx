import React from 'react'
import { FaAward } from 'react-icons/fa'
import { FaArrowRight, FaArrowRightArrowLeft, FaR } from 'react-icons/fa6'

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
            <p className='mt-4 text-1xl text-gray-600'>Starting your professional career can be very Easy and at no COST. Here’s how to:</p>
            <button className='mt-8 bg-[#69AA52] hover:bg-[#5a8f45] text-white px-6 py-3 rounded-full flex items-center space-x-2'>
                <span>Learn More</span>
                <FaArrowRight className='w-5 h-5'/>
            </button>
        </div>
        {/* Second Part */}
        <div>
            <div>
                <h1 className='text-7xl lg:text-9xl font-bold text-black opacity-10'>01</h1>
                <div className='-mt-10'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-3'>Visit our head office and select your desired course.</h1>
                    <p className='width-[100%] lg:w-[70%] text-base text-black opacity-70'>Take the first step toward transforming your future by visiting our head office...</p>
                </div>
            </div>
            <div className='mt-8 w-full'>
                <h1 className='text-7xl lg:text-9xl font-bold text-black opacity-10'>02</h1>
                <div className='-mt-10'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-3'>Fill in All the Necessary Documents</h1>
                    <p className='width-[100%] lg:w-[70%] text-base text-black opacity-70'>Once you’ve selected your preferred program, you will complete a simple registration process. Our staff will assist you with the required documentation and provide all the information you need about class schedules, learning materials, and expectations..</p>
                </div>
            </div>
            <div className='mt-8 w-full'>
                <h1 className='text-7xl lg:text-9xl font-bold text-black opacity-10'>03</h1>
                <div className='-mt-10'>
                    <h1 className='text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-3'>Start Learning</h1>
                    <p className='width-[100%] lg:w-[70%] text-base text-black opacity-70'>After registration, your journey officially begins. You’ll gain access to hands-on training, professional mentorship, and practical learning experiences designed to equip you with real-world skills.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About

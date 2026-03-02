import React from 'react'

const HeroContent = () => {
  return (
    <div>
      <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold md:leading-12 lg:leading-14 xl:leading-15 text-white'>Learn from the best and be empowered today…</h1>
      <p className='mt-6 text-sm md:text-base text-white text-opacity-60 '>Successway Digital & Vocational Guidance Foundation offers free digital and vocational skills to youths and teenagers to help them unlock potential, discover purpose, and build sustainable careers.</p>
      {/* Buttons */}
      <div className="mt-8 flex items-center space-x-4">
        <button className='button__cls bg-[#E78633] hover:bg-[#C26A1F]'>Get Started</button>
        <button className='button__cls bg-[#1A8DCA] hover:bg-[#2151b7]'>Partner with us</button>
      </div>
      {/* Stats */}
      <div className="flex items-center flex-wrap space-x-16 mt-8">
        <div>
            <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>500+</p>
            <p className='w-[100px] h-[3px] bg-[#69AA52]'></p>
            <p className='md:text-lg text-sm text-white text-opacity-70'>Youths Trained</p>
        </div>
        <div>
            <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>10+</p>
            <p className='w-[100px] h-[3px] bg-[#E78633]'></p>
            <p className='md:text-lg text-sm text-white text-opacity-70'>Communities Reached</p>
        </div>
        <div>
            <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>95%</p>
            <p className='w-[100px] h-[3px] bg-[#1A8DCA]'></p>
            <p className='md:text-lg text-sm text-white text-opacity-70'>Success Rate</p>
        </div>
      </div>
    </div>
  )
}

export default HeroContent

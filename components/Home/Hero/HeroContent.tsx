import React from 'react'

const HeroContent = () => {
  return (
    <div>
      <h1 data-aos="fade-right" className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold md:leading-12 lg:leading-14 xl:leading-15 text-white'>Learn from the best and be empowered today…</h1>
      <p data-aos="fade-left" data-aos-delay="150" className='mt-6 text-sm md:text-base text-white text-opacity-60 '>Successway Digital & Vocational Guidance Foundation offers free digital and vocational skills to youths and teenagers to help them unlock potential, discover purpose, and build sustainable careers.</p>
      {/* Buttons */}
      <div className="mt-8 flex items-center space-x-4">
        <button data-aos="zoom-in" data-aos-delay="300" className='button__cls bg-[#BF8B31] hover:bg-[#a67828] font-semibold transition-all shadow-lg'>Get Started</button>
        <button data-aos="zoom-in" data-aos-delay="450" className='button__cls bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold transition-all backdrop-blur-md'>Partner with us</button>
      </div>
      {/* Stats */}
      <div className="flex items-center flex-wrap space-x-16 mt-8">
        <div data-aos="fade-up" data-aos-delay="600">
            <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>500+</p>
            <p className='w-[100px] h-[3px] bg-[#BF8B31]'></p>
            <p className='md:text-lg text-sm text-white/70'>Youths Trained</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="750">
            <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>10+</p>
            <p className='w-[100px] h-[3px] bg-[#BF8B31]'></p>
            <p className='md:text-lg text-sm text-white/70'>Communities Reached</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="900">
            <p className='md:text-xl lg:text-2xl text-base text-white font-bold'>95%</p>
            <p className='w-[100px] h-[3px] bg-[#BF8B31]'></p>
            <p className='md:text-lg text-sm text-white/70'>Success Rate</p>
        </div>
      </div>
    </div>
  )
}

export default HeroContent

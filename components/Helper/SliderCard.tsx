import Image from 'next/image';
import React from 'react'
import { FaStar } from 'react-icons/fa';

type Props = {
  image: string;
  name: string;
  role: string;
}

const SliderCard = ({ image, name, role }:Props) => {
  return <div className='flex flex-wrap sm:flex-nowrap items-center space-x-10' >
    <div className='h-full w-full'>
        <Image src={image} alt='image' width={350} height={350} className='w-full h-full rounded-2xl object-cover'/>
    </div>
    <div className='mt-6 mb-7'>
      <div className="flex items-center space-x-1">
        <FaStar className='xl:w-6 xl:h-6 md:w-5 md:h-5 w-4 h-4 text-[#BF8B31]'/>
        <FaStar className='xl:w-6 xl:h-6 md:w-5 md:h-5 w-4 h-4 text-[#BF8B31]'/>
        <FaStar className='xl:w-6 xl:h-6 md:w-5 md:h-5 w-4 h-4 text-[#BF8B31]'/>
        <FaStar className='xl:w-6 xl:h-6 md:w-5 md:h-5 w-4 h-4 text-[#BF8B31]'/>
        <FaStar className='xl:w-6 xl:h-6 md:w-5 md:h-5 w-4 h-4 text-[#BF8B31]'/>
      </div>
      <p className='mt-6 text-white/80 w-[95%] md:w-[80%] text-sm md:text-base lg:text-lg font-medium leading-relaxed '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aliquid adipisci, cum soluta distinctio commodi. Tenetur ex quibusdam officia odit neque ipsum aperiam repudiandae explicabo, ducimus, architecto in hic expedita!</p>
      <div className='mt-7'>
        <h1 className='text-xl text-white font-bold'>{name}</h1>
        <p className='text-sm text-[#BF8B31] font-semibold mt-1 uppercase tracking-wider'>{role}</p>
      </div>
    </div>
  </div>
};

export default SliderCard

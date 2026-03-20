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
        <Image src={image} alt='image' width={350} height={350} className='w-full h-full'/>
    </div>
    <div className='mt-6 mb-7'>
      <div className="flex items-center">
        <FaStar className='xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600'/>
        <FaStar className='xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600'/>
        <FaStar className='xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600'/>
        <FaStar className='xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600'/>
        <FaStar className='xl:w-7 xl:h-7 md:w-5 md:h-5 w-4 h-4 text-yellow-600'/>
      </div>
      <p></p>
    </div>
  </div>
};

export default SliderCard

"use client";

import Image from 'next/image';
import React from 'react'
import Tilt from 'react-parallax-tilt';

// define the type
type Props = {
  course: {
    id: number;
    image: string;
    title: string;
    price: number;
    author: string;
    reviewNumber: number;
    lessons: number;
    students: number;
    category: string;
  };
};

const CourseCard = ({course}:Props) => {
  return (
    <Tilt>
        <div className='bg-white rounded-lg cursor-pointer overflow-hidden'>
            <div>
                <Image src={course.image} alt={course.title} width={400} height={400} className='w-[400px] h-[400px]'/>
            </div>
        </div>
    </Tilt>
  )
}

export default CourseCard

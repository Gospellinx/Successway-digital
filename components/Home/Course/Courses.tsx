import Image from 'next/image'
import React from 'react'
import { coursesData } from '../../../data/data'
import CourseCard from './CourseCard'

const Courses = () => {
  return (
    <div className='pt-16 pb-12 relative bg-gray-200 '>
      {/* Bounce Ball */}
      <Image src="/images/cb.png" alt="Course Banner" width={800} height={800} className='absolute top-[30%] animate-bounce'/>
      <div className='w-[90%] mx-auto'>
        {/* Title */}
        <h1 className='text-4xl md:text-5xl font-bold text-black'>Our Programs / Services </h1>
        {/* Courses */}
        <div className='md:mt-16 mt-10 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10'>
          {/* Individual courses */}
          {coursesData.map((course, i)=> {
            return (<div key={course.id} data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay={i * 150}>
              <CourseCard course={course}/>
            </div>)
          })}
        </div>
      </div>
    </div>
  )
}

export default Courses

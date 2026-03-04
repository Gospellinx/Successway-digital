import Image from 'next/image'
import React from 'react'

const Courses = () => {
  return (
    <div className='pt-16 pb-12 relative bg-gray-200 '>
      <Image src="/images/cb.png" alt="Course Banner" width={800} height={800} className='absolute top-[30%] animate-bounce'/>
    </div>
  )
}

export default Courses

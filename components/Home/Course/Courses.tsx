import Image from 'next/image'
import React from 'react'

const Courses = () => {
  return (
    <div className='pt-16 pb-12 relative bg-gray-200 '>
      <Image src="/public/images/cb.png" alt="Course Banner" width={800} height={800}/>
    </div>
  )
}

export default Courses

import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='pt-20 pb-12 bg-black'>
        {/* DEfined grid system */}
      <div className='w-[90%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b[1.5px] border-white border-opacity-20'>
        {/* Column 1 of the footer */}
        <div>
            <Image src="/images/logo1.png" alt='logo' height={100} width={100}/>
            <p className='text-white text-opacity-50'>Empowering Africa's Future Through Digital Literacy.</p>
            {/* Social Icons */}
            <div className='flex items-center space-x-4 mt-6'>
                <FaFacebook className='w-6 h-6 text-blue-600' />
                <FaX className='w-6 h-6 text-white'/>
                <FaYoutube className='w-6 h-6 text-red-700' />
                <FaInstagram className='w-6 h-6 text-pink-500' />
            </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Footer

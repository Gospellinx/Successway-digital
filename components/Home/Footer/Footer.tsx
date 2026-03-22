import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const Footer = () => {
  return (
    // Net this is the main container for the footer section, it has padding on the top and bottom, and a black background color.
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
        {/* Column 2 of the footer */}
        <div>
            <h1 className='footer__heading'>Popular</h1>
            <p className='footer__links'>Digital Literacy</p>
            <p className='footer__links'>Vocational Skills</p>
            <p className='footer__links'>Data Analytics & AI</p>
            <p className='footer__links'>Web & App Design</p>
            <p className='footer__links'>Project Management</p>
            <p className='footer__links'>Financial Literacy</p>
        </div>
        {/* Column 3 of the footer */}
        <div>
            <h1 className='footer__heading'>Quick Links</h1>
            <p className='footer__links'>Home</p>
            <p className='footer__links'>About Us</p>
            <p className='footer__links'>Services</p>
            <p className='footer__links'>Contact</p>
            <p className='footer__links'>Privacy Policy</p>
            <p className='footer__links'>Terms of Service</p>
        </div>
        {/* Column 4 of the footer */}
        <div>
            <h1 className='footer__heading'>Subscribe for more Info</h1>
            <input type="text" placeholder='Enter your email...' className='px-6 py-2 rounded-lg outline-none bg-gray-700 w-full text-white'/>
            <button className='px-6 py-2 mt-4 rounded-lg outline-none bg-rose-700 w-full text-white'>Subscribe</button>
        </div>
      </div>
      <p className='text-white text-base text-opacity-50 text-center mt-4'>©2026 Successway Digital & Vocational Guidance Foundation. All rights reserved.</p>
    </div>
  )
}

export default Footer

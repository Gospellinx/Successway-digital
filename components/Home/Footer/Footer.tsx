import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

const Footer = () => {
  return (
    // Net this is the main container for the footer section, it has padding on the top and bottom, and a black background color.
    <div className='pt-20 pb-12 bg-[#0a0f1c]'>
        {/* DEfined grid system */}
      <div className='w-[90%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-10'>
        {/* Column 1 of the footer */}
        <div>
            <Image src="/images/logo1.png" alt='logo' height={100} width={100}/>
            <p className='text-white/60'>Empowering Africa's Future Through Digital Literacy.</p>
            {/* Social Icons */}
            <div className='flex items-center space-x-4 mt-6'>
                <FaFacebook className='w-6 h-6 text-white/80 hover:text-[#BF8B31] transition-colors cursor-pointer' />
                <FaX className='w-6 h-6 text-white/80 hover:text-[#BF8B31] transition-colors cursor-pointer'/>
                <FaYoutube className='w-6 h-6 text-white/80 hover:text-[#BF8B31] transition-colors cursor-pointer' />
                <FaInstagram className='w-6 h-6 text-white/80 hover:text-[#BF8B31] transition-colors cursor-pointer' />
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
            <input type="text" placeholder='Enter your email...' className='px-6 py-2 rounded-lg outline-none bg-white/5 border border-white/10 w-full text-white focus:border-[#BF8B31] transition-colors'/>
            <button className='px-6 py-2 mt-4 rounded-lg outline-none bg-[#BF8B31] hover:bg-[#a67828] font-semibold transition-all w-full text-white'>Subscribe</button>
        </div>
      </div>
      <p className='text-white/60 text-sm text-center mt-4'>©2026 Successway Digital & Vocational Guidance Foundation. All rights reserved.</p>
    </div>
  )
}

export default Footer

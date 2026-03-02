"use client";

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { navLinks } from '../../../constant/constant'
import { HiBars3BottomRight } from 'react-icons/hi2'  

// define prop types for nave

const Nav = () => {

  const [navBg, setNavBg] = useState(false)

  useEffect(()=> {
    const handler =()=>{
      if (window.scrollY>=90)  {
        setNavBg(true)
      } 
      if (window.scrollY<90){
        setNavBg(false);
      }
    };

    window.addEventListener('scroll', handler);

    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return (
    <div className={`fixed ${navBg? 'bg-[#1A8DCA]' : 'bg-fixed'} w-full transition-all duration-200 h-[12vh] z-[1000] bg-[#0F3D5E]`}>
      <div className='flex items-center h-full justify-between w-[90%] xl:w-[90%] mx-auto'>
        {/* Logo */}
        <Image src="/images/logo1.png" alt="Successway Digital Logo" width={90} height={60} />
        {/* Nav Links */}
        <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
                <Link key={link.id} href={link.url}>
                    <p className="nav__links">{link.label}</p>
                </Link>
            ))}
        </div>
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          <button className="md:px-10 md:py-2 px-8 py-1.5 text-white font-semibold text-base bg-[#E78633] hover:bg-[#d47a2a] transition-all duration-200 rounded-lg">
            Sign Up
          </button>
          {/* Burger Menu */}
          <HiBars3BottomRight className='w-8 h-8 cursor-pointer text-white lg:hidden'/>
        </div>
    </div>
    </div>
  )
}

export default Nav

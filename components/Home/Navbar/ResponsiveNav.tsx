'use client';

import React from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {

  const [showNav, setShowNav] = React.useState(false)

  const showNavHandler =()=>setShowNav(true);
  const hideNavHandler =()=>setShowNav(false); 

  return <>
  <Nav openNav={showNav}/>
  <MobileNav showNav={showNav} hideNav={hideNavHandler}/>
  Responsive
  </>
}

export default ResponsiveNav

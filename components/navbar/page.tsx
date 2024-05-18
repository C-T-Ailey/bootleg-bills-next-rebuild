'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from '/public/nav_logo_new.png'
import { marker } from '@/app/fonts'

export default function page() {

  const hiddenLinks: String = "h-16 overflow-hidden"
  const shownLinks: String = ""

  const [navState,setNavState] = useState(hiddenLinks)

  

  return (
    <div className='w-screen absolute flex flex-col lg:flex-row justify-center items-between lg:justify-between lg:items-center h-fit lg:h-20 bg-bill-cyan shadow-md'>
      
        <div className='w-fit h-20 lg:h-full pl-3 lg:pl-4 pt-4 lg:pb-1'>
          <div className='text-3xl lg:text-4xl relative text-bill-yellow'>BOOTLEG BILL'S</div>
          <div className={`${marker.className} text-lg lg:text-2xl absolute top-8 left-7`}>Unofficial Audio Rarities</div>
        </div>
      
        <div className='lg:hidden w-full items-center flex justify-between px-4'>
          <div id="overflow" className={`${hiddenLinks}`}>
            <div className='h-12 w-12 border-solid border-2 border-slate-500 rounded' onClick={() => console.log("wasd")}>
              
            </div>

            <div className='lg:hidden flex flex-col text-xl py-4'>
            <div className='mx-6 my-1'>Home</div>
            <div className='mx-6 my-1'>Store</div>
            <div className='mx-6 my-1'>Services</div>
            <div className='mx-6 my-1'>About</div>
            <div className='mx-6 my-1'>Contact</div>
            <div className='mx-6 my-1'>Sign Up</div>
        </div>
          </div>
          <div>Cart</div>
        </div>
      
        <div className='hidden lg:w-[50vw] lg:max-w-fit lg:h-fit lg:flex lg:justify-evenly lg:pr-4 lg:text-xl'>
          <div className='mx-6'>Home</div>
          <div className='mx-6'>Store</div>
          <div className='mx-6'>Services</div>
          <div className='mx-6'>About</div>
          <div className='mx-6'>Contact</div>
          <div className='mx-6'>Sign Up</div>
        </div>

        
      
    </div>
  )
}
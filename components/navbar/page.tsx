'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import logo from '/public/nav_logo_new.png'
import { marker } from '@/app/fonts'
import Radio404 from '@/components/radio404/page'
import Link from 'next/link'

export default function page() {

  const hiddenLinks: string = "h-16"
  const shownLinks: string = "h-72"

  const deskLinkStyle: string = "mx-6 transition ease-in-out hover:text-bill-yellow"

  const [navState,setNavState] = useState(hiddenLinks)

  const toggle = () => {
    navState === hiddenLinks ? setNavState(shownLinks) : setNavState(hiddenLinks)
  }

  return (
    <div>
      <div className='w-screen fixed flex flex-col lg:flex-row justify-center items-between lg:justify-between lg:items-center lg:h-20 bg-bill-cyan shadow-md z-50'>
        
          <div className='w-fit h-20 lg:h-full pl-3 pt-1 lg:pl-4 lg:pb-1 flex flex-col items-center'>
            <p className='text-3xl lg:text-4xl text-bill-yellow drop-shadow-[0_7px_1px_#ff2273ff]'>BOOTLEG BILL'S</p>
            <p className={`${marker.className} text-lg lg:text-2xl`}>Unofficial Audio Rarities</p>
          </div>
        
          <div className='lg:hidden w-full items-center flex px-4'>

            <div id="overflow" className={`${navState} w-full overflow-hidden transition-height ease duration-[700ms]`}>

              <div className='w-full flex items-center justify-between'>
                <button className='h-12 w-12 flex justify-center items-center border-solid border-2 border-slate-600 shadow-[0_0_5px_black] rounded pt-1' onClick={() => toggle()}>
                  <div className='absolute left-0 h-12 w-12'>
                    <i className={`absolute bi text-slate-600 bi-eject-fill z-30 ${navState === hiddenLinks ? 'opacity-0' : 'opacity-1' } transition-opacity ease duration-300`} style={{fontSize: '2em'}}></i>
                    <i className={`absolute bi text-slate-600 bi-eject z-40`} style={{fontSize: '2em'}}></i>
                  </div>
                </button>
                <div>
                  <i className='bi bi-cart4'></i>
                </div>
              </div>

              <div className='lg:hidden flex flex-col text-xl py-4 text-bill-magenta drop-shadow-[-2px_2px_0_rgba(0,0,0,1)]'>
                <div className='mx-6 my-1'>Home</div>
                <div className='mx-6 my-1'>Store</div>
                <div className='mx-6 my-1'>Services</div>
                <div className='mx-6 my-1'>About</div>
                <div className='mx-6 my-1'>Contact</div>
                <div className='mx-6 my-1'>Sign Up</div>
              </div>

            </div>

          </div>
        
          <div className='hidden lg:w-[50vw] lg:max-w-fit lg:h-fit lg:flex lg:justify-evenly lg:pr-4 lg:text-xl text-bill-magenta drop-shadow-[-2px_2px_0_rgba(0,0,0,1)]'>
            <div className={deskLinkStyle}>Home</div>
            <div className={deskLinkStyle}>Store</div>
            <div className={deskLinkStyle}>Services</div>
            <div className={deskLinkStyle}>About</div>
            <div className={deskLinkStyle}>Contact</div>
            <div className={deskLinkStyle}>Sign Up</div>
          </div>
        
      </div>

      <Radio404/>
    </div>
  )
}
import React, { useState, useEffect } from 'react'
import { hairline } from '@/app/fonts'
import '@/components/radio404/radio.css'
import Image from 'next/image'

export default function page() {

    const [visible, setVisible] = useState(false)

    const [expanded, setExpanded] = useState(false)

    const [tabHidden, setTabHidden] = useState(false)

    const toggle = () => {
        setVisible(!visible);
        if (!!expanded){
            setExpanded(false);
        };
    }

    const expand = () => {
        setExpanded(!expanded)
    }

    const concealTab = () => {
        setTabHidden(!tabHidden)
    }

    // ${!!expanded ? 'bottom-0' : 'bottom-60'}

    // !!visible ? 'bottom-[47.6rem]' : 'bottom-[51.2rem]'

    return (
    <div id='radio' className={`hidden lg:flex fixed ${ !!expanded ? 'bottom-[32.5rem]' : `${!!visible ? 'bottom-[47.6rem]' : 'bottom-[51.2rem]' }` } w-96 h-fit flex-col items-center transition-bottom ease-in-out ${!!expanded ? 'duration-700' : 'duration-500'}`}>
        <audio id="audioPlayer" autoPlay loop muted></audio>
        <div className={` w-full h-fit relative bg-slate-200`}>
            <Image className='object-contain' src={'/placeholder_tape.jpg'} alt='current track album art' width={384} height={243}/>
        </div>
        <div className={`flex flex-row items-center justify-around h-14 w-96 bg-white rounded-br-lg shadow-[-2px_2px_6px_rgb(36,36,36)]`}>
            <div>
                <i className="bi bi-volume-mute text-4xl mx-2"></i>
            </div>
            <div className={`${hairline.className} text-2xl font-semibold marquee w-56 `}>
                <ul className='marquee__content'>
                    <li>
                        Bootleg Bill's Unofficial Audio Rarities 
                    </li>
                    <li className='text-3xl'>
                        <i className="bi bi-cassette-fill"></i>
                    </li>
                </ul>

                <ul aria-hidden='true' className='marquee__content'>
                    <li>
                        Bootleg Bill's Unofficial Audio Rarities 
                    </li>
                    <li className='text-3xl'>
                        <i className="bi bi-cassette-fill"></i>
                    </li>
                </ul>
            </div>
            <div onClick={() => expand()}>
                <i className='bi bi-file-arrow-down text-2xl mx-2'></i>
            </div>
        </div>
        <div className='relative w-96 h-5 flex justify-center' onClick={() => toggle()}>
            <div className='relative w-24 rounded-b bg-bill-magenta shadow-[-2px_2px_6px_rgb(36,36,36)] '></div>
        </div>
    </div>
  )
}

import React, { useState, useEffect } from 'react'

export default function page() {

    const [visible, setVisible] = useState(false)

    const [expanded, setExpanded] = useState(false)

    const [tab, setTab] = useState(false)

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
        setTab(!tab)
    }

    return (
    <div id='radio' className={`absolute ${ !!visible ? 'top-20' : 'top-6' } w-80 h-fit flex flex-col items-center transition-top ease-in-out duration-500`}>
        <div className={`${!!expanded ? 'h-48' : 'h-0'} w-full relative bg-slate-200 transition-height ease duration-700`}>

        </div>
        <div className={`flex flex-row items-center justify-around h-14 w-80 bg-white rounded-br-lg shadow-[-2px_2px_6px_rgb(36,36,36)]`}>
            <div>
                RADIO WHAT'S NEW
            </div>
            <div onClick={() => expand()}>
                <i className='bi bi-file-arrow-down text-2xl'></i>
            </div>
        </div>
        <div className='relative w-80 h-4 flex justify-center' onClick={() => toggle()}>
            <div className='relative w-20 rounded-b bg-bill-magenta shadow-[-2px_2px_6px_rgb(36,36,36)] '></div>
        </div>
    </div>
  )
}

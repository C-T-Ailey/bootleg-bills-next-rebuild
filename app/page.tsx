'use client'
// import Image from "next/image";
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { hairline } from "./fonts";
import Navbar from '@/components/navbar/navbar'
import About from '@/components/pages/about/about'
import Store from '@/components/pages/store/store'

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between pt-36 lg:pt-20">
    //   <div className={hairline.className}>
    //     TEST
    //   </div>
    
    // </main>
    <Router>
      
      <Navbar></Navbar>

      <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='/store' element={<Store/>} />
      </Routes>
    </Router>
  );
}

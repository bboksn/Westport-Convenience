import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import '../styles/fonts.css'
export default function Nav() {
  return (
    <div>
    <div className='flex bg-[#191b1e] h-24 text-white flex-row items-center w-full mx-auto px-6 justify-between '>
      <a className='font-bold text-5xl text-green-600 font-[cool] md:text-6xl' href='/'>WESTPORT CONVINIANCE</a>
      <div className='hidden md:flex' >
      <a className='p-4' href="/">Home</a>
      <a className='p-4' href="/gallery">Gallery</a>
      <a  className='p-4' href="/">About</a>
      </div>  
      <button className='md:hidden'><GiHamburgerMenu size={50}></GiHamburgerMenu></button>
    </div>  
    <div className='text-black bg-gray-300 h-72 md:hidden'>
     <a className='p-4' href="/">Home</a>
      <a className='p-4' href="/gallery">Gallery</a>
      <a  className='p-4' href="/">About</a>
    </div>
    </div>  
  )
}

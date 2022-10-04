import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

export default function Nav() {
  return (
    <div className='flex bg-[#191b1e] h-24 text-white flex-row items-center fixed w-full mx-auto px-6 justify-between '>
      <a className='font-bold w-full text-2xl' href='/'>WESTPORT CONVINIANCE</a>
      <div className='hidden md:flex' >
      <a className='p-4' href="/">Home</a>
      <a className='p-4' href="/gallery">Gallery</a>
      <a  className='p-4' href="/">Home</a>
      </div>  
      <button className='ml-4'><GiHamburgerMenu size={30}></GiHamburgerMenu></button>
    </div>
  )
}

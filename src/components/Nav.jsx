import {React,useState} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import {RiCloseFill} from 'react-icons/ri'
import '../styles/fonts.css'
export default function Nav() {
  const [nav,setNav] = useState(false);
   const handleNav=()=> {
    setNav(!nav); 
   }
  return (
    <div> 
    <div className='flex bg-[#191b1e] h-24 text-white flex-row items-center w-full mx-auto px-6 justify-between '>
      <a className='font-bold text-5xl text-green-600 font-[cool] md:text-6xl' href='/'>WESTPORT CONVENIENCE</a>
      <div className='hidden md:flex' >
      <a className='p-4' href="/">Home</a>
      <a className='p-4' href="/gallery">Gallery</a>
      <a  className='p-4' href="/">About</a>
      </div>  
      {/* vvv small screen nav*/}
      {!nav?<button onClick={handleNav} className='md:hidden'><GiHamburgerMenu size={50}></GiHamburgerMenu></button>:<button onClick={handleNav} className='md:hidden'><RiCloseFill color={'white'} size={60}></RiCloseFill></button>}
      
    </div>  
    <div className={nav?'text-black h-72 bg-[#e0dedb10] md:hidden flex flex-col font-semibold':'hidden'}>
     <a className='p-4 border-b-2 border-black' href="/">Home</a>
      <a className='p-4 border-b-2 border-black' href="/gallery">Gallery</a>
      <a  className='p-4 border-b-2 border-black ' href="/">About</a>
    </div>
    </div>  
  )
}

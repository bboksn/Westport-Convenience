import {React,useState} from 'react'
import { GiHamburgerMenu} from "../../node_modules/react-icons/gi";
import {RiCloseFill,RiInstagramLine} from '../../node_modules/react-icons/ri'
import '../styles/fonts.css'
export default function Nav() {
  const [nav,setNav] = useState(false);
   const handleNav=()=> {
    setNav(!nav); 
   }
    {/*w-screen fixed */}
  return (
    <div className=''> 
    <div className='flex bg-[#191b1e] h-24 text-white text-3xl flex-row items-center w-full mx-auto px-6 justify-between '>
      <a className='font-bold text-4xl lg:text-5xl' href='/'>WESTPORT CONVENIENCE</a>
      <div className='hidden lg:flex' >
      <a className='p-4' href="/">Home</a>
      <a className='p-4' href="/gallery">Gallery</a>
      <a  className='p-4' href="https://www.instagram.com/westport_convenience/" target="_blank"><RiInstagramLine size={38}></RiInstagramLine></a>
      </div>  
      {/* vvv small screen nav*/}
      {!nav?<button onClick={handleNav} className='lg:hidden'><GiHamburgerMenu size={50}></GiHamburgerMenu></button>:<button onClick={handleNav} className='lg:hidden'><RiCloseFill color={'white'} size={60}></RiCloseFill></button>}
      
    </div>  
    {/*maybe add pb-[9999999999%] to the bellow div or do some react stuff   */}
    <div className={nav?'text-black h-72 bg-[#e0dedb10] slide-in-left text-3xl lg:hidden flex flex-col font-semibold transition duration-500 ease-in-out':'hidden'}>
     <a className='p-4 border-b-2 border-black' href="/">Home</a>
      <a className='p-4 border-b-2 border-black' href="/gallery">Gallery</a>
      <a  className='p-4 border-b-2 border-black' href="https://www.instagram.com/westport_convenience/" target="_blank"><RiInstagramLine size={32}></RiInstagramLine></a>
    </div>
    </div>  
  )
}

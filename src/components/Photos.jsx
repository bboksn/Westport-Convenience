import React from 'react'
import 'swiper/css';
const photos = [
    {
    src:"/IMG-20221003-WA0000.jpg",
    alt:'',
    width:"100",
    height:"100"
},
{
    src:"/IMG-20221003-WA0001.jpg",
    alt:"",
    width:"100",
    height:"100"
},
{
  src:"/IMG-20221003-WA0002.jpg",
  alt:"",
  width:"100",
  height:"100"
}
,
{
  src:"/IMG-20221003-WA0003.jpg",
  alt:"",
  width:"100",
  height:"100"
}
,
{
  src:"/IMG-20221003-WA0004.jpg",
  alt:"",
  width:"100",
  height:"100"
}
,
{
  src:"/IMG-20221003-WA0005.jpg",
  alt:"",
  width:"100",
  height:"100"
}
,
{
  src:"/IMG-20221003-WA0006.jpg",
  alt:"",
  width:"100",
  height:"100"
}
,
{
  src:"/IMG-20221003-WA0007.jpg",
  alt:"",
  width:"100",
  height:"100"
}
,
{
  src:"/IMG-20221003-WA0008.jpg",
  alt:"",
  width:"100",
  height:"100"
}
,
{
  src:"/IMG-20221003-WA0009.jpg",
  alt:"",
  width:"100",
  height:"100"
}
,
{
  src:"/IMG-20221003-WA0010.jpg",
  alt:"",
  width:"100",
  height:"100"
}
,
{
  src:"/IMG-20221003-WA0011.jpg",
  alt:"",
  width:"100",
  height:"100"
}
,
{
  src:"/IMG-20221003-WA0012.jpg",
  alt:"",
  width:"100",
  height:"100"
}
,
{
  src:"/IMG-20221003-WA0013.jpg",
  alt:"",
  width:"100",
  height:"100"
}
,
{
  src:"/IMG-20221003-WA0014.jpg",
  alt:"",
  width:"100",
  height:"100"
}
,
{
  src:"/IMG-20221003-WA0015.jpg",
  alt:"",
  width:"100",
  height:"100"
}
,
{
  src:"/IMG-20221003-WA0016.jpg",
  alt:"",
  width:"100",
  height:"100"
}
,
{
  src:"/IMG-20221003-WA0017.jpg",
  alt:"",
  width:"100",
  height:"100"
}
]


export default function Photos() {
    {/*change gallery later*/}
  return (
    <div className='flex flex-col '>
        {photos.map(e=>{
           return <img className='border-4 border-black' src={e.src} alt={e.alt} />
        })}
        
    </div>
  )}
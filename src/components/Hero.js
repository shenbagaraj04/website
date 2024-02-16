import images from '../assets/hero.png';
import { AiOutlineFacebook,AiOutlineInstagram,AiOutlineTwitter } from "react-icons/ai";

export default function Hero(){
  const config={
    line:'I am web developer'
  }
 return<section className="flex flex-col md:flex-row bg-primary1 px-5 py-32 justify-center font-hero text-white">
   <div className='md: w-1/2  flex flex-col'>
    <h1 className=' text-4xl'>Hi <br/>I am <span className='text-black'>SSRaj</span> 
    <p className='text-2xl'>{config.line}</p></h1>
    <div className='flex py-2 text-black'>
      <a className='pr-2 hover:text-white' href='#'><AiOutlineFacebook size={40}/></a>
      <a className='pr-2 hover:text-white' href='#'><AiOutlineInstagram size={40}/></a>
      <a className='hover:text-white' href='#'><AiOutlineTwitter size={40}/></a>
    </div>
    </div>
    <img className='md:w-1/3' src={images}></img>
    </section>
}
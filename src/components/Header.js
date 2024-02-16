import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'

export default function Header(){
    const[toggle,settogule]=useState(true)
        return <header className="flex justify-between px-5 py-2 bg-primary">
        < a className="text-bold text-white" href="#">SSRAJ</a>
        <nav className="hidden md:block">
        <ul className="flex text-white">
            <li>< a href="/">Home</a></li>
            <li>< a href="#About">About</a></li>
            <li>< a href="#Project">Projects</a></li>
            <li>< a href="#Resume">Resume</a></li>
            <li>< a href="#Contact">Contact</a></li>
            </ul>
           </nav>
          { toggle && <nav className="block md:hidden ">
        <ul onClick={()=>settogule(!toggle)}className="flex flex-col text-white mobile-nav ">
            <li>< a href="/">Home</a></li>
            <li>< a href="#About">About</a></li>
            <li>< a href="#Project">Projects</a></li>
            <li>< a href="#Resume">Resume</a></li>
            <li>< a href="#Contact">Contact</a></li>
            </ul>
           </nav>}
           <button onClick={()=>settogule(!toggle)} className='block md:hidden'><Bars3Icon className='text-white h-5'/></button>
    </header>
  
}
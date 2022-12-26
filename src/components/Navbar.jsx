import React,{useState} from 'react'
import {AiOutlineClose,AiOutlineMenu} from "react-icons/ai"

const Navbar = () => {

  const [nav,setNav] = useState(false);
  const handleNav = ()=>{
    setNav(!nav);
  }

  return (
    <div className="text-white flex justify-between items-center mx-auto max-w-[1240px] px-4 pt-4">
      <h1 className='w-full font-bold text-[#00df9a] text-3xl'>React</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4' >Company</li>
        <li className='p-4' >Resources</li>
        <li className='p-4' >About</li>
        <li className='p-4' >Contact</li>
      </ul>

<div onClick={handleNav} className="block md:hidden">
 {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>} 
</div>
<div className={nav ? "fixed left-0 top-0 w-[60%] border-r-gray-900 h-full border-r bg-[#000300] ease-in-out duration-700" : "fixed left-[-100%]"}>
<h1 className='w-full font-bold text-[#00df9a] text-3xl px-4 pt-4'>React</h1>
  <ul className='pt-12 p-4 uppercase'>
  <li className='p-4  border-b border-b-gray-600'>Home</li>
        <li className='p-4  border-b border-b-gray-600' >Company</li>
        <li className='p-4  border-b border-b-gray-600' >Resources</li>
        <li className='p-4  border-b border-b-gray-600' >About</li>
        <li className='p-4' >Contact</li>
  </ul>
        
</div>
    </div>
  )
}

export default Navbar

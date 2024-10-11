import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div>

<header className="bg-[#143486] text-slate-900 body-font">
  
  
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 ">
     
      <span className="ml-3 text-[35px] text-orange-500 font-extrabold font-serif">Blog<span className="text-[#ffffff]">ging</span></span>
    </a>
    <nav className=" md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href="/" className="mr-5 text-[20px] text-[#ffffff] hover:text-black hover:bg-orange-500 hover:text-[25px] hover:font-semibold  cursor-pointer p-2 rounded ">Home
      </Link>
      <Link href="/about" className="mr-5 text-[20px] text-[#ffffff]  hover:text-black hover:bg-orange-500 hover:text-[25px] hover:font-semibold  cursor-pointer p-2 rounded ">About
      </Link>
      <Link href="/contact" className="mr-5 text-[20px] text-[#ffffff] hover:text-black hover:bg-orange-500 hover:text-[25px] hover:font-semibold  cursor-pointer p-2 rounded ">Contact
      </Link>
     
    </nav>
    {/* <button className="inline-flex items-center focus:outline-none button button-2 lg:w-[100px]">
      Sign in
      
    </button> */}
  </div>
  
</header>




    </div>
  )
}

export default Navbar
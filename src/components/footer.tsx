import React from 'react'


const Footer = () => {
  return (
    <div>

<footer className="bg-[#143486] text-gray-900 body-font font-sans">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap md:text-left text-center order-first">
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-[#fff] tracking-widest text-sm mb-3">
          NAVIGATION LINKS
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a href='#' className="text-gray-100 cursor-pointer hover:text-gray-400 hover:text-lg">Home</a>
          </li>
          <li>
            <a  href='/about' className="text-gray-100 cursor-pointer hover:text-gray-400 hover:text-lg">About</a>
          </li>
          <li>
            <a href='/services' className="text-gray-100 cursor-pointer hover:text-gray-400 hover:text-lg">Services</a>
          </li>
          <li>
            <a href='/contact' className="text-gray-100 cursor-pointer hover:text-gray-400 hover:text-lg">Contact</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-[#fff] tracking-widest text-sm mb-3">
          RESOURCES
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className=" text-gray-100 cursor-pointer hover:text-gray-400 hover:text-lg">Guides</a>
          </li>
          <li>
            <a className="text-gray-100 cursor-pointer hover:text-gray-400 hover:text-lg">Webinars</a>
          </li>
          <li>
            <a className="text-gray-100 cursor-pointer hover:text-gray-400 hover:text-lg">Tutorials</a>
          </li>
          <li>
            <a className="text-gray-100 cursor-pointer hover:text-gray-400 hover:text-lg">E-books</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-[#fff] tracking-widest text-sm mb-3">
          SOCIALMEDIA
        </h2>
        <nav className="list-none mb-10">
          <li>
            <a className="text-gray-100 cursor-pointer hover:text-gray-400 hover:text-lg">Facebook</a>
          </li>
          <li>
            <a className="text-gray-100 cursor-pointer hover:text-gray-400 hover:text-lg">Linkedin</a>
          </li>
          <li>
            <a className="text-gray-100 cursor-pointer hover:text-gray-400 hover:text-lg">Instagram</a>
          </li>
          <li>
            <a className="text-gray-100 cursor-pointer hover:text-gray-400 hover:text-lg">Youtube</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 className="title-font font-medium text-[#fff] tracking-widest text-sm mb-3">
          SUBSCRIBE
        </h2>
        <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
          <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
            <label
              htmlFor="footer-field"
              className="leading-7 text-sm text-gray-200"
            >
              Email
            </label>
            <input
              type="text"
              id="footer-field"
              name="footer-field"
              className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-[#ffffff] py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-black font-bold bg-[#d6e5f9] border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 hover:text-white hover:font-semibold rounded ">
            Button
          </button>
        </div>
        <p className="text-gray-200 text-sm mt-2 md:text-left text-center">
          Technology is necessary for our 
          <br className="lg:block hidden" />
          future and success of life
        </p>
      </div>
    </div>
  </div>
  <div className="bg-[#ffffff]">
    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-slate-900 font-bold">
      <span className="ml-3 text-[30px] text-orange-500 font-extrabold font-serif">Blog<span className="text-[#236b9d]">ging</span></span>
       
      </a>
      <p className="text-[18px] text-slate-900 sm:ml-6 sm:mt-0 mt-4">
        © 2024 CopyRight
        <a
          href="#"
          rel="noopener noreferrer"
          className="text-slate-900 ml-1"
          target="_blank"
        >
          @Siddiqa Badar
        </a>
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <a className="text-slate-900 text-[25px] cursor-pointer hover:text[40px]">
        <i className="ri-facebook-fill"></i>
        </a>
        <a className="ml-3 text-slate-900 text-[25px] cursor-pointer">
        <i className="ri-linkedin-box-fill"></i>
        </a>
        <a className="ml-3 text-slate-900 text-[25px] cursor-pointer">
        <i className="ri-instagram-line"></i>
        </a>
        <a className="ml-3 text-slate-900 text-[25px] cursor-pointer">
        <i className="ri-youtube-fill"></i>
        </a>
      </span>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
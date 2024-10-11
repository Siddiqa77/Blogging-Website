
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div>
<section className="text-gray-100 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img
        className="object-cover object-center rounded"
        alt="hero"
        src="./images/working.png"
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">
      Our Tech Journey
        <br className="hidden lg:inline-block" />
      Tech Enthusiasts & Creators
      </h1>
      <p className="mb-8 leading-relaxed">
      Welcome to Blogging Tech, your go-to hub for everything tech! We're passionate about exploring
       the ever-evolving world of technology and sharing insights that can help developers, tech 
       enthusiasts, and innovators stay ahead of the curve.
       Our mission is to break down complex tech concepts into easily digestible, actionable
        information that empowers you to grow your skills and stay informed in this fast-paced industry.
         Whether you're a seasoned developer or just starting your tech journey, you'll find content here 
         that inspires and educates.
         we cover topics ranging from cutting-edge frontend development frameworks like React and Next.js 
         to the latest trends in web design, AI, and more. As a frontend developer and graphic designer,
          our founder combines technical know-how with creative flair, making the content here both
           insightful and visually engaging.
           Join us as we navigate the dynamic world of technology, one post at a time!
      </p>
      <div className="flex justify-center">
      <Link href=""><button className="flex mx-auto text-black font-bold bg-white border-0 py-2 px-8 focus:outline-none hover:bg-orange-500 hover:text-gray-100 rounded text-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
                  Send Message
                </button></Link>
       
      </div>
    </div>
  </div>
</section>

     
    </div>
  )
}

export default About